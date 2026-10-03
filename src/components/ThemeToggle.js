import React, { useEffect, useState } from "react";
import { flushSync } from "react-dom";

const STORAGE_KEY = "solshalom-theme";

const readTheme = () =>
	document.documentElement.classList.contains("dark") ? "dark" : "light";

const applyTheme = (theme) => {
	document.documentElement.classList.toggle("dark", theme === "dark");
	document
		.querySelector('meta[name="theme-color"]')
		?.setAttribute("content", theme === "dark" ? "#0D1617" : "#1F7F82");
	try {
		localStorage.setItem(STORAGE_KEY, theme);
	} catch (e) {
		/* private mode: theme just won't be remembered */
	}
};

// Sun/moon switch. Light is the default; the choice is remembered.
// Where supported, the new theme spreads out in a circle from the button.
const ThemeToggle = ({ className = "" }) => {
	const [theme, setTheme] = useState("light");
	useEffect(() => setTheme(readTheme()), []);

	const toggle = (e) => {
		const next = theme === "dark" ? "light" : "dark";
		const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

		if (!document.startViewTransition || reduce) {
			applyTheme(next);
			setTheme(next);
			return;
		}

		const x = e.clientX || window.innerWidth - 40;
		const y = e.clientY || 40;
		const radius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));

		const transition = document.startViewTransition(() => {
			flushSync(() => {
				applyTheme(next);
				setTheme(next);
			});
		});
		transition.ready.then(() => {
			document.documentElement.animate(
				{ clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
				{ duration: 550, easing: "cubic-bezier(0.4, 0, 0.2, 1)", pseudoElement: "::view-transition-new(root)" }
			);
		});
	};

	const isDark = theme === "dark";
	return (
		<button
			type='button'
			onClick={toggle}
			aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
			title={isDark ? "Light mode" : "Dark mode"}
			className={`relative w-10 h-10 rounded-full border border-line text-ink hover:text-accent hover:border-accent flex items-center justify-center overflow-hidden transition-colors ${className}`}
		>
			{/* Sun */}
			<svg
				viewBox='0 0 24 24'
				className={`absolute w-5 h-5 transition-all duration-500 motion-reduce:transition-none ${
					isDark ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"
				}`}
				fill='none'
				stroke='currentColor'
				strokeWidth='1.8'
				strokeLinecap='round'
				aria-hidden='true'
			>
				<circle cx='12' cy='12' r='4.2' />
				<path d='M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.3 5.3l1.6 1.6M17.1 17.1l1.6 1.6M5.3 18.7l1.6-1.6M17.1 6.9l1.6-1.6' />
			</svg>
			{/* Moon */}
			<svg
				viewBox='0 0 24 24'
				className={`absolute w-5 h-5 transition-all duration-500 motion-reduce:transition-none ${
					isDark ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"
				}`}
				fill='currentColor'
				aria-hidden='true'
			>
				<path d='M20.2 14.6A8.4 8.4 0 0 1 9.4 3.8a8.6 8.6 0 1 0 10.8 10.8Z' />
			</svg>
		</button>
	);
};

export default ThemeToggle;

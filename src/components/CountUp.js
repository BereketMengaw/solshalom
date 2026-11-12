import React, { useLayoutEffect, useRef, useState } from "react";

const easeOutExpo = (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

// Counts the numeric part of `value` (e.g. "60+", "12") up from 0 when it first appears on screen.
// The real number is rendered by default, so copied text, screenshots and no-JS visitors never see 0.
const CountUp = ({ value, duration = 1800, className = "" }) => {
	const ref = useRef(null);
	const match = String(value).match(/^(\D*)(\d+)(.*)$/);
	const target = match ? parseInt(match[2], 10) : 0;
	const [n, setN] = useState(target);

	useLayoutEffect(() => {
		const el = ref.current;
		if (!el || !match) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		if (!("IntersectionObserver" in window)) return;

		let raf;
		const run = () => {
			const start = performance.now();
			const tick = (now) => {
				const t = Math.min(1, (now - start) / duration);
				setN(Math.round(target * easeOutExpo(t)));
				if (t < 1) raf = requestAnimationFrame(tick);
			};
			setN(0);
			raf = requestAnimationFrame(tick);
		};

		// Already on screen: reset to 0 before the first paint and count now.
		const rect = el.getBoundingClientRect();
		if (rect.top < window.innerHeight && rect.bottom > 0) {
			setN(0);
			run();
			return () => cancelAnimationFrame(raf);
		}

		// Below the fold: keep the real number until it is about to scroll in, then count from 0.
		const io = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					io.disconnect();
					run();
				}
			},
			{ rootMargin: "0px 0px 120px 0px" }
		);
		io.observe(el);
		return () => {
			io.disconnect();
			cancelAnimationFrame(raf);
		};
	}, [target, duration]); // eslint-disable-line react-hooks/exhaustive-deps

	if (!match) return <span className={className}>{value}</span>;
	return (
		<span
			ref={ref}
			className={`inline-block tabular-nums ${className}`}
			style={{ minWidth: `${String(value).length}ch` }}
			aria-label={String(value)}
		>
			<span aria-hidden='true'>
				{match[1]}
				{n}
				{match[3]}
			</span>
		</span>
	);
};

export default CountUp;

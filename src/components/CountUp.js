import React, { useEffect, useState } from "react";
import useInView from "../hooks/useInView";

// Counts the numeric part of `value` (e.g. "60+", "12") up from 0 once visible.
const CountUp = ({ value, duration = 1200, className = "" }) => {
	const [ref, inView] = useInView({ threshold: 0.6 });
	const match = String(value).match(/^(\D*)(\d+)(.*)$/);
	const target = match ? parseInt(match[2], 10) : 0;
	const [n, setN] = useState(0);

	useEffect(() => {
		if (!inView || !match) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			setN(target);
			return;
		}
		let raf;
		const start = performance.now();
		const tick = (now) => {
			const t = Math.min(1, (now - start) / duration);
			setN(Math.round(target * (1 - Math.pow(1 - t, 3))));
			if (t < 1) raf = requestAnimationFrame(tick);
		};
		raf = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(raf);
	}, [inView]); // eslint-disable-line react-hooks/exhaustive-deps

	if (!match) return <span className={className}>{value}</span>;
	return (
		<span ref={ref} className={`tabular-nums ${className}`}>
			{match[1]}
			{n}
			{match[3]}
		</span>
	);
};

export default CountUp;

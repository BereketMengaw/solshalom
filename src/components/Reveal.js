import React from "react";
import useInView from "../hooks/useInView";

// Fades and lifts children in when scrolled into view. `delay` in ms for staggering.
const Reveal = ({ as: Tag = "div", delay = 0, className = "", children, ...rest }) => {
	const [ref, inView] = useInView();
	return (
		<Tag
			ref={ref}
			data-in={inView || undefined}
			style={{ transitionDelay: `${delay}ms` }}
			className={`reveal ${className}`}
			{...rest}
		>
			{children}
		</Tag>
	);
};

export default Reveal;

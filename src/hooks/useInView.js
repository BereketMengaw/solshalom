import { useEffect, useRef, useState } from "react";

// True once the element has scrolled into view (fires once).
export default function useInView({ threshold = 0.2, rootMargin = "0px 0px -10% 0px" } = {}) {
	const ref = useRef(null);
	const [inView, setInView] = useState(false);
	useEffect(() => {
		const el = ref.current;
		if (!el || inView) return;
		if (!("IntersectionObserver" in window)) {
			setInView(true);
			return;
		}
		const io = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setInView(true);
					io.disconnect();
				}
			},
			{ threshold, rootMargin }
		);
		io.observe(el);
		return () => io.disconnect();
	}, [inView, threshold, rootMargin]);
	return [ref, inView];
}

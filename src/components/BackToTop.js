import React, { useState, useEffect } from 'react';
import { IoIosArrowUp } from 'react-icons/io';

const BackToTop = () => {
	const [isVisible, setIsVisible] = useState(false);

	// Show button when page is scrolled up to given distance
	const toggleVisibility = () => {
		if (window.pageYOffset > 300) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};

	// Set the scroll event listener
	useEffect(() => {
		window.addEventListener('scroll', toggleVisibility);
		return () => {
			window.removeEventListener('scroll', toggleVisibility);
		};
	}, []);

	// Scroll to top smoothly
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<>
			{isVisible && (
				<button
					onClick={scrollToTop}
					className="fixed bottom-8 right-8 z-50 bg-accent text-white p-3 rounded-full shadow-lg hover:bg-accent/90 transition-all duration-300 hover:scale-110"
					aria-label="Back to top"
				>
					<IoIosArrowUp className="text-xl" />
				</button>
			)}
		</>
	);
};

export default BackToTop; 
import React, { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { whatsappLink } from "../company";

// Floating WhatsApp button (always) + back-to-top (after scrolling).
const BackToTop = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const onScroll = () => setIsVisible(window.scrollY > 400);
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<div className='fixed bottom-5 right-4 sm:right-6 z-40 flex flex-col items-center gap-y-3'>
			{isVisible && (
				<button
					onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
					className='w-11 h-11 rounded-full bg-white text-ink border border-line shadow-md flex items-center justify-center hover:text-accent transition-colors'
					aria-label='Back to top'
				>
					<IoIosArrowUp className='text-xl' />
				</button>
			)}
			<a
				href={whatsappLink("Hello Sol Shalom, I have a question about your office furniture.")}
				target='_blank'
				rel='noreferrer'
				aria-label='Chat with us on WhatsApp'
				className='w-14 h-14 rounded-full bg-[#25D366] text-white text-3xl shadow-lg flex items-center justify-center hover:scale-105 transition-transform'
			>
				<FaWhatsapp />
			</a>
		</div>
	);
};

export default BackToTop;

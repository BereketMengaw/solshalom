import React from "react";
import { hero } from "../data";
import Stats from "./Stats";

const Hero = () => {
	const { title, subtitle, buttonText, backgroundImage } = hero;
	return (
		<section 
			id="home"
			className='w-full min-h-[850px] bg-right bg-cover bg-no-repeat text-white pt-[225px] pb-[100px] relative mb-8 lg:bg-cover lg:mb-16 lg:h-[850px] lg:pb-[150px]'
			style={{
				backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`
			}}
		>
			<div className='container mx-auto text-center'>
			{/* title */}
			<h1 className='text-xl sm:text-2xl mx-auto font-semibold mb-[20px] sm:mb-[30px] lg:text-[64px] lg:leading-tight font-primary'>
				{title}
			</h1>
			{/* Sub-Title */}
			<p className='mb-[20px] sm:mb-[30px] max-w-[672px] mx-auto lg:mb-[65px] text-sm sm:text-base lg:text-xl opacity-80'>
				{subtitle}
			</p>
			{/* button */}
			<button className='bg-[var(--btn-light)] hover:bg-[var(--btn-light)] backdrop-blur-md p-2 px-6 sm:px-9 mb-6 sm:mb-8 lg:mb-[194px] rounded-md transition lg:px-[80px] lg:py-[16px] lg:text-xl text-sm sm:text-base'>
				{buttonText}
			</button>
			{/* Stats */}
			<div className='mt-6 sm:mt-8 lg:mt-0 -mb-16 lg:-mb-20'>
				<Stats />
			</div>
			</div>
		</section>
	);
};

export default Hero;

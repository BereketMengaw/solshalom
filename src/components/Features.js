import React from "react";
import { features } from "../data";

const Features = () => {
	const { title, subtitle, image, items } = features;
	return (
		<section className='section mt-16 lg:mt-20'>
			<div className='container mx-auto px-6 flex flex-col-reverse lg:flex-row gap-x-24 items-end'>
				{/* Images */}
				<div className='py-10 lg:p-0 rounded lg:mb-8'>
					<img
						className='object-cover'
						src={image.type}
						alt='Furniture Sofa & Table'
					/>
				</div>
				{/* Text */}
				<div className='flex-1 flex flex-col justify-end lg:justify-start lg:pt-16'>
					{/* title */}
					<h1 className='title mt-8 lg:mt-0'>{title}</h1>
					{/* subtitle */}
					<h3 className='subtitle mb-8'>{subtitle}</h3>
					{/* items */}
					{/* Text */}
					<div>
						{items.map((item, index) => (
							<div key={index} className='flex w-full gap-x-5 align-top py-3'>
								{/* icon */}
								<div className='text-xl mt-1 lg:text-3xl lg:mt-0'>
									{item.icon}
								</div>
								{/* Test */}
								<div>
									<h3 className='text-base font-semibold lg:text-xl mb-3'>
										{item.title}
									</h3>
									<p>{item.subtitle}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Features;

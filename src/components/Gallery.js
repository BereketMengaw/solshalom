import React from "react";
import { gallery } from "../data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

// Team / workshop / showroom photos. Swap the images in data.js when the client sends them.
const Gallery = () => (
	<section id='gallery' className='section bg-card'>
		<div className='container mx-auto'>
			<SectionHeading eyebrow='Our work' title={gallery.title} subtitle={gallery.subtitle} />
			<div className='grid grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-3 sm:gap-4'>
				{gallery.images.map((img, i) => (
					<Reveal
						as='figure'
						key={img.src}
						delay={i * 80}
						className={`group relative overflow-hidden rounded-md bg-white ${
							i === 0 ? "col-span-2 row-span-2 aspect-square lg:aspect-auto" : "aspect-[4/3]"
						}`}
					>
						<img
							src={img.src}
							alt={img.alt}
							loading='lazy'
							className='w-full h-full object-cover hover:scale-105 transition-transform duration-500'
						/>
						<figcaption className='absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent text-white text-xs sm:text-sm px-3 pt-8 pb-2'>
							{img.alt}
						</figcaption>
						<span className='absolute inset-0 bg-accent/0 group-hover:bg-accent/15 transition-colors' />
					</Reveal>
				))}
			</div>
		</div>
	</section>
);

export default Gallery;

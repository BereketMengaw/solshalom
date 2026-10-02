import React from "react";
import { about } from "../data";
import Mark from "../assets/brand/mark.png";
import SectionHeading from "./SectionHeading";

const AboutUs = () => (
	<section id='about' className='section bg-brand-tint'>
		<div className='container mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center'>
			<div className='relative order-2 lg:order-1'>
				<div className='aspect-[4/3] rounded-md overflow-hidden bg-card'>
					<img src={about.image} alt={about.imageAlt} loading='lazy' className='w-full h-full object-cover' />
				</div>
				<div className='hidden sm:flex absolute -bottom-6 -right-4 lg:-right-8 items-center gap-x-3 bg-white rounded-md shadow-[0_8px_24px_rgba(26,43,44,0.1)] px-5 py-4'>
					<img src={Mark} alt='' className='w-10' />
					<span className='font-display text-lg font-semibold uppercase tracking-wider text-ink leading-tight'>
						Shalom
						<span className='block text-xs font-primary normal-case tracking-normal font-normal text-ink-soft'>
							means peace
						</span>
					</span>
				</div>
			</div>

			<div className='order-1 lg:order-2'>
				<SectionHeading eyebrow='About us' title={about.title} />
				<p className='-mt-4 text-lg text-ink'>{about.intro}</p>
				<p className='mt-4 text-ink-soft'>{about.body}</p>

				<div className='mt-8 grid sm:grid-cols-2 gap-4'>
					{[about.vision, about.mission].map((item) => (
						<div key={item.title} className='bg-white rounded-md p-5 border-t-2 border-brand'>
							<h3 className='text-lg font-semibold text-ink'>{item.title}</h3>
							<p className='mt-2 text-sm text-ink-soft'>{item.text}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	</section>
);

export default AboutUs;

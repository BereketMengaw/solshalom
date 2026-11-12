import React from "react";
import { about } from "../data";
import Mark from "../assets/brand/mark.png";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import Blob from "./Blob";

const AboutUs = () => (
	<section id='about' className='section bg-brand-tint'>
		<div className='container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center'>
			<Reveal className='relative order-2 lg:order-1'>
				<Blob className='absolute -left-3 -top-4 w-28 h-28 lg:-left-8 lg:-top-8 lg:w-40 lg:h-40 text-brand-aqua/70' />
				<div className='relative aspect-[4/3] rounded-md overflow-hidden bg-card'>
					<img src={about.image} alt={about.imageAlt} loading='lazy' className='w-full h-full object-cover' />
				</div>
				<div className='hidden sm:flex absolute -bottom-6 -right-4 lg:-right-8 items-center gap-x-3 bg-surface rounded-md shadow-[0_8px_24px_rgba(26,43,44,0.1)] px-5 py-4'>
					<img src={Mark} alt='' className='w-10' />
					<span className='font-display text-lg font-semibold uppercase tracking-wider text-ink leading-tight'>
						Shalom
						<span className='block text-xs font-primary normal-case tracking-normal font-normal text-ink-soft'>
							means peace
						</span>
					</span>
				</div>
			</Reveal>

			<div className='order-1 lg:order-2'>
				<SectionHeading eyebrow='About us' title={about.title} />
				<ul className='-mt-2 space-y-1 text-xl lg:text-2xl font-medium text-ink'>
					{about.lines.map((line) => (
						<li key={line}>{line}</li>
					))}
				</ul>
				<p className='mt-6 text-lg text-ink-soft'>{about.body}</p>
				<p className='mt-8 border-l-2 border-brand pl-4 font-display text-xl font-semibold uppercase tracking-wider text-ink'>
					{about.closing}
				</p>
			</div>
		</div>
	</section>
);

export default AboutUs;

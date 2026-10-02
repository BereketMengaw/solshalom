import React from "react";
import { IoMdRibbon, IoIosBody, IoIosApps, IoIosChatbubbles } from "react-icons/io";
import { whyUs, steps } from "../data";
import SectionHeading from "./SectionHeading";

const icons = {
	quality: <IoMdRibbon />,
	ergonomic: <IoIosBody />,
	range: <IoIosApps />,
	service: <IoIosChatbubbles />,
};

const WhyChooseUs = () => (
	<section id='why-us' className='section bg-white'>
		<div className='container mx-auto'>
			<SectionHeading eyebrow='Why Sol Shalom' title={whyUs.title} subtitle={whyUs.subtitle} />

			<div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-5'>
				{whyUs.items.map((item) => (
					<div key={item.title} className='rounded-md border border-line p-6 hover:border-brand transition-colors'>
						<div className='w-12 h-12 rounded-full bg-brand-tint text-accent text-2xl flex items-center justify-center'>
							{icons[item.icon]}
						</div>
						<h3 className='mt-5 text-xl font-semibold text-ink'>{item.title}</h3>
						<p className='mt-2 text-sm text-ink-soft'>{item.text}</p>
					</div>
				))}
			</div>

			{/* How to order */}
			<div className='mt-16 rounded-md bg-ink text-white p-6 sm:p-10'>
				<h3 className='text-2xl lg:text-3xl font-semibold'>{steps.title}</h3>
				<ol className='mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-8'>
					{steps.items.map((step, i) => (
						<li key={step.title} className='relative'>
							<span className='font-display text-5xl font-semibold text-brand leading-none'>
								{String(i + 1).padStart(2, "0")}
							</span>
							<p className='mt-3 font-display text-xl uppercase tracking-wider font-semibold'>{step.title}</p>
							<p className='mt-1 text-sm text-white/70'>{step.text}</p>
						</li>
					))}
				</ol>
			</div>
		</div>
	</section>
);

export default WhyChooseUs;

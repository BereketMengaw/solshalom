import React from "react";
import { IoMdRibbon, IoIosBody, IoIosApps, IoIosChatbubbles } from "react-icons/io";
import { whyUs, steps } from "../data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import useInView from "../hooks/useInView";
import Mark from "../assets/brand/mark.png";

const icons = {
	quality: <IoMdRibbon />,
	ergonomic: <IoIosBody />,
	range: <IoIosApps />,
	service: <IoIosChatbubbles />,
};

const HowToOrder = () => {
	const [ref, inView] = useInView({ threshold: 0.35 });
	return (
		<div ref={ref} className='relative mt-16 overflow-hidden rounded-md bg-deep text-white p-6 sm:p-10'>
			<img src={Mark} alt='' className='pointer-events-none absolute -right-10 -bottom-12 w-72 opacity-[0.07] brightness-0 invert' />
			<h3 className='text-2xl lg:text-3xl font-semibold'>{steps.title}</h3>
			<div className='relative mt-8'>
				{/* progress line */}
				<div className='hidden lg:block absolute left-0 right-0 top-7 h-px bg-white/15'>
					<div
						className='h-full bg-brand origin-left transition-transform duration-[1600ms] ease-out motion-reduce:transition-none'
						style={{ transform: `scaleX(${inView ? 1 : 0})` }}
					/>
				</div>
				<ol className='grid sm:grid-cols-2 lg:grid-cols-4 gap-8'>
					{steps.items.map((step, i) => (
						<li
							key={step.title}
							data-in={inView || undefined}
							style={{ transitionDelay: `${i * 250}ms` }}
							className='reveal relative'
						>
							<span className='relative inline-block bg-deep pr-3 font-display text-6xl font-semibold leading-none text-outline'>
								{String(i + 1).padStart(2, "0")}
							</span>
							<p className='mt-4 font-display text-xl uppercase tracking-wider font-semibold'>{step.title}</p>
							<p className='mt-1 text-sm text-white/70'>{step.text}</p>
						</li>
					))}
				</ol>
			</div>
		</div>
	);
};

const WhyChooseUs = () => (
	<section id='why-us' className='section bg-surface'>
		<div className='container mx-auto'>
			<SectionHeading eyebrow='Why Sol Shalom' title={whyUs.title} subtitle={whyUs.subtitle} />

			<div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-5'>
				{whyUs.items.map((item, i) => (
					<Reveal key={item.title} delay={i * 90} className='group rounded-md border border-line p-6 hover:border-brand hover:bg-brand-tint/50 transition-colors'>
						<div className='w-12 h-12 rounded-full bg-brand-tint text-accent text-2xl flex items-center justify-center transition-colors group-hover:bg-accent group-hover:text-white'>
							{icons[item.icon]}
						</div>
						<h3 className='mt-5 text-xl font-semibold text-ink'>{item.title}</h3>
						<p className='mt-2 text-sm text-ink-soft'>{item.text}</p>
					</Reveal>
				))}
			</div>

			<HowToOrder />
		</div>
	</section>
);

export default WhyChooseUs;

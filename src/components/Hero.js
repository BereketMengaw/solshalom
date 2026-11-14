import React from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import { hero, stats } from "../data";
import { whatsappLink } from "../company";
import CountUp from "./CountUp";

// Soft teal glow from the top plus a faint architectural grid that fades out toward the edges.
const backdrop = {
	backgroundImage: [
		"radial-gradient(70% 55% at 50% 0%, rgb(var(--c-tint)) 0%, transparent 75%)",
		"linear-gradient(to right, rgb(var(--c-line) / 0.55) 1px, transparent 1px)",
		"linear-gradient(to bottom, rgb(var(--c-line) / 0.55) 1px, transparent 1px)",
	].join(","),
	backgroundSize: "100% 100%, 96px 96px, 96px 96px",
	backgroundPosition: "center top",
	WebkitMaskImage: "radial-gradient(80% 70% at 50% 30%, #000 40%, transparent 100%)",
	maskImage: "radial-gradient(80% 70% at 50% 30%, #000 40%, transparent 100%)",
};

const Hero = () => {
	const [lead, ...rest] = hero.title.split(" ");

	return (
		<section id='home' className='relative pt-20 bg-surface overflow-hidden'>
			<div aria-hidden='true' className='pointer-events-none absolute inset-0' style={backdrop} />

			<div className='relative container mx-auto flex flex-col items-center text-center pt-16 pb-14 sm:pt-24 sm:pb-20'>
				<p className='inline-flex items-center gap-x-3 rounded-full border border-line bg-surface/80 backdrop-blur px-4 py-1.5 font-display text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-accent'>
					<span className='w-1.5 h-1.5 rounded-full bg-brand' />
					{hero.eyebrow}
				</p>

				<h1 className='mt-8 text-[54px] sm:text-[88px] xl:text-[120px] leading-[0.86] font-semibold tracking-tight text-ink'>
					{lead}
					<span className='block text-accent'>{rest.join(" ")}</span>
				</h1>

				<span aria-hidden='true' className='mt-8 w-16 h-[2px] bg-brand' />

				<p className='mt-8 max-w-2xl text-xl sm:text-2xl font-medium leading-snug text-ink'>{hero.tagline}</p>
				<p className='mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-ink-soft'>{hero.subtitle}</p>

				<div className='mt-10 flex flex-col sm:flex-row gap-3 w-full sm:w-auto'>
					<Link
						to='/products'
						className='inline-flex items-center justify-center gap-x-2 bg-accent hover:bg-accent-hover text-white font-display uppercase tracking-wider font-semibold px-7 py-3.5 rounded transition-colors'
					>
						Browse the catalog <IoIosArrowRoundForward className='text-2xl' />
					</Link>
					<a
						href={whatsappLink("Hello Sol Shalom, I'd like a quote for office furniture.")}
						target='_blank'
						rel='noreferrer'
						className='inline-flex items-center justify-center gap-x-2 border border-ink/20 hover:border-accent hover:text-accent text-ink font-display uppercase tracking-wider font-semibold px-7 py-3.5 rounded transition-colors'
					>
						<FaWhatsapp className='text-xl' /> Request a quote
					</a>
				</div>

				<dl className='mt-16 w-full max-w-3xl grid grid-cols-3 divide-x divide-line border-y border-line bg-surface/70 backdrop-blur'>
					{stats.map((s) => (
						<div key={s.label} className='flex flex-col items-center py-5 sm:py-6 px-2'>
							<dt className='order-2 mt-1 text-[11px] sm:text-xs uppercase tracking-[0.18em] text-ink-soft'>{s.label}</dt>
							<dd className='order-1 font-display text-3xl sm:text-5xl font-semibold text-ink'>
								<CountUp value={s.value} />
							</dd>
						</div>
					))}
				</dl>
			</div>

			{/* Services */}
			<div className='relative bg-deep text-white'>
				<ul className='container mx-auto flex flex-wrap items-center justify-center gap-y-3 py-5 lg:py-7'>
					{hero.services.map((service, i) => (
						<li key={service} className='flex items-center'>
							{i > 0 && <span aria-hidden='true' className='mx-4 sm:mx-6 h-4 w-px bg-brand-aqua/60' />}
							<span className='font-display text-xs sm:text-base font-semibold uppercase tracking-[0.15em] leading-tight whitespace-nowrap'>
								{service}
							</span>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};

export default Hero;

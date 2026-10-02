import React from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import { hero, stats } from "../data";
import { getProduct } from "../products";
import { whatsappLink } from "../company";

// Organic blob from the Sol Shalom brand mockups.
const Blob = ({ className }) => (
	<svg viewBox='0 0 600 560' className={className} aria-hidden='true'>
		<path
			fill='currentColor'
			d='M318 18c92-6 186 34 232 112 44 76 40 178-6 256-46 80-136 140-232 158-98 18-196-12-252-86C6 386-10 284 22 196 54 106 132 34 220 22c33-4 66-2 98-4z'
		/>
	</svg>
);

const Hero = () => {
	const featured = getProduct(hero.featured);
	return (
		<section id='home' className='relative pt-20 bg-white overflow-hidden'>
			<div className='container mx-auto grid lg:grid-cols-2 items-center gap-10 lg:gap-6 py-10 lg:py-16'>
				<div>
					<p className='flex items-center gap-x-3 font-display text-sm font-semibold uppercase tracking-[0.2em] text-brand'>
						<span className='w-8 h-px bg-current' />
						{hero.eyebrow}
					</p>
					<h1 className='mt-5 text-[44px] sm:text-6xl xl:text-7xl leading-[0.95] font-semibold text-ink'>
						{hero.title}
					</h1>
					<p className='mt-6 max-w-lg text-lg text-ink-soft'>{hero.subtitle}</p>
					<div className='mt-8 flex flex-col sm:flex-row gap-3'>
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

					<dl className='mt-12 grid grid-cols-3 max-w-lg border-t border-line pt-6'>
						{stats.map((s) => (
							<div key={s.label} className='flex flex-col'>
								<dt className='order-2 text-xs sm:text-sm text-ink-soft mt-1'>{s.label}</dt>
								<dd className='order-1 font-display text-3xl sm:text-4xl font-semibold text-ink -mt-0.5'>
									{s.value}
								</dd>
							</div>
						))}
					</dl>
				</div>

				<div className='relative mx-auto w-full max-w-[520px] aspect-[600/560]'>
					<Blob className='absolute inset-0 w-full h-full text-brand-aqua' />
					<img
						src={hero.image}
						alt={featured ? `${featured.name}, model ${featured.code}` : ""}
						className='absolute left-1/2 bottom-[6%] -translate-x-1/2 h-[92%] object-contain mix-blend-multiply'
					/>
					{featured && (
						<Link
							to={`/product/${featured.id}`}
							className='absolute right-0 sm:-right-2 bottom-[10%] bg-white rounded-md shadow-[0_8px_24px_rgba(26,43,44,0.12)] px-4 py-3 hover:shadow-[0_8px_28px_rgba(26,43,44,0.2)] transition-shadow'
						>
							<span className='block font-display text-xs font-semibold uppercase tracking-widest text-brand'>
								Model {featured.code}
							</span>
							<span className='block text-sm font-semibold text-ink'>{featured.name}</span>
						</Link>
					)}
				</div>
			</div>
		</section>
	);
};

export default Hero;

import React from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { getCategory } from "../products";
import { whatsappLink } from "../company";
import Mark from "../assets/brand/mark.png";
import Blob from "./Blob";

export const productMessage = (p) =>
	`Hello Sol Shalom, I'm interested in the ${p.name} (model ${p.code}). Could you send me the price and availability?`;

export const ProductImage = ({ product, index = 0, className = "" }) => {
	const src = product.images[index];
	if (!src) {
		return (
			<div className={`flex flex-col items-center justify-center gap-y-2 text-[#4A5A5B] ${className}`}>
				<img src={Mark} alt='' className='w-14 opacity-40' />
				<span className='text-xs uppercase tracking-wider'>Photo on request</span>
			</div>
		);
	}
	return (
		<img
			src={src}
			alt={`${product.name} — model ${product.code}`}
			loading='lazy'
			className={`object-contain mix-blend-multiply ${className}`}
		/>
	);
};

const ProductCard = ({ product }) => {
	const category = getCategory(product.category);
	const details = [
		...product.specs.filter(([k]) => k !== "Colour").map(([k, v]) => `${k}: ${v}`),
		...product.features,
	].slice(0, 3);
	return (
		<article className='group relative flex flex-col bg-surface border border-line rounded-md overflow-hidden transition-[box-shadow,transform] duration-300 lg:hover:-translate-y-1 hover:shadow-[0_14px_32px_rgba(26,43,44,0.10)] motion-reduce:transition-none motion-reduce:hover:translate-y-0'>
			<Link to={`/product/${product.id}`} className='flex flex-col flex-1'>
				<div className='relative aspect-[4/5] bg-stage overflow-hidden'>
					<Blob className='absolute inset-[10%] w-[80%] h-[80%] text-white transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 motion-reduce:transition-none' />
					<ProductImage
						product={product}
						className='absolute inset-0 w-full h-full p-5 sm:p-6 transition-transform duration-500 group-hover:scale-[1.04] motion-reduce:transition-none'
					/>
					<span className='absolute top-3 left-3 bg-white/90 backdrop-blur rounded-full px-2.5 py-1 font-display text-xs font-semibold uppercase tracking-widest text-accent'>
						{product.code}
					</span>
					{details.length > 0 && (
						<div className='hidden lg:block absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-accent/95 text-white p-4 motion-reduce:transition-none'>
							<ul className='space-y-1 text-xs'>
								{details.map((d) => (
									<li key={d} className='line-clamp-1'>{d}</li>
								))}
							</ul>
							<span className='mt-2 block font-display text-sm uppercase tracking-wider font-semibold'>
								View details →
							</span>
						</div>
					)}
				</div>
				<div className='p-4 pr-14 flex-1'>
					<h3 className='font-primary normal-case tracking-normal text-[15px] font-semibold text-ink leading-snug'>
						{product.name}
					</h3>
					<p className='text-xs text-ink-soft mt-1'>{category?.name}</p>
				</div>
			</Link>
			<a
				href={whatsappLink(productMessage(product))}
				target='_blank'
				rel='noreferrer'
				aria-label={`Contact us about ${product.name} (${product.code}) on WhatsApp`}
				title='Contact us for this product'
				className='absolute right-3 bottom-4 w-9 h-9 rounded-full bg-brand-tint text-accent hover:bg-accent hover:text-white flex items-center justify-center text-lg transition-colors'
			>
				<FaWhatsapp />
			</a>
		</article>
	);
};

export default ProductCard;

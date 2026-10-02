import React from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { getCategory } from "../products";
import { whatsappLink } from "../company";
import Mark from "../assets/brand/mark.png";

export const productMessage = (p) =>
	`Hello Sol Shalom, I'm interested in the ${p.name} (model ${p.code}). Could you send me the price and availability?`;

export const ProductImage = ({ product, index = 0, className = "" }) => {
	const src = product.images[index];
	if (!src) {
		return (
			<div className={`flex flex-col items-center justify-center gap-y-2 text-ink-soft ${className}`}>
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
	return (
		<article className='group flex flex-col bg-white border border-line rounded-md overflow-hidden transition-shadow hover:shadow-[0_8px_24px_rgba(26,43,44,0.08)]'>
			<Link to={`/product/${product.id}`} className='flex flex-col flex-1'>
				<div className='relative aspect-[4/5] bg-card overflow-hidden'>
					<ProductImage
						product={product}
						className='absolute inset-0 w-full h-full transition-transform duration-300 group-hover:scale-[1.03]'
					/>
				</div>
				<div className='p-4 flex-1'>
					<p className='font-display text-sm font-semibold uppercase tracking-widest text-brand'>
						{product.code}
					</p>
					<h3 className='font-primary normal-case tracking-normal text-[15px] font-semibold text-ink leading-snug mt-1'>
						{product.name}
					</h3>
					<p className='text-xs text-ink-soft mt-1'>{category?.name}</p>
				</div>
			</Link>
			<a
				href={whatsappLink(productMessage(product))}
				target='_blank'
				rel='noreferrer'
				className='mx-4 mb-4 flex items-center justify-center gap-x-2 border border-accent text-accent hover:bg-accent hover:text-white rounded py-2 text-sm font-medium transition-colors'
			>
				<FaWhatsapp className='text-base shrink-0' />
				<span className='sm:hidden'>Contact us</span>
				<span className='hidden sm:inline'>Contact us for this product</span>
			</a>
		</article>
	);
};

export default ProductCard;

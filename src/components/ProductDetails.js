import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosCall, IoIosMail, IoIosCheckmarkCircle } from "react-icons/io";
import { getProduct, getCategory, productsIn } from "../products";
import company, { whatsappLink } from "../company";
import ProductCard, { ProductImage, productMessage } from "./ProductCard";

const ProductDetails = () => {
	const { productId } = useParams();
	const product = getProduct(productId);
	const [index, setIndex] = useState(0);

	useEffect(() => {
		setIndex(0);
		if (product) document.title = `${product.name} ${product.code} | ${company.name}`;
		return () => {
			document.title = `${company.name} — Office Furniture`;
		};
	}, [product]);

	if (!product) {
		return (
			<main className='pt-20'>
				<div className='container mx-auto py-24 text-center'>
					<h1 className='text-4xl font-semibold'>Product not found</h1>
					<p className='mt-3 text-ink-soft'>This model may have been renamed or removed.</p>
					<Link to='/products' className='inline-block mt-6 text-accent font-medium underline'>
						Back to the catalog
					</Link>
				</div>
			</main>
		);
	}

	const category = getCategory(product.category);
	const related = productsIn(product.category).filter((p) => p.id !== product.id).slice(0, 4);
	const message = productMessage(product);

	return (
		<main className='pt-20'>
			<div className='container mx-auto py-6 text-sm text-ink-soft'>
				<Link to='/' className='hover:text-accent'>Home</Link> /{" "}
				<Link to='/products' className='hover:text-accent'>Catalog</Link> /{" "}
				<Link to={`/products?category=${category.id}`} className='hover:text-accent'>{category.name}</Link> /{" "}
				<span className='text-ink'>{product.code}</span>
			</div>

			<section className='container mx-auto grid lg:grid-cols-2 gap-8 lg:gap-14 pb-16'>
				{/* Gallery */}
				<div>
					<div className='relative aspect-square bg-card rounded-md overflow-hidden'>
						<ProductImage product={product} index={index} className='absolute inset-0 w-full h-full' />
					</div>
					{product.images.length > 1 && (
						<div className='mt-3 grid grid-cols-4 sm:grid-cols-5 gap-3'>
							{product.images.map((src, i) => (
								<button
									key={src}
									onClick={() => setIndex(i)}
									aria-label={`Show photo ${i + 1}`}
									className={`aspect-square bg-card rounded p-2 border-2 transition-colors ${
										i === index ? "border-accent" : "border-transparent hover:border-line"
									}`}
								>
									<img src={src} alt='' className='w-full h-full object-contain mix-blend-multiply' />
								</button>
							))}
						</div>
					)}
				</div>

				{/* Info */}
				<div>
					<p className='font-display text-base font-semibold uppercase tracking-[0.2em] text-brand'>
						Model {product.code}
					</p>
					<h1 className='mt-2 text-4xl lg:text-5xl font-semibold text-ink leading-[1.05]'>{product.name}</h1>
					<p className='mt-2 text-sm text-ink-soft'>{category.name}</p>
					<p className='mt-5 text-lg text-ink-soft'>{product.summary}</p>

					{product.features.length > 0 && (
						<ul className='mt-6 space-y-2'>
							{product.features.map((f) => (
								<li key={f} className='flex gap-x-3'>
									<IoIosCheckmarkCircle className='text-brand text-xl shrink-0 mt-0.5' />
									<span>{f}</span>
								</li>
							))}
						</ul>
					)}

					{product.specs.length > 0 && (
						<div className='mt-8'>
							<h2 className='text-xl font-semibold mb-3'>Specifications</h2>
							<dl className='border-t border-line'>
								<div className='grid grid-cols-[140px_1fr] gap-x-4 py-3 border-b border-line text-sm'>
									<dt className='text-ink-soft'>Model code</dt>
									<dd className='font-medium'>{product.code}</dd>
								</div>
								{product.specs.map(([label, value]) => (
									<div key={label} className='grid grid-cols-[140px_1fr] gap-x-4 py-3 border-b border-line text-sm'>
										<dt className='text-ink-soft'>{label}</dt>
										<dd className='font-medium'>{value}</dd>
									</div>
								))}
							</dl>
						</div>
					)}

					{/* Contact us for this product */}
					<div className='mt-8 rounded-md bg-brand-tint p-5 lg:p-6'>
						<h2 className='text-xl font-semibold'>Contact us for this product</h2>
						<p className='mt-1 text-sm text-ink-soft'>
							Ask for price, colours, availability or bulk orders. Mention model <strong>{product.code}</strong>.
						</p>
						<div className='mt-4 grid sm:grid-cols-3 gap-3'>
							<a
								href={whatsappLink(`${message} ${window.location.href}`)}
								target='_blank'
								rel='noreferrer'
								className='sm:col-span-3 flex items-center justify-center gap-x-2 bg-accent hover:bg-accent-hover text-white font-display uppercase tracking-wider font-semibold py-3 rounded transition-colors'
							>
								<FaWhatsapp className='text-xl' /> Ask on WhatsApp
							</a>
							<a
								href={`tel:${company.phone.replace(/\s/g, "")}`}
								className='sm:col-span-1 flex items-center justify-center gap-x-2 border border-accent text-accent hover:bg-accent hover:text-white py-2.5 rounded text-sm font-medium transition-colors'
							>
								<IoIosCall className='text-lg' /> Call
							</a>
							<a
								href={`mailto:${company.email}?subject=${encodeURIComponent(`Enquiry: ${product.name} (${product.code})`)}&body=${encodeURIComponent(message)}`}
								className='sm:col-span-2 flex items-center justify-center gap-x-2 border border-accent text-accent hover:bg-accent hover:text-white py-2.5 rounded text-sm font-medium transition-colors'
							>
								<IoIosMail className='text-lg' /> Email us
							</a>
						</div>
					</div>
				</div>
			</section>

			{related.length > 0 && (
				<section className='bg-card py-14'>
					<div className='container mx-auto'>
						<div className='flex items-end justify-between mb-6'>
							<h2 className='text-2xl lg:text-3xl font-semibold'>More {category.name.toLowerCase()}</h2>
							<Link to={`/products?category=${category.id}`} className='text-accent font-medium text-sm'>
								View all
							</Link>
						</div>
						<div className='grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5'>
							{related.map((p) => (
								<ProductCard key={p.id} product={p} />
							))}
						</div>
					</div>
				</section>
			)}
		</main>
	);
};

export default ProductDetails;

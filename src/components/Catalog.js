import React, { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { IoIosArrowRoundForward, IoIosSearch } from "react-icons/io";
import { products, categories, families, getCategory } from "../products";
import ProductCard from "./ProductCard";
import SectionHeading from "./SectionHeading";

const Chip = ({ active, onClick, children, count }) => (
	<button
		onClick={onClick}
		className={`shrink-0 whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
			active
				? "bg-accent border-accent text-white"
				: "bg-white border-line text-ink hover:border-accent hover:text-accent"
		}`}
	>
		{children}
		{count !== undefined && (
			<span className={`ml-1.5 text-xs ${active ? "text-white/75" : "text-ink-soft"}`}>{count}</span>
		)}
	</button>
);

export const CategoryFilter = ({ active, onChange }) => (
	<div className='-mx-4 px-4 sm:mx-0 sm:px-0 overflow-x-auto scrollbar-none'>
		<div className='flex sm:flex-wrap gap-2 pb-1'>
			<Chip active={!active} onClick={() => onChange(null)} count={products.length}>
				All
			</Chip>
			{families.map((family) =>
				categories
					.filter((c) => c.family === family)
					.map((c) => (
						<Chip
							key={c.id}
							active={active === c.id}
							onClick={() => onChange(c.id)}
							count={products.filter((p) => p.category === c.id).length}
						>
							{c.name}
						</Chip>
					))
			)}
		</div>
	</div>
);

// Homepage section: filterable preview of the catalog.
const HOME_LIMIT = 8;

const Catalog = () => {
	const [active, setActive] = useState(null);
	const list = useMemo(
		() => (active ? products.filter((p) => p.category === active) : products.filter((p) => p.images.length)),
		[active]
	);
	const shown = list.slice(0, HOME_LIMIT);
	const category = active && getCategory(active);

	return (
		<section id='products' className='section bg-white'>
			<div className='container mx-auto'>
				<div className='flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6'>
					<SectionHeading
						eyebrow='Our products'
						title='Furniture for every corner of the office'
						subtitle='Every product has a model code. Send it to us and we will reply with price and availability.'
					/>
					<Link
						to='/products'
						className='hidden lg:inline-flex items-center gap-x-1 mb-12 font-medium text-accent hover:text-accent-hover shrink-0'
					>
						Full catalog <IoIosArrowRoundForward className='text-2xl' />
					</Link>
				</div>

				<CategoryFilter active={active} onChange={setActive} />
				{category && <p className='mt-4 text-sm text-ink-soft'>{category.blurb}</p>}

				<div className='mt-8 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-5'>
					{shown.map((p) => (
						<ProductCard key={p.id} product={p} />
					))}
				</div>

				<div className='mt-10 text-center'>
					<Link
						to={active ? `/products?category=${active}` : "/products"}
						className='inline-flex items-center gap-x-2 bg-accent hover:bg-accent-hover text-white font-display uppercase tracking-wider font-semibold px-6 py-3 rounded transition-colors'
					>
						{list.length > HOME_LIMIT
							? `See all ${list.length} ${category ? category.name.toLowerCase() : "products"}`
							: "Browse the full catalog"}
						<IoIosArrowRoundForward className='text-2xl' />
					</Link>
				</div>
			</div>
		</section>
	);
};

// Full catalog page at /products
export const CatalogPage = () => {
	const [params, setParams] = useSearchParams();
	const [query, setQuery] = useState("");
	const active = params.get("category");
	const category = active && getCategory(active);

	const list = useMemo(() => {
		const q = query.trim().toLowerCase();
		return products.filter(
			(p) =>
				(!active || p.category === active) &&
				(!q || p.code.toLowerCase().includes(q) || p.name.toLowerCase().includes(q))
		);
	}, [active, query]);

	const setActive = (id) => setParams(id ? { category: id } : {});

	return (
		<main className='pt-20'>
			<section className='bg-brand-tint border-b border-line'>
				<div className='container mx-auto py-10 lg:py-14'>
					<p className='text-sm text-ink-soft'>
						<Link to='/' className='hover:text-accent'>Home</Link> / Catalog
					</p>
					<h1 className='mt-3 text-4xl lg:text-6xl font-semibold text-ink'>
						{category ? category.name : "Product catalog"}
					</h1>
					<p className='mt-3 max-w-xl text-ink-soft'>
						{category
							? category.blurb
							: "Chairs, desks, conference tables, storage and sofas. Search by model code or browse by category."}
					</p>
				</div>
			</section>

			<section className='container mx-auto py-8 lg:py-12'>
				<div className='flex flex-col gap-5'>
					<label className='relative max-w-md'>
						<span className='sr-only'>Search by model code or name</span>
						<IoIosSearch className='absolute left-3 top-1/2 -translate-y-1/2 text-xl text-ink-soft' />
						<input
							type='search'
							value={query}
							onChange={(e) => setQuery(e.target.value)}
							placeholder='Search model code or name, e.g. Q8 or MT-240'
							className='w-full border border-line rounded pl-10 pr-4 py-3 text-sm outline-none focus:border-accent'
						/>
					</label>
					<CategoryFilter active={active} onChange={setActive} />
				</div>

				<p className='mt-6 text-sm text-ink-soft'>
					{list.length} {list.length === 1 ? "product" : "products"}
				</p>

				{list.length ? (
					<div className='mt-4 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-5'>
						{list.map((p) => (
							<ProductCard key={p.id} product={p} />
						))}
					</div>
				) : (
					<div className='mt-6 rounded-md bg-card p-10 text-center text-ink-soft'>
						No products match “{query}”.{" "}
						<button className='text-accent underline' onClick={() => { setQuery(""); setActive(null); }}>
							Clear filters
						</button>
					</div>
				)}
			</section>
		</main>
	);
};

export default Catalog;

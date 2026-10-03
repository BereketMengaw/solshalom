import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import { getCategory, productsIn } from "../products";
import Blob from "./Blob";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const tiles = [
	{ id: "executive-chairs", image: "/products/q8-1.jpg", big: true },
	{ id: "conference-tables", image: "/products/yc48-1.jpg" },
	{ id: "managerial-desks", image: "/products/mt-240-1.jpg" },
	{ id: "guest-chairs", image: "/products/840c-1.jpg" },
	{ id: "shelves-cabinets", image: "/products/a3-1.jpg" },
];

// Bento grid of the main categories, linking into the filtered catalog.
const ShopByCategory = () => (
	<section className='section bg-surface'>
		<div className='container mx-auto'>
			<SectionHeading eyebrow='Shop by category' title='Start with the room you are furnishing' />
			<div className='grid grid-cols-2 lg:grid-cols-4 auto-rows-[180px] sm:auto-rows-[220px] gap-3 sm:gap-4'>
				{tiles.map((t, i) => {
					const c = getCategory(t.id);
					const count = productsIn(t.id).length;
					return (
						<Reveal
							key={t.id}
							delay={i * 70}
							className={t.big ? "col-span-2 row-span-2" : ""}
						>
							<Link
								to={`/products?category=${t.id}`}
								className={`group relative flex h-full overflow-hidden rounded-md ${
									t.big ? "bg-[#BFE6E8]" : "bg-brand-tint"
								}`}
							>
								<Blob
									className={`absolute ${t.big ? "text-white/80" : "text-surface/80"} transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-6 motion-reduce:transition-none ${
										t.big ? "right-[-10%] top-[8%] w-[75%] h-[85%]" : "right-[-18%] top-[-10%] w-[90%] h-[95%]"
									}`}
								/>
								{t.big ? (
									<img
										src={t.image}
										alt=''
										loading='lazy'
										className='absolute right-[4%] bottom-[6%] h-[82%] w-[60%] object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none'
									/>
								) : (
									<span
										className={`absolute right-3 top-3 sm:right-4 sm:top-4 w-[58%] aspect-[4/3] overflow-hidden rounded bg-white p-1 shadow-[0_8px_20px_rgba(26,43,44,0.15)] transition-transform duration-500 group-hover:rotate-0 group-hover:scale-105 motion-reduce:transition-none ${
											i % 2 ? "rotate-3" : "-rotate-3"
										}`}
									>
										<img src={t.image} alt='' loading='lazy' className='w-full h-full object-cover rounded-sm' />
									</span>
								)}
								<div className='relative mt-auto p-4 sm:p-5'>
									<p className={`font-display font-semibold uppercase tracking-wide leading-none ${t.big ? "text-[#1A2B2C]" : "text-ink"} ${t.big ? "text-3xl sm:text-5xl max-w-[45%]" : "text-base sm:text-2xl"}`}>
										{c.name}
									</p>
									<p className={`mt-1 flex items-center gap-x-1 text-xs sm:text-sm group-hover:text-accent ${t.big ? "text-[#4A5A5B]" : "text-ink-soft"}`}>
										{count} models <IoIosArrowRoundForward className='text-xl transition-transform group-hover:translate-x-1' />
									</p>
								</div>
							</Link>
						</Reveal>
					);
				})}
			</div>
		</div>
	</section>
);

export default ShopByCategory;

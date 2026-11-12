import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { navigation } from "../data";
import { categories } from "../products";

const NavMobile = ({ onNavClick, onLinkClick, activeSection }) => {
	const [productsOpen, setProductsOpen] = useState(false);

	const navItems = navigation.map((item) => {
		const isActive = activeSection === item.href.replace("#", "");
		const base = `font-display uppercase tracking-wider transition-colors ${
			isActive ? "text-accent" : "text-ink hover:text-accent"
		}`;

		if (item.name === "products") {
			return (
				<li key={item.href} className='w-full flex flex-col items-center'>
					<button
						onClick={() => setProductsOpen(!productsOpen)}
						aria-expanded={productsOpen}
						className={`${base} flex items-center gap-x-2 ${productsOpen ? "text-accent" : ""}`}
					>
						{item.name}
						<IoIosArrowDown className={`text-xl transition-transform ${productsOpen ? "rotate-180" : ""}`} />
					</button>
					<div
						className={`w-full grid transition-[grid-template-rows] duration-300 ${
							productsOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
						}`}
					>
						<div className='overflow-hidden'>
							<div className='mt-4 mx-6 rounded-md bg-brand-tint px-5 py-4 text-left'>
								<ul>
									{categories.map((c) => (
										<li key={c.id}>
											<Link
												to={`/products?category=${c.id}`}
												onClick={onLinkClick}
												className='block py-2 text-base font-normal text-ink hover:text-accent'
											>
												{c.name}
											</Link>
										</li>
									))}
								</ul>
								<Link
									to='/products'
									onClick={onLinkClick}
									className='mt-2 block pt-3 border-t border-line text-base font-semibold text-accent'
								>
									View all products
								</Link>
							</div>
						</div>
					</div>
				</li>
			);
		}

		return (
			<li key={item.href}>
				<button onClick={() => onNavClick(item.href)} className={base}>
					{item.name}
				</button>
			</li>
		);
	});

	return (
		<nav className='bg-surface w-full h-full shadow-2xl border-t border-line overflow-y-auto'>
			<ul className='min-h-full flex flex-col items-center justify-center gap-y-6 py-10 text-2xl font-medium'>
				{navItems}
				<li className='mt-4'>
					<button
						onClick={() => onNavClick("#contact")}
						className='bg-accent hover:bg-accent-hover text-white font-display uppercase tracking-wider text-lg font-semibold px-6 py-3 rounded transition-colors'
					>
						Request a Quote
					</button>
				</li>
			</ul>
		</nav>
	);
};

export default NavMobile;

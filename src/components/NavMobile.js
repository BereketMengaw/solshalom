import React from "react";
import { navigation } from "../data";

const NavMobile = ({ onNavClick, activeSection }) => {
	const navItems = navigation.map((item) => {
		const isActive = activeSection === item.href.replace("#", "");
		return (
			<li key={item.href}>
				<button
					onClick={() => onNavClick(item.href)}
					className={`font-display uppercase tracking-wider transition-colors ${
						isActive ? "text-accent" : "text-ink hover:text-accent"
					}`}
				>
					{item.name}
				</button>
			</li>
		);
	});

	return (
		<nav className='bg-surface w-full h-full shadow-2xl border-t border-line'>
			<ul className='h-full flex flex-col items-center justify-center gap-y-6 text-2xl font-medium'>
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

import React from "react";
import { navigation } from "../data";

const NavMobile = ({ onNavClick, activeSection }) => {
	const navItems = navigation.map((item, index) => {
		const sectionId = item.href.replace('#', '');
		const isActive = activeSection === sectionId;
		return (
			<li key={index}>
				<button
					onClick={() => onNavClick(item.href)}
					className={`capitalize transition-all cursor-pointer ${
						isActive 
							? 'text-accent font-semibold border-b-2 border-accent' 
							: 'text-black hover:text-accent hover:border-b hover:border-accent/70'
					}`}
				>
					{item.name}
				</button>
			</li>
		);
	});

	return (
		<nav className='bg-white w-full h-full shadow-2xl'>
			<ul className='capitalize text-center h-full flex flex-col items-center justify-center gap-y-5 text-xl font-medium'>
				{navItems}
			</ul>
		</nav>
	);
};

export default NavMobile;

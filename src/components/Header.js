/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { CgMenuRight, CgClose } from "react-icons/cg";
import { navigation } from "../data";
import Logo from "../assets/images/MainLogo.png";
import NavMobile from "./NavMobile";

const Header = () => {
	const [bg, setBg] = useState(false);
	const [mobileNav, setMobileNav] = useState(false);
	const [activeSection, setActiveSection] = useState('home');

	// Smooth scrolling function
	const scrollToSection = (sectionId) => {
		const element = document.querySelector(sectionId);
		if (element) {
			const headerHeight = 80; // Approximate header height
			const elementPosition = element.offsetTop - headerHeight;
			
			window.scrollTo({
				top: elementPosition,
				behavior: 'smooth'
			});
		}
		// Close mobile nav if open
		setMobileNav(false);
	};

	// Track active section on scroll
	useEffect(() => {
		const handleScroll = () => {
			const sections = ['home', 'about', 'showcase', 'products', 'contact'];
			const headerHeight = 80;
			const scrollPosition = window.scrollY + headerHeight + 50; // Add offset for better detection

			for (const section of sections) {
				const element = document.getElementById(section);
				if (element) {
					const offsetTop = element.offsetTop;
					const offsetHeight = element.offsetHeight;
					
					if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
						setActiveSection(section);
						break;
					}
				}
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	// Conditional Elements | Styling |:
	const bgStyle = bg ? "bg-primary py-4 lg:py-6" : "bg-none";
	const mobileNavMenu = mobileNav ? <CgClose /> : <CgMenuRight />;
	const mobileNavMenuStyle = mobileNav ? "left-0" : "-left-full";
	const navItems = navigation.map((item, index) => {
		const sectionId = item.href.replace('#', '');
		const isActive = activeSection === sectionId;
		return (
			<li key={index}>
				<button
					onClick={() => scrollToSection(item.href)}
					className={`text-white capitalize transition-all cursor-pointer ${
						isActive 
							? 'border-b-2 border-white font-semibold' 
							: 'hover:border-b hover:border-white/70'
					}`}
				>
					{item.name}
				</button>
			</li>
		);
	});

	// Controlling the Scrolling Effect:
	useEffect(() => {
		document.addEventListener("scroll", () =>
			window.scrollY > 50 ? setBg(true) : setBg(false)
		);
	});

	return (
		<section
			className={`${bgStyle} fixed w-full left-0 py-8 z-10 transition-all duration-200`}
		>
			<div className='container mx-auto'>
				<div className='flex justify-between items-center'>
					<button onClick={() => scrollToSection('#home')} className="cursor-pointer">
						<img src={Logo} alt='Pegasus Wood Work Products Logo' className='h-12 lg:h-16 object-contain' />
					</button>
					<div
						onClick={() => setMobileNav(!mobileNav)}
						className='text-2xl text-white md:hidden lg:text-3xl cursor-pointer'
					>
						{mobileNavMenu}
					</div>
					{/* Nav Desktop + Tablet */}
					<nav className='hidden md:flex'>
						<ul className='flex md:gap-x-12'>{navItems}</ul>
					</nav>
					{/* Nav Mobile */}
					<section
						className={`${mobileNavMenuStyle} md:hidden fixed bottom-0 w-full max-w-xs h-screen transition-all`}
					>
						<NavMobile onNavClick={scrollToSection} activeSection={activeSection} />
					</section>
				</div>
			</div>
		</section>
	);
};

export default Header;

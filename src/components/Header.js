import React, { useEffect, useRef, useState } from "react";
import { CgMenuRight, CgClose } from "react-icons/cg";
import { IoIosArrowDown, IoIosArrowRoundForward } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { categories, productsIn } from "../products";
import { navigation } from "../data";
import Mark from "../assets/brand/mark.png";
import company from "../company";
import NavMobile from "./NavMobile";
import ThemeToggle from "./ThemeToggle";

const HEADER_HEIGHT = 80;

const ProductsMenu = ({ isActive }) => {
	const [open, setOpen] = useState(false);
	const ref = useRef(null);
	const location = useLocation();

	useEffect(() => setOpen(false), [location.pathname, location.search]);

	useEffect(() => {
		if (!open) return;
		const onClick = (e) => ref.current && !ref.current.contains(e.target) && setOpen(false);
		const onKey = (e) => e.key === "Escape" && setOpen(false);
		document.addEventListener("mousedown", onClick);
		document.addEventListener("keydown", onKey);
		return () => {
			document.removeEventListener("mousedown", onClick);
			document.removeEventListener("keydown", onKey);
		};
	}, [open]);

	return (
		<li ref={ref} className='relative'>
			<button
				onClick={() => setOpen(!open)}
				aria-expanded={open}
				aria-haspopup='true'
				className={`flex items-center gap-x-1 font-display uppercase tracking-wider text-[15px] font-medium transition-colors pb-1 border-b-2 ${
					isActive || open ? "text-accent border-brand" : "text-ink border-transparent hover:text-accent"
				}`}
			>
				products
				<IoIosArrowDown className={`transition-transform ${open ? "rotate-180" : ""}`} />
			</button>

			<div
				className={`absolute left-1/2 -translate-x-1/2 top-full pt-5 w-[640px] transition-all duration-200 ${
					open ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2 pointer-events-none"
				}`}
			>
				<div className='bg-surface rounded-md border border-line shadow-[0_16px_40px_rgba(26,43,44,0.14)] p-3'>
					<ul className='grid grid-cols-2 gap-1'>
						{categories.map((c) => (
							<li key={c.id}>
								<Link
									to={`/products?category=${c.id}`}
									className='group/item block rounded px-4 py-3 hover:bg-brand-tint transition-colors'
								>
									<span className='flex items-baseline justify-between gap-x-3'>
										<span className='font-display text-base font-semibold uppercase tracking-wider text-ink group-hover/item:text-accent'>
											{c.name}
										</span>
										<span className='text-xs text-ink-soft'>{productsIn(c.id).length}</span>
									</span>
									<span className='mt-0.5 block text-sm text-ink-soft'>{c.blurb}</span>
								</Link>
							</li>
						))}
						<li>
							<Link
								to='/products'
								className='flex h-full items-center gap-x-1 rounded px-4 py-3 bg-brand-tint font-display text-base font-semibold uppercase tracking-wider text-accent hover:bg-accent hover:text-white transition-colors'
							>
								View all products <IoIosArrowRoundForward className='text-2xl' />
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</li>
	);
};

export const Wordmark = ({ light = false }) => (
	<span className='flex items-center gap-x-3'>
		<img src={Mark} alt='' className='h-10 w-10 lg:h-12 lg:w-12 object-contain' />
		<span className='flex flex-col leading-none text-left'>
			<span
				className={`font-display font-semibold uppercase tracking-wider text-xl lg:text-2xl ${
					light ? "text-white" : "text-brand"
				}`}
			>
				{company.name}
			</span>
			<span className={`text-xs mt-1 ${light ? "text-white/70" : "text-ink-soft"}`}>
				Since {company.since}
			</span>
		</span>
	</span>
);

const Header = () => {
	const [scrolled, setScrolled] = useState(false);
	const [mobileNav, setMobileNav] = useState(false);
	const [activeSection, setActiveSection] = useState("home");
	const location = useLocation();
	const navigate = useNavigate();

	const scrollToSection = (sectionId) => {
		setMobileNav(false);
		if (location.pathname !== "/") {
			navigate("/" + sectionId);
			return;
		}
		const element = document.querySelector(sectionId);
		if (element) {
			window.scrollTo({ top: element.offsetTop - HEADER_HEIGHT, behavior: "smooth" });
		}
	};

	useEffect(() => {
		const sections = navigation.map((item) => item.href.replace("#", ""));
		const handleScroll = () => {
			setScrolled(window.scrollY > 10);
			const scrollPosition = window.scrollY + HEADER_HEIGHT + 50;
			for (const section of sections) {
				const element = document.getElementById(section);
				if (
					element &&
					scrollPosition >= element.offsetTop &&
					scrollPosition < element.offsetTop + element.offsetHeight
				) {
					setActiveSection(section);
					break;
				}
			}
		};
		handleScroll();
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const current = location.pathname === "/" ? activeSection : location.pathname.startsWith("/product") ? "products" : null;
	const navItems = navigation.map((item) => {
		const isActive = current === item.href.replace("#", "");
		if (item.name === "products") return <ProductsMenu key={item.href} isActive={isActive} />;
		return (
			<li key={item.href}>
				<button
					onClick={() => scrollToSection(item.href)}
					className={`font-display uppercase tracking-wider text-[15px] font-medium transition-colors pb-1 border-b-2 ${
						isActive
							? "text-accent border-brand"
							: "text-ink border-transparent hover:text-accent"
					}`}
				>
					{item.name}
				</button>
			</li>
		);
	});

	return (
		<header
			className={`fixed top-0 left-0 w-full z-30 bg-surface transition-shadow ${
				scrolled ? "shadow-[0_1px_0_rgb(var(--c-line)),0_4px_16px_rgba(0,0,0,0.06)]" : ""
			}`}
		>
			<div className='container mx-auto h-20 flex items-center justify-between'>
				<button onClick={() => scrollToSection("#home")} aria-label={`${company.name} home`}>
					<Wordmark />
				</button>

				<nav className='hidden lg:flex items-center gap-x-8'>
					<ul className='flex gap-x-8'>{navItems}</ul>
					<ThemeToggle />
					<button
						onClick={() => scrollToSection("#contact")}
						className='bg-accent hover:bg-accent-hover text-white font-display uppercase tracking-wider text-[15px] font-semibold px-5 py-2.5 rounded transition-colors'
					>
						Request a Quote
					</button>
				</nav>

				<div className='flex items-center gap-x-3 lg:hidden'>
				<ThemeToggle />
				<button
					onClick={() => setMobileNav(!mobileNav)}
					className='text-3xl text-ink'
					aria-label={mobileNav ? "Close menu" : "Open menu"}
				>
					{mobileNav ? <CgClose /> : <CgMenuRight />}
				</button>
				</div>
			</div>

			{/* Nav Mobile */}
			<div
				className={`${
					mobileNav ? "left-0" : "-left-full"
				} lg:hidden fixed top-20 bottom-0 w-full max-w-xs transition-all`}
			>
				<NavMobile onNavClick={scrollToSection} onLinkClick={() => setMobileNav(false)} activeSection={current} />
			</div>
		</header>
	);
};

export default Header;

import React from "react";
import { FaFacebookF, FaInstagram, FaTelegramPlane, FaTiktok } from "react-icons/fa";
import { Wordmark } from "./Header";
import company from "../company";
import { navigation } from "../data";

const socialIcons = {
	facebook: <FaFacebookF />,
	instagram: <FaInstagram />,
	telegram: <FaTelegramPlane />,
	tiktok: <FaTiktok />,
};

const Footer = () => {
	const socials = Object.entries(company.social).filter(([, url]) => url);
	const year = new Date().getFullYear();

	return (
		<footer className='bg-deep text-white/80'>
			<div className='container mx-auto py-14 grid gap-10 md:grid-cols-3'>
				<div>
					<Wordmark light />
					<p className='mt-5 max-w-xs text-sm leading-relaxed'>
						Importer and distributor of office and commercial furniture in Ethiopia
						since 2014.
					</p>
				</div>

				<div>
					<h3 className='text-white text-lg font-semibold mb-4'>Explore</h3>
					<ul className='space-y-2 text-sm'>
						{navigation.map((item) => (
							<li key={item.href}>
								<a href={"/" + item.href} className='capitalize hover:text-brand transition-colors'>
									{item.name}
								</a>
							</li>
						))}
					</ul>
				</div>

				<div>
					<h3 className='text-white text-lg font-semibold mb-4'>Contact</h3>
					<ul className='space-y-2 text-sm'>
						<li>
							<a href={`tel:${company.phone.replace(/\s/g, "")}`} className='hover:text-brand'>
								{company.phone}
							</a>
						</li>
						<li>
							<a href={`mailto:${company.email}`} className='hover:text-brand'>
								{company.email}
							</a>
						</li>
						<li>{company.address}</li>
					</ul>
					{socials.length > 0 && (
						<div className='flex gap-x-3 mt-5'>
							{socials.map(([key, url]) => (
								<a
									key={key}
									href={url}
									target='_blank'
									rel='noreferrer'
									aria-label={key}
									className='w-10 h-10 rounded-full bg-white/10 hover:bg-accent flex items-center justify-center transition-colors'
								>
									{socialIcons[key]}
								</a>
							))}
						</div>
					)}
				</div>
			</div>
			<div className='container mx-auto overflow-hidden select-none' aria-hidden='true'>
				<p className='font-display font-bold uppercase leading-[0.8] tracking-tight text-[19vw] xl:text-[248px] text-outline whitespace-nowrap -mb-[3vw] xl:-mb-10 opacity-60'>
					Sol Shalom
				</p>
			</div>
			<div className='relative border-t border-white/10 bg-deep'>
				<div className='container mx-auto py-5 text-xs text-white/60'>
					&copy; {year} {company.name}. All rights reserved.
				</div>
			</div>
		</footer>
	);
};

export default Footer;

// Site copy for Sol Shalom Trading. Products live in products.js, business details in company.js.
import { products, categories } from "./products";
import company from "./company";

export const navigation = [
	{ name: "home", href: "#home" },
	{ name: "products", href: "#products" },
	{ name: "about", href: "#about" },
	{ name: "why us", href: "#why-us" },
	{ name: "contact", href: "#contact" },
];

export const hero = {
	eyebrow: `Office furniture · Since ${company.since}`,
	title: "Office furniture built for long working days",
	subtitle:
		"Ergonomic chairs, managerial desks, conference tables and storage. Imported, checked and supplied by Sol Shalom Trading.",
	image: "/products/q8-1.jpg",
	featured: "q8",
};

export const stats = [
	{ value: `${new Date().getFullYear() - company.since}+`, label: "Years supplying offices" },
	{ value: `${Math.floor(products.length / 10) * 10}+`, label: "Furniture models" },
	{ value: String(categories.length), label: "Product categories" },
];

// TODO(client): confirm or replace the vision and mission wording.
export const about = {
	title: "Peace of mind for every workplace",
	intro:
		"Shalom means peace. Since 2014, Sol Shalom Trading has supplied offices, banks, schools and businesses with furniture that people can sit at, work at and rely on every day. That is the peace we try to bring to a workplace.",
	body:
		"We import our chairs, desks, conference tables and storage from trusted manufacturers and check every model before it reaches our customers. You can furnish one desk or a full floor from a single supplier, with clear model codes and specifications so you know exactly what you are ordering.",
	vision: {
		title: "Our vision",
		text: "To be the office furniture supplier that businesses trust first: known for comfort, durability and honest service.",
	},
	mission: {
		title: "Our mission",
		text: "To make well-built, ergonomic office furniture easy to choose and fairly priced, and to stand behind every piece we supply.",
	},
	image: "/products/yc48-1.jpg",
	imageAlt: "Conference table with mesh chairs in a meeting room",
};

export const whyUs = {
	title: "Why choose Sol Shalom",
	subtitle: "What customers get when they furnish their office with us.",
	items: [
		{
			icon: "quality",
			title: "Built to last",
			text: "High-pressure laminate desks, steel frames and tested chair mechanisms. Every model is chosen for daily use.",
		},
		{
			icon: "ergonomic",
			title: "Ergonomics you can feel",
			text: "Adjustable lumbar support, synchronised tilt and breathable mesh help people stay comfortable through the day.",
		},
		{
			icon: "range",
			title: "One supplier, whole office",
			text: "Executive and staff chairs, desks, conference tables, workstations, storage and sofas from a single order.",
		},
		{
			icon: "service",
			title: "Straight answers, fast",
			text: "Send a model code on WhatsApp or by phone and get price and availability, plus help choosing the right piece.",
		},
	],
};

export const steps = {
	title: "How to order",
	items: [
		{ title: "Browse", text: "Find the furniture you need and note its model code." },
		{ title: "Ask", text: "Send the code and quantity on WhatsApp, by phone or through the form." },
		{ title: "Confirm", text: "We reply with price and availability and help with any questions." },
		{ title: "Receive", text: "We arrange delivery to your office at a time that suits you." },
	],
};

// TODO(client): replace with real team and workshop/showroom photos.
export const gallery = {
	title: "Inside Sol Shalom",
	subtitle: "A look at the furniture we supply, set up and ready for work.",
	images: [
		{ src: "/products/yc48-1.jpg", alt: "Conference table set up with mesh chairs" },
		{ src: "/products/gt-240-120-1.jpg", alt: "Four-person partition workstation" },
		{ src: "/products/sofa7-1.jpg", alt: "Leather office sofa set" },
		{ src: "/products/mt-200-1.jpg", alt: "Managerial desk with storage cabinet" },
		{ src: "/products/pt-240-1.jpg", alt: "L-shape workstation with partitions" },
	],
};

export const contact = {
	title: "Get in touch",
	subtitle:
		"Tell us what you need: a single chair or a full office. Mention the model codes if you have them and we will reply with price and availability.",
	hours: [
		["Monday – Friday", "8:30 AM – 5:30 PM"], // TBD
		["Saturday", "8:30 AM – 12:30 PM"], // TBD
		["Sunday", "Closed"],
	],
};

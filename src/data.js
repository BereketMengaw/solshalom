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
	title: "Creating Better Workspaces.",
	tagline: "Quality Office Furniture Designed for Comfort, Productivity & Performance.",
	subtitle:
		"From manufacturing and importing to delivery and installation, Sol Shalom provides complete office furniture solutions for businesses, NGOs, government institutions and organizations across Ethiopia.",
	services: ["Manufacturing", "Importing", "Custom Solutions", "Delivery & Installation", "After-Sales Support"],
};

export const stats = [
	{ value: `${new Date().getFullYear() - company.since}+`, label: "Years supplying offices" },
	{ value: `${Math.floor(products.length / 10) * 10}+`, label: "Furniture models" },
	{ value: String(categories.length), label: "Product categories" },
];

export const about = {
	title: "Furniture Is More Than What You See.",
	lines: ["It is where people work.", "Where ideas become decisions.", "Where teams build businesses."],
	body:
		"At Sol Shalom, we believe the right furniture can create a better working environment—more comfortable, more productive and more professional.",
	closing: "We create furniture for the way Ethiopia works.",
	image: "/products/yc48-1.jpg",
	imageAlt: "Conference table with mesh chairs in a meeting room",
};

export const whyUs = {
	eyebrow: "Why Sol Shalom",
	title: "Why Organizations Choose Sol Shalom",
	items: [
		{ icon: "quality", title: "Quality", text: "Furniture designed and selected for demanding professional environments." },
		{ icon: "capacity", title: "Capacity", text: "Prepared to serve both individual customers and large-volume institutional requirements." },
		{ icon: "customization", title: "Customization", text: "Solutions adapted to your space, requirements and organization." },
		{ icon: "reliability", title: "Reliability", text: "Professional supply, delivery and installation." },
		{ icon: "value", title: "Value", text: "Competitive solutions without compromising functionality and quality." },
		{ icon: "support", title: "After-Sales Support", text: "Our relationship continues after delivery." },
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
		["Monday – Friday", "8:30 AM – 5:30 PM"],
		["Saturday", "8:30 AM – 12:30 PM"],
		["Sunday", "Closed"],
	],
};

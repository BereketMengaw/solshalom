// import icons
import {
	IoLogoYoutube,
	IoLogoFacebook,
	IoLogoInstagram,
	IoMdAddCircle,
	IoIosCheckmarkCircle,
	IoIosArrowRoundForward,
} from "react-icons/io";

// import images
import Product1Img from "./assets/images/products/product-1.png";
import Product2Img from "./assets/images/products/product-2.png";
import Product3Img from "./assets/images/products/product-3.png";
import Product4Img from "./assets/images/products/product-4.png";
import Product5Img from "./assets/images/products/product-5.png";
import Product6Img from "./assets/images/products/product-6.png";
import Product7Img from "./assets/images/products/product-7.png";
import Product8Img from "./assets/images/products/product-8.png";
import Product9Img from "./assets/images/products/product-9.png";
import Product10Img from "./assets/images/products/product-10.png";
import TestimonialImg from "./assets/images/testimonial.png";
import Avatar1Img from "./assets/images/avatar-1.png";
import Avatar2Img from "./assets/images/avatar-2.png";
import Avatar3Img from "./assets/images/avatar-3.png";

// import new Pegasus Wood Work Products images
import PegasusKitchen1 from "./assets/images/kitchen-cabinet-1.jpg";
import PegasusKitchen2 from "./assets/images/kitchen-cabinet-2.jpg";
import PegasusBedroom from "./assets/images/bedroom-set.jpg";
import PegasusDining from "./assets/images/dining-set.jpg";
import PegasusKitchen3 from "./assets/images/kitchen-u-shape.jpg";
import PegasusDoors from "./assets/images/wooden-doors.jpg";
import PegasusEntrance from "./assets/images/entrance-door.jpg";

// import new furniture images
import ModernSofaSet from "./assets/images/modern-sofa-set.jpg";
import LuxuryOfficeDesk from "./assets/images/luxury-office-desk.jpg";
import ElegantCoffeeTable from "./assets/images/elegant-coffee-table.jpg";
import ContemporaryStorageUnit from "./assets/images/contemporary-storage-unit.jpg";
import ModernDiningChair from "./assets/images/modern-dining-chair.jpg";

export const navigation = [
	{
		name: "home",
		href: "#home",
	},
	{
		name: "about",
		href: "#about",
	},
	{
		name: "showcase",
		href: "#showcase",
	},
	{
		name: "products",
		href: "#products",
	},
	{
		name: "contact",
		href: "#contact",
	},
];

export const hero = {
	title: "Transform Your Space with Pegasus Furniture",
	subtitle:
		"At Pegasus Furniture, we blend style, comfort, and durability to make every space unique, functional, and welcoming. From elegant sofas to stylish kitchen cabinets, we deliver world-class quality that embraces local taste and lifestyle.",
	buttonText: "Explore Collection",
	backgroundImage: PegasusKitchen1, // Using the modern kitchen image
};

export const stats = [
	{
		value: "15+",
		text: "Years Experience",
	},
	{
		value: "1",
		text: "Leading Brand in Ethiopia",
	},
	{
		value: "1000+",
		text: "Happy Customers",
	},
	{
		value: "500+",
		text: "Furniture Designs",
	},
];

export const features = {
	image: <PegasusKitchen2 />,
	title: "Quality First - Premium Materials & Craftsmanship",
	subtitle:
		"At Pegasus Furniture, we ensure long-lasting products with premium materials. Every piece combines traditional craftsmanship with modern design trends to create furniture that stands the test of time.",
	buttonText: "Learn More",
	items: [
		{
			icon: <IoIosCheckmarkCircle />,
			title: "Custom Design Services",
			subtitle:
				"Personalized furniture solutions tailored to your lifestyle and space requirements, ensuring perfect fit and functionality.",
		},
		{
			icon: <IoIosCheckmarkCircle />,
			title: "Eco-Friendly Practices",
			subtitle:
				"Sustainability is at the heart of what we do, using eco-friendly materials and practices to protect our environment.",
		},
	],
	feature2: {
		image: <PegasusBedroom />,
		title: "Ethiopia's Leading Furniture Brand",
		subtitle:
			"Pegasus Furniture specializes in custom-designed and ready-made furniture for homes, offices, and commercial spaces. From elegant sofas and dining sets to stylish kitchen cabinets and workstations, we deliver products that combine creativity, craftsmanship, and comfort.",
	},
};

export const newInStore = {
	title: "New In Store Now",
	subtitle: "Get the latest items immediately with promo prices",
	link: "Check all",
	icon: <IoIosArrowRoundForward />,
	products: [
		{
			name: "Master Bedroom Collection",
			image: <PegasusKitchen3 />,
		},
		{
			name: "Artisan Wooden Doors",
			image: <PegasusBedroom />,
		},
		{
			name: "Modern Kitchen Suite",
			image: <PegasusDining />,
		},
		{
			name: "Premium Kitchen Design",
			image: <PegasusDoors />,
		},
		{
			name: "Child Bedroom Setup",
			image: <ModernSofaSet />,
		},
		{
			name: "Home Shelf",
			image: <LuxuryOfficeDesk />,
		},
		{
			name: "TV Setup",
			image: <ElegantCoffeeTable />,
		},
	],
};

export const products = {
	title: "All Products",
	subtitle:
		"The products we provide only for you as our service are selected from the best products with number 1 quality in the world",
	pages: [
		{
			productList: [
				{
					image: <PegasusEntrance />,
					icon: <IoMdAddCircle />,
					name: "Grand Entrance Door",
					price: 120000,
					oldPrice: 135000,
				},
			{
				image: <PegasusKitchen1 />,
				icon: <IoMdAddCircle />,
				name: "Elegant Dining Collection",
				price: 45000,
				oldPrice: 52000,
			},
			{
				image: <PegasusBedroom />,
				icon: <IoMdAddCircle />,
				name: "Artisan Wooden Doors",
				price: 85000,
				oldPrice: 95000,
			},
			{
				image: <PegasusDining />,
				icon: <IoMdAddCircle />,
				name: "Modern Kitchen Suite",
				price: 65000,
				oldPrice: 75000,
			},
			{
				image: <PegasusDoors />,
				icon: <IoMdAddCircle />,
				name: "Premium Kitchen Design",
				price: 35000,
				oldPrice: 42000,
			},
			{
				image: <PegasusKitchen2 />,
				icon: <IoMdAddCircle />,
				name: "Luxury Bookshelf Collection",
				price: 78000,
				oldPrice: 88000,
			},
			{
				image: <PegasusKitchen3 />,
				icon: <IoMdAddCircle />,
				name: "Master Bedroom Collection",
				price: 95000,
				oldPrice: 110000,
			},
			{
				image: <ModernSofaSet />,
				icon: <IoMdAddCircle />,
				name: "Child Bedroom Setup",
				price: 85000,
				oldPrice: 95000,
			},
			{
				image: <LuxuryOfficeDesk />,
				icon: <IoMdAddCircle />,
				name: "Home Shelf",
				price: 65000,
				oldPrice: 75000,
			},
			{
				image: <ElegantCoffeeTable />,
				icon: <IoMdAddCircle />,
				name: "TV Setup",
				price: 35000,
				oldPrice: 42000,
			},
			{
				image: <ContemporaryStorageUnit />,
				icon: <IoMdAddCircle />,
				name: "Contemporary Storage Unit",
				price: 45000,
				oldPrice: 52000,
			},
			{
				image: <ModernDiningChair />,
				icon: <IoMdAddCircle />,
				name: "Modern Dining Chair",
				price: 25000,
				oldPrice: 30000,
			},
			],
		},
		{
			productList: [
				{
					image: <Product7Img />,
					icon: <IoMdAddCircle />,
					name: "XORA corner desk",
					price: 320,
					oldPrice: 325,
				},
				{
					image: <Product8Img />,
					icon: <IoMdAddCircle />,
					name: "Black Forest Series Wood",
					price: 225,
					oldPrice: 240,
				},
				{
					image: <Product9Img />,
					icon: <IoMdAddCircle />,
					name: "Papper Cupboard",
					price: 105,
					oldPrice: 120,
				},
				{
					image: <Product10Img />,
					icon: <IoMdAddCircle />,
					name: "Ole Gundorse Spring",
					price: 75,
					oldPrice: 82,
				},
				{
					image: <Product1Img />,
					icon: <IoMdAddCircle />,
					name: "Ceiling Light",
					price: 75,
					oldPrice: 82,
				},
				{
					image: <Product2Img />,
					icon: <IoMdAddCircle />,
					name: "Wood Chair",
					price: 50,
					oldPrice: 70,
				},
				{
					image: <Product3Img />,
					icon: <IoMdAddCircle />,
					name: "Paper Cupboard",
					price: 105,
					oldPrice: 120,
				},
				{
					image: <Product4Img />,
					icon: <IoMdAddCircle />,
					name: "Ole Gundorse Spring",
					price: 75,
					oldPrice: 82,
				},
				{
					image: <Product5Img />,
					icon: <IoMdAddCircle />,
					name: "Treos Seroes 911",
					price: 200,
					oldPrice: 210,
				},
				{
					image: <Product6Img />,
					icon: <IoMdAddCircle />,
					name: "Multi bilderman slibber",
					price: 45,
					oldPrice: 50,
				},
			],
		},
	],
};

export const testimonial = {
	title: "What our customers say about Pegasus Furniture",
	image: <TestimonialImg />,
	persons: [
		{
			avatar: <Avatar1Img />,
			name: "Abebe Kebede",
			occupation: "Homeowner, Addis Ababa",
			message:
				"Pegasus Furniture transformed our living room with their elegant sofa design. The quality and craftsmanship exceeded our expectations. Highly recommended!",
		},
		{
			avatar: <Avatar2Img />,
			name: "Sara Haile",
			occupation: "Office Manager, Bole",
			message:
				"We furnished our entire office with Pegasus Furniture. Their custom workstations are both beautiful and functional. Professional service throughout!",
		},
		{
			avatar: <Avatar3Img />,
			name: "Michael Tesfaye",
			occupation: "Restaurant Owner, Kazanchis",
			message:
				"The dining sets we ordered from Pegasus Furniture are stunning. They perfectly capture the modern Ethiopian aesthetic while maintaining international quality standards.",
		},
	],
};

export const newsletter = {
	title: "Stay Updated with Our Latest Collections",
	subtitle: "Join our mailing list for exclusive offers and new arrivals",
	placeholder: "Your email address",
	buttonText: "Subscribe",
	backgroundImage: PegasusDining, // Using the dining set image
};

export const footer = {
	social: [
		{
			icon: <IoLogoFacebook />,
			href: "https://www.facebook.com/share/19RoGrxjoZ/?mibextid=wwXIfr",
		},
		{
			icon: <IoLogoInstagram />,
			href: "https://www.instagram.com/pegasus_furniture_ethiopia?igsh=ODRjYzYycTlwbzIz&utm_source=qr",
		},
		{
			icon: <IoLogoYoutube />,
			href: "https://www.tiktok.com/@pegasus.wood.work?_t=ZM-8zJYdGQDcuO&_r=1",
		},
	],
	copyright: "Pegasus Furniture 2024 - All Rights Reserved. | Addis Ababa, Ethiopia",
};

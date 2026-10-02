import React from "react";
import { useNavigate } from "react-router-dom";
import PegasusKitchen1 from "../assets/images/kitchen-cabinet-1.jpg";
import PegasusBedroom from "../assets/images/bedroom-set.jpg";
import PegasusDining from "../assets/images/dining-set.jpg";
import PegasusKitchen3 from "../assets/images/kitchen-u-shape.jpg";
import PegasusDoors from "../assets/images/wooden-doors.jpg";
import PegasusEntrance from "../assets/images/entrance-door.jpg";
import ModernSofaSet from "../assets/images/modern-sofa-set.jpg";
import LuxuryOfficeDesk from "../assets/images/luxury-office-desk.jpg";
import ElegantCoffeeTable from "../assets/images/elegant-coffee-table.jpg";

const PegasusShowcase = () => {
	const navigate = useNavigate();
	
	const showcaseItems = [
		{
			id: "elegant-dining-collection",
			image: PegasusKitchen1,
			title: "Elegant Dining Collection",
			description: "Beautiful dining sets perfect for family gatherings and entertaining guests.",
			category: "Dining"
		},
		{
			id: "artisan-wooden-doors",
			image: PegasusBedroom,
			title: "Artisan Wooden Doors",
			description: "Handcrafted doors with unique designs and premium wood finishes.",
			category: "Doors"
		},
		{
			id: "modern-kitchen-suite",
			image: PegasusDining,
			title: "Modern Kitchen Suite",
			description: "Contemporary kitchen designs with premium materials and innovative storage solutions.",
			category: "Kitchen"
		},
		{
			id: "premium-kitchen-design",
			image: PegasusDoors,
			title: "Premium Kitchen Design",
			description: "Contemporary kitchen designs with premium materials and innovative storage solutions.",
			category: "Kitchen"
		},
		{
			id: "grand-entrance-solutions",
			image: PegasusEntrance,
			title: "Grand Entrance Solutions",
			description: "Stunning entrance doors that make a lasting first impression.",
			category: "Entrance"
		},
		{
			id: "master-bedroom-collection",
			image: PegasusKitchen3,
			title: "Master Bedroom Collection",
			description: "Elegant bedroom sets combining comfort, style, and superior craftsmanship.",
			category: "Bedroom"
		},
		{
			id: "child-bedroom-setup",
			image: ModernSofaSet,
			title: "Child Bedroom Setup",
			description: "Complete bedroom furniture set designed specifically for children, combining safety, functionality, and playful design.",
			category: "Bedroom"
		},
		{
			id: "home-shelf",
			image: LuxuryOfficeDesk,
			title: "Home Shelf",
			description: "Versatile shelving solutions perfect for organizing and displaying items throughout your home.",
			category: "Storage"
		},
		{
			id: "tv-setup",
			image: ElegantCoffeeTable,
			title: "TV Setup",
			description: "Modern TV stand and entertainment center designed to complement your living space.",
			category: "Living Room"
		}
	];

	return (
		<section id="showcase" className="section bg-gray-50">
			<div className="container mx-auto">
				<div className="text-center mb-16">
					<h2 className="h2 mb-4">Pegasus Wood Work Products</h2>
					<p className="text-lg text-gray-600 max-w-3xl mx-auto">
						Discover our signature collection of handcrafted furniture pieces. Each item is designed 
						with precision, crafted with care, and finished with excellence to transform your living spaces.
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{showcaseItems.map((item, index) => (
						<div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
							<div className="relative h-64 overflow-hidden">
								<img 
									src={item.image} 
									alt={item.title}
									className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
								/>
								<div className="absolute top-4 left-4">
									<span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">
										{item.category}
									</span>
								</div>
							</div>
							<div className="p-6">
								<h3 className="text-xl font-semibold text-gray-800 mb-3">
									{item.title}
								</h3>
								<p className="text-gray-600 mb-4">
									{item.description}
								</p>
						<button 
							onClick={() => navigate(`/product/${item.id}`)}
							className="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors duration-200"
						>
							View Details
						</button>
							</div>
						</div>
					))}
				</div>

				<div className="text-center mt-12">
					<div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
						<h3 className="h3 mb-4">Why Choose Pegasus Wood Work Products?</h3>
						<div className="grid md:grid-cols-3 gap-6">
							<div className="text-center">
								<div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
									<span className="text-2xl">🏆</span>
								</div>
								<h4 className="font-semibold text-gray-800 mb-2">Premium Quality</h4>
								<p className="text-gray-600 text-sm">Only the finest materials and craftsmanship</p>
							</div>
							<div className="text-center">
								<div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
									<span className="text-2xl">🎨</span>
								</div>
								<h4 className="font-semibold text-gray-800 mb-2">Custom Design</h4>
								<p className="text-gray-600 text-sm">Personalized solutions for your unique space</p>
							</div>
							<div className="text-center">
								<div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
									<span className="text-2xl">🌟</span>
								</div>
								<h4 className="font-semibold text-gray-800 mb-2">Ethiopian Craftsmanship</h4>
								<p className="text-gray-600 text-sm">Local expertise with international standards</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PegasusShowcase; 
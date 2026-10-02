import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import PhotoKitchen1 from "../assets/images/kitchen-cabinet-1.jpg";
import PhotoBedroom from "../assets/images/bedroom-set.jpg";
import PhotoDining from "../assets/images/dining-set.jpg";
import PhotoKitchen3 from "../assets/images/kitchen-u-shape.jpg";
import PhotoDoors from "../assets/images/wooden-doors.jpg";
import PhotoEntrance from "../assets/images/entrance-door.jpg";
import ModernSofaSet from "../assets/images/modern-sofa-set.jpg";
import LuxuryOfficeDesk from "../assets/images/luxury-office-desk.jpg";
import ElegantCoffeeTable from "../assets/images/elegant-coffee-table.jpg";

const ProductDetails = () => {
	const { productId } = useParams();
	const navigate = useNavigate();

	// Product data - in a real app, this would come from an API or database
	const products = {
		"elegant-dining-collection": {
			id: "elegant-dining-collection",
			title: "Elegant Dining Collection",
			category: "Dining",
			image: PhotoKitchen1,
			description: "Beautiful dining sets perfect for family gatherings and entertaining guests. Our elegant dining collection combines timeless design with modern functionality, creating the perfect centerpiece for your dining room.",
			fullDescription: "Transform your dining experience with our Elegant Dining Collection. Each piece is carefully crafted using premium materials and traditional woodworking techniques. The collection features sturdy construction, beautiful finishes, and designs that complement any home decor style. Perfect for family dinners, entertaining guests, or creating memorable moments around the table.",
			features: [
				"Premium hardwood construction",
				"Hand-finished with natural wood stain",
				"Seats up to 6 people comfortably",
				"Easy-to-clean surfaces",
				"5-year warranty included"
			],
			price: 45000,
			oldPrice: 52000,
			specifications: {
				"Table Dimensions": "180cm x 90cm x 75cm",
				"Chair Dimensions": "45cm x 45cm x 85cm",
				"Material": "Solid Oak Wood",
				"Finish": "Natural Wood Stain",
				"Assembly": "Professional assembly included"
			}
		},
		"artisan-wooden-doors": {
			id: "artisan-wooden-doors",
			title: "Artisan Wooden Doors",
			category: "Doors",
			image: PhotoBedroom,
			description: "Handcrafted doors with unique designs and premium wood finishes. Each door is a work of art, combining traditional craftsmanship with contemporary design.",
			fullDescription: "Our Artisan Wooden Doors represent the pinnacle of Ethiopian woodworking craftsmanship. Each door is individually crafted by skilled artisans using traditional techniques passed down through generations. These doors not only provide security and privacy but also serve as stunning architectural features that enhance the beauty of your home.",
			features: [
				"Hand-carved intricate designs",
				"Premium hardwood construction",
				"Custom sizing available",
				"Multiple finish options",
				"Lifetime warranty"
			],
			price: 85000,
			oldPrice: 95000,
			specifications: {
				"Standard Size": "210cm x 90cm",
				"Material": "Solid Teak Wood",
				"Finish": "Hand-polished natural finish",
				"Hardware": "Premium brass handles included",
				"Customization": "Available upon request"
			}
		},
		"modern-kitchen-suite": {
			id: "modern-kitchen-suite",
			title: "Modern Kitchen Suite",
			category: "Kitchen",
			image: PhotoDining,
			description: "Contemporary kitchen designs with premium materials and innovative storage solutions. Create the kitchen of your dreams with our modern suite.",
			fullDescription: "Our Modern Kitchen Suite combines sleek contemporary design with practical functionality. Featuring innovative storage solutions, premium materials, and cutting-edge design elements, this kitchen suite will transform your cooking space into a modern culinary haven.",
			features: [
				"Soft-close cabinet doors",
				"Pull-out storage systems",
				"LED under-cabinet lighting",
				"Quartz countertops",
				"10-year warranty"
			],
			price: 65000,
			oldPrice: 75000,
			specifications: {
				"Style": "Modern Contemporary",
				"Material": "High-grade MDF with wood veneer",
				"Countertop": "Premium Quartz",
				"Hardware": "Soft-close hinges and drawer slides",
				"Installation": "Professional installation included"
			}
		},
		"premium-kitchen-design": {
			id: "premium-kitchen-design",
			title: "Premium Kitchen Design",
			category: "Kitchen",
			image: PhotoDoors,
			description: "Contemporary kitchen designs with premium materials and innovative storage solutions. Experience luxury in every detail.",
			fullDescription: "Our Premium Kitchen Design represents the ultimate in luxury kitchen furniture. Every element has been carefully selected and crafted to provide both exceptional beauty and superior functionality. This is kitchen design at its finest.",
			features: [
				"Luxury hardware finishes",
				"Custom storage solutions",
				"Premium wood species",
				"Professional design consultation",
				"Lifetime warranty"
			],
			price: 35000,
			oldPrice: 42000,
			specifications: {
				"Design Style": "Luxury Contemporary",
				"Material": "Solid Wood Construction",
				"Finish": "Hand-applied premium stain",
				"Hardware": "European-style soft-close",
				"Customization": "Fully customizable design"
			}
		},
		"grand-entrance-solutions": {
			id: "grand-entrance-solutions",
			title: "Grand Entrance Solutions",
			category: "Entrance",
			image: PhotoEntrance,
			description: "Stunning entrance doors that make a lasting first impression. Welcome guests with style and elegance.",
			fullDescription: "Make a grand entrance with our stunning entrance door solutions. These doors are designed to create a powerful first impression while providing security and durability. Each door is crafted with attention to detail and finished to perfection.",
			features: [
				"Reinforced security features",
				"Multiple design options",
				"Premium materials",
				"Professional installation",
				"Security warranty"
			],
			price: 120000,
			oldPrice: 135000,
			specifications: {
				"Door Type": "Security Grade Entrance Door",
				"Material": "Solid Wood with Metal Reinforcement",
				"Lock System": "Multi-point locking system",
				"Finish": "Weather-resistant coating",
				"Installation": "Professional installation required"
			}
		},
		"master-bedroom-collection": {
			id: "master-bedroom-collection",
			title: "Master Bedroom Collection",
			category: "Bedroom",
			image: PhotoKitchen3,
			description: "Elegant bedroom sets combining comfort, style, and superior craftsmanship. Create your perfect sanctuary.",
			fullDescription: "Transform your bedroom into a luxurious sanctuary with our Master Bedroom Collection. Every piece is designed with comfort and style in mind, featuring premium materials and expert craftsmanship that ensures years of enjoyment.",
			features: [
				"Premium mattress support",
				"Soft-close drawer systems",
				"LED bedside lighting",
				"Premium fabric upholstery",
				"7-year warranty"
			],
			price: 95000,
			oldPrice: 110000,
			specifications: {
				"Bed Size": "King Size (200cm x 200cm)",
				"Material": "Solid Wood Frame",
				"Upholstery": "Premium Fabric",
				"Storage": "Under-bed storage drawers",
				"Assembly": "Professional assembly included"
			}
		},
		"child-bedroom-setup": {
			id: "child-bedroom-setup",
			title: "Child Bedroom Setup",
			category: "Bedroom",
			image: ModernSofaSet,
			description: "Complete bedroom furniture set designed specifically for children, combining safety, functionality, and playful design.",
			fullDescription: "Create the perfect space for your child with our Child Bedroom Setup. This comprehensive furniture collection includes everything needed for a functional and fun bedroom, featuring child-safe materials, rounded edges, and designs that grow with your child.",
			features: [
				"Child-safe materials and finishes",
				"Rounded edges for safety",
				"Adjustable height options",
				"Easy-to-clean surfaces",
				"5-year warranty"
			],
			price: 85000,
			oldPrice: 95000,
			specifications: {
				"Bed Size": "Single Bed (90cm x 190cm)",
				"Material": "Child-Safe Wood with Non-Toxic Finish",
				"Safety Features": "Rounded edges, secure hardware",
				"Storage": "Under-bed drawers and wardrobe",
				"Assembly": "Professional assembly included"
			}
		},
		"home-shelf": {
			id: "home-shelf",
			title: "Home Shelf",
			category: "Storage",
			image: LuxuryOfficeDesk,
			description: "Versatile shelving solutions perfect for organizing and displaying items throughout your home.",
			fullDescription: "Maximize your storage space with our Home Shelf collection. These versatile shelving units are designed to fit seamlessly into any room, providing both functional storage and stylish display options for your home.",
			features: [
				"Modular design options",
				"Adjustable shelf heights",
				"Premium wood construction",
				"Easy assembly",
				"3-year warranty"
			],
			price: 65000,
			oldPrice: 75000,
			specifications: {
				"Shelf Dimensions": "120cm x 30cm x 180cm",
				"Material": "Solid Wood Construction",
				"Finish": "Natural Wood Stain",
				"Shelves": "5 adjustable shelves",
				"Assembly": "Professional assembly included"
			}
		},
		"tv-setup": {
			id: "tv-setup",
			title: "TV Setup",
			category: "Living Room",
			image: ElegantCoffeeTable,
			description: "Modern TV stand and entertainment center designed to complement your living space.",
			fullDescription: "Complete your entertainment area with our TV Setup. This modern entertainment center provides the perfect home for your TV and media devices while maintaining a clean, organized look in your living room.",
			features: [
				"Cable management system",
				"Multiple storage compartments",
				"Modern design",
				"Sturdy construction",
				"3-year warranty"
			],
			price: 35000,
			oldPrice: 42000,
			specifications: {
				"TV Stand Dimensions": "150cm x 40cm x 50cm",
				"Material": "Solid Wood with Metal Legs",
				"Finish": "Modern Wood Finish",
				"Storage": "3 compartments + cable management",
				"Assembly": "Professional assembly included"
			}
		}
	};

	const product = products[productId];

	if (!product) {
		return (
			<div className="min-h-screen bg-gray-50 flex items-center justify-center">
				<div className="text-center">
					<h1 className="text-4xl font-bold text-gray-800 mb-4">Product Not Found</h1>
					<p className="text-gray-600 mb-8">The product you're looking for doesn't exist.</p>
					<button 
						onClick={() => navigate('/')}
						className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
					>
						Back to Home
					</button>
				</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-gray-50">
			{/* Header */}
			<div className="bg-white shadow-sm">
				<div className="container mx-auto px-6 py-4">
					<button 
						onClick={() => navigate('/')}
						className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
					>
						<IoIosArrowBack className="text-xl" />
						Back to Home
					</button>
				</div>
			</div>

			{/* Product Details */}
			<div className="container mx-auto px-6 py-8">
				<div className="grid lg:grid-cols-2 gap-12">
					{/* Product Image */}
					<div className="space-y-4">
						<div className="aspect-square bg-white rounded-lg overflow-hidden shadow-lg">
							<img 
								src={product.image} 
								alt={product.title}
								className="w-full h-full object-cover"
							/>
						</div>
						<div className="flex gap-4">
							<div className="w-20 h-20 bg-white rounded-lg overflow-hidden shadow-md">
								<img 
									src={product.image} 
									alt={product.title}
									className="w-full h-full object-cover"
								/>
							</div>
							<div className="w-20 h-20 bg-white rounded-lg overflow-hidden shadow-md">
								<img 
									src={product.image} 
									alt={product.title}
									className="w-full h-full object-cover"
								/>
							</div>
							<div className="w-20 h-20 bg-white rounded-lg overflow-hidden shadow-md">
								<img 
									src={product.image} 
									alt={product.title}
									className="w-full h-full object-cover"
								/>
							</div>
						</div>
					</div>

					{/* Product Information */}
					<div className="space-y-6">
						<div>
							<span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">
								{product.category}
							</span>
							<h1 className="text-4xl font-bold text-gray-800 mt-4 mb-4">
								{product.title}
							</h1>
							<p className="text-lg text-gray-600 mb-6">
								{product.description}
							</p>
						</div>

						{/* Pricing */}
						<div className="flex items-center gap-4">
							<span className="text-3xl font-bold text-primary">
								{product.price.toLocaleString()} ETB
							</span>
							<span className="text-xl text-gray-500 line-through">
								{product.oldPrice.toLocaleString()} ETB
							</span>
							<span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
								Save {((product.oldPrice - product.price) / product.oldPrice * 100).toFixed(0)}%
							</span>
						</div>

						{/* Features */}
						<div>
							<h3 className="text-xl font-semibold text-gray-800 mb-4">Key Features</h3>
							<ul className="space-y-2">
								{product.features.map((feature, index) => (
									<li key={index} className="flex items-center gap-2">
										<div className="w-2 h-2 bg-primary rounded-full"></div>
										<span className="text-gray-600">{feature}</span>
									</li>
								))}
							</ul>
						</div>

						{/* Action Buttons */}
						<div className="flex gap-4">
							<button className="flex-1 bg-primary text-white py-4 px-6 rounded-lg hover:bg-primary/90 transition-colors font-semibold">
								Add to Cart
							</button>
							<button className="flex-1 border-2 border-primary text-primary py-4 px-6 rounded-lg hover:bg-primary hover:text-white transition-colors font-semibold">
								Contact Us
							</button>
						</div>
					</div>
				</div>

				{/* Additional Information */}
				<div className="mt-16 grid lg:grid-cols-2 gap-12">
					{/* Full Description */}
					<div>
						<h3 className="text-2xl font-semibold text-gray-800 mb-6">Description</h3>
						<p className="text-gray-600 leading-relaxed">
							{product.fullDescription}
						</p>
					</div>

					{/* Specifications */}
					<div>
						<h3 className="text-2xl font-semibold text-gray-800 mb-6">Specifications</h3>
						<div className="space-y-3">
							{Object.entries(product.specifications).map(([key, value]) => (
								<div key={key} className="flex justify-between py-2 border-b border-gray-200">
									<span className="font-medium text-gray-800">{key}</span>
									<span className="text-gray-600">{value}</span>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductDetails;
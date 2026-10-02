import React from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";

const AboutUs = () => {
	const values = [
		{
			title: "Quality First",
			description: "We ensure long-lasting products with premium materials.",
		},
		{
			title: "Customer-Centered",
			description: "Every design is inspired by your lifestyle and needs.",
		},
		{
			title: "Innovation",
			description: "We combine traditional craftsmanship with modern trends.",
		},
		{
			title: "Sustainability",
			description: "Eco-friendly practices are at the heart of what we do.",
		},
		{
			title: "Trust & Integrity",
			description: "We build strong relationships based on honesty and reliability.",
		},
	];

	return (
		<section id="about" className="section bg-gray-50">
			<div className="container mx-auto">
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					<div>
						<h2 className="h2 mb-6">Our Mission</h2>
						<p className="text-lg text-gray-600 mb-8">
							At Pegasus Furniture, our mission is to transform every home and workspace 
							with furniture that blends style, comfort, and durability.
						</p>
						<h3 className="h3 mb-6">Our Values</h3>
						<div className="space-y-4">
							{values.map((value, index) => (
								<div key={index} className="flex items-start gap-3">
									<IoIosCheckmarkCircle className="text-accent text-xl mt-1" />
									<div>
										<h4 className="font-semibold text-gray-800 mb-1">
											{value.title}
										</h4>
										<p className="text-gray-600">{value.description}</p>
									</div>
								</div>
							))}
						</div>
					</div>
					<div>
						<h3 className="h3 mb-4">About Us</h3>
						<p className="text-gray-600 mb-4">
							Pegasus Furniture is one of Ethiopia's leading furniture brands, 
							specializing in custom-designed and ready-made furniture.
						</p>
						<p className="text-gray-600">
							Our commitment is to bring world-class quality while embracing local 
							taste and lifestyle.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutUs; 
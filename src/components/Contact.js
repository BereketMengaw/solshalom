import React from "react";
import company from "../company";

const Contact = () => {
	const contactInfo = [
		{
			icon: "📍",
			label: "Address",
			value: company.address,
		},
		{
			icon: "📞",
			label: "Phone",
			value: company.phone,
		},
		{
			icon: "📧",
			label: "Email",
			value: company.email,
		},
	];

	const socialMedia = [
		{
			name: "Facebook",
			url: company.social.facebook,
			bgColor: "bg-blue-600 hover:bg-blue-700",
		},
		{
			name: "Instagram",
			url: company.social.instagram,
			bgColor: "bg-pink-600 hover:bg-pink-700",
		},
		{
			name: "TikTok",
			url: company.social.tiktok,
			bgColor: "bg-black hover:bg-gray-800",
		},
	];

	return (
		<section id="contact" className="section bg-white">
			<div className="container mx-auto">
				<div className="text-center mb-12">
					<h2 className="h2 mb-4">Get In Touch</h2>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto">
						Ready to transform your space? Contact us today to discuss your furniture needs 
						or visit our showroom in Addis Ababa.
					</p>
				</div>

				<div className="grid lg:grid-cols-2 gap-12">
					{/* Contact Information */}
					<div className="space-y-8">
						<div>
							<h3 className="h3 mb-6">Contact Information</h3>
							<div className="space-y-4">
								{contactInfo.map((info, index) => (
									<div key={index} className="flex items-center gap-4">
										<span className="text-3xl">{info.icon}</span>
										<div>
											<p className="text-sm text-gray-500 uppercase tracking-wide">
												{info.label}
											</p>
											<p className="text-lg font-medium text-gray-800">
												{info.value}
											</p>
										</div>
									</div>
								))}
							</div>
						</div>

						<div>
							<h3 className="h3 mb-6">Business Hours</h3>
							<div className="space-y-2 text-gray-600">
								<p><span className="font-medium">Monday - Friday:</span> 8:00 AM - 6:00 PM</p>
								<p><span className="font-medium">Saturday:</span> 9:00 AM - 4:00 PM</p>
								<p><span className="font-medium">Sunday:</span> Closed</p>
							</div>
						</div>
					</div>

					{/* Social Media & Contact Form */}
					<div className="space-y-8">
						<div>
							<h3 className="h3 mb-6">Follow Us</h3>
							<p className="text-gray-600 mb-4">
								Stay updated with our latest collections, design inspirations, and special offers.
							</p>
							<div className="flex gap-4">
								{socialMedia.map((social, index) => (
									<a
										key={index}
										href={social.url}
										target="_blank"
										rel="noopener noreferrer"
										className={`${social.bgColor} text-white px-6 py-3 rounded-lg transition-colors duration-200`}
									>
										{social.name}
									</a>
								))}
							</div>
						</div>

						<div>
							<h3 className="h3 mb-6">Send us a Message</h3>
							<form className="space-y-4">
								<div className="grid grid-cols-2 gap-4">
									<input
										type="text"
										placeholder="First Name"
										className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
									/>
									<input
										type="text"
										placeholder="Last Name"
										className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
									/>
								</div>
								<input
									type="email"
									placeholder="Email Address"
									className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
								/>
								<textarea
									rows="4"
									placeholder="Your Message"
									className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
								></textarea>
								<button
									type="submit"
									className="w-full bg-accent text-white py-3 px-6 rounded-lg hover:bg-accent/90 transition-colors duration-200"
								>
									Send Message
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact; 
// Single source of truth for Sol Shalom Trading business details.
const company = {
	name: "Sol Shalom Trading",
	shortName: "Sol Shalom",
	since: 2014,
	tagline: "Office furniture since 2014",
	phone: "+251 94 000 2277",
	phones: ["+251 94 000 2277", "+251 92 928 8265", "+251 96 716 1616"],
	whatsapp: "251929288265", // digits only, used for wa.me links
	email: "info@solshalomfurniture.com",
	address: "Lex Plaza, 3rd floor, office 301A, Haile Gebre Silassie St (in front of Zerihun Building), Addis Ababa",
	mapUrl: "https://www.google.com/maps/search/?api=1&query=Lex+Plaza+Haile+Gebre+Silassie+Street+Addis+Ababa",
	social: {
		facebook: "https://www.facebook.com/solshalomfurniture/",
		instagram: "https://www.instagram.com/solshalomfurniture/",
		telegram: "https://t.me/solshalomfurniture",
		tiktok: "https://www.tiktok.com/@sol_shalom_furniture",
	},
};

export const whatsappLink = (message = "") =>
	`https://wa.me/${company.whatsapp}${
		message ? `?text=${encodeURIComponent(message)}` : ""
	}`;

export default company;

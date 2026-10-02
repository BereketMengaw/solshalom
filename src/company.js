// Single source of truth for Sol Shalom Trading business details.
// TODO(client): replace every placeholder marked "TBD" with real details.
const company = {
	name: "Sol Shalom Trading",
	shortName: "Sol Shalom",
	since: 2014,
	tagline: "Office furniture since 2014",
	phone: "+251 900 000 000", // TBD
	whatsapp: "251900000000", // TBD — digits only, used for wa.me links
	email: "info@solshalomtrading.com", // TBD
	address: "Addis Ababa, Ethiopia", // TBD — street / building
	mapUrl: "", // TBD — Google Maps share link
	social: {
		facebook: "", // TBD
		instagram: "", // TBD
		telegram: "", // TBD
		tiktok: "", // TBD
	},
};

export const whatsappLink = (message = "") =>
	`https://wa.me/${company.whatsapp}${
		message ? `?text=${encodeURIComponent(message)}` : ""
	}`;

export default company;

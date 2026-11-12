// Single source of truth for Sol Shalom Trading business details.
const company = {
	name: "Sol Shalom Trading",
	shortName: "Sol Shalom",
	since: 2015,
	tagline: "Office furniture since 2015",
	// Office telephone numbers: `display` is shown, `tel` is used for tel: links.
	phones: [
		{ display: "0966 149 421", tel: "+251966149421" },
		{ display: "0940 002 277", tel: "+251940002277" },
	],
	// WhatsApp and Telegram both use this number.
	messaging: { display: "0940 002 277", intl: "251940002277" },
	email: "solshalomtrading@gmail.com",
	address: "Lex Plaza, Ground floor, Haile Gebre Silassie St (in front of Zerihun Building), Addis Ababa",
	mapUrl: "https://www.google.com/maps/search/?api=1&query=Lex+Plaza+Haile+Gebre+Silassie+Street+Addis+Ababa",
	social: {
		facebook: "https://www.facebook.com/share/1CKs9zXasi/",
		instagram: "https://www.instagram.com/solshalomfurniture/",
		tiktok: "https://www.tiktok.com/@sol_shalom_furniture",
		telegram: "https://t.me/+251940002277",
	},
};

company.phone = company.phones[0];

export const telLink = (phone = company.phone) => `tel:${phone.tel}`;

export const telegramLink = () => company.social.telegram;

export const whatsappLink = (message = "") =>
	`https://wa.me/${company.messaging.intl}${
		message ? `?text=${encodeURIComponent(message)}` : ""
	}`;

export default company;

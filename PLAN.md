# Sol Shalom Trading — build plan

Stack stays: React 18 + React Router + Tailwind (from Pegasus). Most sections get rebuilt, because Pegasus sold home furniture (kitchens, beds) and Sol Shalom imports office furniture.

## Design direction (from research: Herman Miller, Steelcase, Haworth, Humanscale, SAGTCO, Office Plus, Workspace.ae)
- **Colors:** ink `#1A2B2C` · white · card bg `#F4F7F7` · aqua tint `#EEF8F8` for alternate sections · buttons/links teal `#1F7F82` · brand teal `#3FA9AC` for icons, rules and big headings · aqua `#94D4D8` for the decorative blob only (taken from the brand mockups).
- **Type:** Barlow Condensed 600, uppercase, for headings (matches the wordmark). Inter for body text.
- **Cards:** 4:5 photo on `#F4F7F7`, model code above the name, no price, "Ask about this product" button.
- **No** cart, prices, carousels or teal-filled walls. Ten sections at most.

## Slices
Each slice gets its own commit. You review each one before the next starts.

1. **Foundation.** Replace Pegasus with Sol Shalom everywhere; logo in header, footer and favicon; colors and fonts in `tailwind.config.js`; delete old docs and images.
   *Done when* `grep -ri pegasus src public` returns nothing and `npm start` shows the new header and footer.
2. **Product data.** Rebuild `data.js` from `web3.xlsx`: 66 products in 11 categories, each with code, name, features list and photos.
   *Done when* every product has a code and at least one image, and nothing is duplicated.
3. **Catalog.** Category tabs plus a product grid on the homepage, and a `/products` page with a filter.
   *Done when* clicking a category filters the grid on phone and desktop.
4. **Product page.** `/product/:code` with photo gallery, specs list, related items, and "Contact us for this product" (WhatsApp with a prefilled message, plus a call button).
   *Done when* the button opens WhatsApp with that product's code in the message.
5. **Hero and trust strip.** A single hero image with "Request a Quote" and "Browse Catalog" buttons; stats: since 2014, number of products, sectors served.
6. **About and mission.** Rewritten around Sol Shalom's vision.
7. **Why Choose Us** and a **How it works** strip (pick, quote, delivery and setup).
8. **Contact.** Phone, email, address and map, WhatsApp, and a working form (Formspree or Web3Forms free tier). Floating WhatsApp button.
9. **Team / workshop photos** at the end, then deploy (Netlify or Vercel, free tier).
   *Live:* https://solshalom.vercel.app (Vercel, misaletutors-projects team).

## Needed from the client
- Phone, WhatsApp number, email, address/map pin, socials
- Logo as PNG or SVG (otherwise I'll crop it from the mockup image)
- About, mission and vision text, or bullet points for me to write from
- Team or workshop photos; client logos if any
- Years and number of projects for the stats

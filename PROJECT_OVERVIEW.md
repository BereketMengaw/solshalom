# Pegasus Furniture Project Overview

## What this project is
Pegasus Furniture is a React-based website built to showcase furniture products, company branding, and customer contact channels.
It functions as a marketing site with product browsing and a product details page.

## Main purpose
- Promote Pegasus Furniture brand and services
- Display product collections and featured items
- Help visitors contact the business easily
- Provide a responsive experience across devices

## Technology used
- React 18
- React Router
- Tailwind CSS
- React Icons
- Swiper (for sliders)

## Important files
- `src/App.js` - main app layout and routes
- `src/data.js` - website content (hero text, products, testimonials, footer links)
- `src/components/` - page sections and reusable UI components
- `src/components/ProductDetails.js` - dynamic product detail page
- `src/index.js` - app entry point
- `src/index.css` and `tailwind.config.js` - styling setup

## Routing
- `/` -> homepage (hero, features, products, contact, etc.)
- `/product/:productId` -> single product details page

## Core features
- Sticky responsive header with active section tracking
- Smooth scrolling navigation
- Product cards and sliders
- Product details with specs, pricing, and feature list
- Contact section with social links and a message form UI

## Current limitations
- Contact form is UI only (no backend submission)
- Product data is split between `data.js` and `ProductDetails.js`
- "Add to Cart" is presentational only
- Content updates are manual (hardcoded)

## Run locally
1. `npm install`
2. `npm start`
3. Open `http://localhost:3000`

## Suggested next steps
- Centralize all product data in one file/API
- Connect contact form to backend/email service
- Add tests for routing and key components
- Improve accessibility and validation

---
Pegasus Furniture project is a strong frontend foundation and can be extended into a full e-commerce platform in future.

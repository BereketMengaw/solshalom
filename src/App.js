import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Catalog, { CatalogPage } from "./components/Catalog";
import AboutUs from "./components/AboutUs";
import WhyChooseUs from "./components/WhyChooseUs";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import ProductDetails from "./components/ProductDetails";

// Scroll to the top on page change, or to #section when linked from another page.
function ScrollManager() {
	const { pathname, hash, search } = useLocation();
	useEffect(() => {
		if (hash) {
			const el = document.querySelector(hash);
			if (el) {
				window.scrollTo({ top: el.offsetTop - 80 });
				return;
			}
		}
		window.scrollTo({ top: 0 });
	}, [pathname, hash, search]);
	return null;
}

function HomePage() {
	return (
		<main>
			<Hero />
			<Catalog />
			<AboutUs />
			<WhyChooseUs />
			<Gallery />
			<Contact />
		</main>
	);
}

function App() {
	return (
		<Router>
			<ScrollManager />
			<div className='w-full mx-auto bg-white'>
				<Header />
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/products' element={<CatalogPage />} />
					<Route path='/product/:productId' element={<ProductDetails />} />
					<Route path='*' element={<ProductDetails />} />
				</Routes>
				<Footer />
				<BackToTop />
			</div>
		</Router>
	);
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Features from "./components/Features";
import FeaturesSecond from "./components/FeaturesSecond";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import NewItems from "./components/NewItems";
import NewsLetters from "./components/NewsLetters";
import Products from "./components/Products";
import Testimonial from "./components/Testimonial";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import PegasusShowcase from "./components/PegasusShowcase";
import BackToTop from "./components/BackToTop";
import ProductDetails from "./components/ProductDetails";

function HomePage() {
	return (
		<>
			<Hero />
			<Features />
			<AboutUs />
			<PegasusShowcase />
			<NewItems />
			<FeaturesSecond />
			<Products />
			<Testimonial />
			<NewsLetters />
			<Contact />
		</>
	);
}

function App() {
	return (
		<Router>
			<div className='w-full mx-auto bg-white'>
				<Header />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/product/:productId" element={<ProductDetails />} />
				</Routes>
				<Footer />
				<BackToTop />
			</div>
		</Router>
	);
}

export default App;

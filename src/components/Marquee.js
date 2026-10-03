import React from "react";
import Mark from "../assets/brand/mark.png";

const items = [
	"Executive chairs",
	"Managerial desks",
	"Conference tables",
	"Workstations",
	"Guest seating",
	"Shelves & cabinets",
	"Office sofas",
	"Since 2014",
	"Quote on WhatsApp",
];

const Row = ({ hidden }) => (
	<ul className='flex shrink-0 items-center' aria-hidden={hidden || undefined}>
		{items.map((item) => (
			<li key={item} className='flex items-center'>
				<span className='px-6 font-display text-lg sm:text-xl font-semibold uppercase tracking-wider whitespace-nowrap'>
					{item}
				</span>
				<img src={Mark} alt='' className='w-6 h-6 opacity-70 brightness-0 invert' />
			</li>
		))}
	</ul>
);

// Endless strip of what Sol Shalom supplies. Stops for reduced-motion users.
const Marquee = ({ tone = "teal" }) => (
	<div
		className={`marquee overflow-hidden py-4 ${tone === "teal" ? "bg-accent text-white" : "bg-deep text-white"}`}
	>
		<div className='marquee-track flex w-max'>
			<Row />
			<Row hidden />
		</div>
	</div>
);

export default Marquee;

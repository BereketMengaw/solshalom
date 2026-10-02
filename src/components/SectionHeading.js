import React from "react";

const SectionHeading = ({ eyebrow, title, subtitle, center = false, light = false }) => (
	<div className={`mb-10 lg:mb-12 ${center ? "text-center mx-auto" : ""} max-w-2xl`}>
		{eyebrow && (
			<p className={`flex items-center gap-x-3 font-display text-sm font-semibold uppercase tracking-[0.2em] mb-3 ${center ? "justify-center" : ""} ${light ? "text-brand-aqua" : "text-brand"}`}>
				<span className='w-8 h-px bg-current' />
				{eyebrow}
			</p>
		)}
		<h2 className={`text-3xl lg:text-[44px] leading-[1.05] font-semibold ${light ? "text-white" : "text-ink"}`}>
			{title}
		</h2>
		{subtitle && (
			<p className={`mt-4 text-base lg:text-lg ${light ? "text-white/75" : "text-ink-soft"}`}>{subtitle}</p>
		)}
	</div>
);

export default SectionHeading;

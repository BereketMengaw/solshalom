import React from "react";

// import data
import { stats } from "../data";

const Stats = () => {
	return (
		<div className='bg-[var(--primary-color)] p-4 sm:p-6 lg:p-12 rounded-2xl mx-2 sm:mx-4 lg:mx-0'>
			<div className='flex flex-wrap gap-y-4 sm:gap-y-6 lg:gap-y-8'>
				{stats.map((item, index) => (
					<div
						className='min-h-[50px] sm:min-h-[60px] lg:min-h-[70px] w-3/6 flex flex-col justify-center odd:border-r lg:flex-1 lg:even:border-r lg:last:border-none'
						key={index}
					>
						<div className='font-semibold text-lg sm:text-xl lg:text-4xl'>
							{item.value}
						</div>
						<div className='text-xs sm:text-sm lg:text-xl font-light max-w-[110px] mx-auto'>
							{item.text}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Stats;

import React from "react";

// Organic blob from the Sol Shalom brand mockups.
const Blob = ({ className = "" }) => (
	<svg viewBox='0 0 600 560' className={className} aria-hidden='true' preserveAspectRatio='none'>
		<path
			fill='currentColor'
			d='M318 18c92-6 186 34 232 112 44 76 40 178-6 256-46 80-136 140-232 158-98 18-196-12-252-86C6 386-10 284 22 196 54 106 132 34 220 22c33-4 66-2 98-4z'
		/>
	</svg>
);

export default Blob;

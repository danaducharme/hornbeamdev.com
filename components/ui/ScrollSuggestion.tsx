export function ScrollSuggestion() {
	return (
		<div className="flex items-center justify-center w-full pt-10 -mb-10">
			<div className="flex items-center space-x-4">
				<svg
					width="40"
					height="60"
					viewBox="0 0 40 60"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className="text-gray-600"
				>
					{/* Mouse body */}
					<rect
						x="1"
						y="1"
						width="38"
						height="58"
						rx="19"
						stroke="currentColor"
						strokeWidth="2"
					/>

					{/* Scroll wheel */}
					<rect
						x="18"
						y="10"
						width="4"
						height="8"
						rx="2"
						fill="currentColor"
						className="animate-scroll"
					/>
				</svg>
				<p className="text-gray-600 text-lg font-medium">Scroll down</p>
			</div>
			<style jsx>{`
				@keyframes scroll {
					0% {
						transform: translateY(0);
					}
					50% {
						transform: translateY(15px);
					}
					100% {
						transform: translateY(0);
					}
				}

				.animate-scroll {
					animation: scroll 1.5s ease-in-out infinite;
				}
			`}</style>
		</div>
	)
}

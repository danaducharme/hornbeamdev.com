'use client';

import { Menu, X } from 'lucide-react';
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-scroll';

const navigation = [
	{ name: 'Services', href: 'services' },
	{ name: 'Core Values', href: 'core-values' },
	{ name: 'Results', href: 'results' },
	{ name: 'Engagement Options', href: 'engagement-options' },
	{ name: "Let's Partner", href: 'contact' },
];

export default function Navigation() {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);
	const menuRef = useRef<HTMLDivElement>(null);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const closeMenu = () => {
		setIsMenuOpen(false);
	};

	// Close the menu when clicking outside of it
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
				setIsMenuOpen(false);
			}
		};
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	return (
		<header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 backdrop-blur-md shadow-md">
			<nav className="container mx-auto px-6 py-4" ref={menuRef}>
				<div className="flex flex-col md:flex-row md:justify-between md:items-center">
					<div className="flex items-center justify-between">
						<div className="flex items-center">
							<svg width="36" height="34" viewBox="0 0 36 34" fill="none"
								 xmlns="http://www.w3.org/2000/svg">
								<circle cx="18" cy="17" r="17" fill="#2463EB"/>
								<path d="M15 22.6667L17.25 24.7917" stroke="white" stroke-width="2"
									  stroke-linecap="round" stroke-linejoin="round"/>
								<path d="M21 11.3333L18.75 9.20825" stroke="white" stroke-width="2"
									  stroke-linecap="round" stroke-linejoin="round"/>
								<path d="M22.5 2.83325C19.803 5.66375 18.723 8.49284 18.2895 11.3233" stroke="white"
									  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
								<path d="M24.75 14.875L26.25 16.2917" stroke="white" stroke-width="2"
									  stroke-linecap="round" stroke-linejoin="round"/>
								<path d="M25.5 8.49988L21.1635 4.4043" stroke="white" stroke-width="2"
									  stroke-linecap="round" stroke-linejoin="round"/>
								<path d="M3 21.25C13.0005 12.75 22.9995 21.25 33 12.75" stroke="white" stroke-width="2"
									  stroke-linecap="round" stroke-linejoin="round"/>
								<path d="M30 12.75L31.3365 14.0122" stroke="white" stroke-width="2"
									  stroke-linecap="round" stroke-linejoin="round"/>
								<path d="M4.66351 19.9878L6.00001 21.25" stroke="white" stroke-width="2"
									  stroke-linecap="round" stroke-linejoin="round"/>
								<path d="M9.75 17.7083L11.25 19.1249" stroke="white" stroke-width="2"
									  stroke-linecap="round" stroke-linejoin="round"/>
								<path d="M10.5 25.5L14.8365 29.5956" stroke="white" stroke-width="2"
									  stroke-linecap="round" stroke-linejoin="round"/>
								<path d="M13.5 31.1666C16.197 28.3361 17.277 25.507 17.7105 22.6765" stroke="white"
									  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
							</svg>
							<a href="/" className="text-2xl font-bold text-gray-800 ml-2">
								JEA BizDev Consulting
							</a>
						</div>
						<div className="flex md:hidden">
							<button
								type="button"
								className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
								aria-label="toggle menu"
								onClick={toggleMenu}
							>
								{isMenuOpen ? <X/> : <Menu/>}
							</button>
						</div>
					</div>
					<div className={`md:flex items-center ${isMenuOpen ? 'block' : 'hidden'}`}>
						<div className="flex flex-col mt-2 md:flex-row md:mt-0 md:mx-1">
							{navigation.map((item) => (
								<Link
									key={item.name}
									to={item.href}
									smooth={true}
									duration={500}
									className="my-1 text-md text-gray-700 leading-5 hover:text-blue-600 hover:underline md:mx-4 md:my-0 cursor-pointer"
									onClick={closeMenu} // Close the menu when a link is clicked
								>
									{item.name}
								</Link>
							))}
						</div>
					</div>
				</div>
			</nav>
		</header>
	);
}

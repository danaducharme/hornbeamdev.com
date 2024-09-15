'use client';

import { Menu, X, Dna } from 'lucide-react';
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
							<Dna className="h-8 w-8 text-blue-600 mr-2" />
							<a href="/" className="text-2xl font-bold text-gray-800">
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
								{isMenuOpen ? <X /> : <Menu />}
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

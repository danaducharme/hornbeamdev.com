'use client';

import { Menu, X, ExternalLink } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-scroll';
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import logo from '../public/HC-logo.png';

const navigation = [
	{ name: 'Services', href: 'services' },
	{ name: 'Core Values', href: 'core-values' },
	{ name: 'Results', href: 'results' },
	{ name: 'Engagement Options', href: 'engagement-options' },
	{ name: "Let's Partner", href: 'contact' },
	{ name: 'Log In', href: '#', external: true },
];

export default function Navigation() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const menuRef = useRef<HTMLDivElement>(null);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const closeMenu = () => {
		setIsMenuOpen(false);
	};

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

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 25);
		};
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-50 transition-all ${
				isScrolled ? 'bg-white bg-opacity-90 backdrop-blur-md shadow-md' : ''
			}`}
		>
			<nav className="container mx-auto px-4 py-4 lg:py-6" ref={menuRef}>
				<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
					<div className="flex items-center justify-between">
						<div className="flex items-center">
							<Image
								src={logo}
								alt="Hornbeam Collective LLC"
								width={24}
								height={24}
								className="mr-5"
							/>
							<a href="/" className="text-2xl font-bold text-gray-800">
								Hornbeam Collective Consulting
							</a>
						</div>
						<div className="flex lg:hidden">
							<button
								type="button"
								className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
								aria-label="toggle menu"
								onClick={toggleMenu}
							>
								{isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
							</button>
						</div>
					</div>
					<div className={`lg:flex items-center ${isMenuOpen ? 'block' : 'hidden'} mt-4 lg:mt-0`}>
						<div className="flex flex-col lg:flex-row lg:items-center space-y-2 lg:space-y-0 lg:space-x-4">
							{navigation.map((item) => (
								item.external ? (
									<Button
										key={item.name}
										variant="outline"
										size="sm"
										asChild
										className="w-full lg:w-auto text-black"
									>
										<a
											href={item.href}
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center justify-center"
											onClick={closeMenu}
										>
											<span className="mr-1">{item.name}</span>
											<ExternalLink className="h-4 w-4" />
										</a>
									</Button>
								) : (
									<Link
										key={item.name}
										to={item.href}
										smooth={true}
										duration={500}
										className="text-md text-gray-700 hover:text-emerald-800 hover:underline cursor-pointer"
										onClick={closeMenu}
									>
										{item.name}
									</Link>
								)
							))}
						</div>
					</div>
				</div>
			</nav>
		</header>
	);
}

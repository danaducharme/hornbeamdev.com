'use client'

import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'
import {AnimatePresence, motion} from "framer-motion";

export default function ScrollToTopButton() {
	const [isVisible, setIsVisible] = useState(false)

	useEffect(() => {
		const toggleVisibility = () => {
			// Show button when page is scrolled down 300px
			if (window.scrollY > 300) {
				setIsVisible(true)
			} else {
				setIsVisible(false)
			}
		}

		window.addEventListener('scroll', toggleVisibility)

		return () => window.removeEventListener('scroll', toggleVisibility)
	}, [])

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
	}

	if (!isVisible) {
		return null
	}

	return (
		<AnimatePresence>
			{isVisible && (
				<motion.button
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					exit={{ opacity: 0, scale: 0.5 }}
					transition={{ duration: 0.3 }}
					className="fixed bottom-4 right-4 p-2 bg-blue-600 text-primary-foreground rounded-full shadow-lg z-50"
					onClick={scrollToTop}
					aria-label="Scroll to top"
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
				>
					<ArrowUp className="h-6 w-6" />
				</motion.button>
			)}
		</AnimatePresence>
	)
}

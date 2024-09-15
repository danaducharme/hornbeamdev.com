'use client';

import { Dna, Handshake, Lightbulb, Target } from 'lucide-react';
import { motion } from 'framer-motion';
import {Element} from "react-scroll";

const coreValues = [
	{
		icon: <Dna className="w-8 h-8 text-blue-600" />,
		title: "Scientific Excellence",
		description: "We leverage cutting-edge knowledge to drive innovative partnerships."
	},
	{
		icon: <Handshake className="w-8 h-8 text-blue-600" />,
		title: "Strategic Collaboration",
		description: "We foster meaningful connections that lead to groundbreaking deals."
	},
	{
		icon: <Lightbulb className="w-8 h-8 text-blue-600" />,
		title: "Innovative Solutions",
		description: "We think outside the box to create unique, value-driven partnership opportunities."
	},
	{
		icon: <Target className="w-8 h-8 text-blue-600" />,
		title: "Results-Oriented Approach",
		description: "We focus on delivering tangible outcomes that propel our clients' success in the industry."
	}
];

export function CoreValues() {
	return (
		<Element name="core-values" className="bg-gradient-to-br from-gray-50 to-blue-50 py-16 px-4 sm:px-6 lg:px-8">
			<div className="max-w-7xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="text-center mb-16"
				>
					<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-600 mb-4">
						Our Core Values
					</h2>
					<p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
						Driving innovation through strategic partnerships
					</p>
				</motion.div>
				<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
					{coreValues.map((value, index) => (
						<motion.div
							key={index}
							className="bg-gray-50 rounded-lg p-6 shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105"
							initial={{ opacity: 0, y: 50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
						>
							<div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
								{value.icon}
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
							<p className="text-gray-600">{value.description}</p>
						</motion.div>
					))}
				</div>
			</div>
		</Element>
	);
}

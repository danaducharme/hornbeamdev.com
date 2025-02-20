'use client';

import React from "react";
import {motion} from "framer-motion";
import {ArrowRight, FileText, Network} from "lucide-react";
import {
	CurrencyDollarIcon,
	GlobeAltIcon,
	LightBulbIcon,
	PuzzlePieceIcon,
	UserGroupIcon
} from "@heroicons/react/24/outline";
import {Card, CardContent} from "@/components/ui/card";
import Image from "next/image";

import avatar from '../public/avatar.jpg';
import deal from '../public/handshake.jpeg';

import {ScrollSuggestion} from "@/components/ui/ScrollSuggestion";
import {Link} from "react-scroll";
import {LinkedInLogoIcon} from "@radix-ui/react-icons";

export function Hero() {
	return (
		<section className="relative bg-gradient-to-br from-gray-50 to-emerald-50 pt-36 pb-24 sm:pb-32">
			<div className="absolute inset-0 overflow-hidden">
				<svg className="absolute left-0 top-0 h-full w-full" xmlns="http://www.w3.org/2000/svg"
					 viewBox="0 0 1440 320" preserveAspectRatio="none">
					<g mask="url(&quot;#SvgjsMask1013&quot;)" fill="none">
        <path d="M 0,25 C 96,69.8 288,245.8 480,249 C 672,252.2 768,39.8 960,41 C 1152,42.2 1344,212.2 1440,255L1440 320L0 320z" fill="rgba(123, 142, 11, .05)"></path>
        <path d="M 0,113 C 96,144.6 288,278.4 480,271 C 672,263.6 768,66.4 960,76 C 1152,85.6 1344,270.4 1440,319L1440 320L0 320z" fill="rgba(91, 110, 0, .025)"></path>
    </g>
    <defs>
        <mask id="SvgjsMask1013">
            <rect width="1440" height="320" fill="#ffffff"></rect>
        </mask>
    </defs>
				</svg>
			</div>
			<div className="container mx-auto px-6 relative">
				<div className="flex flex-col lg:flex-row items-center mb-16">
					<motion.div
						className="lg:w-1/2 lg:pr-12"
						initial={{opacity: 0, y: 20}}
						animate={{opacity: 1, y: 0}}
						transition={{duration: 0.8}}
					>
						<h1 className="text-5xl font-extrabold text-gray-900 leading-tight mb-6">
							Elevate your business with robust custom software{' '}
							<span className="text-gray-900">
								and Business Development Services
                  			</span>
						</h1>
						<p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-2xl">
						We are at the forefront of transforming the digital landscape. Our goal is to drive innovation, turning visionary concepts
						into engaging, user-focused software solutions that exceed expectations.

						</p>
						<div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
							<Link
								to="contact"
								smooth={true}
								duration={500}
								className="cursor-pointer bg-emerald-800 text-white px-8 py-4 rounded-full font-semibold hover:bg-emerald-900 transition duration-300 inline-flex items-center justify-center text-lg"
							>
								Get in Touch
								<motion.div
									className="ml-2 h-5 w-5"
									animate={{x: [0, 5, 0]}}  // Animation moves right 5px and back
									transition={{
										repeat: Infinity,
										repeatType: "mirror",
										duration: 0.8,  // Adjust speed
										ease: "easeInOut",
									}}
								>
									<ArrowRight/>
								</motion.div>
							</Link>
							<Link
								to="services"
								smooth={true}
								duration={500}
								className="cursor-pointer bg-white text-emerald-800 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition duration-300 inline-flex items-center justify-center text-lg border-2 border-emerald-800"
							>
								Our Services
							</Link>
						</div>
					</motion.div>
					<motion.div
						className="lg:w-1/2 mt-12 lg:mt-0 relative"
						initial={{opacity: 0, scale: 0.8}}
						animate={{opacity: 1, scale: 1}}
						transition={{duration: 0.8, delay: 0.2}}
					>
						<Image
							src={deal}
							alt="Handshake when closing a deal"
							className="rounded-lg shadow-2xl"
							width={650}
							height={400}
						/>
						<motion.div
							className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg"
							initial={{opacity: 0, x: -20}}
							animate={{opacity: 1, x: 0}}
							transition={{duration: 0.5, delay: 0.5}}
						>
							<div className="flex items-center space-x-2">
								<Network className="h-8 w-8 text-emerald-800"/>
								<div>
									<p className="text-sm font-semibold text-gray-800">Strategic Partnerships &
										Outreach</p>
									<p className="text-xs text-gray-500">Utilizing our extensive network to ensure your success</p>
								</div>
							</div>
						</motion.div>
						<motion.div
							className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-lg"
							initial={{opacity: 0, x: 20}}
							animate={{opacity: 1, x: 0}}
							transition={{duration: 0.5, delay: 0.7}}
						>
							<div className="flex items-center space-x-2">
								<FileText className="h-8 w-8 text-emerald-800"/>
								<div>
									<p className="text-sm font-semibold text-gray-800">Streamline Development Cycle</p>
									<p className="text-xs text-gray-500">Crafting optimal processes and design</p>
								</div>
							</div>
						</motion.div>
					</motion.div>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
					<motion.div
						initial={{opacity: 0, y: 50}}
						animate={{opacity: 1, y: 0}}
						transition={{duration: 0.8, delay: 0.4}}
					>
						<h2 className="text-3xl font-bold text-gray-800 mb-6">Our Team</h2>
						<Card className="bg-white rounded-lg shadow-lg">
							<CardContent className="p-6">
								<div className="flex items-center mb-4">
									<Image
										src={avatar}
										alt="Dana Ducharme"
										className="w-24 h-24 rounded-full object-cover mr-6"
										width={96}
										height={96}
									/>
									<div>
										<h3 className="text-xl font-semibold text-gray-800">Dana Ducharme</h3>
										<p className="text-gray-600">Managing Director</p>
										<a href="https://www.linkedin.com/in/danaducharme" target="_blank"
										   rel="noopener noreferrer" className="hover:text-emerald-800 hover:underline">
											<p className="flex items-center flex-row gap-1">
												<LinkedInLogoIcon className="block"/>
												LinkedIn
											</p>
										</a>
									</div>
								</div>
								<p className="text-gray-700 mb-4">
								    Dana is a result-driven engineering leader with <strong>20+ years of experience</strong> driving technical vision across multiple
									industries, specializing in strategy and business development. 
									He has successfully{' '} led <strong>hundreds</strong> of large-scale enterprise projects and innovative initiatives involving all aspects of development.
									He has a proven track record of driving long-lasting organizational improvements.
								</p>
								<ul className="space-y-2 text-sm">
									<li className="flex items-center">
										<LightBulbIcon className="h-5 w-5 text-emerald-800 mr-2"/>
										<span>Expertise in innovative thinking and rapid prototyping</span>
									</li>
									<li className="flex items-center">
										<GlobeAltIcon className="h-5 w-5 text-emerald-800 mr-2"/>
										<span>Global develpment and team building</span>
									</li>
									<li className="flex items-center">
										<PuzzlePieceIcon className="h-5 w-5 text-emerald-800 mr-2"/>
										<span>Proven track record of high-value partnerships</span>
									</li>
									<li className="flex items-center">
										<CurrencyDollarIcon className="h-5 w-5 text-emerald-800 mr-2"/>
										<span>Strategic advisor to software and technology companies</span>
									</li>
								</ul>
							</CardContent>
						</Card>
					</motion.div>

					<motion.div
						initial={{opacity: 0, y: 50}}
						animate={{opacity: 1, y: 0}}
						transition={{duration: 0.8, delay: 0.6}}
					>
						<h2 className="text-3xl font-bold text-gray-800 mb-6">What We Offer</h2>
						<Card className="bg-white rounded-lg shadow-lg">
							<CardContent className="p-6">
								<p className="text-gray-700 mb-6">
									Hornbeam Collective offers strategic advisory services
									specializing in identifying, structuring, negotiating, and executing partnerships
									across North America, Europe, and Asia.
								</p>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									<div className="bg-emerald-50 p-4 rounded-lg">
										<div className="flex items-center mb-3">
											<PuzzlePieceIcon className="h-6 w-6 text-emerald-800 mr-2"/>
											<h3 className="font-semibold text-gray-800">Software Consulting Services</h3>
										</div>
										<p className="text-sm text-gray-600">Expert support through the entire Software Develpment Life Cycle.
										</p>
									</div>
									<div className="bg-emerald-50 p-4 rounded-lg">
										<div className="flex items-center mb-3">
											<GlobeAltIcon className="h-6 w-6 text-emerald-800 mr-2"/>
											<h3 className="font-semibold text-gray-800">Web App and API Development</h3>
										</div>
										<p className="text-sm text-gray-600">Production ready web apps, robust API development and integration 
											services.</p>
									</div>
									<div className="bg-emerald-50 p-4 rounded-lg">
										<div className="flex items-center mb-3">
											<UserGroupIcon className="h-6 w-6 text-emerald-800 mr-2"/>
											<h3 className="font-semibold text-gray-800">Comprehensive Business Services</h3>
										</div>
										<p className="text-sm text-gray-600">Business development and partnering
											activities tailored to your needs focusing on bringing your vision to life.</p>
									</div>
									<div className="bg-emerald-50 p-4 rounded-lg">
										<div className="flex items-center mb-3">
											<CurrencyDollarIcon className="h-6 w-6 text-emerald-800 mr-2"/>
											<h3 className="font-semibold text-gray-800">Value Creation</h3>
										</div>
										<p className="text-sm text-gray-600">Proven track record of high-value
											partnerships and strategic initiatives.</p>
									</div>
								</div>
							</CardContent>
						</Card>
					</motion.div>
				</div>
			</div>

			<ScrollSuggestion/>
		</section>
	);
}

import {motion} from "framer-motion";
import React from "react";
import {Briefcase, Building, FileCheck, FileText, Handshake, Network, PieChart, Search, Users} from "lucide-react";
import {Element} from "react-scroll";

const services = [
	{
		name: 'Strategic Guidance',
		description: 'Expert advice to navigate strategic initiatives and business development activities.',
		icon: Briefcase
	},
	{
		name: 'Business Development Operations Support',
		description: 'Streamlining your processes for optimal efficiency.',
		icon: Building
	},
	{
		name: 'Deal Benchmarking & Deal Sheet Summaries', description: <>
			In-depth benchmarking analysis for informed decision-making and deal sheet summaries (examples include: <a
			href="/deal-summaries/ImmuNext & Lilly Mar 27 2019.pdf" target="_blank" className="text-emerald-600 underline">1</a>, <a
			href="/deal-summaries/Affibody & Alexion Mar 20 2019.pdf" target="_blank" className="text-emerald-600 underline">2</a>, <a
			href="/deal-summaries/Voyager and AbbVie Feb 22 2019.pdf" target="_blank" className="text-emerald-600 underline">3</a>).
		</>, icon: Search
	},
	{
		name: 'Partner Identification',
		description: 'Connecting you with ideal collaborators in the industry.',
		icon: Users
	},
	{
		name: 'Industry Connections & Outreach',
		description: 'Leveraging our vast network for your success.',
		icon: Network
	},
	{
		name: 'Full Partnering Process Oversight',
		description: 'Comprehensive end-to-end management of your partnership activities.',
		icon: PieChart
	},
];

export function Services() {
	return (
		<Element name="services" className="py-24 bg-white">
			<div className="container mx-auto px-6">
				<motion.div
					initial={{opacity: 0, y: 50}}
					animate={{opacity: 1, y: 0}}
					transition={{duration: 0.8}}
				>
					<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-700 mb-4 text-center">
						Professional Services
					</h2>
					<p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-center mb-16">
						We offer a wide range of services to support your business needs.
					</p>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{services.map((service, index) => (
							<motion.div
								key={index}
								className="bg-gray-50 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
								initial={{opacity: 0, y: 50}}
								animate={{opacity: 1, y: 0}}
								transition={{duration: 0.5, delay: index * 0.1}}
							>
								<div className="flex items-center mb-4">
									<div className="bg-emerald-100 rounded-full p-3 mr-4">
										<service.icon className="h-6 w-6 text-emerald-800"/>
									</div>
									<h3 className="text-xl font-semibold text-gray-800">{service.name}</h3>
								</div>
								<div className="text-gray-600">
									{typeof service.description === "string" ? (
										<p>{service.description}</p>
									) : (
										service.description
									)}
								</div>
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
		</Element>
	);
}

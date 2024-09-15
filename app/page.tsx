'use client';

import Navigation from "@/components/Navigation";
import {Hero} from "@/components/Hero";
import {Services} from "@/components/Services";
import {CoreValues} from "@/components/CoreValues";
import {Results} from "@/components/Results";
import {Contact} from "@/components/Contact";
import {EngagementOptions} from "@/components/EngagementOptions";
import Footer from "@/components/Footer";

export default function Page() {

	return (
		<div className="w-full">
			<Navigation/>
			<main>
				<Hero/>
				<Services/>
				<CoreValues/>
				<Results/>
				<EngagementOptions/>
				<Contact/>
			</main>
			<Footer />
		</div>
	);
}

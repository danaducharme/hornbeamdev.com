import {Linkedin} from "lucide-react"
import Link from "next/link"

export default function Footer() {
	const currentYear = new Date().getFullYear()

	return (
		<footer className="bg-blue-50 text-black py-4">
			<div className="container mx-auto px-5 flex flex-row justify-between items-center">
				<div className="text-sm">
					&copy; {currentYear} JEA BizDev Consulting, LLC.
				</div>
				<div className="flex space-x-4">
					<a href="/Privacy Policy.pdf" target="_blank" className="hover:text-blue-500 transition-colors">
						Privacy Policy
					</a>
					<a href="/Disclaimer.pdf" target="_blank" className="hover:text-blue-500 transition-colors">
						Disclaimer
					</a>
					<Link href="https://www.linkedin.com/in/john-a-6182668/"
						  className="hover:text-blue-500 transition-colors" target="_blank">
						<Linkedin size={20}/>
						<span className="sr-only">LinkedIn</span>
					</Link>
				</div>
			</div>
		</footer>
	)
}

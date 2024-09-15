import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
	try {
		const { name, email, subject, company, message } = await req.json();

		if (!name || !email || !company || !message) {
			return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
		}

		const formcarryUrl = process.env.FORMCARRY_URL;

		// Construct the body object conditionally
		const body: { [key: string]: string } = {
			name,
			email,
			company,
			message,
		};

		// Only include subject if it is not null or undefined
		if (subject) {
			body.subject = subject;
		}

		const response = await fetch(formcarryUrl!, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(body),
		});

		const data = await response.json();

		if (response.ok) {
			return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
		} else {
			return NextResponse.json({ message: data.title || 'Error sending email' }, { status: 500 });
		}
	} catch (error) {
		console.error(error);
		return NextResponse.json({ message: 'Error sending email' }, { status: 500 });
	}
}

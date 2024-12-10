import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
export  async function POST(req: NextRequest) {
	const {
		day,
		weather,
		classes,
		special_events,
		student_count,
	}: {
		day: string;
		weather: string;
		classes: number;
		special_events: string;
		student_count: number;
	} = await req.json();

	try {
		const prediction = await db.schedule.create({
			data: {
				day,
				weather,
				classes,
				special_events,
				studentActuly: student_count,
			},
		});
		console.log("Success:", prediction);
		
		return NextResponse.json(prediction);
	} catch (error) {
		console.error("Error:", error);
		
		return NextResponse.json({});
	}
}

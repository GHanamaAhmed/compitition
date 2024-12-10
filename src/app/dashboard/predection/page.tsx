"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardHeader,
	CardTitle,
	CardContent,
	CardFooter,
} from "@/components/ui/card";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";

export default function Page() {
	const [formData, setFormData] = useState({
		Day: "",
		Weather: "",
		Classes: "",
		Special_Events: "",
		Attendance_Rate: "",
		Student_Count_Last_Week: "",
	});
	const [modalOpen, setModalOpen] = useState(false);
	const [prediction, setPrediction] = useState("");

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			const response = await fetch("http://localhost:5000/predict", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});
			const data = await response.json();
			console.log("Success:", data);
			setPrediction(JSON.stringify(data, null, 2));
			setModalOpen(true);
			 await fetch("/api/prediction", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					day: formData.Day,
					weather: formData.Weather,
					classes: Number(formData.Classes == 'n'? 1: 0),
					special_events: formData.Special_Events,
					student_count: Number(formData.Attendance_Rate),
				}),
			});

		} catch (error) {
			console.error("Error:", error);
		}
	};

	return (
		<>
			<Card>
				<CardHeader>
					<CardTitle>Schedule Form</CardTitle>
				</CardHeader>
				<CardContent>
					<form onSubmit={handleSubmit}>
						<div className="space-y-4">
							<div>
								<Label htmlFor="day">Day:</Label>
								<Input
									type="text"
									id="day"
									name="Day"
									value={formData.Day}
									onChange={handleChange}
								/>
							</div>
							<div>
								<Label htmlFor="weather">Weather:</Label>
								<Input
									type="text"
									id="weather"
									name="Weather"
									value={formData.Weather}
									onChange={handleChange}
								/>
							</div>
							<div>
								<Label htmlFor="classes">Classes:</Label>
								<Input
									type="text"
									id="classes"
									name="Classes"
									value={formData.Classes}
									onChange={handleChange}
								/>
							</div>
							<div>
								<Label htmlFor="special_events">Special Events:</Label>
								<Input
									type="text"
									id="special_events"
									name="Special_Events"
									value={formData.Special_Events}
									onChange={handleChange}
								/>
							</div>
							<div>
								<Label htmlFor="student_count">Student Count:</Label>
								<Input
									type="text"
									id="student_count"
									name="Attendance_Rate"
									value={formData.Attendance_Rate}
									onChange={handleChange}
								/>
							</div>
							<div>
								<Label htmlFor="Student_Count_Last_Week">
									Student Count Last Week:
								</Label>
								<Input
									type="text"
									id="Student_Count_Last_Week"
									name="Student_Count_Last_Week"
									value={formData.Student_Count_Last_Week}
									onChange={handleChange}
								/>
							</div>
						</div>
						<Button type="submit" className="mt-4">
							Submit
						</Button>
					</form>
				</CardContent>
			</Card>

			<Dialog open={modalOpen} onOpenChange={setModalOpen}>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Prediction Result</DialogTitle>
						<DialogDescription>
							Here's the output from your prediction:
						</DialogDescription>
					</DialogHeader>
					<pre className="bg-muted p-4 rounded-md overflow-auto max-h-96">
						{prediction}
					</pre>
				</DialogContent>
			</Dialog>
		</>
	);
}

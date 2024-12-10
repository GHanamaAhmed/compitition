"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CardHeader } from "@/components/ui/card";
import { CardTitle } from "@/components/ui/card";
import { CardContent } from "@/components/ui/card";
import { CardFooter } from "@/components/ui/card";

export default function Page() {
  const [formData, setFormData] = useState({
    time: "",
    day: "",
    weather: "",
    classes: "",
    special_events: "",
    student_count: "",
    studentActuly: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to an API or Prisma client
    console.log(formData);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Schedule Form</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <Label htmlFor="time">Time:</Label>
            <Input
              type="number"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="day">Day:</Label>
            <Input
              type="number"
              id="day"
              name="day"
              value={formData.day}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="weather">Weather:</Label>
            <Input
              type="text"
              id="weather"
              name="weather"
              value={formData.weather}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="classes">Classes:</Label>
            <Input
              type="number"
              id="classes"
              name="classes"
              value={formData.classes}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="special_events">Special Events:</Label>
            <Input
              type="text"
              id="special_events"
              name="special_events"
              value={formData.special_events}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="student_count">Student Count:</Label>
            <Input
              type="number"
              id="student_count"
              name="student_count"
              value={formData.student_count}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="studentActuly">Student Actuly:</Label>
            <Input
              type="number"
              id="studentActuly"
              name="studentActuly"
              value={formData.studentActuly}
              onChange={handleChange}
            />
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </CardContent>
      <CardFooter>{/* Additional footer content if needed */}</CardFooter>
    </Card>
  );
}

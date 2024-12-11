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
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

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
  const [loading, setLoading] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
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
      setLoading(false);
      await fetch("/api/prediction", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          day: formData.Day,
          weather: formData.Weather,
          classes: Number(formData.Classes == "n" ? 1 : 0),
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
                <Select
                  name="Day"
                  value={formData.Day}
                  onValueChange={(value :any) =>
                    setFormData((prev) => ({ ...prev, Day: value }))
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Day" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Monday">Monday</SelectItem>
                    <SelectItem value="Tuesday">Tuesday</SelectItem>
                    <SelectItem value="Wednesday">Wednesday</SelectItem>
                    <SelectItem value="Thursday">Thursday</SelectItem>
                    <SelectItem value="Friday">Friday</SelectItem>
                    <SelectItem value="Saturday">Saturday</SelectItem>
                    <SelectItem value="Sunday">Sunday</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="weather">Weather:</Label>
                <Select
                  name="Weather"
                  value={formData.Weather}
                  onValueChange={(value:any) =>
                    setFormData((prev) => ({ ...prev, Weather: value }))
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Weather" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Good">Sunny</SelectItem>
                    <SelectItem value="Bad">Cloudy</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="classes">Classes:</Label>

                <Select
                  name="Classes"
                  value={formData.Weather}
                  onValueChange={(value:any ) =>
                    setFormData((prev) => ({ ...prev, Classes: value }))
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Classes" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="On">On</SelectItem>
                    <SelectItem value="Off">Off</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="special_events">Special Events:</Label>

                <Select
                  name="Special_Events"
                  value={formData.Weather}
                  onValueChange={(value) =>
                    setFormData((prev) => ({ ...prev, Special_Events: value }))
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select special_events" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Exam">Exam</SelectItem>
                    <SelectItem value="Non">Non</SelectItem>
                    <SelectItem value="Firstval">Non</SelectItem>
                  </SelectContent>
                </Select>
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
            <Button disabled={loading == true} type="submit" className="mt-4">
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

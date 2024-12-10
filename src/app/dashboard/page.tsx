
import { Schedule } from "@prisma/client"; // Adjust the import path as necessary

import { BarComponent, ChartComponent, TableComponent } from "./chart";
import { db } from "@/lib/db";

export default async function Page() {
  const data: Schedule[] = [
    {
      time: 8,
      day: 0,
      weather: "SUNNY",
      classes: 5,
      special_events: "NONE",
      student_count: 450,
      studentActuly: 400,
    },
    {
      time: 9,
      day: 1,
      weather: "RAINY",
      classes: 6,
      special_events: "FESTIVAL",
      student_count: 500,
      studentActuly: 450,
    },
    {
      time: 10,
      day: 2,
      weather: "WINDY",
      classes: 7,
      special_events: "NONE",
      student_count: 550,
      studentActuly: 500,
    },
    {
      time: 11,
      day: 3,
      weather: "SUNNY",
      classes: 8,
      special_events: "FESTIVAL",
      student_count: 600,
      studentActuly: 550,
    },
    {
      time: 12,
      day: 4,
      weather: "RAINY",
      classes: 9,
      special_events: "NONE",
      student_count: 650,
      studentActuly: 600,
    },
    {
      time: 13,
      day: 5,
      weather: "WINDY",
      classes: 10,
      special_events: "FESTIVAL",
      student_count: 700,
      studentActuly: 650,
    },
    {
      time: 14,
      day: 6,
      weather: "SUNNY",
      classes: 4,
      special_events: "NONE",
      student_count: 750,
      studentActuly: 700,
    },
    {
      time: 15,
      day: 0,
      weather: "RAINY",
      classes: 3,
      special_events: "FESTIVAL",
      student_count: 800,
      studentActuly: 750,
    },
    {
      time: 16,
      day: 1,
      weather: "WINDY",
      classes: 2,
      special_events: "NONE",
      student_count: 850,
      studentActuly: 800,
    },
    {
      time: 17,
      day: 2,
      weather: "SUNNY",
      classes: 1,
      special_events: "FESTIVAL",
      student_count: 900,
      studentActuly: 850,
    },
    {
      time: 18,
      day: 3,
      weather: "RAINY",
      classes: 0,
      special_events: "NONE",
      student_count: 950,
      studentActuly: 900,
    },
    {
      time: 19,
      day: 4,
      weather: "WINDY",
      classes: 5,
      special_events: "FESTIVAL",
      student_count: 1000,
      studentActuly: 950,
    },
    {
      time: 20,
      day: 5,
      weather: "SUNNY",
      classes: 6,
      special_events: "NONE",
      student_count: 1050,
      studentActuly: 1000,
    },
    {
      time: 21,
      day: 6,
      weather: "RAINY",
      classes: 7,
      special_events: "FESTIVAL",
      student_count: 1100,
      studentActuly: 1050,
    },
    {
      time: 22,
      day: 0,
      weather: "WINDY",
      classes: 8,
      special_events: "NONE",
      student_count: 1150,
      studentActuly: 1100,
    },
    {
      time: 23,
      day: 1,
      weather: "SUNNY",
      classes: 9,
      special_events: "FESTIVAL",
      student_count: 1200,
      studentActuly: 1150,
    },
    {
      time: 0,
      day: 2,
      weather: "RAINY",
      classes: 10,
      special_events: "NONE",
      student_count: 1250,
      studentActuly: 1200,
    },
    {
      time: 1,
      day: 3,
      weather: "WINDY",
      classes: 4,
      special_events: "FESTIVAL",
      student_count: 1300,
      studentActuly: 1250,
    },
    {
      time: 2,
      day: 4,
      weather: "SUNNY",
      classes: 3,
      special_events: "NONE",
      student_count: 1350,
      studentActuly: 1300,
    },
    {
      time: 3,
      day: 5,
      weather: "RAINY",
      classes: 2,
      special_events: "FESTIVAL",
      student_count: 1400,
      studentActuly: 1350,
    },
    {
      time: 4,
      day: 6,
      weather: "WINDY",
      classes: 1,
      special_events: "NONE",
      student_count: 1450,
      studentActuly: 1400,
    },
    {
      time: 5,
      day: 0,
      weather: "SUNNY",
      classes: 0,
      special_events: "FESTIVAL",
      student_count: 1500,
      studentActuly: 1450,
    },
    {
      time: 6,
      day: 1,
      weather: "RAINY",
      classes: 5,
      special_events: "NONE",
      student_count: 1550,
      studentActuly: 1500,
    },
    {
      time: 7,
      day: 2,
      weather: "WINDY",
      classes: 6,
      special_events: "FESTIVAL",
      student_count: 1600,
      studentActuly: 1550,
    },
  ];

  // await db.schedule.createMany({
  //   data: data,
  // });
  // const data = await db.schedule.findMany();

  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="mx-auto h-24 w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        <ChartComponent data={data} />
        <BarComponent data={data} />
        <div className="col-span-2">
          <TableComponent data={data} />
        </div>
      </div>
      <div className="mx-auto h-[100vh] w-full max-w-3xl rounded-xl" />
    </div>
  );
}

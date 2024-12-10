import { Schedule } from "@prisma/client"; // Adjust the import path as necessary

import { BarComponent, ChartComponent, TableComponent } from "./chart";
import { db } from "@/lib/db";

export default async function Page() {
  // const data: Schedule[] = [
  //   {
  //     day: "Monday",
  //     weather: "SUNNY",
  //     classes: 5,
  //     special_events: "NONE",
  //     student_count: 450,
  //     studentActuly: 400,
  //   },
  //   {
  //     day: "Tuesday",
  //     weather: "RAINY",
  //     classes: 6,
  //     special_events: "FESTIVAL",
  //     student_count: 500,
  //     studentActuly: 450,
  //   },
  //   {
  //     day: "Wednesday",
  //     weather: "WINDY",
  //     classes: 7,
  //     special_events: "NONE",
  //     student_count: 550,
  //     studentActuly: 500,
  //   },
  //   {
  //     day: "Thursday",
  //     weather: "SUNNY",
  //     classes: 8,
  //     special_events: "FESTIVAL",
  //     student_count: 600,
  //     studentActuly: 550,
  //   },
  //   {
  //     day: "Friday",
  //     weather: "RAINY",
  //     classes: 9,
  //     special_events: "NONE",
  //     student_count: 650,
  //     studentActuly: 600,
  //   },
  //   {
  //     day: "Saturday",
  //     weather: "WINDY",
  //     classes: 10,
  //     special_events: "FESTIVAL",
  //     student_count: 700,
  //     studentActuly: 650,
  //   },
  //   {
  //     day: "Sunday",
  //     weather: "SUNNY",
  //     classes: 4,
  //     special_events: "NONE",
  //     student_count: 750,
  //     studentActuly: 700,
  //   },
  // ];

  // await db.schedule.createMany({
  //   data: data,
  // });
  let dataFromDb: Schedule[] = [];
  try {
    dataFromDb = (await db.schedule.findMany()).reverse();
  } catch (error) {
    dataFromDb = [];
  }
  3;
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="mx-auto h-24 w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        <ChartComponent data={dataFromDb} />
        <BarComponent data={dataFromDb as any} />
        <div className="col-span-2">
          <TableComponent data={dataFromDb} />
        </div>
      </div>
      <div className="mx-auto h-[100vh] w-full max-w-3xl rounded-xl" />
    </div>
  );
}

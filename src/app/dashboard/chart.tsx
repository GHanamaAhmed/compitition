"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { Area, AreaChart } from "recharts";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Schedule } from "@prisma/client";

type ScheduleProps = {
  data: {
    time: number;
    day: number;
    weather: string;
    classes: number;
    special_events: string;
    student_count: number;
    studentActuly: number;
  }[];
};

export function BarComponent({ data }: ScheduleProps) {
  const chartData = data.map((schedule) => ({
    time: schedule.time,
    student_count: schedule.student_count,
    studentActuly: schedule.studentActuly,
  }));

  const chartConfig = {
    student_count: {
      label: "Student Count",
      color: "hsl(var(--chart-1))",
    },
    studentActuly: {
      label: "Student Actuly",
      color: "hsl(var(--chart-2))",
    },
  } satisfies ChartConfig;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Bar Chart - Multiple</CardTitle>
        <CardDescription>
          Showing student count and student actuly over time
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="time"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => `Time ${value}`}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar
              dataKey="student_count"
              fill="var(--color-student_count)"
              radius={4}
            />
            <Bar
              dataKey="studentActuly"
              fill="var(--color-studentActuly)"
              radius={4}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total student count and student actuly over time
        </div>
      </CardFooter>
    </Card>
  );
}

export function ChartComponent({ data }: { data: Schedule[] }) {
  const chartData = data.map((schedule) => ({
    time: schedule.day,
    student_count: schedule.student_count,
  }));

  const chartConfig = {
    student_count: {
      label: "Student Count",
      color: "hsl(var(--chart-1))",
    },
  } satisfies ChartConfig;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Area Chart</CardTitle>
        <CardDescription>Showing student count over time</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="time"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => `Time ${value}`}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Area
              dataKey="student_count"
              type="natural"
              fill="var(--color-student_count)"
              fillOpacity={0.4}
              stroke="var(--color-student_count)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              January - June 2024
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}

export function TableComponent({ data }: { data: Schedule[] }) {
  return (
    <Table>
      <TableCaption>A list of your recent Students.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Time</TableHead>
          <TableHead className="w-[100px]">Day</TableHead>
          <TableHead className="w-[100px]">Weather</TableHead>
          <TableHead className="w-[100px]">Classes</TableHead>
          <TableHead className="w-[100px]">Special Events</TableHead>
          <TableHead className="w-[100px]">Student Count</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((schedule) => (
          <TableRow key={schedule.id}>
            <TableCell>{schedule.day}</TableCell>
            <TableCell>{schedule.day}</TableCell>
            <TableCell>{schedule.weather}</TableCell>
            <TableCell>{schedule.classes}</TableCell>
            <TableCell>{schedule.special_events}</TableCell>
            <TableCell>{schedule.student_count}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

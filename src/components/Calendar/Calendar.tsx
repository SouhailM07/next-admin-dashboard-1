"use client";
import "./calendar.css";
//
import {
  ScheduleComponent,
  ViewsDirective,
  ViewDirective,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
  Resize,
  DragAndDrop,
} from "@syncfusion/ej2-react-schedule";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
//
import { scheduleData } from "@/data/dummy";

export default function Calendar() {
  return (
    <>
      <main className="lg:px-[2rem]">
        <ScheduleComponent
          height="650px"
          eventSettings={{ dataSource: scheduleData }}
          selectedDate={new Date(2021, 0, 10)}
        >
          <Inject
            services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]}
          />
        </ScheduleComponent>
      </main>
    </>
  );
}

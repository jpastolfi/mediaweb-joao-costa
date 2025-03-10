
import arrowRight from "../assets/arrow-right.svg";
import bernard from "../assets/bernard.png";
import bessie from "../assets/bessie.png";
import colleen from "../assets/colleen.png";
import { CalendarSection } from "./EmployeeData/CalendarSection";
import { EventCard } from "./EmployeeData/EventCards";
import { ProfileHeader } from "./EmployeeData/ProfileHeader";
import { StatsSection } from "./EmployeeData/StatsSection";
const events = [
  {
    title: "Match against Team B",
    time: "9:00AM - 11:30AM",
    coach: "Nelson Hendricks",
    participants: [
      bernard,
      bessie,
      colleen,
    ],
    active: true,
    activity: "Sport"
  },
  {
    title: "Health appointment",
    time: "9:00AM - 11:30AM",
    coach: "Dr. Douglas Wade",
    participants: [],
    active: false,
    activity: "Health"
  },
];

export default function Dashboard() {
  return (
    <div className="w-3/12 h-screen absolute right-0 px-14 py-10 flex flex-col gap-5 bg-white">
      <ProfileHeader />
      <div className="absolute flex items-center justify-center w-12 h-24 rounded-l-4xl bg-white -ml-22">
          <img src={arrowRight} alt="arrow-right" className="w-4 h-4" />
      </div>
      <StatsSection />
      <CalendarSection />
      <div className="flex flex-col gap-y-2">
        {events.map((event, index) => (
          <EventCard
            key={index}
            title={event.title}
            time={event.time}
            coach={event.coach}
            participants={event.participants}
            active={event.active}
            activity={event.activity}
          />
        ))}
      </div>
      <div className="flex flex-col gap-4 items-start">
        <p className="text-sm font-bold">Post workout sessions</p>
        <EventCard
          title="Meditation"
          time="5:00PM - 6:00PM"
          coach="Tim Bjorvick"
          participants={[]}
          active={false}
          activity="Meditation"
        />
      </div>
    </div>
  );
}
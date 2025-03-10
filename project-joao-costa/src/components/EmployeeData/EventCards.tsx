import { Separator } from "../ui/separator";

export function EventCard({ title, time, coach, participants, active, activity }: { title: string, time: string, coach: string, participants: string[], active: boolean, activity: string }) {
  return (
    <div className={`${active ? "bg-card-dark-blue text-white" : "bg-light-blue text-card-text-dark-blue"} p-4 rounded-lg mt-4 relative flex flex-col items-start`}>
      <h4 className="text-lg font-semibold py-3">{title}</h4>
      <p className="text-sm pb-2">{time}</p>
      <p className="text-sm pb-2">Coach: {coach}</p>
      <Separator className={`${active ? "bg-white" : "bg-card-separator my-2"}`} />
      {activity === 'Sport' ? (
        <div className="flex items-center mt-4">
          {participants.map((participant, index) => (
            <img
              key={index}
              src={participant}
              alt="Participant"
              className="size-8 rounded-full border-2 border-white -ml-2" 
              style={{ zIndex: participants.length - index }}
            />
          ))}
          <span className="text-sm text-white ml-2">+{participants.length}</span>
        </div>
      ) : (
        <div>
          <a href="#" className="text-text-blue-underline">Follow-up</a>
        </div>
      )}
    </div>
  );
}
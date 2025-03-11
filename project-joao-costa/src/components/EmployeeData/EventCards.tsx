import caduceus from "../../assets/caduceus.svg";
import lotus from "../../assets/lotus.svg";
import medal from "../../assets/medal.svg";
import { Separator } from "../ui/separator";


export function EventCard({ title, time, coach, participants, active, activity }: { title: string, time: string, coach: string, participants: string[], active: boolean, activity: string }) {
  return (
    <div className={`${active ? "bg-card-dark-blue text-white" : "bg-light-blue text-card-text-dark-blue"} p-4 rounded-lg relative flex flex-col items-start w-10/12 contain-content`}>
      <h4 className="text-sm font-semibold py-1 z-999">{title}</h4>
      <p className="text-sm pb-2 z-999">{time}</p>
      <p className="text-sm pb-2 z-999">{(activity === 'Health' ? '' : 'Coach: ') + coach}</p>
      {(activity === 'Sport' || activity === 'Health') && (
        <Separator className={`${active ? "bg-white" : "bg-card-separator my-2"} z-999`} />
      )}
      {activity === 'Sport' && (
        <div className="flex items-center mt-4">
          {participants.map((participant, index) => (
            <img
              key={index}
              src={participant}
              alt="Participant"
              className="size-8 rounded-full border-2 border-white -ml-2 object-cover" 
              style={{ zIndex: participants.length - index }}
            />
          ))}
          <span className="text-sm text-white ml-2">+{participants.length}</span>
        </div>
      )}
      {activity === 'Health' && (
        <div>
          <a href="#" className="text-text-blue-underline">Follow-up</a>
        </div>
      )}
    <div>
      <div className={`absolute ${active ? 'top-0 h-4/5 right-5' : 'bottom-0 h-2.5/5 right-0'} w-2/5`}>
        {activity === 'Sport' && (
          <img src={medal} alt="medal" className="w-full h-full object-cover opacity-80" />
        )}
        {activity === 'Health' && (
          <img src={caduceus} alt="caduceus" className="w-full h-full object-cover" />
        )}
        {activity === 'Meditation' && (
          <img src={lotus} alt="lotus" className="w-full h-full object-cover" />
        )}  
      </div>
    </div>
    </div>
  );
}
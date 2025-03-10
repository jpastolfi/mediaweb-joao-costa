import arrowDown from "../../assets/arrow-down.svg";
export function CalendarSection() {
  return (
    <div className="contain-content">
      <div className="flex items-center gap-x-2">
        <h3 className="text-sm font-semibold">March</h3>
        <img src={arrowDown} alt="arrow-down" />
      </div>
      <div className="flex justify-between text-sm text-text-gray">
        {["Mon", "Tues", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon"].map((day, index) => (
          <div key={index} className={`text-center ${day === "Wed" ? 'bg-card-dark-blue' : ''} px-1.5 py-2 rounded-2xl`}>
            <p className={`text-text-${9 + index === 16 ? 'muted' : 'dark-blue'} ${day === "Wed" ? 'text-white' : ''}`}>{day}</p>
            <p
              className={`mt-2 font-bold ${
                day === "Wed" ? "text-white" : ""
              } ${9 + index === 16 ? 'text-text-muted' : ''}`}
            >
              {9 + index}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
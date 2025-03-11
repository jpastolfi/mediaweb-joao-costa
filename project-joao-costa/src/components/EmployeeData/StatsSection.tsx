import { Separator } from "../ui/separator";

export function StatsSection() {
  return (
    <div className="flex justify-around bg-light-blue py-2 px-4 rounded-2xl contain-content w-10/12">
      <div className="text-center">
        <p className="stats-title">Blood</p>
        <p className="stats-data">O+</p>
      </div>
      <Separator orientation="vertical" className="bg-text-light-blue" />
      <div className="text-center">
        <p className="stats-title">Height</p>
        <p className="stats-data">186cm</p>
      </div>
      <Separator orientation="vertical" className="bg-text-light-blue" />
      <div className="text-center">
        <p className="stats-title">Weight</p>
        <p className="stats-data">90kg</p>
      </div>
    </div>
  );
}
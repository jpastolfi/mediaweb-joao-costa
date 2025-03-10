import { Separator } from "../ui/separator";

export function StatsSection() {
  return (
    <div className="flex justify-around bg-light-blue p-4 rounded-2xl contain-content">
      <div className="text-center">
        <p className="text-sm text-text-light-blue">Blood</p>
        <p className="text-lg text-text-blue font-semibold">O+</p>
      </div>
      <Separator orientation="vertical" className="bg-text-light-blue" />
      <div className="text-center">
        <p className="text-sm text-text-light-blue">Height</p>
        <p className="text-lg text-text-blue font-semibold">186cm</p>
      </div>
      <Separator orientation="vertical" className="bg-text-light-blue" />
      <div className="text-center">
        <p className="text-sm text-text-light-blue">Weight</p>
        <p className="text-lg text-text-blue font-semibold">90kg</p>
      </div>
    </div>
  );
}
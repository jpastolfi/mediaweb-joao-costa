import bernard from "../../assets/bernard.png";
import padlock_open from "../../assets/padlock-open.svg";

export function ProfileHeader() {
  return (
    <div className="flex items-center justify-between w-10/12">
      <div className="flex items-center gap-4">
        <img
          src={bernard}
          alt="Profile"
          className="w-12 h-12 rounded-full"
        />
        <div className="flex flex-col items-start">
          <h2 className="text-lg font-semibold">Isaac Williams</h2>
          <p className="text-sm text-text-blue">25 years old, London</p>
        </div>
      </div>
      <button className="text-gray-500">
        <img src={padlock_open} alt="padlock" />
      </button>
    </div>
  );
}
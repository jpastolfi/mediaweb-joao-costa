import EmployeeCard from "./EmployeeCard";

export type Employee = {
  name: string;
  location: string;
  state: string;
  status: string;
  image: string;
  email: string;
  phone: string;
  bio: string;
  experience: string;
}

export default function EmployeeList({employees}: {employees: Employee[]}) {
  return (
    <div className="w-full flex flex-col gap-y-4">
      {employees.map((employee) => (
        <EmployeeCard key={employee.name} employee={employee} />
      ))}
    </div>
  )
}


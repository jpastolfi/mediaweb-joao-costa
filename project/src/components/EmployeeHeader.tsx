import { Button } from "./ui/button";

export default function EmployeeHeader() {
  return (
    <div className='flex items-center justify-between w-full'>
      <h1 className="font-medium text-5xl text-main-purple">Employees</h1>
      <div className='flex items-center gap-2'>
        <Button variant='secondary' className="bg-white text-main-purple rounded-4xl border-main-purple border-1 p-4">Secondary Action</Button>
        <Button variant='outline' className="bg-main-purple text-white rounded-4xl p-4">Primary Action</Button>
      </div>
    </div>
  )
}
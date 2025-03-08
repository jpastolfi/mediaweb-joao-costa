import EmployeeHeader from "./EmployeeHeader";
import EmployeeList from "./EmployeeList";
import EmployeeSearchbar from "./EmployeeSearchbar";

export default function EmployeeContainer() {
  return (
    <div className='flex flex-col items-center h-screen w-8/12 bg-light-blue rounded-r-3xl mx-auto absolute pl-40 py-13 pr-6'>
      <div className='flex flex-col items-center justify-between w-full'>
        <EmployeeHeader />  
        <EmployeeSearchbar />
      </div>
      <div className='w-full grow-1 bg-red-200'>
        <EmployeeList />
      </div>
    </div>
  )
}
import EmployeeHeader from "./EmployeeContainer/EmployeeHeader";
import EmployeeList, { Employee } from "./EmployeeContainer/EmployeeList";
import EmployeeSearchbar from "./EmployeeContainer/EmployeeSearchbar";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "./ui/pagination";

export default function EmployeeContainer() {
  const employees: Employee[] = [
    {
      name: "Bernard Nguyen",
      location: "Walkerville",
      state: "Connecticut",
      status: "Active",
      image: "../assets/bernard.png",
      email: "bernard.nguyen@example.com",
      phone: "123-456-7890",
      bio: "A dedicated employee with a passion for innovation.",
      experience: "5 years in software development."
    },
    {
      name: "Floyd Warren",
      location: "Efrenbury",
      state: "Montana",
      status: "Active",
      image: "../assets/floyd.png",
      email: "floyd.warren@example.com",
      phone: "234-567-8901",
      bio: "An experienced professional in project management.",
      experience: "10 years in managing large-scale projects."
    },
    {
      name: "Francisco Alexander",
      location: "Lornaland",
      state: "Montana",
      status: "Active",
      image: "../assets/francisco.png",
      email: "francisco.alexander@example.com",
      phone: "345-678-9012",
      bio: "A creative thinker with a background in design.",
      experience: "7 years in graphic and web design."
    },
    {
      name: "Lily Jones",
      location: "East Peggiestad",
      state: "Wisconsin",
      status: "Active",
      image: "../assets/lily.png",
      email: "lily.jones@example.com",
      phone: "456-789-0123",
      bio: "A passionate advocate for community service.",
      experience: "3 years in non-profit management."
    },
    {
      name: "Lee Simmmons",
      location: "Wadchester",
      state: "Nebraska",
      status: "Active",
      image: "../assets/lee.png",
      email: "lee.simmmons@example.com",
      phone: "567-890-1234",
      bio: "A tech enthusiast with a knack for problem-solving.",
      experience: "4 years in IT support and solutions."
    },
    {
      name: "Colleen Warren",
      location: "Jonathanprot",
      state: "New Hampshire",
      status: "Active",
      image: "../assets/colleen.png",
      email: "colleen.warren@example.com",
      phone: "678-901-2345",
      bio: "A results-driven marketer with a love for analytics.",
      experience: "6 years in digital marketing."
    },
    {  
      name: "Bessie Alexander",
      location: "East Peggiestad",
      state: "Montana",
      status: "Active",
      image: "../assets/bessie.png",
      email: "bessie.alexander@example.com",
      phone: "789-012-3456",
      bio: "An enthusiastic team player with a focus on collaboration.",
      experience: "2 years in team coordination."
    }
  ];
  return (
    <div className='flex flex-col items-center h-screen w-9/12 bg-light-blue rounded-r-3xl mx-auto absolute pl-44 py-13 pr-6 overflow-y-auto overflow-x-hidden no-scrollbar'>
      <div className='flex flex-col w-full pr-12'>
        <EmployeeHeader />  
        <EmployeeSearchbar />
      </div>
      <div className='w-full grow-1'>
        <EmployeeList employees={employees} />
      </div>
      <div className="contain-content flex items-center justify-between w-full mt-4">
        <p className="text-sm text-text-gray">1 to 4 of 65 records</p>
        <div className="text-text-gray">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem className="border-1 border-main-purple rounded-full">
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">4</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">5</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  )
}


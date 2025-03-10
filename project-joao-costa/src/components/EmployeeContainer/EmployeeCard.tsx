import { useState } from "react";
import bernard from "../../assets/bernard.png";
import bessie from "../../assets/bessie.png";
import colleen from "../../assets/colleen.png";
import email from "../../assets/email.svg";
import floyd from "../../assets/floyd.png";
import francisco from "../../assets/francisco.png";
import lee from "../../assets/lee.png";
import lily from "../../assets/lily.png";
import phone from "../../assets/phone.svg";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { Employee } from "./EmployeeList";
export default function EmployeeCard({employee}: {employee: Employee}) {
  let image;
  switch (employee.name) {
    case "Bernard Nguyen":
      image = bernard;
      break;
    case "Floyd Warren":
      image = floyd;
      break;
    case "Francisco Alexander":
      image = francisco;
      break;
    case "Lily Jones":
      image = lily;
      break;
    case "Lee Simmmons":
      image = lee;
      break;
    case "Colleen Warren":
      image = colleen;
      break;
    case "Bessie Alexander":
      image = bessie;
      break;
    default:
      image = "";
  }
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full">
      <Accordion type="single" collapsible className="border rounded-lg overflow-hidden w-full" onValueChange={() => setIsOpen(!isOpen)}>
        <AccordionItem value="item-1" className="border-0">
            <AccordionTrigger className={`p-4 hover:no-underline w-full ${isOpen ? 'bg-gray-200' : 'bg-white'} flex items-center justify-between`}>  
              
                <div className="flex items-center w-full gap-4">
               
                    <img className="size-10 rounded-full object-cover" src={image} alt={`${employee.name}'s profile`} />
                
                  <div className="flex items-center gap-8 w-full justify-between">
                    <span className="employee-card-text">{employee.name}</span>
                    <span className="employee-card-text">{employee.location}</span>
                    <span className="employee-card-text">{employee.state}</span>
                  </div>
               
                </div>
                
                <div className="flex items-center gap-2 flex-shrink-0">
                  <span className={`${isOpen ? 'bg-active-text text-white' : 'bg-active-bg text-active-text'} text-xs px-3 py-1 rounded-full`}>{employee.status}</span>
                </div>

            </AccordionTrigger>

          <AccordionContent className="pt-0 w-full bg-white">
            <div className="grid grid-cols-3 gap-6 p-4 w-full">
              <div className="text-left w-full ">
                <h3 className="text-purple-700 font-medium mb-4">Personal Detail</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <img src={phone} alt="phone" />
                    <span className="text-blue-500">{employee.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src={email} alt="email" />
                    <span className="text-blue-500 break-all">{employee.email}</span>
                  </div>
                </div>
              </div>

              <div className="text-left w-full ">
                <h3 className="text-gray-700 font-medium mb-4">Bio</h3>
                <p className="text-gray-600 w-full break-words">
                  {employee.bio}
                </p>
              </div>

              <div className="flex justify-start items-center w-full ">
                <p className="text-gray-600">
                  {employee.experience}
                </p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

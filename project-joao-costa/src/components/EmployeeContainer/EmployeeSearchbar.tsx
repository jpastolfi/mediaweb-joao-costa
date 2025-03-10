import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import chevron_down from "../../assets/chevron-down.svg";
import scrollbar_black from "../../assets/scrollbar-black.svg";
import scrollbar_transparent from "../../assets/scrollbar-transparent.svg";
import search from "../../assets/search.svg";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default function EmployeeSearchbar() {
  return (
    <div className="flex flex-col w-full">
      <div className='flex items-center justify-between w-full my-5 gap-x-10'>
        <div className="flex items-center gap-2 w-full border-0">
          <img className="size-6" src={search} alt="search" />
          <Input type="text" placeholder="Search for athlete profile data, workout and meditation sessions" className="border-0" />
        </div>
        <Popover>
        <PopoverTrigger asChild className="border-0 bg-light-blue">
            <Button variant="outline">
              <p className="font-thin">Advanced Filters</p>
              <img className="size-6" src={chevron_down} alt="chevron_down" />
              </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80 bg-white text-main-purple">
          <div className="grid gap-4">
            <div className="space-y-2">
              <h4 className="font-medium leading-none">Advanced Filters</h4>
              <p className="text-sm text-muted-foreground">
                Select how you want to filter the employees
              </p>
            </div>
            <div className="grid gap-2">
              <div className="filter-item-container">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  className="filter-item-input"
                  placeholder="Search by name"
                />
              </div>
              <div className="filter-item-container">
                <Label htmlFor="state">State</Label>
                <Input
                  id="state"
                  className="filter-item-input"
                  placeholder="Search by state"
                />
              </div>
              <div className="filter-item-container">
                <Label htmlFor="city">City</Label>
                <Input
                  id="city"
                  className="filter-item-input"
                  placeholder="Search by city"
                />
              </div>
              <div className="filter-item-container">
                <Label htmlFor="action">Action</Label>
                <Select>
                  <SelectTrigger className="filter-item-input">
                    <SelectValue placeholder="Select an action" id="action" defaultValue={"active"}/>
                  </SelectTrigger>
                  <SelectContent className="bg-white text-main-purple">
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="inactive">Inactive</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>   

      </div>
      <div className="flex items-center justify-between w-full mb-4">

        <div className="sort-item w-full justify-around">
          <div className="sort-item">
            <p>Name</p>
            <img className="size-4" src={scrollbar_transparent} alt="search" />
          </div>
          <div className="sort-item">
            <p>State</p>
            <img className="size-4" src={scrollbar_black} alt="search" />
          </div>
        </div>

        <div className="flex items-center w-full justify-between">
          <div className="pl-5 sort-item">
            <p>City</p>
            <img className="size-4" src={scrollbar_black} alt="search" />
          </div>
          <div className="sort-item">
            <p>Actions</p>
            <img className="size-4" src={scrollbar_black} alt="search" />
          </div>
        </div>
      </div>
    </div>
  )
}

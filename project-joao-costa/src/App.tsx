import './App.css'
import EmployeeContainer from './components/EmployeeContainer'
import EmployeeData from './components/EmployeeData'
import Sidebar from './components/Sidebar'




function App() {
  return (
    <div>
      <Sidebar />
      <EmployeeContainer />
      <EmployeeData />
    </div>
  )
}

export default App

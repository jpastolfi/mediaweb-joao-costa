import './App.css'

import config from '../public/config.svg'
import heart from '../public/heart.svg'
import home from '../public/home.svg'
import logo from '../public/logo.svg'
import pie_chart from '../public/pie-chart.svg'
import user from '../public/user.svg'


function App() {
  return (
    <div className='bg-black'>
      <img src={logo} className="logo" alt="Company logo" />
      <img src={config} className="logo" alt="Configuration icon" />
      <img src={heart} className="logo" alt="Heart icon" />
      <img src={home} className="logo" alt="Home icon" />
      <img src={pie_chart} className="logo" alt="Pie chart icon" />
      <img src={user} className="logo" alt="User icon" />
    </div>
  )
}

export default App

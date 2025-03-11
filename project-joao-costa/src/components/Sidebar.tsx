import config from '../assets/config.svg'
import heart from '../assets/heart.svg'
import home from '../assets/home.svg'
import logo_arrow from '../assets/logo-arrow.svg'
import logo from '../assets/logo.svg'
import pie_chart from '../assets/pie-chart.svg'
import user from '../assets/user.svg'

export default function Sidebar() {
  return (
    <div className='flex flex-col items-center justify-between h-screen w-1/12 bg-main-purple rounded-r-3xl py-6 absolute left-0 z-1'>
      <div className='flex items-center justify-center gap-2'>
        <img src={logo} className="w-9 h-7" alt="Company logo" />
        <img src={logo_arrow} className="size-6" alt="Expand arrow" />
      </div>
      <div className='flex flex-col items-center justify-center gap-6'>
        <img src={heart} className="size-6" alt="Heart icon" />
        <img src={home} className="size-6" alt="Home icon" />
        <img src={pie_chart} className="size-6" alt="Pie chart icon" />
        <img src={user} className="size-12" alt="User icon" />
      </div>
      <div>
        <img src={config} className="size-6" alt="Configuration icon" />
      </div>
    </div>
  )
}

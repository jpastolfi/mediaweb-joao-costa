import config from '../../public/config.svg'
import heart from '../../public/heart.svg'
import home from '../../public/home.svg'
import logo_arrow from '../../public/logo-arrow.svg'
import logo from '../../public/logo.svg'
import pie_chart from '../../public/pie-chart.svg'
import user from '../../public/user.svg'

export default function Sidebar() {
  return (
    <div className='flex flex-col items-center justify-between h-screen w-1/12 bg-main-purple rounded-r-3xl py-6 absolute left-0'>
      <div className='flex items-center justify-center gap-2'>
        <img src={logo} className="w-9 h-7" alt="Company logo" />
        <img src={logo_arrow} className="w-6 h-6" alt="Expand arrow" />
      </div>
      <div className='flex flex-col items-center justify-center gap-6'>
        <img src={heart} className="w-6 h-6" alt="Heart icon" />
        <img src={home} className="w-6 h-6" alt="Home icon" />
        <img src={pie_chart} className="w-6 h-6" alt="Pie chart icon" />
        <img src={user} className="w-12 h-12" alt="User icon" />
      </div>
      <div>
        <img src={config} className="w-6 h-6" alt="Configuration icon" />
      </div>
    </div>
  )
}

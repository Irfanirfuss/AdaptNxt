import './index.css'
import {HiMiniBars3BottomRight} from 'react-icons/hi2'
import {FaRegMoon, FaRegBell} from 'react-icons/fa'

import {TbCalendarDollar} from 'react-icons/tb'

const NavigationBar = () => (
  <div className="nav">
    <div>
      <HiMiniBars3BottomRight size={25} />
    </div>
    <div className="n">
      <FaRegMoon size={25} className="i" />
      <FaRegBell size={25} className="i" />
      <TbCalendarDollar size={25} className="i" />
    </div>
  </div>
)

export default NavigationBar

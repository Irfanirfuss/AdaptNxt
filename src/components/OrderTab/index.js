import './index.css'

import {IoShareSocial} from 'react-icons/io5'

const OrderTab = props => {
  const {data} = props
  console.log(data)
  const {name} = data
  return (
    <li className="tab">
      {' '}
      <IoShareSocial />
      <p>{name}</p>
    </li>
  )
}

export default OrderTab

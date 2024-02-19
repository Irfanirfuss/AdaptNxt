import {FaFileInvoiceDollar} from 'react-icons/fa'
import {IoIosArrowDown} from 'react-icons/io'

import './index.css'

const TransactionDetails = props => {
  const {data} = props
  const {orderNo, status, city, customerName, orderValue, date} = data
  return (
    <li className="details">
      <p className="plus">+</p>
      <input type="checkbox" />
      <FaFileInvoiceDollar color="green" size={20} />
      <p>{orderNo}</p>
      <p>{date}</p>
      <p>{city}</p>
      <p>{customerName}</p>
      <p>{orderValue}</p>
      <button type="button">{status}</button>
      <button type="button">
        Actions <IoIosArrowDown />
      </button>
    </li>
  )
}

export default TransactionDetails

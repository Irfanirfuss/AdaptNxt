import {Component} from 'react'

import {HiMiniArrowsUpDown} from 'react-icons/hi2'

import {MdPrint, MdDiscount, MdOutlineSpaceDashboard} from 'react-icons/md'

import {GoListOrdered} from 'react-icons/go'

import {IoReload, IoSend, IoShareSocial} from 'react-icons/io5'

import {FiTruck} from 'react-icons/fi'
import {FaFileImport} from 'react-icons/fa6'

import {v4} from 'uuid'

import NavigationBar from '../NavigationBar'
import OrdersTab from '../OrderTab'
import OrderTable from '../OrderTable'
import TransactionDetails from '../TransactionDetails'
import './index.css'

const tabs = [
  {id: v4(), name: 'Dashboard', MdOutlineSpaceDashboard},
  {id: v4(), name: 'inventory', MdDiscount},
  {id: v4(), name: 'orders', GoListOrdered},
  {id: v4(), name: 'shipping', FiTruck},
  {id: v4(), name: 'channel', IoShareSocial},
]

const tables = [
  {id: 'pending', name: 'Pending'},
  {id: 'accepted', name: 'Accepted'},
  {id: 'AWB created', name: 'AWB created'},
  {id: 'Ready to ship', name: 'Ready to ship'},
  {id: 'shipped', name: 'Shipped'},
  {id: 'completed', name: 'Completed'},
  {id: 'canceled', name: 'Canceled'},
]

const transactionDetails = [
  {
    id: v4(),
    orderNo: 'TKN202034',
    date: '2020-5-03',
    city: 'hyderabad',
    customerName: 'arjun',
    orderValue: 870,
    status: 'pending',
  },
  {
    id: v4(),
    orderNo: 'TKN202065',
    date: '2020-5-08',
    city: 'bangalore',
    customerName: 'arun',
    orderValue: 340,
    status: 'Active',
  },
  {
    id: v4(),
    orderNo: 'TKN202014',
    date: '2020-7-03',
    city: 'vizag',
    customerName: 'irfan',
    orderValue: 350,
    status: 'pending',
  },
  {
    id: v4(),
    orderNo: 'TKN202004',
    date: '2022-5-03',
    city: 'hyderabad',
    customerName: 'afreen',
    orderValue: 450,
    status: 'active',
  },
  {
    id: v4(),
    orderNo: 'TKN202034',
    date: '2020-5-03',
    city: 'kurnool',
    customerName: 'vinods',
    orderValue: 4550,
    status: 'pending',
  },
  {
    id: v4(),
    orderNo: 'TKN206034',
    date: '2020-5-73',
    city: 'hyderabad',
    customerName: 'shifa',
    orderValue: 450,
    status: 'active',
  },
  {
    id: v4(),
    orderNo: 'TKN202034',
    date: '2020-5-03',
    city: 'hyderabad',
    customerName: 'mahid',
    orderValue: 560,
    status: 'pending',
  },
  {
    id: v4(),
    orderNo: 'TKN202034',
    date: '2020-5-03',
    city: 'MPL',
    customerName: 'shahina',
    orderValue: 870,
    status: 'Active',
  },
  {
    id: v4(),
    orderNo: 'TKN202034',
    date: '2020-5-03',
    city: 'hyderabad',
    customerName: 'abdfds',
    orderValue: 0,
    status: 'pending',
  },
  {
    id: v4(),
    orderNo: 'TKN202034',
    date: '2020-5-03',
    city: 'hyderabad',
    customerName: 'abdfds',
    orderValue: 0,
    status: 'pending',
  },
  {
    id: v4(),
    orderNo: 'TKN202034',
    date: '2020-5-03',
    city: 'hyderabad',
    customerName: 'abdfds',
    orderValue: 0,
    status: 'pending',
  },
  {
    id: v4(),
    orderNo: 'TKN202034',
    date: '2020-5-03',
    city: 'hyderabad',
    customerName: 'abdfds',
    orderValue: 0,
    status: 'pending',
  },
]

class Orders extends Component {
  render() {
    return (
      <div className="main">
        <div>
          <NavigationBar />
        </div>
        <div className="orders-section">
          <ul className="orders-tab">
            {tabs.map(each => (
              <OrdersTab key={each.id} data={each} />
            ))}
          </ul>
          <div className="table-container">
            <ul className="sections">
              {tables.map(each => (
                <OrderTable key={each.id} data={each} />
              ))}
            </ul>
            <div className="orders-table">
              <div className="btn-container">
                <div className="b">
                  <button className="btn" type="button">
                    {' '}
                    <FaFileImport /> Import Orders
                  </button>
                  <button className="btn" type="button">
                    <IoSend />
                    Accept
                  </button>
                  <button className="btn" type="button">
                    <MdPrint />
                    Print
                  </button>
                </div>
                <button className="refresh" type="button">
                  {' '}
                  <IoReload color="#fff" size={20} />
                  Refresh
                </button>
              </div>

              <ul className="transaction-container">
                <li className="li">
                  <input type="checkbox" />
                </li>
                <li className="li">
                  Channel <HiMiniArrowsUpDown />
                </li>
                <li className="li">
                  Order No <HiMiniArrowsUpDown />
                </li>
                <li className="li">
                  Date <HiMiniArrowsUpDown />
                </li>
                <li className="li">
                  City <HiMiniArrowsUpDown />
                </li>
                <li className="li">
                  Customer Name <HiMiniArrowsUpDown />
                </li>
                <li className="li">
                  Order value <HiMiniArrowsUpDown />
                </li>
                <li className="li">
                  Status <HiMiniArrowsUpDown />
                </li>
                <li className="li">
                  Operation <HiMiniArrowsUpDown />
                </li>
              </ul>
              <ul>
                {transactionDetails.map(each => (
                  <TransactionDetails key={each.id} data={each} />
                ))}
              </ul>
            </div>{' '}
          </div>
        </div>
      </div>
    )
  }
}
export default Orders

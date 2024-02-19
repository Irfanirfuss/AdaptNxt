import './index.css'

const OrderTable = props => {
  const {data} = props
  const {name} = data
  return (
    <li className="section">
      <button type="button" className="button">
        {name}
      </button>
    </li>
  )
}

export default OrderTable

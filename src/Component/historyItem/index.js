import './index.css'

const HistoryItem = props => {
  const {display, onDelete} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = display

  const onDeleteItem = () => {
    onDelete(id)
  }

  return (
    <li className="list-container">
      <p className="time">{timeAccessed}</p>
      <div className="logo-container">
        <img className="logo" src={logoUrl} alt="domain logo" />
        <p className="domain-name">{title}</p>
        <p className="domain-url">{domainUrl}</p>
      </div>
      <button onClick={onDeleteItem} type="button" className="delete-button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default HistoryItem

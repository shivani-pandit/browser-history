const HistoryItem = props => {
  const {details, UpdateSearch, deleteHistory} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = details

  const ondeleteTodo = () => {
    deleteHistory(id)
  }

  return (
    <li className="app">
      <div className="app">
        <p className="para">{timeAccessed}</p>
        <img
          src={logoUrl}
          className="apps-img"
          alt="domain logo"
          value={logoUrl}
        />
        <p>{title}</p>
        <p alt="domain logo" value="logoUrl">
          {domainUrl}
        </p>
      </div>
      <button onClick={ondeleteTodo} type="button" data-testid="delete">
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default HistoryItem

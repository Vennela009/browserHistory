import './index.css'

import {Component} from 'react'

import HistoryItem from '../historyItem'

class BrowserHistory extends Component {
  state = {searchInput: '', historyList: []}

  componentDidMount() {
    const {initialHistoryList} = this.props
    this.setState({historyList: initialHistoryList})
  }

  requestSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  filterData = () => {
    const {searchInput, historyList} = this.state
    const updateList = historyList.filter(eachList =>
      eachList.title.toLowerCase().includes(searchInput),
    )
    return updateList
  }

  deleteHistory = id => {
    const {historyList} = this.setState
    const deleteItemList = historyList.filter(eachList => eachList.id !== id)
    this.setState({historyList: deleteItemList})
  }

  render() {
    const {searchInput} = this.state

    const filterDataList = this.filterData()

    return (
      <div>
        <div className="navbar-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
          />
          <div className="search-input-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
              className="search"
            />
            <div>
              <input
                className="input-background"
                type="search"
                placeholder="Search history"
                value={searchInput}
                onChange={this.requestSearch}
              />
            </div>
          </div>
        </div>
        {filterDataList.length === 0 ? (
          <p className="no-history">There is no history to show</p>
        ) : (
          <ul className="unorder-list">
            {filterDataList.map(eachList => (
              <HistoryItem
                key={eachList.id}
                onDelete={this.deleteHistory}
                display={eachList}
              />
            ))}
          </ul>
        )}
      </div>
    )
  }
}
export default BrowserHistory

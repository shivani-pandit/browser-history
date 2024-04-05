import {Component} from 'react'

import HistoryItem from '../HistoryItem'

import './index.css'

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

class BrowserHistory extends Component {
  state = {
    inputSearch: '',
    isShow: false,
    HistoryList: initialHistoryList,
  }

  UpdateSearch = value => {
    this.setState({
      inputSearch: value,
    })
  }

  onChangeSearchInput = event => {
    this.setState({
      inputSearch: event.target.value,
    })
  }

  deleteHistory = id => {
    const {HistoryList} = this.state
    const filterUserData = HistoryList.filter(each => each.id !== id)

    this.setState({
      HistoryList: filterUserData,
    })
    if (HistoryList.length === 1) {
      this.setState({isShow: true})
      console.log(HistoryList.length)
    }
  }

  render() {
    const {inputSearch, HistoryList} = this.state

    const searchResult = HistoryList.filter(eachList =>
      eachList.title.toLowerCase().includes(inputSearch.toLowerCase()),
    )

    return (
      <div className="">
        <div className="bg-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            className="history-img"
            alt="app logo"
          />
          <div className="container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png "
              className="img-logo"
              alt="search"
            />
            <input
              type="search"
              alt="search"
              className="search-img"
              placeholder="search input"
              onChange={this.onChangeSearchInput}
            />
          </div>
        </div>
        <div className="scnd-container">
          <ul>
            {searchResult.length === 0 ? (
              <p className="error">There is no history to show</p>
            ) : (
              searchResult.map(eachList => (
                <HistoryItem
                  key={eachList.id}
                  details={eachList}
                  UpdateSearch={this.UpdateSearch}
                  deleteHistory={this.deleteHistory}
                />
              ))
            )}
          </ul>
        </div>
      </div>
    )
  }
}
export default BrowserHistory

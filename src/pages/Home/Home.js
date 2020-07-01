import React from 'react'
import logo from './logo.svg'
import './Home.css'


export class Home extends React.Component {
  render () {
    return (
      <React.StrictMode>
        <div className='App'>
          <header className='App-header'>
            <img src={logo} className='App-logo' alt='logo'/>
          </header>
        </div>
      </React.StrictMode>
    )
  }
}

export default Home

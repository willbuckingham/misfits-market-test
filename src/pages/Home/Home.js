import React from 'react'
import {
  Grid,
} from '@material-ui/core'

import logo from './logo.svg'
import './Home.css'

import Page from '../../components/Page'
import Item from './Item'

export class Home extends React.Component {
  
  // TENTATIVE STORE LOCATED AT PAGE LEVEL
  state = {
    market: {
      msg: '',
      data: {},
    },
    selection: [],
  }

  componentDidMount() {
    fetch('https://applicant-dev.misfitsmarket.com/api/test/v1', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          market: data,
        })
      })
  }

  render () {
    const { market } = this.state

    return (
      <React.StrictMode>
        <Page>
          { !market.msg ?
            <img src={logo} className='App-logo' alt='logo'/> :
            <Grid container spacing={3}>
              { market?.data?.items?.map(v => 
                <Grid item key={v.id} xl={2} lg={3} md={3} sm={4} xs={ 12 }>
                  <Item { ...v } />
                </Grid>
              ) }
            </Grid>
          }
        </Page>
      </React.StrictMode>
    )
  }
}

export default Home

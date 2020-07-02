import React from 'react'
import {
  Grid,
  Snackbar,
} from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'

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
    cart: [],
    notificationOpen: false,
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

  handleAdd = (entry) => {
    this.setState({
      cart: [
        ...this.state.cart,
        entry,
      ],
      notificationOpen: true,
    })
  }

  handleNotifcationClose = () => {
    this.setState({
      notificationOpen: false,
    })
  }

  render () {
    const { market, cart, notificationOpen } = this.state

    const cartItems = cart.reduce((a,v) => a + parseInt(v.quantity), 0)

    return (
      <>
        <Page cartItems={cartItems}>
          { !market.msg ?
            <img src={logo} className='App-logo' alt='logo'/> :
            <Grid container spacing={3}>
              { market?.data?.items?.map(v => 
                <Grid item key={v.id} xl={2} lg={3} md={3} sm={4} xs={ 12 }>
                  <Item { ...v } onAdd={this.handleAdd} />
                </Grid>
              ) }
            </Grid>
          }
          <Snackbar open={notificationOpen} autoHideDuration={3000} onClose={this.handleNotifcationClose}>
            <Alert variant='filled' elevation={6} onClose={this.handleNotifcationClose} severity='success'>
              Item added to Cart!
            </Alert>
          </Snackbar>
        </Page>
      </>
    )
  }
}

export default Home

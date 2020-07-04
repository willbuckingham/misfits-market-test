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
    const existingEntry = this.state.cart.find(v => v.id === entry.id)

    this.setState({
      cart: existingEntry ?
        this.state.cart.map(v => v.id === entry.id ? { ...v, quantity: v.quantity + entry.quantity } : v) :
        this.state.cart.concat(entry),
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
    
    const cartItems = market?.data?.items?.map(v => {
      const quantity = cart.find(c => v.id === c.id)?.quantity || 0

      return {
        ...v,
        quantity,
      }
    }).filter((v => v.quantity))

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

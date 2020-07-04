import React from 'react'
import PropTypes from 'prop-types'
import {
  AppBar,
  Toolbar,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import CartPopover from '../CartPopover'

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  main: {
    margin: spacing(3),
  },
}))

const Page = ({ cartItems, children }) => {
  const classes = useStyles()

  return (
    <div>
      <AppBar position='static'>
        <Toolbar>
          <div className={classes.title}>
            <img src='https://cdn.shopify.com/s/files/1/0021/1750/1026/t/10/assets/misfits-market-header-logo.svg?v=16445708347985634275' alt='Misfits Market' title='Misfits Market' height='48' />
          </div>
          <CartPopover cartItems={cartItems} />
        </Toolbar>
      </AppBar>
      <main className={classes.main}>
        { children }
      </main>
    </div>
  )
}

Page.propTypes = {
  children: PropTypes.node.isRequired,
  cartItems: PropTypes.array,
}

export default Page

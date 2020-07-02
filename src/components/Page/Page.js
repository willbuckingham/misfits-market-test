import React from 'react'
import propTypes from 'prop-types'
import {
  AppBar,
  Badge,
  Toolbar,
  IconButton,
  Typography,
  // Button,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { 
  // Menu,
  ShoppingCart,
} from '@material-ui/icons'

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
          {/* <IconButton edge='start' className={classes.menuButton} color='inherit' aria-label='menu'>
            <Menu />
          </IconButton> */}
          <Typography variant='h6' className={classes.title}>
            <img src='https://cdn.shopify.com/s/files/1/0021/1750/1026/t/10/assets/misfits-market-header-logo.svg?v=16445708347985634275' alt='Misfits Market' title='Misfits Market' height='48' />
          </Typography>
          <IconButton color='inherit'>
            <Badge badgeContent={cartItems} color='secondary'>
              <ShoppingCart/>
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <main className={classes.main}>
        { children }
      </main>
    </div>
  )
}

Page.propTypes = {
  children: propTypes.node.isRequired,
}

export default Page

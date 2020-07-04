import React, { useState } from 'react'
import propTypes from 'prop-types'
import {
  Badge,
  IconButton,
  Popover,
  Button,
  Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { 
  ShoppingCart,
} from '@material-ui/icons'

import Item from './Item'
import { formatCurrency } from '../../utils'

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    maxWidth: '100%',
  },
  content: {
    padding: spacing(1),
    width: 500,
    maxWidth: '100%',
  },
  empty: {
    margin: spacing(8),
  },
}))

const CartPopover = ({ cartItems }) => {
  const classes = useStyles()

  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const isEmpty = !cartItems.length
  const count = cartItems.reduce((a,v) => a + parseInt(v.quantity), 0) || 0
  const total = cartItems.reduce((a,v) => a + v.quantity * v.price, 0) || 0

  return (
    <>
      <IconButton color='inherit' onClick={ handleClick }>
        <Badge badgeContent={count} color='secondary'>
          <ShoppingCart/>
        </Badge>
      </IconButton>

      <Popover 
        open={open}
        onClose={handleClose}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <div className={classes.content}>
          <Typography variant='h6'>Items ({count})</Typography>
          <hr/>
          { isEmpty ?
            <Typography variant='body1' align='center' className={classes.empty}>Cart Empty!</Typography> :
            cartItems.map(v => <Item key={v.id} { ...v } />)
          }
          <Button
            variant='contained'
            color='primary'
            disabled={isEmpty}
            fullWidth
            onClick={() => alert('not broken, done in next Ticket ;-)')}
          >
            <Typography>Checkout { !!total && formatCurrency(total) }</Typography>
          </Button>
        </div>
      </Popover>
    </>
  )
}

CartPopover.propTypes = {
  cartItems: propTypes.array,
}

CartPopover.defaultProps = {
  cartItems: [],
}

export default CartPopover

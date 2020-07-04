import React from 'react'
import PropTypes from 'prop-types'
import {
  Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { formatCurrency } from './../../utils'

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    display: 'flex',
  },
  textarea: {
    padding: spacing(1),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flexGrow: 1,
  },
  price: {
    display: 'flex',
    alignItems: 'center',
  },
}))

const Item = props => {
  const classes = useStyles()

  const { product, price, quantity } = props

  return (
    <>
      <div className={classes.root}>
        <img src='/fruit.jpg' alt={product} title={product} height={80} />
        <div className={classes.textarea}>
          <Typography>{product}</Typography>
          <Typography color='textSecondary'>{formatCurrency(price)} x {quantity}</Typography>
        </div>
        <div className={classes.price}>
          <Typography variant='h6'>{formatCurrency(price * quantity)}</Typography>
        </div>
      </div>
      <hr/>
    </>
  )
}

Item.propTypes = {
  product: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
}

export default Item

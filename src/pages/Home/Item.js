import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  // IconButton,
  Typography,
  // Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Fab,
  TextField,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { 
  AddShoppingCart,
} from '@material-ui/icons'

const useStyles = makeStyles(({ spacing }) => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardContent: {
    flexGrow: 2,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  product: {
    lineHeight: 1.2,
  },
  priceContainer: {
    display: 'flex',
    alignItems: 'start',
    justifyContent: 'center',
    marginTop: spacing(1),
  },
  price: {
    fontWeight: 'bold',
  },
  msrp: {
    textDecoration: 'line-through',
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'space-between',
    height: spacing(6),
    padding: spacing(2),
  },
}))

export const formatCurrency = v =>
  '$' + v.toFixed(2)

export const calcSavings = (msrp, price) => {
  const savingsExact = price < msrp ? (1 - price / msrp) * 100 : 0
  return Math.round(savingsExact / 5) * 5
}

const Item = props => {
  const classes = useStyles()

  const [ quantity, setQuantity ] = useState(1)

  const { id, product, price, msrp, soldOut } = props
  const savings = calcSavings(msrp, price)

  const onClickAdd = () => {
    props.onAdd({
      id,
      quantity,
    })
    setQuantity(1)
  }

  return (
    <Card className={classes.card}>

      <CardMedia
        component='img'
        image='/logo512.png'
        title={product}
        alt={product}
        height={200}
      />
      <CardContent className={classes.cardContent}>
        <Typography
          variant='h6'
          className={classes.product}
        >
          {product}
        </Typography>
        <div className={classes.priceContainer}>
          <Typography display='inline' variant='body1' color='primary' className={classes.price}>{formatCurrency(price)}</Typography>
          &nbsp;
          <Typography display='inline' variant='caption' color='textSecondary' className={classes.msrp} >{formatCurrency(msrp)}</Typography>
          &nbsp;
          { savings && <Typography display='inline' variant='caption' color='textSecondary'>{`${savings}% off MSRP`}</Typography> }
        </div>
      </CardContent>
      <CardActions className={classes.cardActions}>
        { soldOut ?
          <Typography color='error'>Sold Out!</Typography> :
          <>
            <TextField 
              value={quantity}
              onChange={ evt => setQuantity(evt.target.value) }
              label='Quantity'
              type='number'
              inputProps={{ min: 1, max: 99 }}
            />
            <Fab color='secondary' size='small' onClick={onClickAdd}>
              <AddShoppingCart/>
            </Fab>
          </>
        }
      </CardActions>
    </Card>
  )
}

Item.propTypes = {
  id: PropTypes.number.isRequired,
  product: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  msrp: PropTypes.number.isRequired,
  soldOut: PropTypes.bool.isRequired,
}

export default Item

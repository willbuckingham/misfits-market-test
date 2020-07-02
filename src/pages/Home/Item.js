import React from 'react'
import PropTypes from 'prop-types'
import {
  // IconButton,
  Typography,
  // Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  // CardActionArea,
  Fab,
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
}))

export const formatCurrency = v =>
  '$' + v.toFixed(2)

export const calcSavings = (msrp, price) => {
  const savingsExact = price < msrp ? (1 - price / msrp) * 100 : 0
  return Math.round(savingsExact / 5) * 5
}

const Item = props => {
  const classes = useStyles()

  const { id, product, price, msrp, soldOut } = props
  const savings = calcSavings(msrp, price)

  return (
    <Card className={classes.card}>

      <CardMedia
        component='img'
        image='/logo192.png'
        title={product}
        alt={product}
        height={125}
      />
      <CardContent className={classes.cardContent}>
        <Typography
          variant='h6'
          className={classes.product}
        >
          {product}
        </Typography>
        <div className={classes.priceContainer}>
          <Typography display='inline' color='primary' className={classes.price}>{formatCurrency(msrp)}</Typography>
          &nbsp;
          <Typography display='inline' variant='caption' className={classes.msrp} color='textSecondary'>{formatCurrency(price)}</Typography>
          &nbsp;
          { savings && <Typography display='inline' variant='caption' color='textSecondary'>{`${savings}% off MSRP`}</Typography> }
        </div>
      </CardContent>
      <CardActions>
        { soldOut ?
          <Typography color='error'>Sold Out!</Typography> :
          <Fab color='secondary' size='small'>
            <AddShoppingCart/>
          </Fab>
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

import { handleActions } from 'redux-actions'

import * as actions from '../actions/app'

export default handleActions({
  [actions.initApp]: _ => ({
    ..._,
    loading: true,
  }),
}, {
  loading: false,
})

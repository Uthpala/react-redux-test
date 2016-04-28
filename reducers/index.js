import { combineReducers } from 'redux'
import ReducerFilter from './ReducerFilter'

const rootReducer = combineReducers({
  filter : ReducerFilter
})

export default rootReducer
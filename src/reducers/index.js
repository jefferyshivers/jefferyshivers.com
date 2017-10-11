import { combineReducers } from 'redux';
import { navigation } from './navigation'
import { layout } from './layout'

const application = combineReducers({
  navigation,
  layout
});

export default application;
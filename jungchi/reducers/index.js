import {combineReducers} from 'redux';
import BoardSelector from './boardSelector';

export default combineReducers({
  partyId: BoardSelector,
});

import types from '../actions/types';

const currentId = 0;

export default (state = currentId, action) => {
  switch (action.type) {
    case types.SELECT_BOARD:
      return (state = action.partyId);
    default:
      return state;
  }
};

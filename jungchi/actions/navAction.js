import types from './types';

export function selectBoard(_partyId) {
  return {
    type: types.SELECT_BOARD,
    partyId: _partyId,
  };
}

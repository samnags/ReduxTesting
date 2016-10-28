import { expect } from '../test_helper'
import commentReducer from '../../src/reducers/comments';
import { SAVE_COMMENT } from '../../src/actions/types';

// two things to test for reduce
 // 1. need to test default case for a reducer (an action that it won't respond to )
 // 2. each possible action reducer cares about

// eq is comparing
// equal is a deep comparision. every value is same


describe('Comments Reducer', () => {
  it('handles action with unknown type', () => {
    expect(commentReducer(undefined, {})).to.eql([]);
  })

  it('SAVE_COMMENT', () => {
    const action = { type: SAVE_COMMENT, payload: 'new comment' };
    expect(commentReducer([], action)).to.eql(['new comment']);
  })
})

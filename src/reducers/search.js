/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */
import {SEARCH} from '../actions/const';
const initialState = {
  repos:[],
  mainSearch: [],
  repoName: ""
};

function reducer(state = initialState, action) {
  /* Keep the reducer clean - do not mutate the original state. */
  const nextState = Object.assign({}, state);

  switch (action.type) {

    case SEARCH: {

      nextState.repos=action.repos;
      console.log(nextState);
      return nextState;
    }
    default: {
      /* Return original state if no actions were consumed. */
      return state;
    }
  }
}

module.exports = reducer;

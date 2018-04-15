/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */
import {SEARCH} from '../actions/const';
const initialState = {
  repos:[],
  mainSearch: []
};

function reducer(state = initialState, action) {
  /* Keep the reducer clean - do not mutate the original state. */
  const nextState = Object.assign({}, state);

  switch (action.type) {

    case SEARCH: {
      // $.ajax({
      //     method: 'GET',
      //     url: 'https://api.github.com/search/repositories?q=gitber',
      //     success: data => console.log(data),
      //     error: data => console.log(data)
      // })

      fetch(`https://api.github.com/search/repositories?q=${action.repoName}`).then(response => {
        return response.json();
      }).then(result => {
        nextState.repos = result
        nextState.repo = action.repo;
        return nextState;
      })
    }
    default: {
      /* Return original state if no actions were consumed. */
      return state;
    }
  }
}

module.exports = reducer;

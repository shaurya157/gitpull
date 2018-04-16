import { SEARCH } from './const';

function action(repos) {
  return { type: SEARCH, repos };
}

module.exports = action;

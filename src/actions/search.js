import { SEARCH } from './const';

function action(repo) {
  return { type: SEARCH, repo };
}

module.exports = action;

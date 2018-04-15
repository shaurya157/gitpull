import { SEARCH } from './const';

function action(repoName) {
  return { type: SEARCH, repoName };
}

module.exports = action;

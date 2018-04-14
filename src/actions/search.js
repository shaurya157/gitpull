import { SEARCH } from './const';

function action(parameter) {
  return { type: SEARCH, parameter };
}

module.exports = action;

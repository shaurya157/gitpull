import React from 'react';
import { shallow } from 'enzyme';
import SearchResult from 'components\SearchResult.js';

describe('<SearchResult />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<SearchResult />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "searchresult-component"', function () {
      expect(component.hasClass('searchresult-component')).to.equal(true);
    });
  });
});

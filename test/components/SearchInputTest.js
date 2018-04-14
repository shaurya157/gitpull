import React from 'react';
import { shallow } from 'enzyme';
import SearchInput from 'components\SearchInput.js';

describe('<SearchInput />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<SearchInput />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "searchinput-component"', function () {
      expect(component.hasClass('searchinput-component')).to.equal(true);
    });
  });
});

import * as React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import { OwnerInfo } from './OwnerInfo';

describe('OwnerInfo', () => {
  const makeWrapper = (newProps = {}) => {
    const defaultProps = {
      _id: '1',
      fullName: 'test',
      phone: '3123',
      email: 'test@gmail.com',
    };
    const props = { ...defaultProps, ...newProps };

    const wrapper = shallow(<OwnerInfo {...props} />);
    return { props, wrapper };
  };

  it('Should render the component', () => {
    const { wrapper } = makeWrapper();
    expect(wrapper.find('div')).to.have.lengthOf(1);
  });

  it('Should render the correct fields', () => {
    const { wrapper, props } = makeWrapper();

    const fullName = wrapper.find('p').at(0);
    const phone = wrapper.find('p').at(1);
    const email = wrapper.find('p').at(2);

    const expected = {
      fullName: `Name:  ${props.fullName}`,
      phone: `Phone:  ${props.phone}`,
      email: `Contact:  ${props.email}`,
    };
    expect(fullName.text()).to.eq(expected.fullName);
    expect(phone.text()).to.eq(expected.phone);
    expect(email.text()).to.eq(expected.email);
  });
});

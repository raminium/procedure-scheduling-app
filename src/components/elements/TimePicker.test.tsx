import React from 'react';
import { shallow, ShallowWrapper, HTMLAttributes } from 'enzyme';

import TimePicker from './TimePicker';

const mockHandleTimeChange = jest.fn();
const mockValue = new Date('2020-01-01');

const setup = (): ShallowWrapper<HTMLAttributes> => {
  const date = null;
  const wrapper = shallow(
    <TimePicker
      time={date}
      handleTimeChange={mockHandleTimeChange}
    />,
  );
  const component = wrapper.find('#time-picker');
  return component;
};

describe('TimePicker', () => {
  beforeEach(() => {
    mockHandleTimeChange.mockClear();
  });
  it('renders without errors', () => {
    const datePicker = setup();
    expect(datePicker.exists()).toBe(true);
  });
  it('calls handleTimeChange function with time argument', () => {
    const datePicker = setup();

    datePicker.simulate('change', mockValue);
    expect(mockHandleTimeChange).toHaveBeenCalledWith(mockValue);
  });
});

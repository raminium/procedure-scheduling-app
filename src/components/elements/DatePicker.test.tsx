import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import DatePicker from './DatePicker';

const mockHandleDateChange = jest.fn();
const mockValue = new Date('2020-01-01');

const setup = (): ShallowWrapper => {
  const date = null;
  const wrapper = shallow(
    <DatePicker
      date={date}
      handleDateChange={mockHandleDateChange}
    />,
  );
  const component = wrapper.find('#date-picker');
  return component;
};

describe('DatePicker', () => {
  beforeEach(() => {
    mockHandleDateChange.mockClear();
  });
  it('renders without errors', () => {
    const datePickerComponent = setup();
    expect(datePickerComponent.exists()).toBe(true);
  });
  it('calls handleDateChange function with date argument', () => {
    const datePicker = setup();

    datePicker.simulate('change', mockValue);
    expect(mockHandleDateChange).toHaveBeenCalledWith(mockValue);
  });
});

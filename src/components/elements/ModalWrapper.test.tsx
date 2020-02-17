import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import ModalWrapper from './ModalWrapper';
import store from '../../store/store';

describe('ModalWrapper', () => {
  let getByTestId: any;
  beforeEach(() => {
    ({ getByTestId } = render(
      <Provider store={store}>
        <ModalWrapper form={<div />}>
          <div />
        </ModalWrapper>
      </Provider>,
    ));
  });
  it('renders modalWrapper without errors', () => {
    const modalWrapper: HTMLElement = getByTestId('modal-wrapper');
    expect(modalWrapper).toBeInTheDocument();
  });
  it('does not render modal', () => {
    expect(() => { getByTestId('modal'); }).toThrowError();
  });
  it('renders modal upon click on modal button wrapper', () => {
    const modalButtonWrapper: HTMLElement = getByTestId('modal-button-wrapper');
    fireEvent.click(modalButtonWrapper);

    const modal: HTMLElement = getByTestId('modal');
    expect(modal).toBeInTheDocument();
    expect(modal).toBeVisible();
  });
});

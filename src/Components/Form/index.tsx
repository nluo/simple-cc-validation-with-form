import * as React from 'react';
import './style.css';

import getCreditCardType from '../../validation/getCreditCardType';
import validateCC from '../../validation/validateCC';

export default class CreditCardForm extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      creditCardNumber: '',
      cardHolderName: '',
      renderResult: false,
      creditCardError: false
    };
  }

  private handleCardNumberInput = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    const input = e.target as HTMLInputElement;
    if (Number.isNaN(Number(input.value))) {
      return;
    }
    this.setState({
      creditCardNumber: input.value
    });
  }
  private validateCCInput = (creditCardNumber: string): void | boolean => {
    if (creditCardNumber === '') {
      return;
    }
    return validateCC(creditCardNumber)
  }

  private handleSubmit = (e: any) => {
    e.preventDefault();
    // const {creditCardNumber, cardHolderName} = this.state;
    this.setState({
      renderResult: true
    })
  }
  private onBlur = (e: any) => {
    const { creditCardNumber } = this.state;
    if (!validateCC(creditCardNumber)) {
      this.setState({creditCardError: true});
    }
  }
  public render() {
    const { creditCardNumber, renderResult, creditCardError } = this.state;
    return (
      <div>
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="form_header">
            <h4> Credit Card Details </h4>
          </div>
          <div className="form-group ">
            <label className="label"> Name On Card </label>
            <input
              className="form-control"
              placeholder="Bob Smith"
              type="text" required />
          </div>

          <div className="form-group">
            <label className="label"> Credit Card </label>
            <input
              className="form-control"
              value={creditCardNumber}
              type="text"
              onChange={this.handleCardNumberInput}
              onBlur= {this.onBlur}
              required />
            {creditCardError ? <label className="label-error"> Please enter a valid credit card </label> : null }
          </div>

          <button type="submit"> Submit </button>
        </form>

        <div className="result">
          {renderResult === true ? (
            <div>
              <p> {getCreditCardType(creditCardNumber)} </p>
              <p> {this.validateCCInput(creditCardNumber) === true ? 'Valid' : 'Invalid'} </p>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}
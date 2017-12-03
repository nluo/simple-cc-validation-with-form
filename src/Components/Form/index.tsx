import * as React from 'react';
import './style.css';

import getCreditCardType from '../../validation/getCreditCardType';
import validateCC from '../../validation/validateCC';
import InputField from './InputField';

export default class CreditCardForm extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      creditCardNumber: '',
      cardHolderName: '',
      renderResult: false,
      showCreditCardExtra: false,
      creditCardExtraMsg: ''
    };
  }

  private handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();

    this.setState({
      renderResult: false
    });

    const target = e.target as HTMLInputElement;

    if (target.name === 'creditCardNumber' ) {

      this.setState({
        showCreditCardExtra: false
      });
      
      if (Number.isNaN(Number(target.value))) {
        return;
      }
    }
    this.setState({
      [target.name]: target.value
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
    this.setState({
      renderResult: true,
      showCreditCardExtra: false
    })
  }
  private handleOnBlur = (e: React.FormEvent<HTMLInputElement>) => {
    const { creditCardNumber } = this.state;
    if (creditCardNumber === '') return;

    const creditCardType: string = getCreditCardType(creditCardNumber);
    const creditCardStatus = validateCC(creditCardNumber) === true? 'Valid': 'Invalid';

    const extraMsg = `Card Type ${creditCardType}: ${creditCardStatus}`

    this.setState({
      showCreditCardExtra: true,
      creditCardExtraMsg: extraMsg
    })

  }
  public render() {
    const {
      creditCardNumber,
      renderResult,
      showCreditCardExtra,
      cardHolderName,
      creditCardExtraMsg
     } = this.state;
    return (
      <div>
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="form-group form-header">
            <h4> Payment Details </h4>
          </div>

          <InputField
            name="cardHolderName"
            className="form-control"
            placeHolder="First Name Last Name"
            value={cardHolderName}
            onChange={this.handleInputChange}
            isRequired={true}
            label="Name On Card "
          />

          <InputField
            name="creditCardNumber"
            className="form-control"
            value={creditCardNumber}
            onChange={this.handleInputChange}
            isRequired={true}
            label="Credit Card"
            onBlur={this.handleOnBlur}
            labelExtra={showCreditCardExtra}
            labelExtraMsg={creditCardExtraMsg}
          />

          <div className="buttons-group">
            <button className="btn btn-primary" type="submit"> Submit </button>
          </div>
        </form>

        <div className="result">
          {renderResult === true ? (
            <div className="form-group">
              <p> Name: {cardHolderName} </p>
              <p> Card Type {getCreditCardType(creditCardNumber)}: {this.validateCCInput(creditCardNumber) === true ? 'Valid' : 'Invalid'}</p>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}
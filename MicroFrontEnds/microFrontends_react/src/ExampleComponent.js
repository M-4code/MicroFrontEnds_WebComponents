import * as React from 'react';
import PropTypes from 'prop-types';

export class ExampleComponent extends React.Component {

  static propTypes = {
    name: PropTypes.string,
    onHelloEvt: PropTypes.func
  }

  static defaultProps = {
    name: ""
  }

  render() {
    const { name, onHelloEvt } = this.props;
    return (
      <div className="exampleComponent">
        {/* <p>Hello <strong>{name}</strong> from your friendly React component.</p> */}
        <button type="submit" className="btn btn-secondary" onClick={onHelloEvt}>Say hello</button>
        <div className="exampleComponent">
        <div className="container">
          <div id="Checkout" className="inline">
              
              <div>
                  <label>Name on card</label>
                  <input id="NameOnCard" className="form-control" type="text" maxLength="255"></input>
              </div>
              <div>
                  <label>Card number</label>
                  <input id="CreditCardNumber" className="null card-image form-control" type="text"></input>
              </div>
              <div className="expiry-date-group form-group">
                  <label>Expiry date</label>
                  <input id="ExpiryDate" className="form-control" type="text" placeholder="MM / YY" maxLength="7"></input>
              </div>
              <div className="security-code-group form-group">
                  <label>Security code</label>
                  <div className="input-container" >
                      <input id="SecurityCode" className="form-control" type="text" ></input>
                      <i id="cvc" className="fa fa-question-circle"></i>
                  </div>
                  <div className="cvc-preview-container two-card hide">
                      <div className="amex-cvc-preview"></div>
                      <div className="visa-mc-dis-cvc-preview"></div>
                  </div>
              </div>
              <div >
                  <label>ZIP/Postal code</label>
                  <div className="input-container">
                      <input id="ZIPCode" className="form-control" type="text" maxLength="10"></input>
                      <a role="button" data-toggle="popover" data-trigger="focus" data-placement="left" data-content="Enter the ZIP/Postal code for your credit card billing address."><i className="fa fa-question-circle"></i></a>
                  </div>
              </div>
              <button type="submit" className="btn btn-secondary" onClick={onHelloEvt}>Pay</button>
          </div>
        </div>
      </div>
      
      </div>
      
    )
  }
}
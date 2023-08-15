import React from 'react';
import "./Subtotal.css";
import CurrencyInput from 'react-currency-input-field';

function Subtotal() {
  return (
    <div className='subtotal'>
        <CurrencyInput
        renderText={(value) => (
          <>
            <p>
              
              Subtotal (0 items): <strong>0</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={100} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Proceed to Checkout Button</button>
    </div>
  )
}

export default Subtotal;
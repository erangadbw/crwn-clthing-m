import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStrip = price* 100;
    const publishablekey = 'pk_test_51KU0NJBOEl6ohbNYsMjR3hRshZ33Zkc2C0PZt4hM6lFCeAHnmZdd0nn5wbI2cMtUxgNay199lAKQiAhTrTG8vKUb003utfboeE';

    const onToken = token => {
        console.log(token)
        alert('Payment Successful')
    }

    return(
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            description={`our total is $${price}`}
            amount = {priceForStrip}
            panelLabel = 'Pay Now'
            token = {onToken}
            stripeKey = {publishablekey}
        />
    )
}

export default StripeCheckoutButton
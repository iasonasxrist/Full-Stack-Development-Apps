import React from 'react'

const formatPrice = ({ price }) => {

    return Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR",
        maximumFractionDigits: 2
    }).format(price / 1000);

}
export default formatPrice

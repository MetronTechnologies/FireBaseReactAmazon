const getBasketTotal = (basket) => {
    return (
        basket.reduce(
            (amount, item) => item.price + amount, 0
        )
    )
}

export {getBasketTotal}
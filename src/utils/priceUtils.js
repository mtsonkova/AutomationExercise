export function convertStringPriceToNumber(price) {
    let priceAsText = price.substring(4);
    let priceAsNumber = Number(priceAsText);
    return priceAsNumber;
}
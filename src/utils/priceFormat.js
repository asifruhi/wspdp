export default function priceFormat(price) {
	var val = (price * 100.0)/100.0;
	return `$${val}`;
}
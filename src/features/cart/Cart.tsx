import { JSX } from 'react';
import {
  calculateTotal,
  getCurrencySymbol,
} from '../../utilities/utilities';

// Import the changeItemQuantity() action creator.
import { changeItemQuantity } from './cartSlice';
// Define the type for the props
interface CartProps {
  cart: Record<string, { quantity: number }>;
  currencyFilter: string;
  dispatch: (action: any) => void;
}

export const Cart = (props: CartProps) => {
  const { cart, currencyFilter, dispatch } = props;

  const onInputChangeHandler = (name: string, input: string) => {
    // If the user enters a bad value...
    if (input === '') {
      return;
    }

    // Otherwise, convert the input into a number and pass it along as the newQuantity.
    const newQuantity: number = Number(input);

    // Dispatch an action to change the quantity of the given name and quantity.
    dispatch(
      changeItemQuantity({ name, newQuantity })
    );
  };

  // Use the cart and currencyFilter slices to render their data.
  const cartElements = Object.keys(cart).map((name) => {
    return createCartItem(name);});
  const total = calculateTotal(cart, currencyFilter);

  return (
    <div id="cart-container">
      <ul id="cart-items">{cartElements}</ul>
      <h3 className="total">
        Total{' '}
        <span className="total-value">
          {getCurrencySymbol(currencyFilter)}{total} {currencyFilter}
        </span>
      </h3>
    </div>
  );

  function createCartItem(name: string): JSX.Element | undefined {
    const item: { quantity: number } = cart[name];

    if (item.quantity === 0) {
      return;
    }

    return (
      <li key={name}>
        <p>{name}</p>
        <select
          className="item-quantity"
          value={item.quantity}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            onInputChangeHandler(name, e.target.value);
          }}
        >
          {[...Array(100).keys()].map((_, index: number) => (
            <option key={index} value={index}>
              {index}
            </option>
          ))}
        </select>
      </li>
    );
  }
};

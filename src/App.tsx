import { Inventory } from "./features/inventory/Inventory";
import { CurrencyFilter } from "./features/currencyFilter/CurrencyFilter";
// Import the Cart component here.
import { Cart } from "./features/cart/Cart";
// Render the Cart component below <Inventory />

interface AppProps {
  state: {
    currencyFilter: string;
    inventory: any[]; 
    cart: Record<string, { quantity: number }>; 
  };
  dispatch: (action: any) => void; // Replace 'any' with the specific action type if known
}

 const App = (props: AppProps) => {
  const { state, dispatch } = props;

  return (
    <div>
      <CurrencyFilter
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />

      <Inventory
        inventory={state.inventory}
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />
      <Cart
        cart={state.cart}
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}/>
    </div>
  );
};

export default App;

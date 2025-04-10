import { Inventory } from "../features/inventory/Inventory.js";
import { CurrencyFilter } from "../features/currencyFilter/CurrencyFilter.js";
// Import the Cart component here.

// Render the Cart component below <Inventory />

interface AppProps {
  state: {
    currencyFilter: string;
    inventory: any[]; // Replace 'any[]' with the specific type of inventory items if known
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
    </div>
  );
};

export default App;

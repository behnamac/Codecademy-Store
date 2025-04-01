import { currenciesData } from '../../data';
import { setCurrency } from './currencyFilterSlice';
import { Dispatch } from 'redux';

export const CurrencyFilter = ({ currencyFilter, dispatch }: { currencyFilter: string; dispatch: Dispatch }) => {
  const onClickHandler = (currency: string): void => {
    dispatch(setCurrency(currency));
  };

  return (
    <div id="currency-filters-container">
      <h3>Choose a currency</h3>
      {currenciesData.map(createCurrencyButton)}
    </div>
  );

  interface CurrencyButtonProps {
    currency: string;
  }

  function createCurrencyButton(currency: CurrencyButtonProps['currency']): JSX.Element {
    return (
      <button
        className={`currency-button ${
          currencyFilter === currency && 'selected'
        }`}
        key={currency}
        onClick={() => onClickHandler(currency)}
      >
        {currency}
      </button>
    );
  }
};

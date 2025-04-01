import { currenciesData } from '../../data';
import { setCurrency } from './currencyFilterSlice';
import { Dispatch } from 'redux';

export const CurrencyFilter = ({ currencyFilter, dispatch }: { currencyFilter: string; dispatch: Dispatch }) => {
  const onClickHandler = (currency) => {
    dispatch(setCurrency(currency));
  };

  return (
    <div id="currency-filters-container">
      <h3>Choose a currency</h3>
      {currenciesData.map(createCurrencyButton)}
    </div>
  );

  function createCurrencyButton(currency) {
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

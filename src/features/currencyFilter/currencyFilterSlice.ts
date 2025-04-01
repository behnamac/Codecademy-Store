const initialCurrencyFilter = 'USD';
export const currencyFilterReducer = (
  currencyFilter = initialCurrencyFilter,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case 'currencyFilter/setCurrency': {
      return action.payload;
    }
    default: {
      return currencyFilter;
    }
  }
};

 interface SetCurrencyAction {
  type: 'currencyFilter/setCurrency';
  payload: string;
}

export const setCurrency = (currency: string): SetCurrencyAction => {
  return {
    type: 'currencyFilter/setCurrency',
    payload: currency,
  };
};

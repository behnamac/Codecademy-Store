interface CartAction {
  type: string;
  payload: {
    name?: string;
    price?: number;
    newQuantity?: number;
  };
}

export const addItem = (itemToAdd: { name: string; price: number }) => {
  return {
    type: "cart/addItem",
    payload: itemToAdd,
  };
};

// Create your changeItemQuantity action creator here.
export const changeItemQuantity = (itemToChange: {
  name: string;
  newQuantity: number;
}) => {
  return {
    type: "cart/changeItemQuantity",
    payload: itemToChange,
  };
};

interface CartItem {
  price: number;
  quantity: number;
}

const initialCart: Record<string, CartItem> = {};

export const cartReducer = (cart = initialCart, action: CartAction) => {
  switch (action.type) {
    case "cart/addItem": {
      const { name, price } = action.payload;

      // if the item already exists, increase the quantity by 1, otherwise set it to 1
      const quantity = name && cart[name] ? cart[name].quantity + 1 : 1;
      const newItem = { price, quantity };

      // Add the new item to the cart (or replace it if it existed already)
      return {
        ...cart,
        ...(name ? { [name]: newItem } : {}),
      };
    }
    case "cart/changeItemQuantity": {
      const { name, newQuantity } = action.payload;
      const itemToUpdate = name ? cart[name] : undefined;

      // Create a copy of itemToUpdate and update the quantity prop.
      const updatedItem = {
        ...itemToUpdate,
        quantity: newQuantity,
      };
      // Return a copy of the cart with the updatedItem included.
      return {
        ...cart,
        ...(name && { [name]: updatedItem }),
      };
    }
    default: {
      return cart;
    }
  }
};

import { inventoryData } from '../../data';

interface LoadDataAction {
  type: 'inventory/loadData';
  payload: typeof inventoryData;
}

export const loadData = (data: typeof inventoryData): LoadDataAction => {
  return {
    type: 'inventory/loadData',
    payload: inventoryData,
  };
};

interface InventoryItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

type Inventory = InventoryItem[];

const initialInventory: Inventory = [];
interface InventoryAction {
  type: string;
  payload?: Inventory;
}

export const inventoryReducer = (
  inventory: Inventory = initialInventory,
  action: InventoryAction
): Inventory => {
  switch (action.type) {
    case 'inventory/loadData': {
      return action.payload || [];
    }
    default: {
      return inventory;
    }
  }
};

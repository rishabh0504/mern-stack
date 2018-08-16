import { FETCH_ITEMS, ADD_ITEM, DELETE_ITEM,UPDATE_ITEM } from "../Actions/ActionTypes";

const initialState = {
  items: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_ITEMS:
      return {
        ...state
      };
    case ADD_ITEM:
      return {
        ...state,
        items: [
          ...state.items,
          {
            id: state.items.length++,
            name: action.payload
          }
        ]
      };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => action.payload !== item.id)
      };
    case UPDATE_ITEM:
         state.items.map(item => {
                if(item.id==action.payload.id){
                    item.name = action.payload.name
                }
         });
      return {
        ...state
      };
  }
  return state;
}

import { FETCH_ITEMS, ADD_ITEM, DELETE_ITEM,UPDATE_ITEM,ITEMS_LOADING } from "../Actions/ActionTypes";

const initialState = {
  items: [],
  loading:false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_ITEMS:
      return {
        ...state,
        items:   action.payload
      };
    case ADD_ITEM:

      return {
        ...state,
        items: [
          ...state.items,
          action.payload
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

      case ITEMS_LOADING:
      return {
        ...state,
       loading:! state.loading
      };
  }
  return state;
}

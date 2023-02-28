export const reducer = (state, { type, payload }) => {
    switch (type) {
        case "SET_GOODS":
            return {
                ...state,
                goods: payload,
                loading: false,
            };
        case "REMOVE_ITEM_FROM_CART":
            return {
                ...state,
                order: state.order.filter((item) => item.mainId !== payload.id),
            };
        case "ADD_TO_CART": {
            const isAdded = state.order.find(
                (item) => item.mainId === payload.id
            );
            if (!isAdded) {
                const goodsItem = state.goods.find(
                    (item) => item.mainId === payload.id
                );
                const newOrder = [...state.order, goodsItem];
                return {
                    ...state,
                    order: newOrder,
                };
            }
            return state;
        }
        case "TOGGLE_CART_OPEN":
            return {
                ...state,
                isCartOpen: !state.isCartOpen,
            };
        default:
            return state;
    }
};

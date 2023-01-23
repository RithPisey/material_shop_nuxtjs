import { ToastPlugin } from "bootstrap-vue";

export const state = () => {
  return {
    cartItems: [],
    total: 0,
    currentTag: "all",
  };
};

export const actions = {
  setCartItem({ commit }, data) {
    commit("addToCart", data);
  },
  onAmountChange({ commit }, data) {
    commit("updateAmount", data);
  },
  onUpdateTotalPrice({ commit }) {
    commit("updateTotalPrice");
  },
  onSetCurrentTag({ commit }, data) {
    commit("setCurrentTag", data);
  },
};

export const mutations = {
  addToCart(state, payload) {
    let currentValue = {};
    const index = state.cartItems.findIndex((value, index) => {
      currentValue = value;
      return value.payload.id === payload.id;
    });

    if (index === -1) {
      state.cartItems.push({ payload, amount: 1, subTotal: payload.price * 1 });
    } else {
      state.cartItems.splice(index, 1, {
        payload,
        amount: currentValue.amount + 1,
        subTotal: payload.price * (currentValue.amount + 1),
      });
    }
  },
  updateAmount(state, data) {
    // console.log(payload);

    const index = state.cartItems.findIndex((value, index) => {
      return value.payload.id === data.payload.id;
    });
    if (index !== -1) {
      state.cartItems.splice(index, 1, data);
    }

    if (data.amount === 0) {
      state.cartItems.splice(index, 1);
    }
  },
  updateTotalPrice(state) {
    let total = 0;
    state.cartItems.map((item) => {
      total += item.subTotal;
    });

    state.total = total;
  },
  setCurrentTag(state, data) {
    state.currentTag = data;
  },
};

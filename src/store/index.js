import Vue from "vue";
import Vuex from "vuex"; 

Vue.use(Vuex);

const state = {
  products: [
    {
      id: 1,
      date: new Date(2023, 3, 11),
      quantity: 0,
      name: "товар 1",
      price: '50',
      currency1: '₽',
      currency2: '$',
      currency3: '€',
    },
    {
      id: 2,
      date: new Date(2023, 3, 11),
      quantity: 0,
      name: "товар 2",
      price: '10',
      currency1: '₽',
      currency2: '$',
      currency3: '€',
    },
    {
      id: 3,
      date: new Date(2023, 3, 11),
      quantity: 0,
      name: "товар 3",
      price: '60',
      currency1: '₽',
      currency2: '$',
      currency3: '€',
    },
    {
      id: 4,
      date: new Date(2023, 3, 11),
      quantity: 0,
      name: "товар 4",
      price: '10',
      currency1: '₽',
      currency2: '$',
      currency3: '€',
    },
    {
      id: 5,
      date: new Date(2023, 3, 11),
      quantity: 0,
      name: "товар 5",
      price: '30',
      currency1: '₽',
      currency2: '$',
      currency3: '€',
    },
    {
      id: 6,
      date: new Date(2023, 3, 11),
      quantity: 0,
      name: "товар 6",
      price: '40',
      currency1: '₽',
      currency2: '$',
      currency3: '€',
    },
    {
      id: 7,
      date: new Date(2023, 3, 11),
      quantity: 0,
      name: "товар 7",
      price: '20',
      currency1: '₽',
      currency2: '$',
      currency3: '€',
    },
    {
      id: 8,
      date: new Date(2023, 3, 11),
      quantity: 0,
      name: "товар 8",
      price: '50',
      currency1: '₽',
      currency2: '$',
      currency3: '€',
    },
  ],
};

const getters = {
  total(state, getters) {
    return getters.cartProducts.reduce((total, p) => {
      return total + p.price * p.quantity;
      
    }, 0);
  },
  cartProducts: (state) => {
    return state.products.filter((p) => p.quantity !== 0);
  },
  itemsInCart: (state, getters) => {
    return getters.cartProducts.reduce(
      (accum, item) => accum + item.quantity,
      0
    );
  },
};

const actions = {
  async getProducts({ commit }) {
    let response = await fetch(
      
    );
    if (response.ok) {
      let json = await response.json();
      commit("allProducts", json);
    } else {
      alert("Ошибка HTTP: " + response.status);
    }
  },
};

const mutations = {
  allProducts: (state, payload) => {
    payload.forEach((el) => {
      el.price = Math.floor(Math.random() * 5 + 10);
      el.quantity = 0;
    });
    state.products = payload;
  },

  addToCart: (state, product) => {
    const item = state.products.find((p) => p.id === product.id);
    item.quantity++;
  },

  removeFromCart: (state, product) => {
    const item = state.products.find((p) => p.id === product.id);
    if (item.quantity > 1) {
      item.quantity--;
    } else {
      item.quantity = 0;
    }
  },
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
});

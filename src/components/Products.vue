<template>
  <div class="product">
    <div class="product__right-block">
      <ul class="product_list">
         <li v-for="product in products" :key="product.id" class="product_item" >
         <img :src="product.image" class="item_image" />
          <span class="item_name">{{ product.name }}</span>
          <span class="item_price">{{ product.price }} 
            <select>
              <option>{{ product.currency1 }}</option>
              <option>{{ product.currency2 }}</option>
              <option>{{ product.currency3 }}</option>
            </select>
          </span>
          <div class="product_actions">
            <button
              v-if="product.quantity === 0"
              type="button"
              class="button item_button add_button"
              @click="addToCart(product)"
            >
              Добавить
            </button>
            <div v-else>
              <button
                type="button"
                class="button item_button cart_button"
                @click="addToCart(product)"
              >
                +
              </button>
              <span v-if="product.quantity > 0" class="item_quantity">
                {{ product.quantity }}
              </span>
              <button
                type="button"
                class="button item_button remove_button"
                @click="removeFromCart(product)"
              >
                &minus;
              </button>
            </div>
          </div>
        </li>
      </ul> 
    </div>
    <div class="find">
      
    </div>
    
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";


export default {
  name: "products",
  
  
  computed: {
    ...mapState([
      "products",
      "selectedSort",
      "sortOptions",
      "searchQuery"
    ]),
    ...mapGetters([
      "sortedPosts",
      "sortedAndSearchedPosts"
    ])
  },
  methods: {
    ...mapActions(["getProducts"]),
    ...mapMutations([
      "setSelectedSort",
      "setSearchQuery",
      "removeFromLiked",
      "addToCart",
      "removeFromCart",
    ]),
  },
  async created() {
    this.getProducts();
  },
};
</script>

<style scoped>
.product {
  display: flex;
  justify-content: space-around;
}
.product__left-block {
  width: 20%;
  height: 400px;
  line-height: 2;
  position: relative;
  left: 70px;
}
.product__left-block-head {
  font-size: 35px;
}
.product__left-block-str {
  font-size: 20px;
  cursor: pointer;
}
.product__right-block {
  width: 90%;
  padding-left: 100px;
}
.product_list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 10px 10px;
}
.product_item {
  display: flex;
  width: 170px;
  flex-direction: column;
  margin: 15px 20px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  justify-content: space-between;
}
.item_image {
  margin-bottom: 10px;
}
.item_name {
  padding: 10px;
  font-weight: bold;
}
.item_price,
.item_quantity {
  padding: 10px;
}
.button {
  border-radius: 4px;
  background: #35a2c7;
  color: #fff;
  border: none;
}
.button:hover {
  border: none;
  cursor: pointer;
}
.item_button {
  align-self: flex-start;
  padding: 5px;
  margin: 10px;
}
.product_actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.cart_button,
.remove_button {
  width: 30px;
  height: 30px;
}

.add_button {
  width: 120px;
  height: 42px;
}
.find {
  position: absolute;
}
</style>

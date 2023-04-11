<template>
  <div class="menu">
    <nav>
      <router-link class="router-link" to="/">
        Товары
      </router-link>
    </nav>
    <div>
      <router-link class="router-link" to="/cart"
        >Корзина ({{ itemsInCart }})
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "navBar",
  computed: {
    ...mapGetters(["itemsInCart", "itemsInLiked"]),
  },
};
</script>

<style scoped>
.menu {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 150px;
}
.menu > div {
  margin-right: 20px;
  margin-bottom: 20px;
}
.router-link {
  text-decoration: none;
  color: gray;
  border: 1px solid transparent;
  border-radius: 4px;
  padding: 10px;
}
.router-link:hover {
  color: #217d9c;
}
.router-link-exact-active {
  border: 1px solid #35a2c7;
  color: #35a2c7;
}
</style>

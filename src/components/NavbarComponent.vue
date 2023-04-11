<template>
    <div class="navbar">
        <div class="navbar__name">Internet-store</div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: 'navbar-component',
    computed: {
        ...mapGetters(["itemsInCart", "itemsInLiked"]),
    },
}
</script>

<style scoped>
.navbar {
    width: 100%;
    height: 90px;
    background: #ffffff;
    color: black;
    align-items: center;
    position: fixed;
    top: 0;
    bottom: 10px;
}
.navbar__name {
    font-size: 50px;
    font-weight: bold;
    cursor: pointer;
    text-align: center;
}
.navbar__btns {
    display: flex;
    flex-direction: row;
}

</style>
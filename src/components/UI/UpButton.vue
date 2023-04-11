<template>
    <div>
        <button class="up-button">
            <slot></slot>
        </button>
    </div>
</template>

<script>
export default {
        name: 'up-button',
    }
</script>

<style scoped>
.up-button {
    cursor: pointer;
    border: none;
    background: #ffffff;
    margin-left: 15px;
    margin-right: 10px;
}
</style>
<template>
    <div class="footer">
        <div>Контакты:</div>
        <div>Телефон</div>
        <div>Email</div>
        <div>Telegram</div>
    </div>
</template>

<script>

export default {
    name: 'footer-component',
}

</script>

<style scoped>
.footer {
    width: 100%;
    padding: 10px 20px;
    background: black;
    color: white;
    line-height: 2;
    display: flex;
    flex-direction: column;
}
</style>
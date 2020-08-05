<template>
    <div>
        <p>这是主页啊</p>
        <van-cell title="选择单个日期" :value="date" @click="show = true" />
        <van-calendar v-model="show" @confirm="onConfirm" />
    </div>
</template>

<script>
    export default {
        name: "Home",
        data() {
            return {
                date: '',
                show: false,
            };
        },
        methods: {
            formatDate(date) {
                return `${date.getMonth() + 1}/${date.getDate()}`;
            },
            onConfirm(date) {
                this.show = false;
                this.date = this.formatDate(date);
            },
        },
    }
</script>

<style scoped>

</style>
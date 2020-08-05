<template>
    <div>
        <p>123</p>
        <router-view></router-view>
        <app-footer></app-footer>
    </div>

</template>

<script>
    import AppFooter from '../components/tab/AppFooter'
    export default {
        name: "Home",
        components:{
            AppFooter
        },
    }
</script>

<style scoped>

</style>
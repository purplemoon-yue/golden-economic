<template>
    <div>
        <router-view></router-view>
        <app-footer></app-footer>
    </div>

</template>

<script>
    import AppFooter from '../components/tab/AppFooter'
    export default {
        name: "home",
        components:{
            AppFooter
        },
    }
</script>

<style scoped>

</style>
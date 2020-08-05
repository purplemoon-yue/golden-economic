<template>
    <van-tabbar
            v-model="tabActive"
            :border="false"
            :z-index="100"
            safe-area-inset-bottom>
        <template v-for="(item, i) in tabbarItem">
            <van-tabbar-item :name="item.itemName" :key="i" @click="goTo(item)">
                <span>{{item.name}}</span>
                <template #icon="props">
                    <van-icon :name="props.active ? item.icon.active : item.icon.inactive" />
                </template>
            </van-tabbar-item>
        </template>
    </van-tabbar>
</template>

<script>
    export default {
        name: 'AppFooter',
        data() {
            return {
                tabActive: 'New',
                tabbarItem: [
                    {
                        name: '首页',
                        icon: {
                            active: 'wap-home',
                            inactive: 'wap-home-o'
                        },
                        path: '/Home',
                        itemName: 'Home'
                    },{
                        name: '行情',
                        icon: {
                            active: 'wap-home',
                            inactive: 'wap-home-o'
                        },
                        path: '/Hangqing',
                        itemName: 'Hangqing'
                    },{
                        name: '新闻',
                        icon: {
                            active: 'shopping-cart',
                            inactive: 'shopping-cart-o'
                        },
                        path: '/New',
                        itemName: 'New'
                    },{
                        name: '我的',
                        icon: {
                            active: 'manager',
                            inactive: 'manager-o'
                        },
                        path: '/User',
                        itemName: 'User'
                    }
                ]
            }
        },
        created() {
            const path = this.$route.path
            const arr = this.tabbarItem.filter(item => item.path === path)
            if (arr.length > 0) {
                this.tabActive = arr[0].itemName
            }
        },
        methods: {
            goTo(item) {
                this.tabActive = item.itemName
                this.$router.push({ path: item.path })
            }
        }
    }
</script>

<style scoped>

</style>
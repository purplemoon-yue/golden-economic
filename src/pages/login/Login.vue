<template>
    <div>
        <el-input v-model="input" placeholder="请输入内容"></el-input>
        <br><br>
        <el-input v-model="input" placeholder="请输入内容"></el-input>
        <br><br>
        <el-input v-model="input" placeholder="请输入内容"></el-input>
    </div>

</template>

<script>
    export default {
        name: "Login",
        data(){
            return {
                input:''
            };
        }
    }
</script>

<style scoped>

</style>
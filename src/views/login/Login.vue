<template>
    <div class="text-center">
        <img src="../../assets/test.gif" alt="" style="width: 50%">
        <p>奔跑吧，豆瓣酱</p>
        <el-input v-model="input" placeholder="请输入账号"></el-input>
        <el-input v-model="input" placeholder="请输入密码"></el-input>
        <div class="registered-forget">
            <el-button type="text" @click="toforget">忘记密码？</el-button>
            <el-button type="text"  class="forget-btn" @click="toreg">注册</el-button>
        </div>
        <el-row class="login-btn">
            <el-button type="primary" @click="loginin">登录</el-button>
        </el-row>
    </div>

</template>

<script>
    export default {
        name: "Login",
        data(){
            return {
                input:''
            };
        },
        methods: {
            toforget() {
                this.$router.push({ path: '/Forget' })
            },
            toreg() {
                this.$router.push({ path: '/Registered' })
            },
            loginin() {
                this.$router.push({ path: '/Home' })
            }
        }
    }
</script>

<style scoped>
    .el-input{
        width: 90%;
        margin-bottom: 1rem;
    }
    .text-center{
        text-align: center;
    }
     .login-btn .el-button {
         width: 90%;
         background-color: #1fc8db;
         background-image: linear-gradient(141deg,#9fb8ad 0%,#1fc8db 51%,#2cb5e8 75%);
     }
    .registered-forget{
        width: 90%;
        margin-left:5%;
        text-align: left;
    }
    .registered-forget .el-button{
        color: #2c3e50;
    }
    .forget-btn{
        float: right;
    }
</style>
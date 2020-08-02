<template>
    <div class="text-center">
        <el-page-header @back="goBack" content="注册账号">
        </el-page-header>
        <el-input v-model="input" placeholder="请输入手机号"></el-input>
        <el-input v-model="input" placeholder="请输入昵称"></el-input>
        <el-input v-model="input" placeholder="请输入验证码"></el-input>
        <el-input v-model="input" placeholder="请输入登录密码"></el-input>
        <el-input v-model="input" placeholder="请再次输入登录密码"></el-input>
        <el-input v-model="input" placeholder="请再次输入交易密码"></el-input>
        <el-input v-model="input" placeholder="请再次输入邀请码"></el-input>

        <el-row class="login-btn">
            <el-button type="primary">注册</el-button>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "Registered",
        data(){
            return {
                input:''
            };
        },
        methods: {
            goBack() {
                this.$router.push({ path: '/' })
            }
        }
    }
</script>

<style scoped>
    .el-page-header{
        margin-bottom: 1rem;
    }
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
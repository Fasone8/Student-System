<template>
    <div class="col-sm-2 ">
        <h1>淄职学生管理系统</h1>
    </div>
    <div class="col-sm-2 col-sm-offset-8 ">
        <div class="btn-group" role="group" aria-label="...">
            <button type="button" class="btn btn-default">帮助</button>
            <button type="button" class="btn btn-default">个人中心</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HeaderCom"
    }
</script>

<style scoped>
    h1 {
        font-size: 18px;
        color: #9d9d9d;
    }

    h1:hover {
        color: #ffffff;
    }
</style>
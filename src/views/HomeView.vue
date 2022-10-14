<template>
    <table class="table table-bordered">
        <thead>
        <tr>
            <th>序号</th>
            <th>姓名</th>
            <th>年龄</th>
            <th>性别</th>
            <th>爱好</th>
            <th>操作</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item,index) of students" :key="item.id">
            <td>{{index}}</td>
            <td>{{item.name}}</td>
            <td>{{item.age}}</td>
            <td>{{item.gender===0?'女':'男'}}</td>
            <td>{{item.hobbies.join('、')}}</td>
            <td>
                <router-link :to="{path:'/edit-student',query:{index}}"
                             class="btn btn-info btn-xs">修改
                </router-link>
                <button class="btn btn-danger btn-xs">删除</button>
            </td>
        </tr>
        </tbody>
    </table>
</template>

<script>
    import {computed} from "vue"

    export default {
        name: "HomeView",
        // inject: ['students'],
        data() {
            return {
                students: computed(() => this.$store.state.students)
            }
        }
    }
</script>

<style scoped>

</style>
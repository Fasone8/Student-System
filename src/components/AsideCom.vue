<template>
    <aside class="col-sm-2 bg-success">
        <ul>
            <li v-for="item of permissions" :key="item.id">
                <router-link :to="item.path">{{item.name}}</router-link>
            </li>
        </ul>
    </aside>
</template>

<script>
    const permissions = [
        {id: 0, name: '查看学生', path: '/'},
        {id: 1, name: '添加学生', path: '/add-student'},
        {id: 2, name: '修改学生', path: '/edit-student'}
    ]

    export default {
        name: "AsideCom",
        data() {
            return {
                permissions
            }
        }
    }
</script>

<style scoped>

</style>
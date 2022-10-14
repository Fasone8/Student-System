<template>
    <div class="container-fluid ">
        <div class="row header">
            <HeaderCom/>
        </div>
        <div class="row">
            <AsideCom/>
            <MainCom/>
        </div>
    </div>

</template>

<script>
    import HeaderCom from "./components/HeaderCom.vue";
    import AsideCom from "./components/AsideCom.vue";
    import MainCom from "./components/MainCom.vue";

    import {computed} from 'vue'



    export default {
        name: 'App',
        components: {HeaderCom, AsideCom, MainCom},
        data() {
            return {
            }
        },
        beforeCreate() {
            this.$store.dispatch("getStudents")
        },
/*        provide() {
            return {
                students: computed(() => this.students)
            }
        }*/
    }
</script>

<style scoped>
    .header {
        background: #333333;
    }

</style>
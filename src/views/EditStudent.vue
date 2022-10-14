<template>
    <h2>editstudent</h2>
    <p>{{index}}</p>
    <p>{{student}}</p>
    <form>
        <div class="form-group">
            <label>姓名</label>
            <input type="text" class="form-control" placeholder="请输入学生姓名" v-model="student.name">
        </div>
        <div class="form-group">
            <label>年龄</label>
            <input type="password" class="form-control" placeholder="请输入学生年龄" v-model="student.age">
        </div>
        <div>
            <strong>性别:</strong>
            <label>
                男
                <input type="radio" v-model="student.gender" value="1">
            </label>
            &nbsp;
            <label>
                女
                <input type="radio" v-model="student.gender" value="0">
            </label>
        </div>
        <div class="checkbox">
            <strong>爱好</strong> &nbsp;
            &nbsp;

            <label>
                <input type="checkbox" v-model="student.hobbies" value="唱"> 唱
            </label> &nbsp;
            &nbsp;

            <label>
                <input type="checkbox" v-model="student.hobbies" value="跳"> 跳
            </label> &nbsp;
            &nbsp;

            <label>
                <input type="checkbox" v-model="student.hobbies" value="rap"> rap
            </label>
        </div>
        <!--        form里submit会触发form的默认提交，会刷新页面，在vue单页面应用里是不被允许的-->
        <button @click="submit" type="button" class="btn btn-default">Submit</button>
    </form>
</template>

<script>
    export default {
        name: "Editstudent",
        data(){
            return{
                index:this.$route.query.index,
                student:this.$store.state.students[this.$route.query.index]
            }
        },
        methods:{
            submit(){
                fetch("http://127.0.0.1:3000/edit-student",{
                    method:"post",
                    headers:{
                        "Content-Type":"application/json;charset=utf-8"
                    },
                    body:JSON.stringify(this.student)
                }).then(data=>data.json().then(value => {
                    if (value){
                        this.$store.dispatch("getStudents")
                        this.$router.push("/")
                    }
                }))
            }
        }
    }
</script>

<style scoped>

</style>
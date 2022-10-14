<template>
    <form>
        <div class="form-group">
            <label>姓名</label>
            <input type="text" class="form-control" placeholder="请输入学生姓名" v-model="newStudent.name">
        </div>
        <div class="form-group">
            <label>年龄</label>
            <input type="password" class="form-control" placeholder="请输入学生年龄" v-model="newStudent.age">
        </div>
        <div>
            <strong>性别:</strong>
            <label>
                男
                <input type="radio" v-model="newStudent.gender" value="1">
            </label>
            &nbsp;
            <label>
                女
                <input type="radio" v-model="newStudent.gender" value="0">
            </label>
        </div>
        <div class="checkbox">
            <strong>爱好</strong> &nbsp;
            &nbsp;

            <label>
                <input type="checkbox" v-model="newStudent.hobbies" value="唱"> 唱
            </label> &nbsp;
            &nbsp;

            <label>
                <input type="checkbox" v-model="newStudent.hobbies" value="跳"> 跳
            </label> &nbsp;
            &nbsp;

            <label>
                <input type="checkbox" v-model="newStudent.hobbies" value="rap"> rap
            </label>
        </div>
        <!--        form里submit会触发form的默认提交，会刷新页面，在vue单页面应用里是不被允许的-->
        <button @click="submit" type="button" class="btn btn-default">Submit</button>
    </form>
    <div>
        {{newStudent}}
    </div>
</template>

<script>
    export default {
        name: "AddStudent",
        data(){
            return{
                newStudent:{
                    name:"",
                    age:"",
                    gender:"",
                    hobbies:[]
                }
            }
        },
        methods:{
            submit(){
                //通过ajax提交this.newStudent给后端
                // fetch(`http://127.0.0.1:3000/add-student?name=${this.newStudent.name}&age=${this.newStudent.age}&gender=${this.newStudent.gender}&hobbies=${this.newStudent.hobbies}`)
                fetch("http://127.0.0.1:3000/add-student",
                    {method:"post",
                        headers:{
                        "Content-Type":"application/json;charset=utf-8"
                        },
                        body:JSON.stringify(this.newStudent)}
                )
                .then(
                    reponse=>reponse.json()
                    .then(
                        value => {
                            if (!value) return alert("提交失败，请稍后重试")
                            this.$store.dispatch("getStudents")

                            this.$router.push("/")
                        }
                    )
                )
                //接收到后端返回的信息
                //后端成功保存：true
                //后端保存失败：false
                //当信息回来后，判断是true还是false



            }
        }
    }
</script>

<style scoped>

</style>
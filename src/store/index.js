import{createStore} from "vuex";


const store=createStore({
    state(){
        return{
            students:[]
        }
    },
    mutations:{
        getStudents(state,students){
            state.students= [...students]//深拷贝
        }
    },
    actions:{
        getStudents({commit}){
            //向后端要数据
            fetch("http://127.0.0.1:3000/show-students")
                .then(
                    reponse => reponse.json()
                        .then(
                            value => {
                                commit("getStudents",value)
                            }
                        )
                )
        }
    }
})




export default store
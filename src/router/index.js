import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "../views/HomeView.vue"
const AddStudent=()=>import("../views/AddStudent.vue")
const EditStudent =()=>import("../views/EditStudent.vue")

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path:'/',name:'HomeView',component:HomeView},
    {path:'/add-student',name:'add-student',component:AddStudent},
    {path:'/edit-student',name:'edit-student',component:EditStudent}
  ]
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import CreatClass from '../Pages/CreatClass/CreatClass'
import Home from '../Pages/Home/Home'
import Learn from '../Pages/Learn/Learn'
import Login from '../Pages/Login/Login'
import Courseware from '../Pages/Courseware/Courseware'
import Uploading from '../Pages/Uploading/Uploading'
import ppt from '../components/ppt/ppt.vue'
import pdf from '../components/pdf/pdf.vue'
import vedio from '../components/vedio/vedio.vue'
import Peofile from '../Pages/Profile/Profile.vue'
import MyClass from '../components/MyClass/MyClass.vue'
import MyFile from "../components/MyFile/MyFile"
import StudyPage from '../Pages/StudyPage/StudyPage.vue'
import StudyGoal from '../components/StudyGoal/StudyGoal.vue'
import StudyMore from '../components/StudyMore/StudyMore.vue'
import StudyMain from '../components/StudyMain/StudyMain.vue'
import Register from '../Pages/Register/Register.vue'
import CreateMain from '../components/CreateMain/CreateMain.vue'
import CreateMore from '../components/CreateMore/CreateMore.vue'
import CreateGoal from '../components/CreateGoal/CreateGoal.vue'
import createClassPage from '../components/CreateClassPage/createClassPage'
import loading from '../components/loading/loading.vue'
import selectPage from '../Pages/selectPage/selectPage.vue'


Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/learn',
      component: Learn
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/courseWare',
      component: Courseware,
      children: [{
        path  : '/courseWare/ppt',
        component: ppt
      },
      {
          path  : '/courseWare/pdf',
          component: pdf
        },
        {
          path  : '/courseWare/vedio',
          component: vedio
        },
        {
          path : '/courseWare',
         /* redirect : '/course/ppt'*/
        }
      ]

    },
    {
      path: '/uploading',
      component: Uploading
    },
    {
      path  : '/createPage',
      component: createClassPage
    },
    {
      path: '/creatClass',
      component: CreatClass,
      children: [
        {
        path  : '/creatClass/main',
        component: CreateMain
      },{
        path  : '/creatClass/Goal',
        name : 'GOAL',
        component: CreateGoal
      },{
        path  : '/creatClass/more',
        component: CreateMore
      },
     {
        path  : '/creatClass/loading',
        component: loading
     },
        {
        path :'/creatClass',
        redirect:'/creatClass/Goal'
      }]
    },
    {
      path: '/profile',
      component: Peofile,
      children: [{
        path  : '/profile/class',
        component: MyClass
      },
        {
          path  : '/profile/file',
          component: MyFile
        },
        {
          path  : '/courseWare/create',
          component: MyFile
        },
        {
          path : '/profile',
          redirect: '/profile/class'
        }
      ]
    },
    {
      path: '/study',
      component: StudyPage,
      children: [{
        path  : '/study/goal',
        component: StudyGoal
      },
        {
          path  : '/study/main',
          component: StudyMain
        },
        {
          path  : '/study/more',
          component: StudyMore
        },
        {
          path : '/study',
          redirect: '/study/goal'
        }
      ]
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/select_page',
      component: selectPage
    },
    {
      path: '/',
      redirect: '/home'
    },
  ]
})

import Vue from 'vue'
import VueRouter from 'vue-router'
import CreatClass from '../Pages/CreatClass/CreatClass'
import Home from '../Pages/Home/Home'
import Learn from '../Pages/Learn/Learn'
import Login from '../Pages/Login/Login'
import Courseware from '../Pages/Courseware/Courseware'
import Uploading from '../Pages/Uploading/Uploading'
import CourseIndex from '../Pages/CourseIndex/CourseIndex.vue'
import ppt from '../components/ppt/ppt.vue'
import pdf from '../components/pdf/pdf.vue'
import vedio from '../components/vedio/vedio.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/home',
      component: Home,
      children:[{
        path: '/home/courseIndex',
        component: CourseIndex
      }
      ]
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
        }
      ]

    },
    {
      path: '/uploading',
      component: Uploading
    },
    {
      path: '/creatClass',
      component: CreatClass
    },
    {
      path: '/',
      redirect: '/home'
    },
  ]
})

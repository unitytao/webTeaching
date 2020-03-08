/*
通过mutation间接更新state的多个方法的对象
 */

import {
  RECEIVE_USER_INFO,
  RECEIVE_COURSE_INFO,
  RECEIVE_COURSE_DATA,
  RECEIVE_CLASS_URL,
  RECEIVE_CLASS_GOAL,
  RECEIVE_CLASS_Main,
  RECEIVE_CLASS_More,
  RECORD_ALL_CLASS,
  CLEAN_CLASS,
  SPLICE_COURSE_CONTENT,
  RECEIVE_FILE_INFO,
  RECEIVE_NOW_CLASS,
  RECEIVE_NOW_DATA,
  RECEIVE_COURSE_BY_URL_DATA
} from './mutation-types'
import {
  reqCourseList,
  reqFileData
} from '../api/index'

export default {
  //同步记录用户信息
  recordUser({commit},userInfo){
    commit(RECEIVE_USER_INFO, {userInfo})
  },
  //同步记录当前课程url
  recordClassUrl({commit},nowClass){
    commit(RECEIVE_NOW_CLASS, nowClass)
  },
  //同步记录当前课程url
  recordNowData({commit},nowData){
    commit(RECEIVE_NOW_DATA, nowData)
  },
  //同步记录通过URL获取的课程信息
  recordCourseByUrlData({commit},data){
    commit(RECEIVE_COURSE_BY_URL_DATA, data)
  },
  //异步获取课程列表
  async getCourses({commit}){
    //发送异步ajax请求
    const result = await reqCourseList()
    //提交一个mutation
    if (result.code===0){
      const courses = result.queryResult
      commit(RECEIVE_COURSE_INFO,{courses})
    }
  },

  recordCourseData({commit},CourseData){
    commit(RECEIVE_COURSE_DATA, CourseData)
  },
  recordClassURL({commit},courseUrl){
    commit(RECEIVE_CLASS_URL, courseUrl)
  },
  recordClassGoal({commit},classGoal){
    commit(RECEIVE_CLASS_GOAL, classGoal)
  },
  recordClassMain({commit},classMain){
    commit(RECEIVE_CLASS_Main, classMain)
  },
  recordClassMore({commit},classMore){
    commit(RECEIVE_CLASS_More, {classMore})
  },
  recordClassAll({commit},all){
    commit(RECORD_ALL_CLASS, all)
  },
  cleanClass({commit},nullCourse){
    commit(CLEAN_CLASS, nullCourse)
  },
  spliceData({commit},index){
    commit(SPLICE_COURSE_CONTENT, index)
  },
  //异步记录文件信息
  async recordFileData({commit},data){
    //发送异步ajax请求
    const result = await reqFileData(data)
    //提交一个mutation
    if (result.code===0){
      const file = result.queryResult
      commit(RECEIVE_FILE_INFO,file)
    }
  },
}

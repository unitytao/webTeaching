/*
直接更新state的多个方法的对象
 */
import Vue from 'vue'
import {
  RECEIVE_USER_INFO,
  RECEIVE_COURSE_INFO,
  RECEIVE_COURSE_DATA,
  RECEIVE_CLASS_GOAL,
  RECEIVE_CLASS_URL,
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

export default {
  [RECEIVE_USER_INFO](state, {userInfo}) {
    state.userInfo = userInfo
  },
  [RECEIVE_COURSE_INFO](state, {courses}) {
    state.courses = courses
  },
  [RECEIVE_COURSE_DATA](state, CourseData) {
    state.courseData = CourseData
  },
  [RECEIVE_CLASS_URL](state, url) {
    state.class.courseUrl = url
  },
  [RECEIVE_CLASS_GOAL](state, goal) {
    state.class.classGoal = goal
  },
  [RECEIVE_CLASS_Main](state, main) {
    state.class.classMain = main
  },
    [RECEIVE_CLASS_More](state, more) {
      state.class.classMore = more
  },
  [RECORD_ALL_CLASS](state,all){
    state.coursesContent.push(all)
  },
  [CLEAN_CLASS](state,nullCourse){
    state.class = nullCourse
  },
  [RECORD_ALL_CLASS](state,all){
    state.coursesContent.push(all)
  },
  [SPLICE_COURSE_CONTENT](state,index){
    state.coursesContent.splice(index,1)
  },
  [RECEIVE_FILE_INFO](state,file){
    state.file = file.pageInfo
  },
  [RECEIVE_NOW_CLASS](state,classURL){
    state.nowClass = classURL
  },
  [RECEIVE_NOW_DATA](state,data){
    state.nowData = data
  },
  [RECEIVE_COURSE_BY_URL_DATA](state,data){
    state.courseData = data
  },
}

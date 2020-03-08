 /*
包含n个接口请求函数的模块
函数的返回值: promise对象
 */
import ajax from './ajax'
/*const BASE_URL = 'http://localhost:8090'*/
 const BASE_URL= '/api'

//密码登录验证
export const reqPwdLogin =({username, password}) => ajax(BASE_URL+'/user/login',{username,password})
 //注册
export const reqPwdRegister =({username, password, phone, roleId}) => ajax(BASE_URL+'/user/register',{username,password,phone,roleId})
 //主页面课程显示
export const reqCourseList =() => ajax(BASE_URL+'/course/selectAll')
 //按照名称搜索课程
export const reqSelectCourseByName =(classname) => ajax(BASE_URL+'/course/selectByName',classname)
 //通过课程id搜索课程
export const reqCourseId =(url)=>ajax(BASE_URL +'/course/selectByUrl',url)
 //通过classUrl获取课程数据
export const reqCourseData =(classUrl)=>ajax(BASE_URL +'/courseData/selectByClassUrl',classUrl)
 //上传课程数据
export const reqCourseAll =({classUrl,structure,courseData,cid}) => ajax(BASE_URL+'/courseData/insert',{classUrl,structure,courseData,cid},'POST')
 //创建课程
export const reqSendData =(fd)=>ajax(BASE_URL+'/FileDto/insert',fd)
 //通过owner获取文件
export const reqMyFile =(owner)=>ajax(BASE_URL+'/FileDto/selectByOwner',owner)
 //通过关键字，类型，时间，学科分类来进行搜索课件
export const reqFileData =({keyword,type,timeStatus,course})=>ajax(BASE_URL+'/FileDto/selectAll',{keyword,type,timeStatus,course})
 //获取我的收藏的课程
export const reqCollection =(obj)=>ajax(BASE_URL+'/collection/collect',obj)
 //通过userid获取收藏的文件
export const reqMyCollection =(uid)=>ajax(BASE_URL+'/collection/selectByUid',uid)
 //移除收藏
export const reqRemoveMyCollection =(obj)=>ajax(BASE_URL+'/collection/moveCollection',obj)



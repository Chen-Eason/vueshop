// 引入mockjs
// const Mock = require('mockjs');
import Mock from "mockjs"
// 获取 mock.Random 对象
const Random = Mock.Random;
// mock一组数据
const produceNewsData = function() {
	let product1test = [{ "cp_id" : 635, "cp_mingcheng" : "自然堂（CHANDO）雪域精粹水乳套装（冰肌水+乳液+雪域三件套）清润型（化妆品套装）", "jiage" : "25", "cp_tupian" : "https://www.yaoyiwangluo.com/upload/jingxuan18.jpg" } , { "cp_id" : 634, "cp_mingcheng" : "御泥坊 亮颜补水面膜贴21片（补水保湿面膜 亮肤淡斑 晒后修护 男女护肤化妆品套装）", "jiage" : "2", "cp_tupian" : "https://www.yaoyiwangluo.com/upload/jingxuan17.jpg" } , { "cp_id" : 633, "cp_mingcheng" : "自然堂套装化妆品女雪域精粹系列补水保湿护肤品组合水乳旗舰店 冰肌水（清润型）+乳液【活力冰肌礼盒】", "jiage" : "70", "cp_tupian" : "https://www.yaoyiwangluo.com/upload/jingxuan16.jpg" } , { "cp_id" : 632, "cp_mingcheng" : "妮维雅(NIVEA)晶纯皙白泡沫洁面乳150g加量装(洗面奶 护肤化妆品)", "jiage" : "80", "cp_tupian" : "https://www.yaoyiwangluo.com/upload/jingxuan15.jpg" }]
;
    // let articles = [];
    // for (let i = 0; i < 100; i++) {
    //     let newArticleObject = {
    //         title: Random.csentence(5, 30), //  Random.csentence( min, max )
    //         thumbnail_pic_s: Random.dataImage('300x250', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
    //         author_name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
    //         date: Random.date() + ' ' + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
    //     }
    //     articles.push(newArticleObject)
    // }
 
    // return {
    //     articles: articles
    // }
    return product1test
}
 
// Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/news/index', 'post', produceNewsData);
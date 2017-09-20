/**
 * 云通信基础能力业务短信发送、查询详情以及消费消息示例，供参考。
 * Created on 2017-07-31
 */
const SMSClient = require('@alicloud/sms-sdk')
// ACCESS_KEY_ID/ACCESS_KEY_SECRET 根据实际申请的账号信息进行替换
const accessKeyId = 'LTAIT53JlEVw8Vjl'
const secretAccessKey = 'oM9T58o0fbuR05vNVy0bRqFywZVgw4'
//初始化sms_client
let smsClient = new SMSClient({accessKeyId, secretAccessKey})
//发送短信
smsClient.sendSMS({
    PhoneNumbers: '18762690042',
    SignName: '朱tiantian',
    TemplateCode: 'SMS_97880021',
    TemplateParam: '{"code":"12345","product":"云通信"}'
}).then(function (res) {
    let {Code}=res
    if (Code === 'OK') {
        //处理返回参数
        console.log(res)
    }
}, function (err) {
    console.log(err)
})

// var App = require('alidayu-node');
// var app = new App('LTAIT53JlEVw8Vjl', 'oM9T58o0fbuR05vNVy0bRqFywZVgw4');
 
// app.smsSend({
//     sms_free_sign_name: '注册验证', //短信签名，参考这里 http://www.alidayu.com/admin/service/sign
//     sms_param: JSON.stringify({"code": "123456", "product": "测试网站"}),//短信变量，对应短信模板里面的变量
//     rec_num: '13032178152', //接收短信的手机号
//     sms_template_code: 'SMS_640004' //短信模板，参考这里 http://www.alidayu.com/admin/service/tpl
// });
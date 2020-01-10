import Mock from 'mockjs';

// 配置拦截 ajax 的请求时的行为，支持的配置项目有 timeout。
Mock.setup({
    timeout: '200 - 400'
})
const Random = Mock.Random

const vCode = '123456';

const data=Mock.mock({
    "id":"@guid",
    "name":"@cname",
});


function getVerificatCode (prarms) {
    const prarmsObj = JSON.parse(prarms.body);
    return Object.assign(prarmsObj, {vCode: vCode});
}

function loginFun (prarms) {
    console.log(Random.email())
    console.log(data)
    const prarmsObj = JSON.parse(prarms.body);
    console.log(prarmsObj.password)
    if ( prarmsObj.password =='123456') {
        return {code:1, text:'登录成功'}
    }else{
        return {code:2, text:'验证码有误，登录失败'}
    }
}

// Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/user/getVerificatCode', 'post', getVerificatCode); // 获取验证码
Mock.mock('/user/login', 'post', loginFun); //登录

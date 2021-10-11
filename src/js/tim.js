
import TIM from 'tim-js-sdk';

let options = {
    SDKAppID: 1400582377 // 接入时需要将0替换为您的即时通信 IM 应用的 SDKAppID
};
// 创建 SDK 实例，`TIM.create()`方法对于同一个 `SDKAppID` 只会返回同一份实例
let tim = TIM.create(options); // SDK 实例通常用 tim 表示

// 设置 SDK 日志输出级别，详细分级请参见 <a href="https://web.sdk.qcloud.com/im/doc/zh-cn//SDK.html#setLogLevel">setLogLevel 接口的说明</a>
tim.setLogLevel(0); // 普通级别，日志量较多，接入时建议使用
// tim.setLogLevel(1); // release 级别，SDK 输出关键信息，生产环境时建议使用


// 开始登录
let promise = tim.login({userID: 'root', userSig: 'eJwtzFELgjAUhuH-sttCjs7jTOgigqAICuZFt9GmnayUbdgy*u*Zevk9H7wflu9l0GrDMhYFwObDJqWfjgoa2NS1m9yq6tw0pFgWxgCYRlyI8dG*IaN7R8QIAEZ19PhbwnmaiIUIpwqVfdaVBlzutZW*28SHSh1nuzZ5bQVeOoknfbuuKryL9zq0S-b9ARWaMbw_'});

promise.then(function(imResponse) {
    console.log(imResponse.data); // 登录成功
    if (imResponse.data.repeatLogin === true) {
        // 标识账号已登录，本次登录操作为重复登录。v2.5.1 起支持
        console.log(imResponse.data.errorInfo);
    }
}).catch(function(imError) {
    console.warn('login error:', imError); // 登录失败的相关信息
});
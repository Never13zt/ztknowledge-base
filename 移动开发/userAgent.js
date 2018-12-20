export const browser = {
  versions:function(){
    let userAgent = navigator.userAgent
    let appVersion = navigator.appVersion
    return {
        trident: userAgent.includes('Trident'),//IE内核
        presto: userAgent.includes('Presto'),//Opera内核
        webkit: userAgent.includes('AppleWebkit'),//苹果内核
        gecko: userAgent.includes('Gecko')&& userAgent.includes('KHTML'),//火狐内核
        mobile: !!userAgent.match(/AppleWebkit.*Mobile.*/),//移动端
        ios: !!userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),//ios终端
        android: userAgent.includes('Android'),//android终端
        iPhone: userAgent.includes('iPhone'),//iPad终端
        webApp: userAgent.includes('Safari'),//是否为web应用程序
        weixin: userAgent.includes('MicroMessager'),//微信端
        qq: userAgent.match(/sQQ/i) //QQ
    }
  }(),
    language: (navigator.browserLanguage || navigator.language).toLowerCase()
}
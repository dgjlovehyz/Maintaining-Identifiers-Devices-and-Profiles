﻿/**
 * 集成支付宝支付插件
**/
window.cordovaCustomPlugin.Alipay=function() {
    /**
     * 功能:移动支付
     * @args 数组 格式:[alipay,商品名称,商品描述,商品价格,商户私钥pkcs8格式,商户PID,商户收款账号,订单号,支付成功后回调的URL]
     * @success
     * @fail
    **/
    this.pay = function (args, success, fail) {
        try {
           return this.executor("AliPayPlugin", "alipay", args, success, fail);
        } catch (e) {
            throw e;
        }
    }
}
window.cordovaCustomPlugin.Alipay.prototype = new window.cordovaCustomPlugin.PluginBase();






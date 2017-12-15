var appcode=""
var url="http://218.249.129.108:8001"
function serviceInit(phoneNumber){
  $api.get('http://218.249.129.108:8001/supervise/ssdServices!registerApp.action?userName=lucky&userPhone=13582613111&email=2695845@qq.com&appType=1&unitName=测试单位&appName=app'
  ,function(ret){
    if(ret.appCode){
      $api.getStorage('appCode');
      //设立appCode
    };
},'json');

}
function fetch(obj,callback){
  api.ajax({
      url:url+obj.url,
      method:obj.method,
      data: {
          values: obj.para
      }
  },function(ret, err){
      if (ret) {
          callback(ret)
      } else {
          api.toast({
              msg: '网络错误',
              duration: 2000,
              location: 'bottom'
          });

      }
  });

}

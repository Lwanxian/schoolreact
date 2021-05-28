//router.js
module.exports = app => {
  const { router, controller } = app;
  router.get('/getweather', controller.getweather.getweather);
  router.post('/getcity', controller.getweather.getcity);

  // 定位四川成都（腾讯云api）
  router.get('/getlocation', controller.getweather.getlocation);

  // 幽灵api 行政区
  router.get('/getcities', controller.getweather.getcities);
  
  // 腾讯地图api 四川省
  router.get('/getsichuan', controller.getweather.getsichuan);
  // 腾讯地图api 成都市
  router.get('/getchengdu', controller.getweather.getchengdu);
  // 天气api 空气质量
  router.get('/getairquality', controller.getweather.getairquality);

    // //get请求
    // router.get('/hello', controller.ajaxController.getHello);
    router.get('/getposition', controller.weatherinfo.getposition);
    router.get('/getweatherbaidu', controller.weatherinfo.getweatherbaidu);
    router.get('/getsim', controller.weatherinfo.getsim);
    router.get('/getlive', controller.getweather.getlive);
};
//http://localhost:7001/hello
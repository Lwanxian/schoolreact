exports.keys = "fsafdsffsaffsad";

//加上后post请求才能成功,文件上传才能成功 1
exports.security = {
    csrf: {
        enable: false,
        ignoreJSON: true
    }
};

//跨域
exports.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
};

//文件上传配置
exports.multipart = {
    mode: 'file',
    fileSize: 1048576000,
};
const Service = require('egg').Service;
class WeatherinfoService extends Service {

    async getposition() {
        const ctx = this.ctx;
        const url = "http://api.map.baidu.com/location/ip?ak=k6jUkGDyhUAhvsaHOjBbCkwZd6OAYVGA&ip=171.217.97.107&oor=bd09ll";
        const result = await ctx.curl(url);
        ctx.status = result.status;
        ctx.set(result.headers);
        return result.data;
    }

    async getweatherbaidu(obj) {
        const ctx = this.ctx;
        const url = `http://api.map.baidu.com/weather/v1/?district_id=${obj.id}&data_type=all&ak=k6jUkGDyhUAhvsaHOjBbCkwZd6OAYVGA`;
        const result = await ctx.curl(url);
        ctx.status = result.status;
        ctx.set(result.headers);
        return result.data;
    }
}
module.exports = WeatherinfoService;
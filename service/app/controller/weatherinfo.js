'use strict';
const Controller = require('egg').Controller;
class WeatherinfoController extends Controller {
    async getposition() {
        const { ctx } = this;
        const result = await ctx.service.weatherinfo.getposition();
        ctx.body = result;
    }
    async getweatherbaidu() {
        const { ctx } = this;
        let obj = ctx.request.query;
        const result = await ctx.service.weatherinfo.getweatherbaidu(obj);
        ctx.body = result;
    }
    async getsim() {
        const { ctx } = this;
        ctx.body = "啦啦啦";
    }
}
module.exports = WeatherinfoController;
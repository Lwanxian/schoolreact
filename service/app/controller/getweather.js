//ajaxController
const Controller = require('egg').Controller;
// app/controller/npm.js
class NpmController extends Controller {
    async getweather() {
        const city = encodeURI(this.ctx.query.city);
        const result = await this.ctx.curl(`http://apis.juhe.cn/simpleWeather/query?city=${city}&key=${this.ctx.query.key}`);
        this.ctx.status = result.status;
        this.ctx.set(result.headers);
        this.ctx.response.body = result.data;
    }
    async getcity() {
        const result = await this.ctx.curl('http://area.ylapi.cn/ad_area/division_lv.u?uid=11554&appkey=380a15a2796f27cf123ff84bb1f07502&level=3&page=1&maxSize=20');
        this.ctx.status = result.status;
        this.ctx.set(result.headers);
        this.ctx.response.body = result.data;
    }
    async getlocation() {
        const result = await this.ctx.curl('https://apis.map.qq.com/ws/location/v1/ip?key=E72BZ-AZOWU-ZUCVN-BX6HN-NFWQ3-PLB4J');
        this.ctx.status = result.status;
        this.ctx.set(result.headers);
        this.ctx.response.body = result.data;
    }
    async getcities() {
        const result = await this.ctx.curl('http://area.ylapi.cn/ad_area/division_de.u?uid=11557&appkey=0d96bab9681ebcd8fa4a143a374233f1&parentId=0');
        this.ctx.status = result.status;
        this.ctx.set(result.headers);
        this.ctx.response.body = result.data;
    }
    async getsichuan() {
        const result = await this.ctx.curl('https://apis.map.qq.com/ws/district/v1/getchildren?id=510000&key=J5SBZ-D5EWX-GCA4V-TAAGO-OIIT6-M4F3K');
        this.ctx.status = result.status;
        this.ctx.set(result.headers);
        this.ctx.response.body = result.data;
    }
    async getchengdu() {
        const result = await this.ctx.curl('https://apis.map.qq.com/ws/district/v1/getchildren?id=510100&key=J5SBZ-D5EWX-GCA4V-TAAGO-OIIT6-M4F3K');
        this.ctx.status = result.status;
        this.ctx.set(result.headers);
        this.ctx.response.body = result.data;
    }
    async getairquality() {
        const result = await this.ctx.curl('https://v0.yiketianqi.com/api?version=v10&appid=93998467&appsecret=ksaeDX6F');
        this.ctx.status = result.status;
        this.ctx.set(result.headers);
        this.ctx.response.body = result.data;
    }
    async getlive() {
        const city = encodeURI(this.ctx.query.city);
        const result = await this.ctx.curl(`http://apis.juhe.cn/simpleWeather/life?city=${city}&key=${this.ctx.query.key}`);
        this.ctx.status = result.status;
        this.ctx.set(result.headers);
        this.ctx.response.body = result.data;
    }
}
module.exports = NpmController;
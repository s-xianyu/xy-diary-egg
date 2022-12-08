import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    console.log(ctx, 111);
    console.log(ctx.querystring, 111);
    console.log(ctx.request.path, 222);
    const result = await ctx.service.test.sayHi(ctx.query);
    ctx.body = result;
  }
}

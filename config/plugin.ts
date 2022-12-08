import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  // static: true,
  // nunjucks: {
  //   enable: true,
  //   package: 'egg-view-nunjucks',
  // },
  /**
   * 跨域处理插件
   */
  cors: {
    enable: true,
    package: 'egg-cors',
  },
};

export default plugin;

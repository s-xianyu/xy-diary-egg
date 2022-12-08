import { Service } from 'egg';
import { SUCCESS } from '../utils/code';

/**
 * Test Service
 */
export default class Test extends Service {

  /**
   * sayHi to you
   * @param data - your data
   */
  public async sayHi(data: any) {
    return Object.assign(SUCCESS, {
      data,
    });
  }
}

import Category from './CateEnum'

class ItemData {
  id!: number;
  categoryId!: Category;
  title!: string;
  content!: string;
  createTime!: string;

  constructor(id: number = -1, categoryId: Category = -1, title: string = '', content: string = '') {
    this.id = id;
    //在此需要使用枚举类型代表笔记分类
    this.categoryId = categoryId;
    this.title = title;
    this.content = content;
    this.createTime = this.toSelfDataStr(Date.now());
  }


  toSelfDataStr(timeSpan: number): string {
    //1.将时间戳转成日期对象
    let date = new Date(timeSpan);
    //2.使用日期对象的getXXX方法，依次获取年月日 时分秒，拼接成想要的格式
    let str = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' +
      date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
    return str;
  }
}


export default ItemData;


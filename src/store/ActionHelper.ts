import DataHelper from './DataHelper'
import ItemData from '@/model/ItemData'
class ActionHelper {
  //1.负责数据处理
  dataHelper: DataHelper = new DataHelper('memoData', 'id');
  //1.1 笔记数组
  memoList!: Array<ItemData>;


  constructor() {
    //读取本地数据，将笔记数组保存到this.memoList变量中
    this.memoList = this.readData();
  }

  readData(): Array<ItemData> {
    //1.读取本地的object数组-dataHelper
    let arrObj = this.dataHelper.readData();
    //2.将Object数组，转成ItemData数组
    let arrItem = arrObj.map((ele: any) => {
      let item: ItemData = new ItemData();
      item.id = ele.id;
      item.categoryId = ele.categoryId;
      item.title = ele.title;
      item.content = ele.content;
      item.createTime = ele.createTime;

      return item;
    });
    //3.返回ItemData数组
    return arrItem;
  }

  //2.负责业务处理
  //2.1 新增笔记
  add(item: ItemData): number {
    //a.保存到本地 dataHelper.addData,会返回生成的id值
    item.id = this.dataHelper.addData(item);
    //b.将笔记添加到笔记数组中
    this.memoList.push(item);
    //c.将笔记数组重新保存到本地
    this.dataHelper.savaData(this.memoList);
    //d.返回新笔记 的id
    return item.id;
  }

  //2.2修改笔记
  edit(item: ItemData): void {
    //a.找出数组中id相同的对象
    let editItem: ItemData | undefined = this.memoList.find((ele) => {
      return ele.id == item.id;
    });
    //b.修改对象的值，将传入对象item各个属性的值覆盖设置给数组中找到对象的属性
    if (editItem) {
      editItem.categoryId = item.categoryId;
      editItem.title = item.title;
      editItem.content = item.content;
      //c.将更新后的数组重新保存到本地localStorage中
      this.dataHelper.savaData(this.memoList);
    }
  }

  //2.3删除笔记
  remove(id: number): void {
    //a.根据id找出要删除的对象在数组中的下标
    let index: number = this.memoList.findIndex((ele) => {
      return ele.id == id;
    });

    //b.根据下标调用数组的splice方法来删除对象
    if (index > -1) {
      this.memoList.splice(index, 1);
      //c.将删除对象后的数组重新保存到localStorage
      this.dataHelper.savaData(this.memoList);
    }
  }


}


export default ActionHelper;

//DataHelper类-负责localStorage操作
class DataHelper {
  dataKey: string;
  primaryKey: string;
  constructor(dataKey: string, primaryKey: string) {
    this.dataKey = dataKey;
    this.primaryKey = primaryKey;
  }
  readData(): any {
    //读取本地数据(根据datakey读取)
    let strData: string | null = localStorage.getItem(this.dataKey);
    //将读取的json字符串转换成数组对象
    let arrData: any = [];
    if (strData != null) {
      arrData = JSON.parse(strData);
    }
    //返回数组对象
    return arrData;
  }
  savaData(arrData: Array<Object>): void {
    //将数组转换成json字符串
    let str: string = JSON.stringify(arrData);
    //将字符串保存到本地localStorage中
    localStorage.setItem(this.dataKey, str);
  }
  addData(conStr: string): number {
    //读取本地现有数据
    let arr: any = this.readData();
    //创建一个评论对象，并设置评论内容属性
    let obj: Object = {
      content: conStr
    }
    //自动生成主键值（id值）
    let newId = arr.length > 0 ? arr[arr.length - 1][this.primaryKey] + 1 : 1;
    //将id值通过中括号访问法添加到对象
    obj[this.primaryKey] = newId;
    //将添加了主键值的对象追加到数组
    arr.push(obj);
    //将数组保存到localStorage中
    this.savaData(arr);
    //返回id
    return newId;
  }
  removeDataById(id: string | number): boolean {
    //读取本地数组
    let arr = this.readData();
    //查找要删除评论对象的下标并保存到本地
    let index = arr.findIndex((ele: any) => {
      return ele[this.primaryKey] == id;
    });
    //如果下标大于-1,则删除数组中该下标元素对象，并返回true
    if (index > -1) {
      arr.splice(index, 1);
      //保存到本地
      this.savaData(arr);
      return true;
    }
    return false;
  }
}

export default DataHelper;

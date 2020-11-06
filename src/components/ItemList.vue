<template>
  <div id="memos"
       class="container">
    <MemoItem v-for="item in filteMemo()"
              :key="item.id"
              :memo="item"></MemoItem>
  </div>
</template>

<script lang="ts">
//1.导入vue
import ItemData from "@/model/ItemData";
import { Component, Vue } from "vue-property-decorator";
import MemoItem from "./MemoItem.vue";

@Component({
  components: {
    MemoItem,
  },
})

//2.编写组件类
export default class ItemList extends Vue {
  //a.声明笔记数组（方便在当前组件中调用）
  memoArr: Array<ItemData> = this.$store.state.aHelper.memoList;

  filteMemo() {
    if (this.$store.state.filterCateId == -1) {
      return this.memoArr;
    } else {
      return this.memoArr.filter((item: any) => {
        return item.categoryId == this.$store.state.filterCateId;
      });
    }
  }
}
</script>

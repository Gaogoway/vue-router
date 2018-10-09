<template>
    <div class="footer-tab">
    <div class="tab-item">home</div>
    <div class="tab-item">second</div>
    <div class="tab-item">third</div>
  </div>
</template>

<script>

    export default {
        name: 'commonFooter',
        data() {
            return {}
        },
        created() {
        },
        mounted(){
          let _this=this;
          //事件委托
          document.querySelector(".footer-tab").addEventListener("click",function(e){
            let target=e.target;//事件发生的元素

            let nodeList=e.target.parentNode.children;//同级元素集合

            let targetIndex=_this.tabIndex(target,nodeList);//调用tabIndex方法，返回值便是元素下标

            console.log(targetIndex)//打印当前点击元素的下标
          })
        },
        methods: {
          /**
           *
           * @param target 事件触发的元素
           * @param nodeList 元素集合
           * @returns {number} 返回事件触发元素的下标
           */
          tabIndex(target,nodeList){
            for(let i=0;i<nodeList.length;i++){
              if(target===nodeList[i]){
                return i;
              }
            }
          }
        }
    }

</script>

<style spoced lang="scss">
    
</style>
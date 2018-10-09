<template>
    <div class="newStart" style="height:100%">
        <div class="editCOn">
            <quill-editor  @blur="onEditorBlur($event)" >

            </quill-editor>
        </div>
    </div>
    
   
</template>

<script>
    export default{
        name:'newStart',
        data(){
            return{

            }
        },
        methods:{
            //富文本
            onEditorBlur:function (e) {
                console.log('editor change!', e);
                console.log(e.container.innerHTML);//一大推东西，你也可以输出e，看看里面的结构
                }
            }
    }
</script>

<style spoced lang="scss">
    
</style>
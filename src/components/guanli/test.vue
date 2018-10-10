<template>
    <div>
        <Table :context="self" ref="selection" border :columns="columns7" :data="data6" @on-select="checkIfon"></Table>
            <Button @click="handleSelectAll(true)">全选</Button>
            <Button @click="handleSelectAll(false)">取消</Button>
            <Button @click="del()">批量删除</Button>
        <div class="page">
            <Page :total="total" :current="page" @on-change="changePage"  show-total/>
        </div>
    </div>
</template>
<script>
import axios from "axios"
    export default {
        data () {
            return {
                self: this,
                total:0,
                page:1,
                //模拟数据
                data6: [],
                state:[],
                columns7: [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: '姓名',
                        key: 'name',
                        render: (h, params) => {
                            return h('div', [
                                h('Icon', {
                                    props: {
                                        type: 'person'
                                    }
                                }),
                                h('strong', params.row.name)
                            ]);
                        }
                    },
                    {
                        title: '年龄',
                        key: 'age'
                    },
                    {
                        title: '性别',
                        key: 'sex'
                    },
                    {
                        title: '地址',
                        key: 'address'
                    },
                    {
                        title: '操作',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.show(params.index)
                                        }
                                    }
                                }, '查看'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            //删除下标
                                            this.remove(params.index)
                                          localStorage.setItem('table',JSON.stringify(this.data6))
                                           
                                        }
                                    }
                                }, '删除')
                            ]);
                        }
                    }
                ],
                
            }
        },
        methods: {
            show (index) {
                this.$Modal.info({
                    title: 'User Info',
                    content: `Name：${this.data6[index].name}<br>Age：${this.data6[index].age}<br>Address：${this.data6[index].address}`
                })
            },
            remove (index) {
                this.data6.splice(index, 1);
            },
            getPage(){
                let para = {
                    page: this.page
                };
                console.log(para)
                this.$Loading.start();
                axios.get('http://rap2api.taobao.org/app/mock/86926/api/v1/getPage',{
                    params : {
                        para,
					}
                })
                .then(res=>{
                    //table顶部显示进度条
                    this.$Loading.finish();
                    //显示总共条数据
                    this.total = res.data.total;
                    //将数据传到table里面，页面显示
                    this.data6=res.data.data;
                })
            },
            changePage (row) {
                // 显示分页页数
                console.log(row);
                this.page = row;
                this.getPage();
            },
            handleSelectAll (status) {
                this.$refs.selection.selectAll(status);
            },
            //获取checkbox选取的数据
            checkIfon(selection,row){
                this.state=selection
                
            },
            del(){
                console.log(this.state)
                for(var i=0;i<this.state.length;i++){
                    if(this.state[i].selection){
                        this.state.splice(i,1)
                        i--
                    }
                }
            }
        },
        mounted(){
            this.getPage()
        }
    }
</script>

<style spoced lang='scss'>
    .page{
        float:right;
        margin-top:10px;
    }
</style>

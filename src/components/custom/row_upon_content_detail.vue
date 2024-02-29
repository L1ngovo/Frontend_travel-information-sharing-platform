<template>
    <div class="row-upon-content-detail-layout">

        <div class="row-upon-content-detail-main-container">
            <div class="row-upon-content-detail-content-area">
                <div class="row-upon-content-detail-content-area-artical-info">
                    <h2>
                        这里是标题
                    </h2>
                    <h6>
                        <div>
                            发布时间 | 更新时间
                        </div>
                        <div>
                            点赞、收藏、评论数
                        </div>
                    </h6>
                    <div>
                        天气
                    </div>
                </div>
                <div style="height: 1px;background-color: black;margin: 1rem 0;"></div>
                <div class="row-upon-content-detail-content-area-artical-detail" style="flex: 6;">
                    文章具体内容
                </div>
                <div style="height: 1px;background-color: black;margin: 1rem 0;"></div>
                <div style="flex: 2; display: flex; flex-direction: column;">
                    <div>
                        <i class="ri-question-answer-fill"></i>评论
                    </div>
                    
                    <div style="display: flex; justify-content: space-between;">
                        <div>
                            评论数
                        </div>
                        <div>
                            用户名
                        </div>
                    </div>
                    <div style="height: 1px;background-color: black;margin: 1rem 0;"></div>
                    <div>
                        <div style="display: flex; ">
                            <div style="flex: 1; display: flex; justify-content: center; align-items: center;">
                                头像  
                            </div>
                            <div style="flex: 8; margin: 0px 10px;">
                                <textarea placeholder="善言暖心窝，恶语冷如梭。" rows="3"></textarea>
                            </div>
                        </div>
                        <div style="float: right;">
                            <el-button type="primary" plain>按钮</el-button>
                        </div>
                    </div>
                    <div style="display: flex; ">
                        <div style="flex: 1; display: flex; justify-content: center; align-items: center;">
                            头像  
                        </div>
                        <div style="flex: 8; background-color: #eef4f8; padding: 10px;  margin: 0px 10px; border-radius: 5px;" >
                            <div style="display: flex; justify-content: space-between;">
                                <div style="display: flex;">
                                    <div>
                                        用户名
                                    </div>
                                    <div>
                                        时间
                                    </div>
                                </div>

                                <div>
                                    点赞转发
                                </div>
                            </div>
                            <div>
                                vf
                            </div>
                        </div>

                    </div>
                </div>
                
            </div>
            <div class="row-upon-content-detail-base-info-area">
                <div style="background-color: antiquewhite;">
                    作者信息
                </div>
                <div style="background-color: rgb(175, 123, 55);">
                    文章目录
                </div>
                <div style="background-color: rgb(231, 190, 137);">
                    相关文章
                </div>
            </div>
            
        </div>

    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const router = useRoute()
const num = router.query.num

</script>

<style lang="scss" scoped>
.row-upon-content-detail-layout {
    height: 100%;
    width: 90%;
}
.row-upon-content-detail-main-container {
    height: 100%;
    margin: 20px;
    border-radius: 10px;
    display: flex;
    & > * {
        border-radius: 10px;
        box-shadow: 0.1em 0.1em 0.5em rgba(144, 144, 144, 0.3);
        margin: 10px;
        padding: 10px;
        background-color: #fff;
    }
}
.row-upon-content-detail-content-area {
    flex: 3;
    display: flex;
    flex-direction: column;
}

.row-upon-content-detail-content-area-artical-info {
    flex: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.row-upon-content-detail-base-info-area {
    flex: 1;
    display: flex;
    flex-direction: column;
    & > * {
        margin: 5px 0px;
    }
    & > :first-child {
        height: 200px;
    }
    & :nth-child(n+2) {
        flex: 1;
        justify-content: center;
        align-items: center;
    }
}


textarea {  
  font-family: 'Arial', sans-serif;  
  font-size: 16px; 
  background-color: #f5f5f5;
  border: 1px solid #bcbcbc;
  border-radius: 10px;
  padding: 10px;
  width: 95%;
  
//   overflow-y: scroll;  
}  

textarea:focus {
    outline: 1px solid #76d1ff;
    background-color: #fff;
}

/* 自定义滚动条样式（伪元素和CSS属性可能因浏览器而异） */  
textarea::-webkit-scrollbar {  
  width: 10px;  
}  
  
textarea::-webkit-scrollbar-track {  
  background:   rgb(255, 255, 255);  
}  
  
textarea::-webkit-scrollbar-thumb {  
  background: rgb(230, 230, 230);
}  
  
</style>
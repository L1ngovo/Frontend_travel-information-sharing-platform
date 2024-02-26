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
                <div class="row-upon-content-detail-content-area-artical-detail">
                    文章具体内容
                </div>
                <div style="height: 1px;background-color: black;margin: 1rem 0;"></div>
                <div>
                    评论
                    <div>
                        评论数 用户名
                    </div>
                    <div>
                        <div>
                            头像 输入框
                        </div>
                        <div>
                            按钮
                        </div>
                    </div>
                    <div>
                        <div>
                            头像
                        </div>
                        <div>
                            <div>
                                用户名
                            </div>
                            <div>
                                时间
                            </div>
                            <div>
                                点赞 转发
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
}

.row-upon-content-detail-content-area-artical-info {
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
</style>
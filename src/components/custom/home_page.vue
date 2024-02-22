<template>
    <div class="home-page-layout">
        <div class="home-page-navigation-area">
            <!-- <div class="home-page-navigation-area-classification"> -->
                <ul>
                    <!-- <MenuItem v-for="item in menuItems" :key="item.id" :item="item"/> -->
                    <MenuItem/>
                </ul>

                <!-- <div class="home-page-navigation-area-classification-menu" v-for="item in menuItems" :key="item">
                    {{ item.name }}
                </div> -->
                <!-- <div class="home-page-navigation-area-classification-sub-menu">
                    <ul>
                        <li>二级1</li>
                        <li>二级2</li>
                    </ul>
                    <ul>
                        <li>二级1</li>
                        <li>二级2</li>
                    </ul>
                </div> -->
            <!-- </div> -->
            <div class="home-page-navigation-area-slideshow"  @mouseover="ClearInterval"  @mouseleave="SetInterval">
                <div class="block text-center">
                    <el-carousel height="180px">
                    <el-carousel-item v-for="item in imgdata" :key="item">
                        <img :src="item.img" style="max-height: 100%;object-fit: cover;">
                    </el-carousel-item>
                    </el-carousel>
                </div>
            </div>

        </div>
        <div class="home-page-content-area">
            <div class="container">  
                <div  
                v-for="num in numbers"  
                :key="num"  
                class="number-box"  
                >  
                {{ num }}  
                </div>  
            </div> 
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import MenuItem from '@/components/general/side_multilevel_menu.vue'

const imgdata = ref([
{img :"https://pic.imgdb.cn/item/65bc9b8b871b83018adbf6ae.png" },
{img :"https://pic.imgdb.cn/item/65aa4507871b83018a710078.jpg" },
{img :"https://pic.imgdb.cn/item/65aa450c871b83018a7112b1.jpg"},
])

const menuItems = [  
    {  
        id: 1,  
        name: '菜单1',  
        children: [  
            { id: 11, name: '子菜单1' },  
            { id: 12, name: '子菜单2' }  
        ]  
    },  
    {  
        id: 2,  
        name: '菜单2',  
        children: [  
            { id: 21, name: '子菜单3' },  
            { id: 22, name: '子菜单4' }  
        ]  
    }  
]  

const numbers = ref(Array.from({ length: 30 }, (_, i) => i + 1))


</script>

<style scoped lang="scss">
.home-page-layout {
    display: flex;
    flex-direction: column;
    height: 100%;
}
.home-page-navigation-area {
    display: flex;
    height: 200px;
    background-color: #d24f4f;
    & > * {
        margin: 10px;
    }
}
.home-page-navigation-area-classification {
    flex: 1;
    background-color: #c4b7b7;
    // display: flex;
}

.home-page-navigation-area-classification-sub-menu {
    display: none;
}

.home-page-navigation-area-classification-menu:hover + .home-page-navigation-area-classification-sub-menu {
    display: block;
}

.home-page-navigation-area-slideshow {
    flex: 3;
    background-color: #e2f9be;

}
.home-page-navigation-area-slideshow-item-img {
    display: flex;
    flex-direction: column;
}
.home-page-navigation-area-slideshow-item-img :last-child {
    display: flex;
    flex-direction: row;
}
.home-page-content-area {
    flex-grow: 1;
    background-color: #e3c7c7;
    overflow-y: auto;
}


.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}


.container {  
  display: flex;  
  flex-wrap: wrap; /* 允许子元素换行 */  
  justify-content: space-around; /* 子元素之间平均分布空间 */  
  align-items: center;  
  padding: 20px;  
  border: 1px solid #ccc;  
  background-color: #f5f5f5;  
}  
  
.number-box {  
  display: flex;  
  justify-content: center;  
  align-items: center;  
  width: calc(100% / 6 - 10px); /* 假设每行显示6个数字，减去一些间距 */  
  height: 30px;  
  margin: 5px;  
  border: 1px solid #000;  
  background-color: #ddd;  
  font-size: 16px;  
}   


</style>
<!-- <template>
    <div class="home-page-layout">
        <div class="home-page-navigation-area">
            <div class="home-page-navigation-area-classification">

            </div>
            <div class="home-page-navigation-area-slideshow"  @mouseover="ClearInterval"  @mouseleave="SetInterval">
                <div class="home-page-navigation-area-slideshow-item-img">
                    <div class="home-page-navigation-area-slideshow-item" v-for="(item,index) in Data" :key="index">
                        <div style="font-size: 50px;" v-if="index == currentIndex">
                            {{ item }}
                        </div>
                    </div>
                    <div class="home-page-navigation-area-slideshow-item-bar">
                        <div style="background-color: #b7b6b6; width: 20px; height: 20px; margin: 10px;"></div>
                        <div style="background-color: #b7b6b6; width: 20px; height: 20px; margin: 10px;"></div>
                    </div>
                    
                </div>


                <div class="carousel">  
    <div class="carousel-images">
        <img src="https://pic.imgdb.cn/item/65bc9b8b871b83018adbf6ae.png" alt="Snipaste_2024-01-29_11-31-32.png">  
        <img src="https://pic.imgdb.cn/item/65aa4507871b83018a710078.jpg" alt="微信图片_20240119142752.jpg">
        <img src="https://pic.imgdb.cn/item/65aa450c871b83018a7112b1.jpg" alt="微信图片_20240119143853.jpg">

    </div>  
    <div class="carousel-controls">  
        <span class="dot"></span>  
        <span class="dot"></span>  
        <span class="dot"></span>  
        <span class="dot"></span>  
    </div> 
    <div class="carousel-controls">  
        <button class="prev">&#10094;</button>  
        <button class="next">&#10095;</button>  
    </div>  

    
</div>
            </div>

        </div>
        <div class="home-page-content-area">
            a10.
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const Data = ref([1,2,3,4,5,6,7,8,9,10])

let currentIndex = ref(0)
const Next = () => {
    currentIndex.value++
    if(currentIndex.value >= Data.value.length){
        currentIndex.value = 0
    }
}
const Upper = () => {
    currentIndex.value--
    if(currentIndex.value < 0){
        currentIndex.value = Data.value.length -1
    }
}
// let carousel = setInterval(()=>{
//     currentIndex.value++
//     if(currentIndex.value >= Data.value.length){
//         currentIndex.value = 0
//     }
// },1000)

// const ClearInterval = () => {
//     clearInterval(carousel)
// }
// const SetInterval = () => {
//     clearInterval(carousel)
//     carousel = setInterval(()=>{
//         currentIndex.value++
//         if(currentIndex.value >= Data.value.length){
//             currentIndex.value = 0
//         }
//     },1000)
// }

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


.carousel {  
    position: relative;  
    width: 100%;  
    height: 400px;  /* 调整为你需要的值 */  
    overflow: hidden;  
}  
  
.carousel-images {  
    display: flex;  
    width: calc(100% * 3);  /* 假设有3张图片 */  
    height: 100%;  
    transition: transform 0.5s ease-in-out;  
}  
  
.carousel-images img {  
    width: 33.33%;  /* 如果是3张图片的话 */  
    height: 100%;  
}  
  
.carousel-controls {  
    position: absolute;  
    bottom: 20px;  /* 根据需要调整 */  
    left: 50%;  
    transform: translateX(-50%);  
}  

.dot {  
  height: 15px;  
  width: 15px;  
  margin: 0 2px;  
  background-color: #bbb;  
  border-radius: 50%;  
  display: inline-block;  
  transition: background-color 0.3s ease-in-out;  
}  
  
.dot.active {  
  background-color: #777;  
}

.prev, .next {  
    background-color: rgba(0, 0, 0, 0.5);  /* 根据需要调整颜色和透明度 */  
    color: #fff;  /* 根据需要调整颜色 */  
    border: none;  
    padding: 10px;  /* 根据需要调整 */  
    cursor: pointer;  
}
</style> -->


<template>
    <div class="slider">
        <div class="slider-wrapper">
            <img src="" alt="">
        </div>
        <div class="slider-footer">
            <p>content-area</p>
            <ul class="slider-indicator">
                <li class="active"></li>
                <li></li>
                <li></li>
            </ul>
            <div class="toggle">
                <button class="prev">&lt;</button>
                <button class="next">&gt;</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

* {
    box-sizing: border-box;
}
.slider {
    width: 560px;
    height: 400px;
    overflow: hidden;
}

.slider-wrapper {
    width: 100%;
    height: 320px;
}
.slider-wrapper img {
    width: 100%;
    height: 100%;
    display: block;
}
.slider-footer {
    height: 80px;
    background-color: rgb(100,67,68);
    padding: 12px 12px 0 12px;
    position: relative;
}
.slider-footer .toggle {
    position: absolute;
    right: 0;
    top: 12px;
    display: flex;
}
.slider-footer .toggle button {
    margin-right: 12px;
    width: 28px;
    height: 28px;
    appearance: none;
    border: none;
    background: rgba(255,255,255,0.1);
    color: #fff;
    border-radius: 4px;
    cursor: pointer;
}

.slider-footer .toggle button:hover {
    background: rgba(255,255,255,0.2);
}

.slider-footer p {
    margin: 0;
    color: #fff;
    font-size: 18px;
    margin-bottom: 10px;
}

.slider-indicator {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    align-items: center;
}

.slider-indicator li {
    width: 8px;
    height: 8px;
    margin: 4px;
    border-radius: 50%;
    background: #fff;
    opacity: 0.4;
    cursor: pointer;
}

.slider-indicator li.active {
    width: 12px;
    height: 12px;
    opacity: 1;
}

</style>
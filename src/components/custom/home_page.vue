<template>
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

const ClearInterval = () => {
    clearInterval(carousel)
}
const SetInterval = () => {
    clearInterval(carousel)
    carousel = setInterval(()=>{
        currentIndex.value++
        if(currentIndex.value >= Data.value.length){
            currentIndex.value = 0
        }
    },1000)
}

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
</style>

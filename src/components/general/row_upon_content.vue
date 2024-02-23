<template>
    <div>
        <div class="container">  
            <div  
            v-for="num in numbers"  
            :key="num"  
            class="number-box"  
            @click="SkipToDetails(num)"
            >  
                {{ num }}  
            </div>  
        </div> 
    </div>
</template>

<script setup>
import router from '@/router';
import { ref } from 'vue';


const numbers = ref(Array.from({ length: 30 }, (_, i) => i + 1))

const SkipToDetails = (num) => {
    router.push({
        path: '/row_upon_content_detail',
        query: {
            num: num
        }
    })
}

</script>

<style>
.container {  
  display: flex;  
  flex-wrap: wrap; /* 允许子元素换行 */  
  justify-content: space-around; /* 子元素之间平均分布空间 */  
  align-items: center;  
  padding: 20px;  
  background-color: #fdfdfd;
  /* border: 1px solid #ccc;   */
  
}  
  
.number-box {  
  display: flex;  
  justify-content: center;  
  align-items: center;  
  width: calc(100% / 6 - 10px); /* 假设每行显示6个数字，减去一些间距 */  
  height: 280px;  
  margin: 15px;  
  border: 1px solid #e5e5e5; 
  border-radius: 10px; 
  box-shadow: 0.1em 0.1em 0.5em rgba(144, 144, 144, 0.3);
  background-color: #fdfdfd;  
  font-size: 16px;  
}  
</style>
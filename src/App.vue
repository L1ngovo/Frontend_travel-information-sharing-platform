<template>  
    <div class="layout">  
        <div class="nav-bar">
            <NavBar></NavBar>
        </div>  
        <div class="main-content">
            <router-view></router-view>
        </div>  
        <div class="footer">
            <FooterNav></FooterNav>
        </div>  
    </div>  
  </template>  
    
  <script setup>  
    import NavBar from './components/general/top_navigation_bar.vue'
    import FooterNav from './components/general/footer_navigation.vue'
  </script>  
    
  <style lang="scss" scoped>  
  .layout {  
    display: flex;  
    flex-direction: column;  
    height: 100vh; /* 视口高度 */  
  }  
  .nav-bar {  
    height: 80px; /* 根据你的需求调整导航栏高度 */  
    // background-color: #333; /* 导航栏背景色 */  
    background-color:  rgba(51, 51, 51,1);
    box-shadow: 0.1em 0.1em 0.5em rgba(144, 144, 144, 0.3);
    position: sticky; /* 实现吸顶效果 */  
    top: 0; /* 与顶部对齐 */  
    width: 100%; /* 宽度占满整个屏幕 */  
    opacity: 1; /* 或者使用rgba颜色值，如rgba(0, 0, 0, 1) */ 
    z-index: 99;
  }  
  .main-content {  
    flex: 1; /* 占据可用空间 */  
    display: flex; /* 内容居中放置 */  
    justify-content: center; /* 水平居中 */  
    align-items: center; /* 垂直居中 */  
    background-color: #f4f4f4;
  }  

  .footer {

    height: 80px;
    width: 100%;
  }

  </style>


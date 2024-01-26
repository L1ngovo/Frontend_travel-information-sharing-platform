<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
</script>

<template>
    <div>
         <!-- <el-button type="primary">button</el-button> -->
         <!-- <i class="ri-arrow-left-up-line"></i> -->
    </div>
  <div id="app" class="container">
    <nav class="navbar">
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#">Home<i class="ri-arrow-left-up-line"></i></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Services</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
 
</template>

<style lang="scss">
//   html,body,#app{
//     margin: 0px;
//     padding: 0px;
//     height: 100%;
    
//   } 
.navbar {
    background-color: #333;
    padding: 1rem;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 100;
  }

  .navbar-brand {
    color: #fff;
  }

  .navbar-nav .nav-link {
    color: #fff;
  }

  .navbar-nav .nav-link:hover {
    color: #ccc;
  }
</style>

<template>
    <div >
        <nav>  
            <ul>  
                <li><a href="#">首页</a></li>  
                <li><a href="#">关于我们</a></li>  
                <li><a href="#">产品</a></li>  
                <li><a href="#">联系我们</a></li>  
            </ul>  
        </nav>
    </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
nav {  
  background-color: #333;  
// box-shadow: 0.1em 0.1em 0.5em rgba(144, 144, 144, 0.3);
  overflow: hidden;  
  z-index: 100;
}  
  
nav ul {  
  list-style-type: none;  
  padding: 0;  
}  
  
nav ul li {  
  display: inline-block;  
  position: relative;  
}  
  
nav ul li a {  
  display: block;  
  padding: 10px 20px;  
  color: #fff;  
  text-decoration: none;  
}
</style>
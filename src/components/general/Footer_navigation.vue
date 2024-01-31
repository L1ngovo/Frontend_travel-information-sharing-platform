<template>
    <div>
        <footer class="footer">  
            <nav>  
                <ul>  
                <li><a href="#">首页</a></li>  
                <li><a href="#">关于我们</a></li>  
                <li><a href="#">产品</a></li>  
                <li><a href="#">联系我们</a></li>  
                </ul>  
            </nav>  
            <!-- <p class="copyright">&copy; 2023 公司名称. 版权所有.</p>  
            <p class="contact">电话: +123 4567890</p>  
            <p class="contact">邮箱: [example@example.com]</p>   -->
        </footer>
    </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
.footer {  
//   background-color: #f5f5f5;  
//   padding: 20px;  
  text-align: center;  
}  
  
.footer nav {  
  display: flex;  
  justify-content: center;  
}  
  
.footer nav ul {  
  list-style-type: none;  
  padding: 0;  
}  
  
.footer nav ul li {  
  display: inline-block;  
}  
  
.footer nav ul li a {  
  display: block;  
  padding: 10px 20px;  
  color: #333;  
  text-decoration: none;  
}  
  
.footer p.copyright {  
  margin-top: 10px;  
  font-size: 14px;  
}  
  
.footer p.contact {  
  margin-top: 5px;  
  font-size: 12px;  
}
</style>
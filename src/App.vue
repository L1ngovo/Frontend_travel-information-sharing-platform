<template>
    <div>
        <div class="container">
            <div class="header">
                头部
            </div>
            <div class="main">
                主体
            </div>
            <div class="footer">
                尾部
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss">

.container{
    height: 100vh;
    display: flex;
    flex-direction: column;
}
.header{
    position: fixed;
    z-index: 99;
    top: 0;
    background-color: #e99595;
    width: 100%;
    height: 50px;
}
.main{
    flex: 1;
    background-color: #ac3c3c;
    // height: calc(100vh - 50px);
    
}
.footer{
    background-color: #5f2626;
}

</style>
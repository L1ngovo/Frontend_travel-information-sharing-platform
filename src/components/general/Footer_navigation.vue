<template>
    <div class="footer-navigation-layout">
        <div class="footer-navigation-content-area">
            <div class="footer-navigation-content-area-copyright-info">
                © 2024 版权所有
            </div>
            <div class="footer-navigation-content-area-developer-info">
                <div>
                    关于我们
                </div>
                <div>
                    联系我们
                </div>
                
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.footer-navigation-layout {
    margin-top: 50px;
    background-color: #93825a;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    & :last-child {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
}
</style>
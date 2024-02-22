<!-- <template>  
    <li :class="{ 'menu-item-open': isOpen, 'display':inline-block, 'position':relative }">  
        <a @mouseenter="handleMenuEnter" @mouseleave="handleMenuLeave">  
            {{ item.name }}  
        </a>  
        <ul v-show="isOpen && item.children" class="sub-menu"
            @mouseenter="handleSubmenuEnter" @mouseleave="handleSubmenuLeave">  
            <li v-for="child in item.children" :key="child.id"  
                @click="selectChild(child)"  
                :class="{ 'child-selected': selectedChild === child }"  
            >  
                {{ child.name }}  
            </li>  
        </ul>  
    </li>  
</template>  

<script setup>
import { ref } from 'vue';
const props = defineProps({
  item: {}
})
let isOpen = ref(false)
let selectedChild = ref(null)
const handleMenuEnter = () => {  
    isOpen.value = true
}

const handleMenuLeave = (event) => {  
    // 检查鼠标是否移动到子菜单上 
    const ul = event.relatedTarget
    if (ul && ul.classList.contains('menu-item-open')) { 
        // 如果是，则阻止关闭父菜单 
    event.stopPropagation()
    } else {  
        // 否则，关闭父菜单
    isOpen.value = false 
    }  
}  

const handleSubmenuEnter = () => {  
    isOpen.value = true 
}

const handleSubmenuLeave = () => {  
    isOpen.value = false  
}

const selectChild = (child) => {  
    selectedChild.value = child 
}
</script>

<style scoped> 
    a {
        cursor: pointer;
        position: relative;
    }
    li {
        list-style: none;
        cursor: pointer;
    }

    .menu-item-open > ul {  
        display: block; /* 当父级菜单打开时显示子菜单 */  
        position: absolute; /* 确保子菜单相对于父级菜单定位 */  
        top: 0; /* 顶部对齐 */  
        left: 100%; /* 父级菜单的右侧开始 */  
        margin-left: 10px; /* 在父级菜单右侧留出10px的间距 */
    }  
    .sub-menu {  
        display: none;  
        position: absolute; /* 绝对定位，相对于最近的定位祖先（如果没有则是相对于初始包含块） */  
        top: 0; /* 与主菜单项顶部对齐 */  
        left: 100%; /* 在主菜单项的右侧显示 */  
        /* 其他需要的样式，比如宽度、背景色等 */  
        margin-left: 10px;
        
    }  
        
    .child-selected {  
        /* 子菜单项被选中时的样式 */  
        font-weight: bold; /* 示例样式，可以根据需要自定义 */  
    }  
</style>




 -->

 <template>  
    <div style="display: grid;">  
      <div class="menu-container">  
        <div class="parent-menu" @mouseover="showSubmenu = true" @mouseout="checkIfMouseIsOnSubmenu = true">  
          {{ parentMenu }}  
        </div>  
        <div v-if="showSubmenu" class="submenu" @mouseout="showSubmenu = false">  
          {{ submenu }}  
        </div>  
      </div>  
      <!-- <div class="menu-container">  
        <div class="parent-menu" @mouseover="showSubmenu = true" @mouseout="checkIfMouseIsOnSubmenu = true">  
          {{ parentMenu }}  
        </div>  
        <div v-if="showSubmenu" class="submenu" @mouseout="showSubmenu = false">  
          {{ submenu }}  
        </div>  
      </div>   -->
    </div>  
  </template>  
    
  <script>  
  export default {  
    data() {  
      return {  
        showSubmenu: false,  
        parentMenu: 'Parent Menu',  
        submenu: 'Submenu',  
        isMouseOnSubmenu: false  
      };  
    },  
    methods: {  
      checkIfMouseIsOnSubmenu(event) {  
        // 检查鼠标是否仍然在子菜单上  
        const submenu = event.relatedTarget;  
        if (submenu && submenu.classList.contains('submenu')) {  
          this.isMouseOnSubmenu = true;  
        } else {  
          this.showSubmenu = false;  
        }  
      }  
    }  
  };  
  </script>  
    
  <style scoped>  
  .menu-container {  
    position: relative;  
    display: inline-block;  
  }  
    
  .parent-menu {  
    width: 100px;  
    height: 50px;  
    background-color: #f00;  
    color: #fff;  
    text-align: center;  
    line-height: 50px;  
    position: relative;  
    cursor: pointer;  
  }  
    
  .submenu {  
    width: 100px;  
    height: 50px;  
    background-color: #0f0;  
    color: #fff;  
    text-align: center;  
    line-height: 50px;  
    position: absolute;  
    top: 0;  
    left: 100%; /* 定位子菜单到父菜单的右侧 */  
    margin-left: 10px; /* 调整子菜单与父菜单的间距 */  
    display: none; /* 默认隐藏子菜单 */  
    z-index: 99;
  }  
    
  .parent-menu:hover + .submenu,  
  .submenu:hover {  
    display: block; /* 鼠标经过父菜单或子菜单时显示子菜单 */  
  }  
  </style>

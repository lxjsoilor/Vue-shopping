<template>
    <div id="app">
        <transition name="fade">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
            <!-- <router-view v-else></router-view> -->
        </transition>
        <div class="tab">
            <van-tabbar>
                <van-tabbar-item
                    @click="change(index)"
                    v-for="(val,index) of tabArr"
                    :key="val.id"
                    :icon="val.icon"
                    :class="{'active':active==index}"
                >{{val.title}}</van-tabbar-item>
            </van-tabbar>
        </div>
    </div>
</template>

<script>
import { vuexData } from "js/mixin";
export default {
    mixins: [vuexData],
    name: "App",
    data() {
        return {
            tabArr: [
                { id: 1, title: "商城", icon: "wap-home" },
                { id: 2, title: "分类", icon: "wap-nav" },
                { id: 3, title: "购物车", icon: "shopping-cart" },
                { id: 4, title: "我的", icon: "contact" }
            ]
        };
    },

    methods: {
        change(i) {
            const rout = this.$router;
            if (i == 0) {
                rout.push({ path: "/" });
            } else if (i == 1) {
                rout.push({ path: "/category" });
            } else if (i == 2) {
                rout.push({ path: "/shoppingCart" });
            } else {
                rout.push({ path: "/my" });
            }
        },

        async keeplogin() {
            try {
                const { data } = await this.Api.keeplogin();
                if (data.code == 200) {
                    this.setName(data.userInfo);
                }
            } catch (error) {
                this.$toast("网络错误");
            }
        }
    },

    created() {
        
        this.keeplogin();
        
    }
};
</script>
<style>
.van-tabbar-item--active {
    color: transparent;
}
.fade-enter {
    opacity: 0;
}

.fade-leave {
    opacity: 1;
}

.fade-enter-active {
    transition: opacity 0.2s;
}

.fade-leave-active {
    opacity: 0;
    transition: opacity 0s;
}
</style>


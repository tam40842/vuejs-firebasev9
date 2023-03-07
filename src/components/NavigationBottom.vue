<template>
    <footer id="footer" class="fixed w-full bottom-0 left-0 bg-white pt-4 p-b-safe-4">
        <div class="container mx-auto px-8 h-full">
            <ul class="flex justify-between h-full items-center">
                <li v-for="(nav) in navItems" :key="nav.name">
                    <router-link :to="{ name: nav.name, params: {} }">
                        <i class="t2ico text-2xl" :class="nav.icon"></i>
                    </router-link>
                </li>
            </ul>
        </div>

        <div data-circle class="top-0 absolute left-1/2 transform" @click="goToRoute">
            <div
                class="absolute flex items-center justify-center bg-primary text-white rounded-full cursor-pointer -top-6 w-12 h-12 -translate-x-1/2">
                <i class="t2ico t2ico-plus text-2xl"></i>
            </div>
        </div>
    </footer>
</template>

<script>
import { reactive } from "vue";
import { NAV_BOTTOM_ITEMS } from "@/constants";
import { useRouter } from "vue-router";
export default {
    setup() {
        const router = useRouter()
        const navItems = reactive(NAV_BOTTOM_ITEMS)
        const goToRoute = () => {
            router.push({ name: 'newtransactions', params: {} })
        }
        return {
            navItems, goToRoute
        }
    }
}
</script>

<style lang="css" scoped>
footer#footer>div[data-circle] {
    @apply bg-dark-light;

    width: 60px;
    height: 30%;
    border-bottom-left-radius: 60px;
    border-bottom-right-radius: 60px;
}
</style>
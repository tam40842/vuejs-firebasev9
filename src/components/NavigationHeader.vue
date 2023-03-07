<template>
    <header id="header" class="py-8">
        <div class="container mx-auto px-8">
            <div class="flex justify-between items-center">
                <div class="flex items-center">
                    <div v-if="meta.loading" class="w-10 h-10 overflow-hidden rounded-full">
                        <img src="https://thumbs.dreamstime.com/z/portrait-young-man-beautiful-handsome-boy-avatar-portrait-young-man-beautiful-handsome-boy-avatar-guy-smiling-male-character-133360105.jpg"
                            alt="User Header " class="w-full h-auto object-cover">
                    </div>
                    <div class="text-xl font-bold text-dark ml-2">{{ meta.text }}</div>
                </div>
                <div class="flex">
                    <ul>
                        <li>
                            <i class="t2ico t2ico-notification text-2xl"></i>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
export default {
    setup() {
        const route = useRoute()
        const router = useRouter()


        return { meta: computed(() => route.meta) }
    }
}
</script>

<style lang="scss" scoped></style>
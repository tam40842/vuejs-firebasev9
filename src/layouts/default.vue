<template>
  <NavigationHeader />
  <slot />
  <NavigationBottom v-if="meta.isShowFooter" />
</template>

<script>
import NavigationBottom from '../components/NavigationBottom.vue';
import NavigationHeader from '../components/NavigationHeader.vue';
import { useRoute } from "vue-router";
import { computed } from "vue";

export default {
  components: {
    NavigationBottom,
    NavigationHeader
  },
  setup() {
    const router = useRoute()

    return {
      meta: computed(() => router.meta)
    }
  }
}
</script>

<style lang="scss" scoped></style>

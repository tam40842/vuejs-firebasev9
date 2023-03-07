<template>
  <slot />
  <navigation-brand />
</template>

<script>
import NavigationBrand from '@/components/NavigationBrand.vue'
export default {
  components: {
    NavigationBrand
  }
}
</script>

<style lang="scss" scoped></style>

<template>
  <main>
    <h1>Home View</h1>
    <div class="mt-6" v-if="user">{{ user.displayName }}</div>
  </main>
</template>

<script>
import { useUser } from "@/composables/useUser";

export default {
  setup() {
    const { getUser } = useUser()
    const { user } = getUser()

    return { user }
  }
}
</script>
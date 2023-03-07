<template>
  <div class="mt-8">
    <div class="container mx-auto px-8">
      <form @submit.prevent="onSubmit" class="flex flex-col justify-start space-y-6">
        <div class="row mt-6">
          <label for="fullName" class="flex flex-col">
            <span class="font-semibold">Full Name</span>
            <input id="fullName" class="px-4 py-3 rounded-lg border border-gray-100 mt-1" type="text" v-model="fullName"
              placeholder="iMoney...." />
          </label>
        </div>
        <div class="row mt-6">
          <label for="email" class="flex flex-col">
            <span class="font-semibold">Email Adress</span>
            <input id="email" class="px-4 py-3 rounded-lg border border-gray-100 mt-1" type="email" v-model="email"
              placeholder="example@gmail.com" />
          </label>
        </div>
        <div class="row mt-6">
          <label for="password" class="flex flex-col">
            <span class="font-semibold">Password</span>
            <input id="password" class="px-4 py-3 rounded-lg border border-gray-100 mt-1" type="password"
              v-model="password" placeholder="example" autocomplete="username" />
          </label>
        </div>
        <div class="row">
          <button v-if="!isPending" type="submit"
            class="py-3 text-center w-full bg-primary text-white font-bold rounded-lg">
            Sign up
          </button>

          <button v-else type="submit"
            class="py-3 text-center w-full bg-gray-800 text-white font-bold rounded-lg cursor-not-allowed" disabled>
            Loading...
          </button>
        </div>

        <div v-if="error" class="text-left text-red mt-4">
          <span>{{ error }}</span>
        </div>

        <div class="w-full text-center mt-6">
          <span class="font-semibol">I'm already a member.</span>
          <span class="ml-1">
            <router-link :to="{ name: 'login', params: {} }" class="text-primary font-bold">Sign in</router-link>
          </span>
        </div>
      </form>

    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useSignUp } from '@/composables/useSignUp.js'
import { useRouter } from "vue-router";
export default {
  setup() {
    const { error, isPending, signup } = useSignUp()
    const router = useRouter()

    const fullName = ref('')
    const email = ref('')
    const password = ref('')
    const onSubmit = async () => {
      await signup(email.value, password.value, fullName.value)
      if (!error.value) router.push({ name: 'profile', params: {} })
    }
    return { onSubmit, fullName, email, error, isPending, password }
  }
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

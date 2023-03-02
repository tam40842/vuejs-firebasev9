<template>
    <div class="mt-8">
        <div class="container mx-auto px-8">
            <form @submit.prevent="onSubmit" class="flex flex-col justify-start space-y-6">
                <div class="row mt-6">
                    <label for="email" class="flex flex-col">
                        <span class="font-semibold">Email Adress</span>
                        <input id="email" class="px-4 py-3 rounded-lg border border-gray-100 mt-1" type="email"
                            placeholder="example@gmail.com">
                    </label>
                </div>
                <div class="row mt-6">
                    <label for="password" class="flex flex-col">
                        <span class="font-semibold">Password</span>
                        <input id="password" class="px-4 py-3 rounded-lg border border-gray-100 mt-1" type="password"
                            placeholder="example" autocomplete="username">
                    </label>
                </div>
                <div class="row">
                    <button type="submit" class="py-3 text-center w-full bg-primary text-white font-bold rounded-lg">
                        Sign in
                    </button>
                </div>

                <div class="w-full text-center mt-6">
                    <span class="font-semibol">I'm a new user.</span>
                    <span class="ml-1">
                        <router-link :to="{ name: 'register', params: {} }" class="text-primary font-bold">Sign
                            up</router-link>
                    </span>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped></style>
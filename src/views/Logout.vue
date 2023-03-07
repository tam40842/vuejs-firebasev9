<template>
    <div>
        <h1>Logout page</h1>
    </div>
</template>

<script>
import { useLogout } from "@/composables/useLogout";
import { useRouter } from "vue-router";
export default {
    setup() {
        const router = useRouter()
        const { error, logout } = useLogout()
        const onLogout = async () => {
            await logout()
            if (!error.value) router.push({ name: 'login', params: {} })
        }

        onLogout()
        return {}
    }
}
</script>

<style lang="scss" scoped></style>
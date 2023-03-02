<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>
import { db } from './configs/firebase.js'
import { collection, getDocs } from 'firebase/firestore/lite'
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { PUBLIC_LAYOUT } from '@/constants'

export default {
  components: {},
  setup() {
    const route = useRoute()
    // const check = ref(null)
    // async function getCities(datatabse) {
    //   const citiesCol = collection(datatabse, 'transactions')
    //   const citySnapshot = await getDocs(citiesCol)
    //   const cityList = citySnapshot.docs.map((doc) => ({
    //     ...doc.data(),
    //     id: doc.id
    //   }))
    //   check.value = cityList
    //   return cityList
    // }
    // getCities(db)
    return { layout: computed(() => (route.meta.layout || PUBLIC_LAYOUT) + '-layout') }
  }
}
</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>

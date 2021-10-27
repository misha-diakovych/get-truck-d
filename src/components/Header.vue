<template>
  <q-header elevated class="bg-black q-pt-xl q-px-md">
    <q-toolbar class="flex justify-between text-positive">
      <div class="coolicon" />
      <q-toolbar-title class="text-bold text-uppercase text-center text-white header-title">lorem ipsum dolor sit amet</q-toolbar-title>
      <q-btn flat @click="$emit('toggle-drawer')" round dense icon="format_align_right" />
    </q-toolbar>
  </q-header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

</style>

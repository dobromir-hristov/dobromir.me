<template>
  <div class="ResumeItem">
    {{ item.title }}
  </div>
</template>

<script>
export default {
  name: 'ResumeItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>

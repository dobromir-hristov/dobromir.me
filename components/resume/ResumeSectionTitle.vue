<template>
  <div class="ResumeSectionTitle flex mb-xl flex-wrap">
    <div class="leftColumn">
      <div
        class="ResumeSectionTitle__content text-right text-3xl mr-8 pb-4">
        <slot/>
      </div>
    </div>
    <div class="rightColumn"/>
    <p
      v-if="subtitle"
      class="leading-content-text text-left pl-6 pt-6">{{ subtitle }}</p>
  </div>
</template>

<script>
export default {
  name: 'ResumeSectionTitle',
  props: {
    subtitle: {
      type: String,
      default: ''
    }
  }
}
</script>

<style rel='stylesheet/scss' lang='scss'>
@tailwind utilities;

.ResumeSectionTitle__content {
  position: relative;
  &:before {
    content: '';
    position: absolute;
    right: 0;
    top: 100%;
    height: 2px;
    width: 80px;
    @apply bg-grey-darkest;
  }
}
</style>

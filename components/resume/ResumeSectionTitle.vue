<template>
  <div class="ResumeSectionTitle flex mb-xl">
    <div class="leftColumn">
      <div class="ResumeSectionTitle__content text-right text-3xl mr-10 pb-4">
        <slot/>
      </div>
    </div>
    <div class="rightColumn"/>
  </div>
</template>

<script>
export default {
  name: 'ResumeSectionTitle',
  data () {
    return {}
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

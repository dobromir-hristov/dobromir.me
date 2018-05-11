<template>
  <div
    v-observe-visibility="triggerVisibility"
    class="ResumeSectionTitle flex mb-8 sm:mb-xl flex-wrap"
  >
    <div class="leftColumn">
      <div
        :class="{ inView }"
        class="ResumeSectionTitle__content text-left sm:text-right text-3xl mr-8 pb-4">
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
  },
  data () {
    return {
      inView: false
    }
  },
  methods: {
    triggerVisibility (isVisible) {
      if (isVisible && !this.inView) {
        this.inView = true
      }
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
    left: 0;
    top: 100%;
    height: 2px;
    width: 0;
    transform-origin: center;
    transform: translateX(-40px);
    @apply bg-grey-darkest;
    transition: .15s linear .6s;
    @screen sm {
      left: auto;
      right: 0;
    }
  }
  &.inView:before {
    width: 80px;
    transform: translateX(0px);
  }
  @media print {
    &:before {
      width: 80px;
      transform: translateX(0px);
    }
  }
}
</style>

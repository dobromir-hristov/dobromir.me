<template>
  <div class="ResumeItem flex mb-10">
    <div class="leftColumn text-right pr-8">
      <div class="ResumeItem-border border-t border-grey-darkest pb-6 mt-2"/>
      <div class="ResumeItem-position font-medium mb-3 text-grey pr-4">{{ item.sideTitle }}</div>
      <div class="ResumeItem-timespan text-sm text-grey-lighter pr-4">{{ item.sideSubtitle }}</div>
    </div>
    <div class="rightColumn">
      <div class="ResumeItem-company font-semibold text-lg mb-2">
        {{ item.title }}
      </div>
      <div class="ResumeItem-companyDescription text-grey-light font-medium mb-6">
        {{ item.subtitle }}
      </div>
      <div class="ResumeItem-description text-s text-grey-lighter mb-4 leading-normal tracking-wide">
        {{ item.content }}
      </div>
      <div class="ResumeItem-technologies text-xs text-grey-lighter">
        {{ item.postContent }}
      </div>
    </div>
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

<style lang="scss">
@tailwind utilities;

.ResumeItem-border {
  width: 100%;
  position: relative;
  &:after {
    content: '';
    width: 10px;
    height: 10px;
    @apply bg-grey-darkest rounded-full;
    position: absolute;
    right: 0;
    top: -5px;
  }
}
</style>

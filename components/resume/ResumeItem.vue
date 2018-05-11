<template>
  <div class="ResumeItem flex mb-10">
    <div
      :class="leftColumnClass"
      class="text-right pr-8 px-4">
      <div class="ResumeItem-border border-t border-grey-darkest pb-6 mt-2"/>
      <div
        v-if="item.sideTitle"
        class="ResumeItem-position font-medium mb-3 text-grey pr-4">{{ item.sideTitle }}
      </div>
      <div class="ResumeItem-timespan text-sm text-grey-lighter pr-4">{{ item.sideSubtitle }}</div>
    </div>
    <div
      :class="rightColumnClass"
      class="text-left px-4">
      <component
        :is="item.href ? 'a' : 'div'"
        :href="item.href || null"
        target="_blank"
        class="ResumeItem-company font-medium text-lg mb-2 text-inherit no-underline block">
        {{ item.title }}
      </component>
      <div
        v-if="item.subtitle"
        class="ResumeItem-companyDescription text-grey-light font-medium mb-6">
        {{ item.subtitle }}
      </div>
      <div class="ResumeItem-description leading-content-text">
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
    },
    type: {
      type: String,
      default: 'normal',
      validate: type => ['oss', 'normal'].includes(type)
    }
  },
  computed: {
    leftColumnClass () {
      return this.type === 'normal' ? 'w-2/5' : 'w-1/4'
    },
    rightColumnClass () {
      return this.type === 'normal' ? 'w-3/5' : 'w-3/4'
    }
  }
}
</script>

<style lang="scss">
@tailwind utilities;

.ResumeItem {
  break-inside: avoid;
}

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

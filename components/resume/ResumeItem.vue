<template>
  <div
    v-observe-visibility="triggerVisibility"
    class="ResumeItem flex mb-xl sm:mb-10 flex-wrap">
    <div
      :class="leftColumnClass"
      class="text-right pr-8 px-4 w-full mb-4 sm:mb-0 flex sm:block">
      <div
        :class="{ inView }"
        class="ResumeItem-border border-t border-grey-darkest pb-6 mt-2"
      />
      <div class="ResumeItem-sidebarTexts w-3/4 pl-2 sm:pl-0 sm:w-full flex-1">
        <div
          v-if="item.sideTitle"
          class="ResumeItem-position font-medium mb-3 text-grey pr-4">{{ item.sideTitle }}
        </div>
        <div class="ResumeItem-timespan text-sm text-grey-lighter pr-4">{{ item.sideSubtitle }}</div>
      </div>
    </div>
    <div
      :class="rightColumnClass"
      class="text-left px-4 w-full">
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
import observeVisibilityMixin from '~/mixins/observeVisibilityMixin'

export default {
  name: 'ResumeItem',
  mixins: [observeVisibilityMixin],
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
      return this.type === 'normal' ? 'sm:w-2/5' : 'sm:w-1/4'
    },
    rightColumnClass () {
      return this.type === 'normal' ? 'sm:w-3/5' : 'sm:w-3/4'
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
  width: 0;
  position: relative;
  transition: .5s cubic-bezier(1, .05, .97, .02);
  &:after {
    content: '';
    width: 0;
    height: 0;
    @apply bg-grey-darkest rounded-full;
    position: absolute;
    right: -5px;
    top: 0;
    transition: .4s cubic-bezier(.08, .82, .57, 1.76) .6s;
  }
  &.inView {
    width: 25%;
    @screen sm {
      width: 100%;
    }
    &:after {
      width: 10px;
      height: 10px;
      transform: translateY(-5px);
    }
  }
  @media print {
    width: 100%;
    &:after {
      width: 10px;
      height: 10px;
      transform: translateY(-5px);
    }
  }
}


</style>

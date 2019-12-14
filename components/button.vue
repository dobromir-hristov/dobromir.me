<template>
  <component
    :is="tag"
    target="_blank"
    class="button"
  >
    <span class="button-wrap">
      <span class="button-text-wrap">
        <span class="button-text">
          <slot />
        </span>
        <span class="button-pop">
          <slot name="icon">
            <i
              v-if="icon"
              :class="icon"
              class="icon"
            />
          </slot>
        </span>
      </span>
    </span>
  </component>
</template>

<script>
export default {
  name: 'DButton',
  props: {
    tag: {
      type: String,
      default: 'a'
    },
    icon: {
      type: String,
      default: ''
    }
  }
}
</script>

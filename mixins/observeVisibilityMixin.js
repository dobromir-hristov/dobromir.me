export default {
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

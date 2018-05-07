<template>
  <section class="container flex justify-center items-center text-center p-1 min-h-screen mx-auto">
    <div>
      <app-logo/>
      <h1 class="title md:text-10xl block font-thin text-blue-graphite tracking-wide">
        I am Dobromir Hristov
      </h1>
      <h2 class="subtitle text-blue font-light text-xl md:text-5xl mt-2 pb-8 tracking-wide">
        and I am a front-end developer.
      </h2>
      <p class="content text-base md:text-2xl font-medium pt-8">
        Bellow are links to the places where you can find my work.
      </p>
      <div class="links mt-4">
        <a
          href="https://digital-cult.com/"
          target="_blank"
          @click="trackClick('digital_cult')"
          class="button button--dc">Digital Cult</a>
        <a
          href="https://github.com/dobromir-hristov"
          target="_blank"
          @click="trackClick('github')"
          class="button button--grey">GitHub</a>
        <a
          href="https://twitter.com/d_m_hristov"
          target="_blank"
          @click="trackClick('twitter')"
          class="button button--twitter">Twitter</a>
        <a
          href="https://medium.com/@dobromir92"
          target="_blank"
          @click="trackClick('medium')"
          class="button button--medium">Medium</a>
        <a
          href="https://www.npmjs.com/~dobromir-hristov"
          target="_blank"
          @click="trackClick('npm')"
          class="button button--npm">NPM</a>
      </div>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  },
  methods: {
    trackClick (type) {
      this.$ga.event('sourceLinks', 'click', type)
    }
  }
}
</script>

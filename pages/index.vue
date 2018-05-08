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
          class="button button--dc"
          @click="trackClick('digital_cult')">Digital Cult</a>
        <a
          href="https://github.com/dobromir-hristov"
          target="_blank"
          class="button button--grey"
          @click="trackClick('github')">GitHub</a>
        <a
          href="https://twitter.com/d_m_hristov"
          target="_blank"
          class="button button--twitter"
          @click="trackClick('twitter')">Twitter</a>
        <a
          href="https://medium.com/@dobromir92"
          target="_blank"
          class="button button--medium"
          @click="trackClick('medium')">Medium</a>
        <a
          href="https://www.npmjs.com/~dobromir-hristov"
          target="_blank"
          class="button button--npm"
          @click="trackClick('npm')">NPM</a>
      </div>
      <hr class="border-t border-blue-graphite border-solid">
      <div class="cv-download">
        <a
          href="dobromir_hristov_cv.pdf"
          download="dobromir_hristov_resume.pdf"
          target="_blank"
          class="button button--dc">
          Download CV as PDF
        </a>
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

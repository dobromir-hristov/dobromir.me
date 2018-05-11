<template>
  <div class="AppIndex">
    <section class="container full-height-page px-8 pt-0 flex-col introPage">
      <div class="topBorder bg-grey-darkest"/>
      <div class="flex flex-col flex-1 justify-center">
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
        <div class="links mt-10">
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
        <hr class="border-t border-blue-graphite border-solid w-full">
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
    <section class="container full-height-page flex-col  resumePage relative">
      <div class="topBorder bg-grey-darkest hidden mb-6"/>
      <resume class="mx-auto flex-1"/>
    </section>
  </div>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import Resume from '~/components/resume/Resume'

export default {
  components: {
    Resume,
    AppLogo
  },
  methods: {
    trackClick (type) {
      this.$ga.event('sourceLinks', 'click', type)
    }
  }
}
</script>
<style>
.resumePage {
  page: A4;
}

.topBorder {
  height: 2rem;
}
</style>

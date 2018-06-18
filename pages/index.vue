<template>
  <div class="AppIndex">
    <section class="container full-height-page px-8 pt-0 flex-col introPage">
      <div class="topBorder bg-grey-darkest"/>
      <div class="flex flex-col flex-1 justify-center">
        <app-logo/>
        <h1 class="title sm:text-10xl block font-thin text-blue-graphite tracking-wide">
          I am Dobromir Hristov
        </h1>
        <h2 class="subtitle text-blue font-light text-xl sm:text-5xl mt-2 pb-8 tracking-wide">
          and I am a front-end developer.
        </h2>
        <p class="content text-base sm:text-2xl font-medium pt-8">
          Below are links to the places where you can find my work.
        </p>
        <div class="links mt-10">
          <d-button
            href="https://digital-cult.com/author/dobromir/"
            class="button--dc"
            icon="dh-dc dh"
            @click="trackClick('digital_cult')">Personal Blog</d-button>
          <d-button
            href="https://github.com/dobromir-hristov"
            class="button--grey"
            icon="dh-github dh"
            @click="trackClick('github')">GitHub</d-button>
          <d-button
            href="https://twitter.com/d_m_hristov"
            class="button--twitter"
            icon="dh-twitter dh"
            @click="trackClick('twitter')">
            Twitter
          </d-button>
          <d-button
            class="button--medium"
            href="https://medium.com/@dobromir92"
            icon="dh-medium dh"
            @click="trackClick('medium')"
          >
            Medium
          </d-button>
          <d-button
            class="button--npm"
            href="https://www.npmjs.com/~dobromir-hristov"
            icon="dh-npm dh"
            @click="trackClick('npm')"
          >
            NPM
          </d-button>
        </div>
        <hr class="border-t border-blue-graphite border-solid w-full">
        <div class="cv-download">
          <d-button
            class="button--dc"
            href="dobromir_hristov_cv.pdf"
            download="dobromir_hristov_resume.pdf"
            icon="dh dh-file-pdf-o"
            @click="trackClick('resume')">
            Download CV as PDF
          </d-button>
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
import DButton from '~/components/button'

export default {
  components: {
    DButton,
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

<template>
  <div class="Resume text-grey-darkest pt-8">
    <div class="flex flex-wrap">
      <div class="leftColumn mb-8 sm:mb-0">
        <img
          v-observe-visibility="triggerVisibility"
          :class="{ inView }"
          class="rounded-full overflow-hidden w-3/5 sm:w-4/5 shadow-md Avatar"
          src="avatar_square.jpg"
          width="325"
          alt="Avatar">
      </div>
      <div class="rightColumn">
        <div class="Resume-head text-center sm:text-left">
          <div class="Name text-4xl sm:text-5xl font-glacial">
            DOBROMIR HRISTOV
          </div>
          <div class="Position text-2xl sm:text-3xl font-light mb-4 sm:mb-8">
            Front-end developer
          </div>
          <div class="flex flex-wrap font-sans font-semibold mb-8 sm:mb-xl">
            <div class="w-full mb-3 sm:mb-0 sm:flex-1">
              <a
                :href="`mailto:${email}`"
                class="no-underline text-inherit"
              >{{ email }}</a>
            </div>
            <div class="w-full sm:flex-1">
              <a
                :href="`tel:${tel}`"
                class="no-underline text-inherit"
              >{{ tel }}</a>
            </div>
          </div>
          <div class="Description tracking-wide leading-normal text-justify">
            <p class="mb-4">
              I am a dedicated web developer, with a passion for fast, reliable,
              cutting edge software with over 5 years of experience.
            </p>
            <p class="mb-4">
              As a front-end developer, I have been exposed to many of the
              rapidly evolving technologies, frameworks, bundlers,
              preprocessors and UI/UX trends. I adhere to popular coding
              practices, deliver maintainable, well-engineered products. I
              implement testing and automation tools for speeding up
              development and reliability, allowing front-end teams to focus on
              coding.
            </p>
            <p>
              I enjoy writing articles, open sourcing code, authoring libraries
              and teaching people.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="section mt-10">
      <resume-section-title>Experience</resume-section-title>
      <resume-item
        v-for="(item, i) in jobs"
        :key="i"
        :item="item"/>
    </div>
    <div class="section mt-10 page-break-before-always">
      <resume-section-title>Education</resume-section-title>
      <resume-item
        v-for="(item, i) in education"
        :key="i"
        :item="item"/>
    </div>
    <div class="section mt-10">
      <resume-section-title :subtitle="ossSubtitle">Open Source Software</resume-section-title>
      <resume-item
        v-for="(item, i) in oss"
        :key="i"
        :item="item"
        type="oss"/>
      <!-- eslint-disable vue/max-attributes-per-line -->
      <p class="leading-content-text mb-4 m-auto w-2/3">
        Along with packages, I have written articles, contributed to documentations, even authored a whole page in the official Vue multilingual
        library
        about <a class="text-inherit no-underline font-bold" href="https://kazupon.github.io/vue-i18n/guide/lazy-loading.html" target="_blank">Lazy
        loading translation files</a>.
      </p>
      <p class="leading-content-text mb-xl m-auto w-2/3">
        I have many other open source projects and tutorials that are in the works, from tips targeted at beginners to advanced real world use cases.
      </p>
    </div>
  </div>
</template>

<script>
import ResumeSectionTitle from '~/components/resume/ResumeSectionTitle'
import jobs from '~/data/jobs'
import oss from '~/data/oss'
import ResumeItem from '~/components/resume/ResumeItem'
import observeVisibilityMixin from '~/mixins/observeVisibilityMixin'

export default {
  name: 'Resume',
  components: { ResumeItem, ResumeSectionTitle },
  mixins: [observeVisibilityMixin],
  data () {
    return {
      email: 'dobromir92@gmail.com',
      tel: '+359883390558',
      jobs: jobs,
      education: [{
        sideSubtitle: '2011-2015',
        title: 'Technical University Gabrovo - Bachelor\'s degree',
        subtitle: 'Computer Systems Technology'
      }],
      ossSubtitle: 'Below is a selection of my open-source packages and contributions:',
      oss: oss
    }
  }
}
</script>

<style rel='stylesheet/scss' lang='scss'>
.Resume {
  .Avatar {
    transition: all .4s ease-in .1s;
    transform: translateY(50px);
    opacity: 0;
    &.inView {
      transform: translateY(0);
      opacity: 1;
    }
    @media print {
      transform: translateY(0);
      opacity: 1;
    }
  }
  .Name {
    letter-spacing: .2em;
  }
}
</style>

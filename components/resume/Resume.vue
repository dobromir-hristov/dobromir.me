<template>
  <div class="Resume text-grey-darkest pt-8">
    <div class="flex">
      <div class="leftColumn">
        <img
          class="rounded-full overflow-hidden w-4/5 shadow-md"
          src="avatar_square.png"
          width="500"
          alt="Avatar">
      </div>
      <div class="rightColumn">
        <div class="Resume-head">
          <div class="Name text-5xl font-glacial">
            DOBROMIR HRISTOV
          </div>
          <div class="Position text-3xl font-light mb-8">
            Front-end developer
          </div>
          <div class="flex font-sans font-semibold mb-xl">
            <div class="w-1/2">
              <a
                :href="`mailto:${email}`"
                class="no-underline text-inherit"
              >{{ email }}</a>
            </div>
            <div class="w-1/2">
              <a
                :href="`tel:${tel}`"
                class="no-underline text-inherit"
              >{{ tel }}</a>
            </div>
          </div>
          <div class="Description tracking-wide leading-normal">
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
    </div>
  </div>
</template>

<script>
import ResumeSectionTitle from '~/components/resume/ResumeSectionTitle'
import jobs from '~/data/jobs'
import oss from '~/data/oss'
import ResumeItem from '~/components/resume/ResumeItem'

export default {
  name: 'Resume',
  components: { ResumeItem, ResumeSectionTitle },
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
      ossSubtitle: 'Bellow is a selection of my open-source packages and contributions:',
      oss: oss
    }
  }
}
</script>

<style rel='stylesheet/scss' lang='scss'>
.Resume {
  .Name {
    letter-spacing: .2em;
  }
}
</style>

<template>
  <section class="container">
    <div>
      <app-logo/>
      <h1 class="title">
        Hi, I am Dobromir Hristov
      </h1>
      <h2 class="subtitle">
        and I am a Frontend/JavaScript developer.
      </h2>
      <p class="content">Bellow are links to the places where you can find my work.</p>
      <div class="links">
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

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1rem;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.content {
  margin-top: 2rem;
  color: #44567b;
  font-size: 22px;
  font-weight: 500;
}

.links {
  padding-top: 15px;
}

@media screen AND (max-width: 767px) {
  .title {
    font-size: 32px;
  }

  .subtitle {
    font-size: 20px;
  }

  .content {
    font-size: 16px;
  }
}
</style>

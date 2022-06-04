<template>
  <main class="container-fluid">
    <div class="row">
      <div class="col-2 aside">
        <ul>
          <li>
            <nuxt-link to="/profile/profile">Contact information</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/profile/links">Links</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/profile/education">Education</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/profile/coursework">Coursework</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/profile/projects">Projects</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/profile/experience">Experience</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/profile/skills">Skills</nuxt-link>
          </li>
        </ul>
      </div>
      <div class="col-10">
        <nuxt-child :profile-id="profileId"></nuxt-child>
      </div>
    </div>
  </main>
</template>

<script>
export  default {
  layout: 'default',
  data() {
    return {
      profileId: this.$route.query.id
    }
  }
}
</script>

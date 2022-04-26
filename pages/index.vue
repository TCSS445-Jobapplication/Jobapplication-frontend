<template>
  <main class="container-fluid">
    <div class="row">
      <div class="col-2 aside">
        <ul>
          <li>
            <nuxt-link to="/contact">Contact information</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/links">Links</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/education">Education</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/coursework">Coursework</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/projects">Projects</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/experience">Experience</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/skills">Skills</nuxt-link>
          </li>
        </ul>
      </div>
      <div class="col-10">
        <nuxt-child :user-id="1"></nuxt-child>
      </div>
    </div>
  </main>
</template>

<script>
export  default {
  layout: 'default'
}
</script>

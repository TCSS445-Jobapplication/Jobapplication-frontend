<template>
  <main class="container-fluid">
    <div class="row">
      <div class="col-2 aside">
        <ul>
          <li>
            <nuxt-link to="/jobs/applying">Applying</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/jobs/stats">Stats</nuxt-link>
          </li>
        </ul>
      </div>
      <div class="col-10">
        <nuxt-child :profile-id="1"></nuxt-child>
      </div>
    </div>
  </main>
</template>

<script>
export  default {
  layout: 'default'
}
</script>

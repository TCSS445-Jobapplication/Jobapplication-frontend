<template>
  <div class="container-fluid main-page">
    <header>
      <b-row>
        <b-col cols="12">
          <nuxt-link to="/">
            <img src="~/assets/images/logo.png" class="img-thumbnail" width="50em"/>
          </nuxt-link>
          <nuxt-link to="/">My Profile</nuxt-link>
          <nuxt-link to="/jobs?profile_id=1&user_id=1">My Jobs</nuxt-link>
        </b-col>
      </b-row>
    </header>
    <nav class="row">

    </nav>
    <nuxt />
    <footer>
      <b-row>
        <b-col cols="12">
          <span class="copyright">Copyright ©2022 by wJob group</span>
        </b-col>
      </b-row>
    </footer>
  </div>
</template>

<template>
  <main class="container-fluid">
    <b-row>
      <b-col cols="3">
        <nuxt-link to="/profile?id=1">
          <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=54" alt="Image 1"></b-img>
        </nuxt-link>
      </b-col>
      <b-col cols="3">
        <nuxt-link to="/profile?id=2">
          <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=58" alt="Image 2"></b-img>
        </nuxt-link>
      </b-col>
      <b-col cols="3">
        <nuxt-link to="/profile?id=3">
          <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=59" alt="Image 3"></b-img>
        </nuxt-link>
      </b-col>
    </b-row>
  </main>
</template>

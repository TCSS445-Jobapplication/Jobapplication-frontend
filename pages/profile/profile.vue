<template>
  <div class="child-module">
    <h5>Contact information</h5>
    <b-form>
      <b-form-row>
        <b-col cols="4">
          <b-form-group
            id="first-name"
            label="First name"
            label-for="first-name-tx"
          >
            <b-form-input
              id="first-name-tx"
              v-model="profile.firstName"
              placeholder="First name"
              required
            />
          </b-form-group>
        </b-col>
        <b-col cols="4">
          <b-form-group
            id="last-name"
            label="Last name"
            label-for="last-name-tx"
          >
            <b-form-input
              id="last-name-tx"
              v-model="profile.lastName"
              placeholder="Last name"
              required
            />
          </b-form-group>
        </b-col>
        <b-col cols="4">
          <b-form-group
            id="email"
            label="email"
            label-for="email-tx"
          >
            <b-form-input
              id="email-tx"
              v-model="profile.email"
              placeholder="Email"
              required
            />
          </b-form-group>
        </b-col>
      </b-form-row>
      <b-form-row>
        <b-col cols="2">
          <b-form-group
            id="city"
            label="City"
            label-for="city-tx"
          >
            <b-form-input
              id="city-tx"
              v-model="profile.city"
              placeholder="City"
              required
            />
          </b-form-group>
        </b-col>
        <b-col cols="2">
          <b-form-group
            id="state"
            label="State"
            label-for="state-tx"
          >
            <b-form-input
              id="state-tx"
              v-model="profile.state"
              placeholder="State"
              required
            />
          </b-form-group>
        </b-col>
        <b-col cols="2">
          <b-form-group
            id="zip-code"
            label="Zip code"
            label-for="zip-code-tx"
          >
            <b-form-input
              id="zip-code-tx"
              v-model="profile.zipCode"
              placeholder="Zip code"
              type="number"
              required
            />
          </b-form-group>
        </b-col>
        <b-col cols="3">
          <b-form-group
            id="cell-phone"
            label="Cell phone"
            label-for="cell-phone-tx"
          >
            <b-form-input
              id="cell-phone-tx"
              v-model="profile.cellPhone"
              placeholder="Cell phone"
              type="tel"
              required
            />
          </b-form-group>
        </b-col>
        <b-col cols="3">
          <b-form-group
            id="home-phone"
            label="Home phone"
            label-for="home-phone-tx"
          >
            <b-form-input
              id="home-phone-tx"
              v-model="profile.homePhone"
              placeholder="Home phone"
              type="tel"
            />
          </b-form-group>
        </b-col>
      </b-form-row>
      <b-form-row>
        <b-col cols="12">
          <b-button type="button" @click="save">Save</b-button>
        </b-col>
      </b-form-row>
    </b-form>
  </div>
</template>

<script>
import axios from '~/plugins/axios';
export  default {
  layout: 'default',
  props: ['profileId'],
  data() {
    return {
      profile: {
        firstName: '',
        lastName: '',
        email: '',
        city: '',
        state: '',
        zipCode: '',
        cellPhone: '',
        homePhone: ''
      }
    }
  },
  created() {
    axios
      .get('/profiles/' + this.profileId)
      .then(response => (this.profile = response.data));
  },
  methods: {
    save() {
      axios
        .put('/profiles/' + this.profileId, this.profile)
        .then(response => (this.profileId = response.data.id));
    }
  }
}
</script>

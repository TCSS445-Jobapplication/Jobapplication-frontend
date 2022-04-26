<template>
  <div class="child-module">
    <h5>Contact information</h5>
    <b-form>
      <b-form-row>
        <b-col cols="6">
          <b-form-group
            id="first-name"
            label="First name"
            label-for="first-name-tx"
          >
            <b-form-input
              id="first-name-tx"
              v-model="user.firstName"
              placeholder="First name"
              required
            />
          </b-form-group>
        </b-col>
        <b-col cols="6">
          <b-form-group
            id="last-name"
            label="Last name"
            label-for="last-name-tx"
          >
            <b-form-input
              id="last-name-tx"
              v-model="user.lastName"
              placeholder="Last name"
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
              v-model="user.city"
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
              v-model="user.state"
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
              v-model="user.zipCode"
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
              v-model="user.cellPhone"
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
              v-model="user.homePhone"
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
  props: ['userId'],
  data() {
    return {
      user: {
        firstName: '',
        lastName: '',
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
      .get('/users/' + this.userId)
      .then(response => (this.user = response.data));
  },
  methods: {
    save() {
      axios
        .put('/users/' + this.userId, this.user)
        .then(response => (this.userId = response.data.id));
    }
  }
}
</script>

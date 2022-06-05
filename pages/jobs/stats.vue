<template>
  <div class="child-module">
    <h5>Stats</h5>
    <b-row>
      <b-col cols="4" md="6" lg="4">
        <b-card
          bg-variant="light"
          header="Top 10 skills"
          class="text-left"
          style="max-width: 40rem;"
        >
          <b-card-text>
            <b-table striped hover :items="topSkills"></b-table>
          </b-card-text>
        </b-card>
      </b-col>
      <b-col cols="4" md="6" lg="4">
        <b-card
          bg-variant="light"
          header="Top 10 companies"
          class="text-left"
          style="max-width: 40rem;"
        >
          <b-card-text>
            <b-table striped hover :items="topCompanies"></b-table>
          </b-card-text>
        </b-card>
      </b-col>
      <b-col cols="4" md="6" lg="4">
        <b-card
          bg-variant="light"
          header="Top 10 job applicants"
          class="text-left"
          style="max-width: 40rem;"
        >
          <b-card-text>
            <b-table striped hover :items="topApplicants"></b-table>
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>


<script>
import axios from '~/plugins/axios';
export  default {
  layout: 'default',
  props: ['profileId'],
  data() {
    return {
      topSkills: [],
      topCompanies: [],
      topApplicants: []
    }
  },
  created() {
    axios
      .get('/topskills')
      .then(response => (this.topSkills = response.data.map((arr, i) => ({"#":  i + 1, name: arr[0], type: arr[1], total: arr[2]}))));

    axios
      .get('/topcompanies')
      .then(response => (this.topCompanies = response.data.map((arr, i) => ({"#":  i + 1, name: arr[0], total: arr[1]}))));

    axios
      .get('/topapplicants')
      .then(response => (this.topApplicants = response.data.map((arr, i) => ({"#":  i + 1, email: arr[0], total: arr[1]}))));
  },
  methods: {

  }
}
</script>

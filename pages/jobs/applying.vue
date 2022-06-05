<template>
  <div class="child-module">
    <h5>Applying</h5>
    <b-form>
      <b-form-row>
        <b-col cols="3">
          <b-form-group
            id="job-application-company-name"
            label="Company name"
            label-for="job-application-company-name-tx"
          >
            <b-form-input
              id="job-application-company-name-tx"
              v-model="newJobApplication.companyName"
              placeholder="Company name"
              required
            />
          </b-form-group>
        </b-col>
        <b-col cols="3">
          <b-form-group
            id="job-application-job-url"
            label="Job URL"
            label-for="job-application-job-url-tx"
          >
            <b-form-input
              id="job-application-job-url-tx"
              v-model="newJobApplication.jobUrl"
              placeholder="Job URL"
            />
          </b-form-group>
        </b-col>
        <b-col cols="3">
          <b-form-group
            id="job-application-created-date"
            label="Date"
            label-for="job-application-created-date-tx"
          >
            <b-form-datepicker
              id="job-application-created-date-tx"
              :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
              v-model="newJobApplication.createdDate"
              class="mb-2"
              placeholder="Date"
              >
            </b-form-datepicker>
          </b-form-group>
        </b-col>
        <b-col cols="3">
          <b-form-group
            id="job-application-action"
            label="Action"
            label-for="job-application-action-butt"
          >
            <b-button id="job-application-action-butt" @click="insert" type="button">Add</b-button>
          </b-form-group>
        </b-col>
      </b-form-row>
      <b-form-row>
        <b-col cols="2">
          <b-form-group
            label="Company name"
          >
          </b-form-group>
        </b-col>
        <b-col cols="2">
          <b-form-group
            label="Job URL"
          >
          </b-form-group>
        </b-col>
        <b-col cols="2">
          <b-form-group
            label="Date apply"
          >
          </b-form-group>
        </b-col>
        <b-col cols="2">
          <b-form-group
            label="Updated date"
          >
          </b-form-group>
        </b-col>
        <b-col cols="2">
          <b-form-group
            label="Latest status"
          >
          </b-form-group>
        </b-col>
        <b-col cols="2">
          <b-form-group
            label="Action"
          >
          </b-form-group>
        </b-col>
      </b-form-row>
      <b-form-row v-for="(jobApplication, index) in jobApplications">
        <b-col cols="2">
          <b-form-group>
            <b-form-input
              :id="'job-application-company-name-tx' + index"
              v-model="jobApplication.companyName"
              placeholder="Company name"
              required
            />
          </b-form-group>
        </b-col>
        <b-col cols="2">
          <b-form-group>
            <b-form-input
              :id="'job-application-job-url-tx' + index"
              v-model="jobApplication.jobUrl"
              placeholder="Job URL"
            />
          </b-form-group>
        </b-col>
        <b-col cols="2">
          <b-form-group>
            <b-form-datepicker
              :id="'job-application-created-date-tx' + index"
              :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
              v-model="jobApplication.createdDate"
              class="mb-2"
              placeholder="Date"
              >
            </b-form-datepicker>
          </b-form-group>
        </b-col>
        <b-col cols="2">
          <b-form-group>
            <b-form-datepicker
              :id="'job-application-updated-date-tx' + index"
              :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
              v-model="jobApplication.updatedDate"
              class="mb-2"
              placeholder="Date"
            >
            </b-form-datepicker>
          </b-form-group>
        </b-col>
        <b-col cols="2">
          <b-form-group>
            <b-form-input
              :id="'job-application-job-url-tx' + index"
              v-model="jobApplication.latestStatus"
              placeholder="Latest status"
            />
          </b-form-group>
        </b-col>
        <b-col cols="2">
          <b-form-group>
            <b-button :id="'job-application-action-save-butt' + index" @click="update(jobApplication)" type="button">Save</b-button>
            <b-button :id="'job-application-action-del-butt' + index" @click="remove(jobApplication.id, index)" type="button" variant="danger">Delete</b-button>
          </b-form-group>
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
      newJobApplication: {
        companyName: '',
        jobUrl: '',
        createdDate: ''
      },
      jobApplications: []
    }
  },
  created() {
    axios
      .get('/jobapplications/profile/' + this.profileId)
      .then(response => (this.jobApplications = response.data));
  },
  methods: {
    insert() {
      this.newJobApplication.profileId = this.profileId;
      axios
        .post('/jobapplications', this.newJobApplication)
        .then(response => {
          this.newJobApplication = {
            companyName: '',
            jobUrl: '',
            createdDate: ''
          };
          this.newJobApplications.push(response.data);
        });
    },
    update(jobApplication) {
      link.profileId = this.profileId;
      axios
        .put('jobapplications/' + jobApplication.id, jobApplication)
        .then(response => {});
    },
    remove(id, index) {
      axios
        .delete('jobapplications/' + id)
        .then(response => this.jobApplications.splice(index, 1))
    }
  }
}
</script>

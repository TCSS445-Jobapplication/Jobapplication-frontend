<template>
  <div class="child-module">
    <h5>Experience</h5>
    <b-form>
      <b-form-row>
        <b-col cols="4">
          <b-form-group
            id="experience-job-title"
            label="Job title"
            label-for="experience-job-title-tx"
          >
            <b-form-input
              id="experience-job-title-tx"
              v-model="newExperience.jobTitle"
              placeholder="Job title"
              required
            />
          </b-form-group>
        </b-col>
        <b-col cols="4">
          <b-form-group
            id="from"
            label="From"
            label-for="from-tx"
          >
            <b-form-datepicker
              id="from-tx"
              :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
              v-model="newExperience.from"
              class="mb-2"
              placeholder="From"
              required>
            </b-form-datepicker>
          </b-form-group>
        </b-col>
        <b-col cols="4">
          <b-form-group
            id="to"
            label="To"
            label-for="to-tx"
          >
            <b-form-datepicker
              id="to-tx"
              :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
              v-model="newExperience.to"
              class="mb-2"
              placeholder="To"
            >
            </b-form-datepicker>
          </b-form-group>
        </b-col>
      </b-form-row>
      <b-form-row>
        <b-col cols="5">
          <b-form-group
            id="experience-company-name"
            label="Company name"
            label-for="experience-company-name-tx"
          >
            <b-form-input
              id="experience-company-name-tx"
              v-model="newExperience.companyName"
              placeholder="Company name"
              required
            />
          </b-form-group>
        </b-col>
        <b-col cols="5">
          <b-form-group
            id="experience-company-address"
            label="Company address"
            label-for="experience-company-address-tx"
          >
            <b-form-input
              id="experience-company-address-tx"
              v-model="newExperience.companyAddress"
              placeholder="Company address"
              required
            />
          </b-form-group>
        </b-col>
      </b-form-row>
      <b-form-row>
        <b-col cols="12">
          <b-form-group
            id="experience-job-description"
            label="Description"
            label-for="experience-job-description-tx"
          >
            <b-form-textarea
              id="experience-job-description-tx"
              v-model="newExperience.jobDescription"
              placeholder="Job description"
              rows="3"
              max-rows="6"
            ></b-form-textarea>
          </b-form-group>
        </b-col>
      </b-form-row>
      <b-form-row>
        <b-col cols="12">
          <b-form-group
            id="experience-action"
            label="Action"
            label-for="experience-action-butt"
          >
            <b-button id="experience-action-butt" @click="insert" type="button">Add</b-button>
          </b-form-group>
        </b-col>
      </b-form-row>
      <template v-for="(experience, index) in experiences">
        <b-form-row>
          <b-col cols="4">
            <b-form-group
              :id="'experience-job-title' + index"
              label="Job title"
              :label-for="'experience-job-title-tx' + index"
            >
              <b-form-input
                :id="'experience-job-title-tx' + index"
                v-model="experience.jobTitle"
                placeholder="Job title"
                required
              />
            </b-form-group>
          </b-col>
          <b-col cols="4">
            <b-form-group
              :id="'from' + index"
              label="From"
              :label-for="'from-tx' + index"
            >
              <b-form-datepicker
                :id="'from-tx' + index"
                :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                v-model="experience.from"
                class="mb-2"
                placeholder="From"
                required>
              </b-form-datepicker>
            </b-form-group>
          </b-col>
          <b-col cols="4">
            <b-form-group
              :id="'to' + index"
              label="To"
              :label-for="'to-tx' + index"
            >
              <b-form-datepicker
                :id="'to-tx' + index"
                :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                v-model="experience.to"
                class="mb-2"
                placeholder="To"
              >
              </b-form-datepicker>
            </b-form-group>
          </b-col>
        </b-form-row>
        <b-form-row>
          <b-col cols="5">
            <b-form-group
              :id="'experience-company-name' + index"
              label="Company name"
              :label-for="'experience-company-name-tx' + index"
            >
              <b-form-input
                :id="'experience-company-name-tx' + index"
                v-model="experience.companyName"
                placeholder="Company name"
                required
              />
            </b-form-group>
          </b-col>
          <b-col cols="5">
            <b-form-group
              :id="'experience-company-address' + index"
              label="Company address"
              :label-for="'experience-company-address-tx' + index"
            >
              <b-form-input
                :id="'experience-company-address-tx' + index"
                v-model="experience.companyAddress"
                placeholder="Company address"
                required
              />
            </b-form-group>
          </b-col>
        </b-form-row>
        <b-form-row>
          <b-col cols="12">
            <b-form-group
              :id="'experience-job-description' + index"
              label="Description"
              :label-for="'experience-job-description-tx' + index"
            >
              <b-form-textarea
                :id="'experience-job-description-tx' + index"
                v-model="experience.jobDescription"
                placeholder="Job description"
                rows="3"
                max-rows="6"
              ></b-form-textarea>
            </b-form-group>
          </b-col>
        </b-form-row>
        <b-form-row>
          <b-col cols="12">
            <b-form-group>
              <b-button :id="'experience-action-save-butt' + index" @click="update(experience)" type="button">Save</b-button>
              <b-button :id="'experience-action-del-butt' + index" @click="remove(experience.id, index)" type="button" variant="danger">Delete</b-button>
            </b-form-group>
          </b-col>
        </b-form-row>
      </template>


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
      newExperience: {
        jobTitle: '',
        from: '',
        to: '',
        companyName: '',
        companyAddress: '',
        jobDescription: '',
      },
      experiences: []
    }
  },
  created() {
    axios
      .get('/experiences/profile/' + this.profileId)
      .then(response => (this.experiences = response.data));
  },
  methods: {
    insert() {
      this.newExperience.profileId = this.profileId;
      axios
        .post('/experiences', this.newExperience)
        .then(response => {
          this.newExperience = {
            name: '',
            from: '',
            to: '',
            url: ''
          }
          this.experiences.push(response.data);
        });
    },
    update(experience) {
      experience.profileId = this.profileId;
      axios
        .put('experiences/' + experience.id, experience)
        .then(response => {});
    },
    remove(id, index) {
      axios
        .delete('experiences/' + id)
        .then(response => this.experiences.splice(index, 1))
    }
  }
}
</script>

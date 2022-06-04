<template>
  <div class="child-module">
    <h5>Education</h5>
    <b-form>
      <b-form-row>
        <b-col cols="4">
          <b-form-group
            id="school-name"
            label="School name"
            label-for="school-name-tx"
          >
            <b-form-input
              id="school-name-tx"
              v-model="newEducation.schoolName"
              placeholder="School name"
              required
            />
          </b-form-group>
        </b-col>
        <b-col cols="4">
          <b-form-group
            id="degree"
            label="Degree"
            label-for="degree-tx"
          >
            <b-form-input
              id="degree-tx"
              v-model="newEducation.degree"
              placeholder="Degree"
              required
            />
          </b-form-group>
        </b-col>
        <b-col cols="4">
          <b-form-group
            id="major"
            label="Major"
            label-for="major-tx"
          >
            <b-form-input
              id="major-tx"
              v-model="newEducation.major"
              placeholder="Major"
              required
            />
          </b-form-group>
        </b-col>
      </b-form-row>
      <b-form-row>
        <b-col cols="4">
          <b-form-group
            id="from"
            label="From"
            label-for="from-tx"
          >
            <b-form-datepicker
              id="from-tx"
              :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
              v-model="newEducation.from"
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
              v-model="newEducation.to"
              class="mb-2"
              placeholder="To"
              >
            </b-form-datepicker>
          </b-form-group>
        </b-col>
        <b-col cols="4">
          <b-form-group
            id="gpa"
            label="Gpa"
            label-for="gpa-tx"
          >
            <b-form-input
              id="major-tx"
              v-model="newEducation.gpa"
              placeholder="Gpa"
            />
          </b-form-group>
        </b-col>
      </b-form-row>
      <b-form-row>
        <b-col cols="12">
          <b-form-group
            id="link-action"
            label="Action"
            label-for="link-action-butt"
          >
            <b-button id="link-action-butt" @click="insert" type="button">Add</b-button>
          </b-form-group>
        </b-col>
      </b-form-row>
      <template v-for="(education, index) in educations">
        <b-form-row>
          <b-col cols="4">
            <b-form-group
              :id="'school-name' + index"
              label="School name"
              :label-for="'school-name-tx' + index"
            >
              <b-form-input
                :id="'school-name-tx' + index"
                v-model="education.schoolName"
                placeholder="School name"
                required
              />
            </b-form-group>
          </b-col>
          <b-col cols="4">
            <b-form-group
              :id="'degree' + index"
              label="Degree"
              :label-for="'degree-tx' + index"
            >
              <b-form-input
                :id="'degree-tx' + index"
                v-model="education.degree"
                placeholder="Degree"
                required
              />
            </b-form-group>
          </b-col>
          <b-col cols="4">
            <b-form-group
              :id="'major' + index"
              label="Major"
              :label-for="'major-tx' +  index"
            >
              <b-form-input
                :id="'major-tx' + index"
                v-model="education.major"
                placeholder="Major"
                required
              />
            </b-form-group>
          </b-col>
        </b-form-row>
        <b-form-row>
          <b-col cols="4">
            <b-form-group
              :id="'from' + index"
              label="From"
              :label-for="'from-tx' + index"
            >
              <b-form-datepicker
                :id="'from-tx' + index"
                :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                v-model="education.from"
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
                v-model="education.to"
                class="mb-2"
                placeholder="To"
                >
              </b-form-datepicker>
            </b-form-group>
          </b-col>
          <b-col cols="4">
            <b-form-group
              :id="'gpa' + index"
              label="Gpa"
              :label-for="'gpa-tx' + index"
            >
              <b-form-input
                :id="'gpa-tx' + index"
                v-model="education.gpa"
                placeholder="Gpa"
              />
            </b-form-group>
          </b-col>
        </b-form-row>
        <b-form-row>
          <b-col cols="12">
            <b-form-group>
              <b-button :id="'education-action-save-butt' + index" @click="update(education)" type="button">Save</b-button>
              <b-button :id="'education-action-del-butt' + index" @click="remove(education.id, index)" type="button" variant="danger">Delete</b-button>
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
      newEducation: {
        schoolName: '',
        degree: '',
        major: '',
        from: '',
        to: '',
        gpa: ''
      },
      educations: []
    }
  },
  created() {
    axios
      .get('/educations/profile/' + this.profileId)
      .then(response => (this.educations = response.data));
  },
  methods: {
    insert() {
      this.newEducation.profileId = this.profileId;
      axios
        .post('/educations', this.newEducation)
        .then(response => {
          this.newEducation = {
            schoolName: '',
            degree: '',
            major: '',
            from: '',
            to: '',
            gpa: ''
          }
          this.educations.push(response.data);
        });
    },
    update(education) {
      education.profileId = this.profileId;
      axios
        .put('educations/' + education.id, education)
        .then(response => {});
    },
    remove(id, index) {
      axios
        .delete('educations/' + id)
        .then(response => this.links.splice(index, 1))
    }
  }
}
</script>

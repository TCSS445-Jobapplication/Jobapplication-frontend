<template>
  <div class="child-module">
    <h5>Course Work</h5>
    <b-form>
      <b-form-row>
        <b-col cols="10">
          <b-form-group
            id="course"
            label="Course"
            label-for="coursework-tx"
          >
            <b-form-input
              id="course-tx"
              v-model="newCourseWork.course"
              placeholder="Course"
              required
            />
          </b-form-group>
        </b-col>
        <b-col cols="2">
          <b-form-group
            id="coursework-action"
            label="Action"
            label-for="coursework-action-butt"
          >
            <b-button id="coursework-action-butt" @click="insert" type="button">Add</b-button>
          </b-form-group>
        </b-col>
      </b-form-row>
      <b-form-row v-for="(courseWork, index) in courseWorks">
        <b-col cols="10">
          <b-form-group>
            <b-form-input
              :id="'course-tx' + index"
              v-model="courseWork.course"
              placeholder="Course"
              required
            />
          </b-form-group>
        </b-col>
        <b-col cols="2">
          <b-form-group>
            <b-button :id="'coursework-action-save-butt' + index" @click="update(courseWork)" type="button">Save</b-button>
            <b-button :id="'coursework-action-del-butt' + index" @click="remove(courseWork.id, index)" type="button" variant="danger">Delete</b-button>
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
      newCourseWork: {
        course: ''
      },
      courseWorks: []
    }
  },
  created() {
    axios
      .get('/courseworks/profile/' + this.profileId)
      .then(response => (this.courseWorks = response.data));
  },
  methods: {
    insert() {
      this.newCourseWork.profileId = this.profileId;
      axios
        .post('/courseworks', this.newCourseWork)
        .then(response => {
          this.newCourseWork = {course: ''}
          this.courseWorks.push(response.data);
        });
    },
    update(courseWork) {
      courseWork.profileId = this.profileId;
      axios
        .put('courseworks/' + courseWork.id, courseWork)
        .then(response => {});
    },
    remove(id, index) {
      axios
        .delete('courseworks/' + id)
        .then(response => this.courseWorks.splice(index, 1))
    }
  }
}
</script>

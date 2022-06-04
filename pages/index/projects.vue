<template>
  <div class="child-module">
    <h5>Projects</h5>
    <b-form>
      <b-form-row>
        <b-col cols="4">
          <b-form-group
            id="project-name"
            label="Name"
            label-for="project-name-tx"
          >
            <b-form-input
              id="project-name-tx"
              v-model="newProject.name"
              placeholder="Name"
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
              v-model="newProject.from"
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
              v-model="newProject.to"
              class="mb-2"
              placeholder="To"
              >
            </b-form-datepicker>
          </b-form-group>
        </b-col>
      </b-form-row>
      <b-form-row>
        <b-col cols="12">
          <b-form-group
            id="project-description"
            label="Description"
            label-for="project-description-tx"
          >
            <b-form-textarea
              id="project-description-tx"
              v-model="newProject.description"
              placeholder="Description"
              rows="3"
              max-rows="6"
            ></b-form-textarea>
          </b-form-group>
        </b-col>
      </b-form-row>
      <b-form-row>
        <b-col cols="12">
          <b-form-group
            id="project-url"
            label="URL"
            label-for="project-url-tx"
          >
            <b-form-input
              id="project-url-tx"
              v-model="newProject.url"
              placeholder="URL"
            />
          </b-form-group>
        </b-col>
      </b-form-row>
      <b-form-row>
        <b-col cols="12">
          <b-form-group
            id="project-action"
            label="Action"
            label-for="project-action-butt"
          >
            <b-button id="project-action-butt" @click="insert" type="button">Add</b-button>
          </b-form-group>
        </b-col>
      </b-form-row>
      <template v-for="(project, index) in projects">
        <b-form-row>
          <b-col cols="4">
            <b-form-group
              :id="'project-name' + index"
              label="Name"
              :label-for="'project-name-tx' + index"
            >
              <b-form-input
                :id="'project-name-tx' + index"
                v-model="project.name"
                placeholder="Name"
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
                v-model="project.from"
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
                v-model="project.to"
                class="mb-2"
                placeholder="To"
                >
              </b-form-datepicker>
            </b-form-group>
          </b-col>
        </b-form-row>
        <b-form-row>
          <b-col cols="12">
            <b-form-group
              :id="'project-description' + index"
              label="Description"
              :label-for="'project-description-tx' + index"
            >
              <b-form-textarea
                :id="'project-description-tx' + index"
                v-model="project.description"
                placeholder="Description"
                rows="3"
                max-rows="6"
              ></b-form-textarea>
            </b-form-group>
          </b-col>
        </b-form-row>
        <b-form-row>
          <b-col cols="12">
            <b-form-group
              :id="'project-url' + index"
              label="URL"
              :label-for="'project-url-tx' + index"
            >
              <b-form-input
                :id="'project-url-tx' + index"
                v-model="project.url"
                placeholder="URL"
              />
            </b-form-group>
          </b-col>
        </b-form-row>
        <b-form-row>
          <b-col cols="12">
            <b-form-group>
              <b-button :id="'project-action-save-butt' + index" @click="update(project)" type="button">Save</b-button>
              <b-button :id="'project-action-del-butt' + index" @click="remove(project.id, index)" type="button" variant="danger">Delete</b-button>
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
      newProject: {
        schoolName: '',
        degree: '',
        major: '',
        from: '',
        to: '',
        gpa: ''
      },
      projects: []
    }
  },
  created() {
    axios
      .get('/projects/profile/' + this.profileId)
      .then(response => (this.projects = response.data));
  },
  methods: {
    insert() {
      this.newProject.profileId = this.profileId;
      axios
        .post('/projects', this.newProject)
        .then(response => {
          this.newProject = {
            name: '',
            from: '',
            to: '',
            url: ''
          }
          this.projects.push(response.data);
        });
    },
    update(project) {
      project.profileId = this.profileId;
      axios
        .put('projects/' + project.id, project)
        .then(response => {});
    },
    remove(id, index) {
      axios
        .delete('projects/' + id)
        .then(response => this.projects.splice(index, 1))
    }
  }
}
</script>

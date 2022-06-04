<template>
  <div class="child-module">
    <h5>Skills</h5>
    <b-form>
      <b-form-row>
        <b-col cols="12">
          <b-form-group
            id="skill-type-programming-languages"
            label="Programming languages"
            label-for="skill-type-programming-languages-tx"
          >
            <b-form-tags id="skill-type-programming-languages-tx" input-id="tags-programming-languages" v-model="programmingLanguages"
                         placeholder="Add programming language"
                         @focus="focusHandle"
            ></b-form-tags>
          </b-form-group>
        </b-col>
      </b-form-row>
      <b-form-row>
        <b-col cols="12">
          <b-form-group
            id="skill-type-frameworks"
            label="Frameworks"
            label-for="skill-type-frameworks-tx"
          >
            <b-form-tags id="skill-type-frameworks-tx" input-id="tags-frameworks" v-model="frameworks"
              placeholder="Add framework"
            ></b-form-tags>
          </b-form-group>
        </b-col>
      </b-form-row>
      <b-form-row>
        <b-col cols="12">
          <b-form-group
            id="skill-type-databases"
            label="Databases"
            label-for="skill-type-databases-tx"
          >
            <b-form-tags id="skill-type-databases-tx" input-id="tags-databases" v-model="databases"
              placeholder="Add database"
            ></b-form-tags>
          </b-form-group>
        </b-col>
      </b-form-row>
      <b-form-row>
        <b-col cols="12">
          <b-form-group
            id="skill-type-systems"
            label="Systems"
            label-for="skill-type-systems-tx"
          >
            <b-form-tags id="skill-type-systems-tx" input-id="tags-systems" v-model="systems"
              placeholder="Add system"
            ></b-form-tags>
          </b-form-group>
        </b-col>
      </b-form-row>
      <b-form-row>
        <b-col cols="12">
          <b-form-group
            id="skill-type-web-servers"
            label="Web servers"
            label-for="skill-type-web-servers-tx"
          >
            <b-form-tags id="skill-type-web-servers-tx" input-id="tags-web-servers" v-model="webServers"
              placeholder="Add web server"
            ></b-form-tags>
          </b-form-group>
        </b-col>
      </b-form-row>
      <b-form-row>
        <b-col cols="12">
          <b-form-group
            id="skill-type-version-controls"
            label="Version controls"
            label-for="skill-type-version-controls"
          >
            <b-form-tags id="skill-type-version-controls-tx" input-id="tags-version-controls" v-model="versionControls"
              placeholder="Add version control"
            ></b-form-tags>
          </b-form-group>
        </b-col>
      </b-form-row>
      <b-form-row>
        <b-col cols="12">
          <b-form-group
            id="skill-type-languages"
            label="Languages"
            label-for="skill-type-languages"
          >
            <b-form-tags id="skill-type-languages-tx" input-id="tags-languages" v-model="languages"
              placeholder="Add language"
            ></b-form-tags>
          </b-form-group>
        </b-col>
      </b-form-row>
    </b-form>
  </div>
</template>


<script>
import axios from '~/plugins/axios';
import _ from 'underscore';
export  default {
  layout: 'default',
  props: ['profileId'],
  data() {
    return {
      newSkill: {
        type: '',
        name: ''
      },
      skills: [],
      programmingLanguages: [],
      rendered: false
    }
  },
  computed: {
    frameworks() {
      return this.skills.filter(skill => skill.type == 'frameworks').reduce((tag, skill) => {tag? tag.push(skill.name) : []; return tag;}, []);
    },
    databases() {
      return this.skills.filter(skill => skill.type == 'databases').reduce((tag, skill) => {tag? tag.push(skill.name) : []; return tag;}, []);
    },
    systems() {
      return this.skills.filter(skill => skill.type == 'systems').reduce((tag, skill) => {tag? tag.push(skill.name) : []; return tag;}, []);
    },
    webServers() {
      return this.skills.filter(skill => skill.type == 'web servers').reduce((tag, skill) => {tag? tag.push(skill.name) : []; return tag;}, []);
    },
    versionControls() {
      return this.skills.filter(skill => skill.type == 'version controls').reduce((tag, skill) => {tag? tag.push(skill.name) : []; return tag;}, []);
    },
    languages() {
      return this.skills.filter(skill => skill.type == 'languages').reduce((tag, skill) => {tag? tag.push(skill.name) : []; return tag;}, []);
    },
  },
  watch: {
    skills() {
      this.programmingLanguages = this.skills.filter(skill => skill.type == 'programming languages').reduce((tag, skill) => {tag? tag.push(skill.name) : []; return tag;}, []);
    },
    programmingLanguages(newSkills, oldSkills) {
      //if (!this.rendered) return;
      this.updateSkills(newSkills, oldSkills, 'programming languages');
    }
  },
  created() {
    axios
      .get('/skills/profile/' + this.profileId)
      .then(response => (this.skills = response.data));
  },
  methods: {
    updateSkills(newSkills, oldSkills, type) {
      if (!this.rendered) return;

      let removedSkills = _.difference(oldSkills, newSkills);
      let addedSkills = _.difference(newSkills, oldSkills);

      let self = this;
      removedSkills.forEach(skillName => {
        let i = self.skills.length;
        while (--i >= 0) {
          if (self.skills[i].name == skillName && self.skills[i].type == type) {
            self.remove(self.skills[i].id, i);
          }
        }
      });
      addedSkills.forEach(skillName => {
        self.newSkill = {type: type, name: skillName};
        self.insert();
      });
    },
    insert() {
      this.newSkill.profileId = this.profileId;
      axios
        .post('/skills', this.newSkill)
        .then(response => {
          this.newSkill = {type: '', name: ''}
          this.skills.push(response.data);
        });
    },
    update(skill) {
      skill.profileId = this.profileId;
      axios
        .put('skills/' + skill.id, skill)
        .then(response => {});
    },
    remove(id, index) {
      axios
        .delete('skills/' + id)
        .then(response => this.skills.splice(index, 1))
    },
    focusHandle() {
      this.rendered = true;
    }
  }
}
</script>

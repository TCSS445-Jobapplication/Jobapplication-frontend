<template>
  <div class="child-module">
    <h5>Links</h5>
    <b-form>
      <b-form-row>
        <b-col cols="5">
          <b-form-group
            id="link-name"
            label="Link name"
            label-for="link-name-tx"
          >
            <b-form-input
              id="link-name-tx"
              v-model="newLink.name"
              placeholder="Link name"
              required
            />
          </b-form-group>
        </b-col>
        <b-col cols="5">
          <b-form-group
            id="link"
            label="Link"
            label-for="link-tx"
          >
            <b-form-input
              id="link-tx"
              v-model="newLink.link"
              placeholder="Link"
              required
            />
          </b-form-group>
        </b-col>
        <b-col cols="2">
          <b-form-group
            id="link-action"
            label="Action"
            label-for="link-action-butt"
          >
            <b-button id="link-action-butt" @click="insert" type="button">Add</b-button>
          </b-form-group>
        </b-col>
      </b-form-row>
      <b-form-row v-for="(link, index) in links">
        <b-col cols="5">
          <b-form-group>
            <b-form-input
              :id="'link-name-tx' + index"
              v-model="link.name"
              placeholder="Link name"
              required
            />
          </b-form-group>
        </b-col>
        <b-col cols="5">
          <b-form-group>
            <b-form-input
              :id="'link-tx' + index"
              v-model="link.link"
              placeholder="Link"
              required
            />
          </b-form-group>
        </b-col>
        <b-col cols="2">
          <b-form-group>
            <b-button :id="'link-action-save-butt' + index" @click="update(link)" type="button">Save</b-button>
            <b-button :id="'link-action-del-butt' + index" @click="remove(link.id, index)" type="button" variant="danger">Delete</b-button>
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
  props: ['userId'],
  data() {
    return {
      newLink: {
        name: '',
        link: ''
      },
      links: []
    }
  },
  created() {
    axios
      .get('/links/user/' + this.userId)
      .then(response => (this.links = response.data));
  },
  methods: {
    insert() {
      this.newLink.userId = this.userId;
      axios
        .post('/links', this.newLink)
        .then(response => {
          this.newLink = {name: '', link: ''}
          this.links.push(response.data);
        });
    },
    update(link) {
      link.userId = this.userId;
      axios
        .put('links/' + link.id, link)
        .then(response => {});
    },
    remove(id, index) {
      axios
        .delete('links/' + id)
        .then(response => this.links.splice(index, 1))
    }
  }
}
</script>

Vue.component("task-list", {
  template: `
    <div>
      <task v-for="task in tasks">{{ task.task }}</task>
    </div>
  `,

  data() {
    return {
      tasks: [
        { task: "Go to the store", complete: true },
        { task: "Finish screencast", complete: true },
        { task: "Make donation", complete: false },
        { task: "Clear inbox", complete: false },
        { task: "Make dinner", complete: false },
        { task: "Clean room", complete: true }
      ]
    };
  }
});

Vue.component("task", {
  template: "<li><slot></slot></li>"
});

Vue.component("important-message", {
  props: ["title", "body"],

  data() {
    return {
      isVisible: true
    };
  },

  template: `
  <article class="message" v-show="isVisible">
    <div class="message-header">
      {{ title }}
      <button class="delete" aria-label="delete" @click="hideModal"></button>
    </div>

    <div class="message-body">
      {{ body }}
    </div>
</article>

  `,

  methods: {
    hideModal() {
      this.isVisible = false;
    }
  }
});

new Vue({
  el: "#component"
})

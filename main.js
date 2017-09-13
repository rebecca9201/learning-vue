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

Vue.component("message", {
  props: ["title", "body"],
  template: `
  <article class="message">
    <div class="message-header">
      {{ title }}
    </div>

    <div class="message-body">
      {{ body }}
    </div>
</article>

  `
});

new Vue({
  el: "#component"
})

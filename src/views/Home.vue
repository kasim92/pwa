<template>
  <div>
    <v-card>
      <v-card-title>
        <h4>Main Info</h4>
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col>
            <v-text-field
              v-model="todo"
              label="Todo"
              filled
              dense
              hide-details
            />

          </v-col>
          <v-col>
            <v-btn
              :color="!isEditMode ? 'primary' : 'warning'"
              @click="!isEditMode ? add() : edit()"
            >{{!isEditMode ? 'Add' : 'Edit'}}</v-btn>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-list>
          <v-list-item
            v-for="(item,index) in todos"
            :key="index"
          >
            <v-list-item-content>
              <v-list-item-title>
                {{item.title}}
              </v-list-item-title>
            </v-list-item-content>
            <v-list-item-action class="mx-10">
              <v-row>
                <v-col>
                  <v-icon
                    role="button"
                    color="orange"
                    @click="toEditMode(item)"
                  >fas fa-edit</v-icon>
                </v-col>
                <v-col>
                  <v-icon
                    role="button"
                    color="error"
                    @click="deleteTodo(item.id)"
                  >fas fa-trash</v-icon>
                </v-col>
              </v-row>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-card-actions>
    </v-card>

  </div>
</template>

<script>
import { TodosService } from "../service/todo_service";

export default {
  name: "Home",
  components: {},
  data() {
    return {
      isEditMode: false,
      editedItem: [],
      todo: null,
      todos: [],
      service: new TodosService(),
    };
  },
  methods: {
    async add() {
      try {
        const todosAdedd = await this.service.addTodo({
          title: this.todo,
          isCompleted: false,
        });
        this.todo = null;
      } catch (ex) {
        alert(ex.message);
      }
      this.getTodos();
    },
    async edit() {
      this.editedItem.title = this.todo;
      const update = await this.service.updateTodoById(this.editedItem);
      this.isEditMode = false;
      this.todo = null;
      this.editedItem = null;
    },
    async deleteTodo(id) {
      const deleteTodo = await this.service.removeTodo(id);
      this.getTodos();
    },
    toEditMode(item) {
      this.editedItem = item;
      this.todo = this.editedItem.title;
      this.isEditMode = true;
    },
    async getTodos() {
      this.todos = await new TodosService().getTodos();
    },
  },
  mounted() {
    this.getTodos();
  },
};
</script>

<template>
  <div>
    <!-- <h2 class="white--text text-center">Add Pharmacy</h2> -->
    <AppBar />
    <v-btn
      color="primary"
    >test</v-btn>
    <search-pharmacy />
    <all-pharmacies />
  </div>
</template>

<script>
// firestore-export --accountCredentials C:\Users\Administrator\Downloads\apikey.json --backupFile C:\Users\Administrator\Downloads\myDatabase.json

import { TodosService } from "../service/todo_service";
import SearchPharmacy from "../components/Home/SearchPharmacy";
import AllPharmacies from "../components/Home/AllPharmacies.vue";
import AppBar from "../components/AppBar.vue";
import localforage from "localforage";
import { entries } from "idb-keyval";

localforage.config({
  name: "budgeterbium",
});
// import { firestoreExport } from "node-firestore-import-export";

import products from "../../collections/products.json";

export default {
  name: "Home",
  components: { "search-pharmacy": SearchPharmacy, AllPharmacies, AppBar },
  data() {
    return {
      docA: {
        name: "products",
        __collections__: { products },
      },
      isEditMode: false,
      editedItem: [],
      todo: null,
      todos: [],
      gps: "33.365984, 44.337622",
      service: new TodosService(),
    };
  },
  methods: {
    // map() {
    //   this.$copyText(this.gps).then(
    //     function (e) {
    //       window.open(
    //         `https://www.google.com/maps/search/?api=1&query=${e.text}`
    //       );
    //     },
    //     function (e) {
    //       console.log(e);
    //     }
    //   );
    // },
    // async add() {
    //   try {
    //     const todosAdedd = await this.service.addTodo({
    //       title: this.todo,
    //       isCompleted: false,
    //     });
    //     this.todo = null;
    //   } catch (ex) {
    //     alert(ex.message);
    //   }
    //   this.getTodos();
    // },
    // async edit() {
    //   this.editedItem.title = this.todo;
    //   const update = await this.service.updateTodoById(this.editedItem);
    //   this.isEditMode = false;
    //   this.todo = null;
    //   this.editedItem = null;
    // },
    // async deleteTodo(id) {
    //   const deleteTodo = await this.service.removeTodo(id);
    //   this.getTodos();
    // },
    // toEditMode(item) {
    //   this.editedItem = item;
    //   this.todo = this.editedItem.title;
    //   this.isEditMode = true;
    // },
    // async getTodos() {
    //   this.todos = await new TodosService().getTodos();
    // },
    // saveAccount() {
    //   return localforage
    //     .setItem("acc6", {
    //       id: 1,
    //       pharmacyName: "‎صيدلية سما الرفيف",
    //       product: "‎aaaa",
    //       qty: "3",
    //       price: 100,
    //     })
    //     .then((value) => {
    //       return value;
    //     })
    //     .catch((err) => {
    //       console.log(
    //         "oops! the account was too far gone, there was nothing we could do to save him ",
    //         err
    //       );
    //     });
    // },
    // async createEmployee() {
    //   // let products = [
    //   //   {
    //   //     countryId: 1,
    //   //     countryName: "Any",
    //   //     phoneCode: null,
    //   //     sortName: null,
    //   //   },
    //   //   {
    //   //     countryId: 2,
    //   //     countryName: "India",
    //   //     phoneCode: null,
    //   //     sortName: null,
    //   //   },
    //   // ];
    //   // let batch = db.batch();
    //   // let start = 3877;
    //   // let end = 3880;
    //   // products.map((doc, index) => {
    //   //   if (index > start && index <= end) {
    //   //             console.log(index);
    //   //     // var docRef = db.collection("products").doc();
    //   //     // batch.set(db.collection("products").doc(), doc); //automatically generate unique id
    //   //   }
    //   // console.log(index);
    //   // });
    //   // await batch.commit().then(function (data) {
    //   //   console.log(data);
    //   // });
    //   //   const collectionRef = firebase.firestore().collection('products');
    //   //   firestoreImport(products, collectionRef)
    //   // .then(()=>console.log('Data was imported.'));
    //   // console.log(products.length)
    //   // db.collection("products")
    //   //   .add({
    //   //     company: "fromvue",
    //   //     price: "30",
    //   //     productName: "test",
    //   //     qty: "900",
    //   //   })
    //   //   .then(() => {
    //   //     console.log("Document successfully written!");
    //   //   })
    //   //   .catch((error) => {
    //   //     console.error("Error writing document: ", error);
    //   //   });
    // },
  },

  mounted() {
   
  },
};
</script>
<style scoped>
</style>

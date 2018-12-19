<template>
  <div>   
          <b-container fluid>
            <b-row>              
              <b-col class="page-heading">Company Details</b-col>
            </b-row>
            <b-row class="details-table">
              <b-col class="header-comp" cols="12">
                <b-table small bordered :items="list" :fields="fields">
                  <template slot="actions" scope="row">
                    <div class = 'toggle' v-if="row.item.status == 'active'">
                      <img @click.stop="toggle(row.item)" src="../assets/off.png">           
                    </div>
                    <div v-else-if="row.item.status == 'inactive'">
                      <img @click.stop="toggle(row.item)" src="../assets/on.png">          
                    </div>
                  </template>
                </b-table>
              </b-col>
            </b-row>
          </b-container>  
  </div>
</template>

<script>
import data from "../assets/compData.json";
export default {
  name: "CompanyList",
  data() {
    return {
      fields: {
        name: { label: "Name", sortable: true },
        status: { label: "Status" },
        actions: { label: "Action" }
      },
      list: []
    };
  },
  created() {
    console.log("data " + JSON.stringify(data));
    this.list = data.company;
  },
  methods: {
    toggle(comp) {
      console.log("Toggle Status", comp.name);
      this.list.forEach(item => {
        if (item.name === comp.name) {
          console.log(comp.status);
          if (comp.status == "active") {
            comp.status = "inactive";
          } else if (comp.status == "inactive") {
            comp.status = "active";
          }
          console.log(comp.status);
        }
      });
    }
  }
};
</script>

<style>
img {
  max-width: 30px;
}
.page-heading {
  padding: 10px;
  text-align: left;
}
.page-heading > b-col {
  padding: 5px;
}
.toggle :hover{
  cursor: pointer;
}
</style>

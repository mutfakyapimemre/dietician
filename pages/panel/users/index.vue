<template>
  <v-app>
    <!-- Main Wrapper -->
    <div class="main-wrapper">
      <div class="page-wrapper">
        <div class="content container-fluid">

          <!-- Page Header -->
          <div class="page-header">
            <div class="row">
              <div class="col-sm-12">
                <h3 class="page-title">Kullanıcılar</h3>
                <ul class="breadcrumb">
                  <li class="breadcrumb-item">
                    <nuxt-link to="/panel" tag="a">Anasayfa</nuxt-link>
                  </li>
                  <li class="breadcrumb-item active">Kullanıcılar</li>
                </ul>
              </div>
            </div>
          </div>
          <!-- /Page Header -->

          <div class="row">

            <div class="col-12">

              <!-- General -->

              <div class="card">
                <div class="card-header">
                  <h4 class="card-title">Kullanıcılar

                  </h4>
                </div>
                <div class="card-body">

                  <v-card tile>
                    <v-card-title class="d-flex justify-content-between">
                      <span class="justify-content-center flex-grow-1">
                        <v-text-field v-model="searchTitle" label="Arama Yapın..." class="my-auto py-auto"></v-text-field>
                      </span>
                      <span class="justify-content-end flex-shrink-1">
                        <v-btn @click="page = 1; retrieveData('get-by-search');" class="my-auto py-auto mx-3">
                          Ara
                        </v-btn>
                      </span>
                    </v-card-title>

                    <v-data-table
                      :headers="headers"
                      :items="data"
                      disable-pagination
                      :hide-default-footer="true"
                    >
                      <template v-slot:item.img_url="{ item }">
                        <img v-bind:src="item.img_url" width="150" height="150"/>
                      </template>
                      <template v-slot:item.isActive="{item}">
                        <v-layout justify-center>
                          <v-switch
                            class="d-flex justify-content-center mx-auto px-auto text-center"
                            v-model="item.isActive"
                            color="success"
                            :key="item.id"
                            @click="isActiveSetter(item.id)"
                          ></v-switch>
                        </v-layout>
                      </template>
                      <template v-slot:[`item.actions`]="{ item }">
                        <v-icon small class="mr-2" @click="editData(item.id)">
                          mdi-pencil
                        </v-icon>
                        <v-icon small @click="deleteData(item.id)">
                          mdi-delete
                        </v-icon>
                      </template>
                    </v-data-table>
                  </v-card>
                  <div class="row">

                    <v-col cols="12" sm="12">
                      <div class="row">
                        <v-col cols="12" lg="3">
                          <v-select
                            v-model="pageSize"
                            :items="pageSizes"
                            label="Sayfada Görüntüleme Sayısı"
                            @change="handlePageSizeChange"
                          ></v-select>
                        </v-col>

                        <v-col cols="12" lg="9">
                          <v-pagination
                            v-model="page"
                            :length="totalPages"
                            total-visible="7"
                            next-icon="mdi-menu-right"
                            prev-icon="mdi-menu-left"
                            @input="handlePageChange"
                          ></v-pagination>
                        </v-col>
                      </div>
                    </v-col>
                  </div>


                </div>
              </div>

              <!-- /General -->

            </div>
          </div>

        </div>
      </div>
      <!-- /Page Wrapper -->
    </div>
    <!-- /Main Wrapper -->
  </v-app>
</template>
<script>
import Cookie from "js-cookie"
import {Base64} from 'js-base64';

import {ValidationObserver, ValidationProvider} from "vee-validate"
export default {
  middleware: ["session-control", "admin"],
  layout: "admin",
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  computed: {
    img_url() {
      return process.env.apiPublicUrl;
    },

  },
  data() {
    return {
      data: [],
      searchTitle: null,
      headers: [
        {text: '#', align: 'center', value: 'rank'},
        {text: 'Görsel', align: 'center', value: 'img_url', sortable: false},
        {text: 'Adı Soyadı', align:'center', value: 'name'},
        {text: 'Email', align:'center', value: 'email'},
        {text: 'Telefon', align:'center', value: 'phone'},
        {text: "Durum", align: 'center', value: 'isActive'},
        {text: 'İşlemler', align: 'center', value: 'actions', sortable: false}
      ],
      page: 1,
      totalPages: 0,
      pageSize: 25,
      pageSizes: [25, 50, 100, 200, 500, 1000],
      loading: false,
      userData: (Cookie.get("userData") !== null && Cookie.get("userData") !== undefined && Cookie.get("userData") !== "" ? JSON.parse(Base64.decode(Cookie.get("userData"))) : null),
    };
  },
  methods: {
    getRequestParams(searchTitle, page, pageSize) {
      let params = {};
      params["title"] = searchTitle;
      params["page"] = page - 1;
      params["size"] = pageSize;
      return params;
    },
    retrieveData(url) {
      let urlParam = "get-all"
      if(url !== undefined && url !== "" && url !== null){
        urlParam = url
      }
      const params = this.getRequestParams(
        this.searchTitle,
        this.page,
        this.pageSize
      );
      this.$axios.get(`${process.env.apiBaseUrl}panel/datatables/${urlParam}?table=users&page=${params.page}&per_page=${params.size}&search=${params.title}&search_columns=name,email,phone`, {
        json: true,
        withCredentials: false,
        mode: 'no-cors',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token, Authorization',
          'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Credentials': true,
          "Content-type": "application/json",
          "Authorization": "Bearer " + this.userData.api_token
        },
        credentials: 'same-origin',
      })
        .then(response => {
          this.data = response.data.data.data.map(this.getDisplayData);

          this.totalPages = response.data.data.last_page;
        })
        .catch(err => console.log(err))
        .finally(() => this.loading = false);
    },
    handlePageChange(value) {
      this.page = value;
      this.retrieveData();
    },
    handlePageSizeChange(size) {
      this.pageSize = size;
      this.page = 1;
      this.retrieveData();
    },
    refreshList() {
      this.retrieveData();
    },
    editData(id) {
      this.$router.push("/panel/users/update/" + id)
    },
    deleteData(id) {
      this.$axios.delete(process.env.apiBaseUrl + "panel/users/delete/" + id, {
        json: true,
        withCredentials: false,
        mode: 'no-cors',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token, Authorization',
          'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Credentials': true,
          "Content-type": "application/json",
          "Authorization": "Bearer " + this.userData.api_token
        },
        credentials: 'same-origin',
      })
        .then(response => {
          if (response.data.success) {
            this.$izitoast.success({
              title: response.data.title,
              message: response.data.msg,
              position: 'topCenter'
            })
            this.refreshList();
          } else {
            this.$izitoast.error({
              title: response.data.title,
              message: response.data.msg,
              position: 'topCenter'
            })
          }
        })
    },
    isActiveSetter(id){
      this.$axios.get(process.env.apiBaseUrl + "panel/datatables/is-active-setter?table=users&id="+id, {
        json: true,
        withCredentials: false,
        mode: 'no-cors',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token, Authorization',
          'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Credentials': true,
          "Content-type": "application/json",
          "Authorization": "Bearer " + this.userData.api_token
        },
        credentials: 'same-origin',
      })
        .then(response => {
          if (response.data.success) {
            this.$izitoast.success({
              title: response.data.title,
              message: response.data.msg,
              position: 'topCenter'
            })
            this.refreshList();
          } else {
            this.$izitoast.error({
              title: response.data.title,
              message: response.data.msg,
              position: 'topCenter'
            })
          }
        })
    },
    getDisplayData(data) {
      return {
        rank: data.rank,
        id: data._id.$oid,
        name: data.name,
        email: data.email,
        phone: data.phone,
        img_url : this.img_url+'public/storage/'+data.img_url,
        isActive: data.isActive,
      };
    },
  },
  mounted() {
    this.retrieveData();
  },
}

</script>

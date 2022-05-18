<template>
  <div>
    <SearchBar />
    <main>
      <div class="row">
        <div class="col-sm-11"></div>
        <div class="col-sm-1">
          <button v-on:click="SyncData" class="btn btn-primary btn-sm">
            Sync Data
          </button>
        </div>
      </div>
      <section class="recent">
        <div
          class="row bg-light"
          style="
            box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
            border-radius: 10px;
          "
        >
          <div class="col-sm-10"><h4 class="mt-3">Department Graph</h4></div>
          <div class="col-sm-2">
            <p style="float: right">
              <button
                class="badge badge-primary float-right mt-3"
                type="button"
                data-toggle="collapse"
                data-target="#collapseExample"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                -
              </button>
            </p>
          </div>
        </div>

        <div class="collapse mt-3" id="collapseExample">
          <div class="activity-grid">
            <div class="activity-card" style="height: fit-content">
              <div class="row">
                <div class="col-sm-12"></div>
              </div>

              <div class="graph-responsive">
                <GChart
                  type="ColumnChart"
                  :data="chartData"
                  :options="chartOptions"
                  width="1500"
                />
              </div>
            </div>
            <div class="summary">
              <div class="summary-card">
                <div class="summary-single">
                  <span><i class="fas fa-user-tie"></i></span>
                  <div>
                    <h5>196</h5>
                    <small>Number of staff</small>
                  </div>
                </div>
                <div class="summary-single">
                  <span><i class="fas fa-ban"></i></span>
                  <div>
                    <h5>16</h5>
                    <small>Number of leave</small>
                  </div>
                </div>
                <div class="summary-single">
                  <span><i class="far fa-grin-alt"></i></span>
                  <div>
                    <h5>12</h5>
                    <small>Profile update request</small>
                  </div>
                </div>
              </div>
              <!-- <div class="bday-card">
              <div class="bday-flex">
                <div class="bday-img"></div>
                <div class="bday-info">
                  <h5>Dwayne F. Sanders</h5>
                  <small>Birthday Today</small>
                </div>
              </div>
              <div class="text-center">
                <button>
                  <span class="ti-gift"></span>
                  Wish him
                </button>
              </div>
            </div> -->
            </div>
          </div>
        </div>

        <div
          class="row bg-light mt-3"
          style="
            box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
            border-radius: 10px;
          "
        >
          <div class="col-sm-10"><h4 class="mt-3">Department Table</h4></div>
          <div class="col-sm-2">
            <p style="float: right">
              <button
                class="badge badge-primary float-right mt-3"
                type="button"
                data-toggle="collapse"
                data-target="#collapseExamples"
                aria-expanded="false"
                aria-controls="collapseExamples"
              >
                -
              </button>
            </p>
          </div>
        </div>

        <div class="collapse" id="collapseExamples">
          <div class="activity-grid-second">
            <div class="activity-card" style="height: fit-content">
              <div class="row">
                <div class="col-sm-10">
                  <h3>Department Activity</h3>
                </div>
                <div class="col-sm-2 text-center">
                  <button
                    type="button"
                    class="btn btn-primary btn-sm mt-3"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <i class="fas fa-plus"></i>
                    Add
                  </button>

                  <div
                    class="modal fade"
                    id="exampleModal"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">
                            Add Department Details
                          </h5>
                        </div>
                        <div class="modal-body">
                          <div class="row">
                            <div class="mb-3 col-md-12">
                              <label style="float: left; font-size: 14px"
                                >Department Number
                                <span class="text-danger">*</span></label
                              >
                              <input
                                type="text"
                                name="departmentNumber"
                                v-model.trim="
                                  $v.department.departmentNumber.$model
                                "
                                :class="{
                                  'is-invalid': validationStatus(
                                    $v.department.departmentNumber
                                  ),
                                }"
                                class="form-control form-control-sm"
                                placeholder="Enter Department Number"
                              />
                              <div
                                v-if="!$v.department.departmentNumber.required"
                                class="invalid-feedback"
                              >
                                The Department Number is required.
                              </div>
                            </div>
                            <div class="mb-3 col-md-12">
                              <label style="float: left; font-size: 14px"
                                >Department Name
                                <span class="text-danger">*</span></label
                              >
                              <input
                                type="text"
                                name="departmentName"
                                v-model="$v.department.departmentName.$model"
                                :class="{
                                  'is-invalid': validationStatus(
                                    $v.department.departmentName
                                  ),
                                }"
                                class="form-control form-control-sm"
                                placeholder="Enter Department Name"
                              />
                              <div
                                v-if="!$v.department.departmentName.required"
                                class="invalid-feedback"
                              >
                                The Department Name is required.
                              </div>
                            </div>

                            <div class="mb-3 col-md-12">
                              <label style="float: left; font-size: 14px"
                                >Number of Employee
                                <span class="text-danger">*</span></label
                              >
                              <input
                                type="text"
                                name="number_of_employee"
                                v-model="$v.department.no_of_employee.$model"
                                :class="{
                                  'is-invalid': validationStatus(
                                    $v.department.no_of_employee
                                  ),
                                }"
                                class="form-control form-control-sm"
                                placeholder="Enter Number of Employee"
                              />
                              <div
                                v-if="!$v.department.no_of_employee.required"
                                class="invalid-feedback"
                              >
                                The Number of Employee is required.
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-danger"
                            data-bs-dismiss="modal"
                            v-on:click="addCloseClear"
                          >
                            Close
                          </button>
                          <button
                            type="button"
                            v-on:click="AddDepartmentDetails"
                            class="btn btn-primary"
                          >
                            Add
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="table-responsive">
                <table>
                  <thead>
                    <tr>
                      <th>Department Number</th>
                      <th>Department Name</th>
                      <th>Number of Employee</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody
                    v-for="depData in departmentData"
                    v-bind:key="depData.id"
                  >
                    <tr>
                      <td>{{ depData.departmentNumber }}</td>
                      <td>{{ depData.departmentName }}</td>
                      <td>{{ depData.no_of_employee }}</td>
                      <td>
                        <span
                          class="badge bg-primary"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal1"
                          style="cursor: pointer"
                          v-on:click="updateData(depData.id)"
                          ><i class="fas fa-pen"></i>Edit</span
                        >

                        <div
                          class="modal fade"
                          id="exampleModal1"
                          tabindex="-1"
                          aria-labelledby="exampleModalLabel"
                          aria-hidden="true"
                        >
                          <div class="modal-dialog">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">
                                  Update Department Details
                                </h5>
                              </div>
                              <div class="modal-body">
                                <div class="row">
                                  <div class="mb-3 col-md-12">
                                    <label style="float: left; font-size: 14px"
                                      >Department Number
                                      <span class="text-danger">*</span></label
                                    >
                                    <input
                                      type="text"
                                      name="departmentNumber"
                                      v-model="
                                        $v.updateDepartment.departmentNumber
                                          .$model
                                      "
                                      :class="{
                                        'is-invalid': validationStatus(
                                          $v.updateDepartment.departmentNumber
                                        ),
                                      }"
                                      class="form-control form-control-sm"
                                      placeholder="Enter Department Number"
                                    />
                                    <div
                                      v-if="
                                        !$v.updateDepartment.departmentNumber
                                          .required
                                      "
                                      class="invalid-feedback"
                                    >
                                      The Department Field is required.
                                    </div>
                                  </div>
                                  <div class="mb-3 col-md-12">
                                    <label style="float: left; font-size: 14px"
                                      >Department Name
                                      <span class="text-danger">*</span></label
                                    >
                                    <input
                                      type="text"
                                      name="departmentName"
                                      v-model="
                                        $v.updateDepartment.departmentName
                                          .$model
                                      "
                                      :class="{
                                        'is-invalid': validationStatus(
                                          $v.updateDepartment.departmentName
                                        ),
                                      }"
                                      class="form-control form-control-sm"
                                      placeholder="Enter Department Name"
                                    />
                                    <div
                                      v-if="
                                        !$v.updateDepartment.departmentName
                                          .required
                                      "
                                      class="invalid-feedback"
                                    >
                                      The Update Department field is required.
                                    </div>
                                  </div>

                                  <div class="mb-3 col-md-12">
                                    <label style="float: left; font-size: 14px"
                                      >Number of Employee
                                      <span class="text-danger">*</span></label
                                    >
                                    <input
                                      type="text"
                                      name="number_of_employee"
                                      v-model="
                                        $v.updateDepartment.no_of_employee
                                          .$model
                                      "
                                      :class="{
                                        'is-invalid': validationStatus(
                                          $v.updateDepartment.no_of_employee
                                        ),
                                      }"
                                      class="form-control form-control-sm"
                                      placeholder="Enter Number of Employee"
                                    />
                                    <div
                                      v-if="
                                        !$v.updateDepartment.no_of_employee
                                          .required
                                      "
                                      class="invalid-feedback"
                                    >
                                      The Number of Employee is required.
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="modal-footer">
                                <button
                                  type="button"
                                  class="btn btn-danger"
                                  data-bs-dismiss="modal"
                                >
                                  Close
                                </button>
                                <button
                                  type="button"
                                  @click="
                                    UpdateDepartmentData(updateDepartment.id)
                                  "
                                  class="btn btn-primary"
                                >
                                  Update
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import SearchBar from "../SearchBar/SearchBar.vue";
import { required } from "vuelidate/lib/validators";
import axios from "axios";
export default {
  name: "DepartmentPages",
  components: {
    SearchBar,
  },
  data() {
    return {
      department: {
        departmentNumber: "",
        departmentName: "",
        no_of_employee: "",
      },
      updateDepartment: {
        departmentNumber: "",
        departmentName: "",
        no_of_employee: "",
      },
      departmentData: [],

      chartData: [
        ["Department", "Project", "Employee"],
        ["Software Developer", 10, 50],
        ["Hardware Developer", 11, 60],
        ["Marketing", 66, 100],
        ["Human Resource", 10, 20],
      ],
      chartOptions: {
        chart: {
          title: "Company Performance",
          subtitle: "Project, Employee: 2014-2017",
        },
      },
    };
  },
  validations: {
    department: {
      departmentNumber: { required },
      departmentName: { required },
      no_of_employee: { required },
    },
    updateDepartment: {
      departmentNumber: { required },
      departmentName: { required },
      no_of_employee: { required },
    },
  },
  methods: {
    async updateData(id) {
      let updateData = await axios.get(
        "http://localhost:3000/department/" + id
      );
      this.updateDepartment = updateData.data;
    },

    async UpdateDepartmentData(id) {
      this.$v.$touch();
      let updateDataResult = await axios.put(
        "http://localhost:3000/department/" + id,
        {
          departmentNumber: this.updateDepartment.departmentNumber,
          departmentName: this.updateDepartment.departmentName,
          no_of_employee: this.updateDepartment.no_of_employee,
        }
      );
      if (updateDataResult.status == 200) {
        this.$router.go();
      }
    },

    async SyncData() {
      let result = await axios.get("http://localhost:3000/department");
      this.departmentData = result.data;
      console.log(result.data);
    },
    validationStatus(validation) {
      return typeof validation != "undefined" ? validation.$error : false;
    },
    addCloseClear() {
      (this.department.departmentNumber = ""),
        (this.department.departmentName = ""),
        (this.department.no_of_employee = "");
    },
    async AddDepartmentDetails() {
      this.$v.$touch();
      if (this.$v.$pendding || this.$v.$error) return;
      let addDepResult = await axios.post("http://localhost:3000/department", {
        departmentNumber: this.department.departmentNumber,
        departmentName: this.department.departmentName,
        no_of_employee: this.department.no_of_employee,
      });
      if (addDepResult.status == 201) {
        this.$router.go();
      }
    },
  },
  async mounted() {
    let result = await axios.get("http://localhost:3000/department");
    this.departmentData = result.data;
    console.log(result.data);
  },
};
</script>

<style>
</style>
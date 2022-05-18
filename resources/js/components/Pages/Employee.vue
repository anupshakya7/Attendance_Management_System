<template>
  <div>
    <SearchBar />
    <main>
      <section class="recent">
        <div
          class="row bg-light"
          style="
            box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
            border-radius: 10px;
          "
        >
          <div class="col-sm-10"><h4 class="mt-3">Employee Graph</h4></div>
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
                />
              </div>
            </div>

            <div class="activity-card" style="height: fit-content">
              <div class="row">
                <div class="col-sm-12"></div>
              </div>

              <div class="graph-responsive">
                <GChart
                  type="PieChart"
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
          <div class="col-sm-10"><h4 class="mt-3">Employee Table</h4></div>
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
          <div class="activity-grid-one">
            <div class="activity-card" style="height: fit-content">
              <div class="row p-3">
                <div class="col-sm-3">
                  <label> Birthday Date: </label>
                  <input
                    class="form-control form-control-sm"
                    type="date"
                    v-model="searchEmployee.birthday"
                    placeholder="Birthday Date"
                    aria-label=".form-control-sm example"
                  />
                </div>
                <div class="col-sm-3">
                  <label>Department Name: </label>
                  <select
                    v-model="searchEmployee.departmentName"
                    class="form-select form-select-sm"
                    aria-label="Default select example"
                  >
                    <option disabled value="">Select Department</option>
                    <option
                      v-for="employeeNamess in searchBar"
                      v-bind:key="employeeNamess.id"
                    >
                      {{ employeeNamess.departmentName }}
                    </option>
                  </select>
                </div>
                <div class="col-sm-3">
                  <label> Search Employees </label>
                  <select
                    v-model="searchEmployee.employee"
                    class="form-select form-select-sm"
                    aria-label="Default select example"
                  >
                    <option disabled value="">Select Employee</option>
                    <option
                      v-for="employeeNames in searchBar"
                      v-bind:key="employeeNames.id"
                    >
                      {{ employeeNames.employeeName }}
                    </option>
                  </select>
                </div>
                <div class="col-sm-3">
                  <label for=""></label>
                  <button
                    v-on:click="search"
                    type="button"
                    class="btn btn-success btn-sm w-100"
                  >
                    <i class="fas fa-search"></i>
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="activity-grid-second">
            <div class="activity-card" style="height: fit-content">
              <div class="row">
                <div class="col-sm-10">
                  <h3>Employee Activity</h3>
                </div>
                <div class="col-sm-1">
                  <button type="button" class="btn btn-primary btn-sm mt-3">
                    <i class="fa-solid fa-arrow-rotate-left"></i>
                    Reload
                  </button>
                </div>
                <div class="col-sm-1 text-center">
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
                    <div class="modal-dialog modal-lg">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">
                            Add Employee Details
                          </h5>
                        </div>
                        <div class="modal-body">
                          <div class="row">
                            <div class="mb-3 col-md-6">
                              <label style="float: left; font-size: 14px"
                                >Employee Name
                                <span class="text-danger">*</span></label
                              >
                              <input
                                type="text"
                                name="employeeName"
                                v-model.trim="$v.employee.employeeName.$model"
                                :class="{
                                  'is-invalid': validationStatus(
                                    $v.employee.employeeName
                                  ),
                                }"
                                class="form-control form-control-sm"
                                placeholder="Enter Employee Name"
                              />
                              <div
                                v-if="!$v.employee.employeeName.required"
                                class="invalid-feedback"
                              >
                                The Employee Name is required.
                              </div>
                            </div>
                            <div class="mb-3 col-md-6">
                              <label style="float: left; font-size: 14px"
                                >Department Name
                                <span class="text-danger">*</span></label
                              >
                              <input
                                type="text"
                                name="departmentName"
                                v-model="$v.employee.departmentName.$model"
                                :class="{
                                  'is-invalid': validationStatus(
                                    $v.employee.departmentName
                                  ),
                                }"
                                class="form-control form-control-sm"
                                placeholder="Enter Department Name"
                              />
                              <div
                                v-if="!$v.employee.departmentName.required"
                                class="invalid-feedback"
                              >
                                The Department Name is required.
                              </div>
                            </div>

                            <div class="mb-3 col-md-6">
                              <label style="float: left; font-size: 14px"
                                >Gender
                                <span class="text-danger">*</span></label
                              >
                              <span style="float: left">
                                <input
                                  type="radio"
                                  id="male"
                                  value="Male"
                                  style="margin-left: 20px"
                                  v-model="employee.sex"
                                />
                                <label for="male" style="font-size: 13px"
                                  >Male</label
                                >
                                <input
                                  type="radio"
                                  id="female"
                                  value="Female"
                                  style="margin-left: 20px"
                                  v-model="employee.sex"
                                />
                                <label for="female" style="font-size: 13px"
                                  >Female</label
                                >
                              </span>
                            </div>
                            <div class="mb-3 col-md-6">
                              <label style="float: left; font-size: 14px"
                                >Birthday
                                <span class="text-danger">*</span></label
                              >
                              <span>
                                <input
                                  type="date"
                                  name="birthDay"
                                  v-model="employee.birthday"
                                  class="form-control form-control-sm"
                                  placeholder="Enter Birthday"
                                />
                              </span>
                            </div>
                            <div class="mb-3 col-md-6">
                              <label style="float: left; font-size: 14px"
                                >Nationality
                                <span class="text-danger">*</span></label
                              >
                              <input
                                type="text"
                                name="nationality"
                                v-model="employee.nationality"
                                class="form-control form-control-sm"
                                placeholder="Enter Nationality"
                              />
                            </div>
                            <div class="mb-3 col-md-6">
                              <label style="float: left; font-size: 14px"
                                >Title <span class="text-danger">*</span></label
                              >
                              <input
                                type="text"
                                name="title"
                                v-model="employee.title"
                                class="form-control form-control-sm"
                                placeholder="Enter Title"
                              />
                            </div>
                            <div class="mb-3 col-md-6">
                              <label style="float: left; font-size: 14px"
                                >Office Phone
                                <span class="text-danger">*</span></label
                              >
                              <input
                                type="phone"
                                name="officePhone"
                                v-model="employee.officePhone"
                                class="form-control form-control-sm"
                                placeholder="Enter Office Phone"
                              />
                            </div>
                            <div class="mb-3 col-md-6">
                              <label style="float: left; font-size: 14px"
                                >Mobile
                                <span class="text-danger">*</span></label
                              >
                              <input
                                type="phone"
                                name="mobileNumber"
                                v-model="employee.mobile"
                                class="form-control form-control-sm"
                                placeholder="Enter Mobile Number"
                              />
                            </div>
                            <div class="mb-3 col-md-6">
                              <label style="float: left; font-size: 14px"
                                >Id Card
                                <span class="text-danger">*</span></label
                              >
                              <input
                                type="number"
                                name="idCard"
                                v-model="employee.idCard"
                                class="form-control form-control-sm"
                                placeholder="Enter Id Card Number"
                              />
                            </div>
                            <div class="mb-3 col-md-6">
                              <label style="float: left; font-size: 14px"
                                >Registration Device
                                <span class="text-danger">*</span></label
                              >
                              <input
                                type="text"
                                name="registerationDevice"
                                v-model="employee.registerDevice"
                                class="form-control form-control-sm"
                                placeholder="Enter Registration Device"
                              />
                            </div>
                            <div class="mb-3 col-md-6">
                              <label style="float: left; font-size: 14px"
                                >FP <span class="text-danger">*</span></label
                              >
                              <input
                                type="text"
                                name="FP"
                                v-model="employee.FP"
                                class="form-control form-control-sm"
                                placeholder="Enter FP "
                              />
                            </div>
                            <div class="mb-3 col-md-6">
                              <label style="float: left; font-size: 14px"
                                >Transactions
                                <span class="text-danger">*</span></label
                              >
                              <input
                                type="text"
                                name="transactions"
                                v-model="employee.Transactions"
                                class="form-control form-control-sm"
                                placeholder="Enter Transactions "
                              />
                            </div>
                            <div class="mb-3 col-md-12">
                              <label style="float: left; font-size: 14px"
                                >Picture
                                <span class="text-danger">*</span></label
                              >
                              <input
                                type="file"
                                name="picture"
                                :v-model="employee.Picture"
                                class="form-control form-control-sm"
                              />
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
                            v-on:click="AddEmployeeDetails"
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
                      <th>Employee Name</th>
                      <th>Department Name</th>
                      <th>Sex</th>
                      <th>Birthday</th>
                      <th>Nationality</th>
                      <th>Title</th>
                      <th>Office Phone</th>
                      <th>Mobile</th>
                      <th>Id Card</th>
                      <th>Registration Device</th>
                      <th>FP</th>
                      <th>Transactions</th>
                      <th>Picture</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="employees in employeeData"
                      v-bind:key="employees.id"
                    >
                      <td>{{ employees.employeeName }}</td>
                      <td>{{ employees.departmentName }}</td>
                      <td>{{ employees.sex }}</td>
                      <td>{{ employees.birthday }}</td>
                      <td>{{ employees.nationality }}</td>
                      <td>{{ employees.title }}</td>
                      <td>{{ employees.officePhone }}</td>
                      <td>{{ employees.mobile }}</td>
                      <td>{{ employees.idCard }}</td>
                      <td>{{ employees.registerDevice }}</td>
                      <td>{{ employees.FP }}</td>
                      <td>{{ employees.Transactions }}</td>
                      <td>{{ employees.Picture }}</td>
                      <td>
                        <span
                          class="badge bg-primary"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal1"
                          style="cursor: pointer"
                          v-on:click="updateData(employees.id)"
                          ><i class="fas fa-pen"></i>Edit</span
                        >
                        <div
                          class="modal fade"
                          id="exampleModal1"
                          tabindex="-1"
                          aria-labelledby="exampleModalLabel"
                          aria-hidden="true"
                        >
                          <div class="modal-dialog modal-lg">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">
                                  Update Department Details
                                </h5>
                              </div>
                              <div class="modal-body">
                                <div class="row">
                                  <div class="mb-3 col-md-6">
                                    <label style="float: left; font-size: 14px"
                                      >Employee Name
                                      <span class="text-danger">*</span></label
                                    >
                                    <input
                                      type="text"
                                      name="employeeName"
                                      v-model="updateEmployee.employeeName"
                                      class="form-control form-control-sm"
                                      placeholder="Enter Department Number"
                                    />
                                  </div>
                                  <div class="mb-3 col-md-6">
                                    <label style="float: left; font-size: 14px"
                                      >Department Name
                                      <span class="text-danger">*</span></label
                                    >
                                    <input
                                      type="text"
                                      name="departmentName"
                                      v-model="updateEmployee.departmentName"
                                      class="form-control form-control-sm"
                                      placeholder="Enter Department Name"
                                    />
                                  </div>

                                  <div class="mb-3 col-md-6">
                                    <label style="float: left; font-size: 14px"
                                      >Gender
                                      <span class="text-danger">*</span></label
                                    >
                                    <span style="float: left">
                                      <input
                                        type="radio"
                                        id="Male"
                                        value="Male"
                                        style="margin-left: 20px"
                                        v-model="updateEmployee.sex"
                                      />
                                      <label for="male" style="font-size: 13px"
                                        >Male</label
                                      >
                                      <input
                                        type="radio"
                                        id="Female"
                                        value="Female"
                                        style="margin-left: 20px"
                                        v-model="updateEmployee.sex"
                                      />
                                      <label
                                        for="female"
                                        style="font-size: 13px"
                                        >Female</label
                                      >
                                    </span>
                                  </div>
                                  <div class="mb-3 col-md-6">
                                    <label style="float: left; font-size: 14px">
                                      Birthday
                                      <span class="text-danger">*</span></label
                                    >
                                    <input
                                      type="date"
                                      name="birthDay"
                                      v-model="updateEmployee.birthday"
                                      class="form-control form-control-sm"
                                      placeholder="Enter Birthday"
                                    />
                                  </div>
                                  <div class="mb-3 col-md-6">
                                    <label style="float: left; font-size: 14px">
                                      Nationality
                                      <span class="text-danger">*</span></label
                                    >
                                    <input
                                      type="text"
                                      name="nationality"
                                      v-model="updateEmployee.nationality"
                                      class="form-control form-control-sm"
                                      placeholder="Enter Nationality"
                                    />
                                  </div>
                                  <div class="mb-3 col-md-6">
                                    <label style="float: left; font-size: 14px">
                                      Title
                                      <span class="text-danger">*</span></label
                                    >
                                    <input
                                      type="text"
                                      name="title"
                                      v-model="updateEmployee.title"
                                      class="form-control form-control-sm"
                                      placeholder="Enter Title"
                                    />
                                  </div>
                                  <div class="mb-3 col-md-6">
                                    <label style="float: left; font-size: 14px">
                                      Office Phone
                                      <span class="text-danger">*</span></label
                                    >
                                    <input
                                      type="phone"
                                      name="officePhone"
                                      v-model="updateEmployee.officePhone"
                                      class="form-control form-control-sm"
                                      placeholder="Enter Office Phone"
                                    />
                                  </div>
                                  <div class="mb-3 col-md-6">
                                    <label style="float: left; font-size: 14px"
                                      >Mobile
                                      <span class="text-danger">*</span></label
                                    >
                                    <input
                                      type="mobile"
                                      name="mobile"
                                      v-model="updateEmployee.mobile"
                                      class="form-control form-control-sm"
                                      placeholder="Enter Mobile Number"
                                    />
                                  </div>

                                  <div class="mb-3 col-md-6">
                                    <label style="float: left; font-size: 14px"
                                      >Id Card
                                      <span class="text-danger">*</span></label
                                    >
                                    <input
                                      type="text"
                                      name="idCard"
                                      v-model="updateEmployee.idCard"
                                      class="form-control form-control-sm"
                                      placeholder="Enter ID Card"
                                    />
                                  </div>

                                  <div class="mb-3 col-md-6">
                                    <label style="float: left; font-size: 14px"
                                      >Registration Device
                                      <span class="text-danger">*</span></label
                                    >
                                    <input
                                      type="text"
                                      name="registrationDevice"
                                      v-model="updateEmployee.registerDevice"
                                      class="form-control form-control-sm"
                                      placeholder="Enter Registration Device"
                                    />
                                  </div>
                                  <div class="mb-3 col-md-6">
                                    <label style="float: left; font-size: 14px"
                                      >FP
                                      <span class="text-danger">*</span></label
                                    >
                                    <input
                                      type="text"
                                      name="FP"
                                      v-model="updateEmployee.FP"
                                      class="form-control form-control-sm"
                                      placeholder="Enter FP"
                                    />
                                  </div>
                                  <div class="mb-3 col-md-6">
                                    <label style="float: left; font-size: 14px"
                                      >Transactions
                                      <span class="text-danger">*</span></label
                                    >
                                    <input
                                      type="text"
                                      name="Transactions"
                                      v-model="updateEmployee.Transactions"
                                      class="form-control form-control-sm"
                                      placeholder="Enter Transactions"
                                    />
                                  </div>
                                  <div class="mb-3 col-md-6">
                                    <label style="float: left; font-size: 14px"
                                      >Picture
                                      <span class="text-danger">*</span></label
                                    >
                                    <input
                                      type="file"
                                      name="picture"
                                      :v-model="updateEmployee.picture"
                                      class="form-control form-control-sm"
                                      placeholder="Enter Transactions"
                                    />
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
                                  v-on:click="
                                    UpdateEmployeeData(updateEmployee.id)
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
  name: "EmployeePage",
  components: {
    SearchBar,
  },
  data() {
    return {
      employee: {
        employeeName: "",
        departmentName: "",
        sex: "",
        birthday: "",
        nationality: "",
        title: "",
        officePhone: "",
        mobile: "",
        idCard: "",
        registerDevice: "",
        FP: "",
        Transactions: "",
        Picture: "",
      },
      updateEmployee: {
        employeeName: "",
        departmentName: "",
        sex: "",
        birthday: "",
        nationality: "",
        title: "",
        officePhone: "",
        mobile: "",
        idCard: "",
        registerDevice: "",
        FP: "",
        Transactions: "",
        Picture: "",
      },
      searchEmployee: {
        birthday: "",
        departmentName: "",
        employee: "",
      },
      employeeData: [],
      searchBar: [],
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
    employee: {
      employeeName: { required },
      departmentName: { required },
      gender: { required },
      birthday: { required },
      nationality: { required },
      title: { required },
      officePhone: { required },
      mobile: { required },
      idCard: { required },
      registerDevice: { required },
      FP: { required },
      Transactions: { required },
      Picture: { required },
    },
  },
  methods: {
    validationStatus(validation) {
      return typeof validation != "undefined" ? validation.$error : false;
    },
    async updateData(id) {
      let updateData = await axios.get("http://localhost:3000/employee/" + id);
      this.updateEmployee = updateData.data;
    },

    async UpdateEmployeeData(id) {
      let updateDataResult = await axios.put(
        "http://localhost:3000/employee/" + id,
        {
          employeeName: this.updateEmployee.employeeName,
          departmentName: this.updateEmployee.departmentName,
          sex: this.updateEmployee.gender,
          birthday: this.updateEmployee.birthday,
          nationality: this.updateEmployee.nationality,
          title: this.updateEmployee.title,
          officePhone: this.updateEmployee.officePhone,
          mobile: this.updateEmployee.mobile,
          idCard: this.updateEmployee.idCard,
          registerDevice: this.updateEmployee.registerDevice,
          FP: this.updateEmployee.FP,
          Transactions: this.updateEmployee.Transactions,
          Picture: this.updateEmployee.Picture,
        }
      );
      if (updateDataResult.status == 200) {
        this.$router.go();
      }
    },

    async search() {
      let searchResult = await axios.get(
        `http://localhost:3000/employee?birthday=${this.searchEmployee.birthday}&departmentName=${this.searchEmployee.departmentName}&employeeName=${this.searchEmployee.employee}`
      );
      this.employeeData = searchResult.data;
      console.log(employeeData);
    },

    async SyncData() {
      let result = await axios.get("http://localhost:3000/department");
      this.employeeData = result.data;
      console.log(result.data);
    },
    async AddEmployeeDetails() {
      let addEmpResult = await axios.post("http://localhost:3000/employee", {
        employeeName: this.employee.employeeName,
        departmentName: this.employee.departmentName,
        sex: this.employee.gender,
        birthday: this.employee.birthday,
        nationality: this.employee.nationality,
        title: this.employee.title,
        officePhone: this.employee.officePhone,
        mobile: this.employee.mobile,
        idCard: this.employee.idCard,
        registerDevice: this.employee.registerDevice,
        FP: this.employee.FP,
        Transactions: this.employee.Transactions,
        Picture: this.employee.Picture,
      });
      if (addEmpResult.status == 201) {
        this.$router.go();
      }
    },
  },
  async mounted() {
    let result = await axios.get("http://localhost:3000/employee");
    this.employeeData = result.data;
    console.log(result.data);

    let SearchResult = await axios.get("http://localhost:3000/employee");
    this.searchBar = SearchResult.data;
    console.log(SearchResult.data);
  },
};
</script>

<style scoped>
.activity-grid {
  display: grid;
  grid-template-columns: 32% 32% 32%;
  grid-column-gap: 1.5rem;
}
</style>
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
          <div class="col-sm-10"><h4 class="mt-3">Transaction Graph</h4></div>
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
          <div class="col-sm-10"><h4 class="mt-3">Transactions Table</h4></div>
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
                <div class="col-sm-11">
                  <h3>Transactions Activity</h3>
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
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">
                            Add Transaction Details
                          </h5>
                        </div>
                        <div class="modal-body">
                          <div class="row">
                            <div class="mb-3 col-md-12">
                              <label style="float: left; font-size: 14px"
                                >PIN <span class="text-danger">*</span></label
                              >
                              <input
                                type="text"
                                name="transactionsPIN"
                                v-model="transactions.pin"
                                class="form-control form-control-sm"
                                placeholder="Enter Transactions PIN"
                              />
                            </div>
                            <div class="mb-3 col-md-12">
                              <label style="float: left; font-size: 14px"
                                >EName <span class="text-danger">*</span></label
                              >
                              <input
                                type="text"
                                name="transactionsEName"
                                v-model="transactions.eName"
                                class="form-control form-control-sm"
                                placeholder="Enter EName"
                              />
                            </div>

                            <div class="mb-3 col-md-12">
                              <label style="float: left; font-size: 14px"
                                >Time <span class="text-danger">*</span></label
                              >
                              <input
                                type="time"
                                name="transactionsTime"
                                v-model="transactions.time"
                                class="form-control form-control-sm"
                                placeholder="Enter Transactions Time"
                              />
                            </div>

                            <div class="mb-3 col-md-12">
                              <label style="float: left; font-size: 14px"
                                >State <span class="text-danger">*</span></label
                              >
                              <input
                                type="text"
                                name="transactionsState"
                                v-model="transactions.state"
                                class="form-control form-control-sm"
                                placeholder="Enter Transactions State"
                              />
                            </div>

                            <div class="mb-3 col-md-12">
                              <label style="float: left; font-size: 14px"
                                >Verification
                                <span class="text-danger">*</span></label
                              >
                              <input
                                type="text"
                                name="transactionsVerifications"
                                v-model="transactions.verification"
                                class="form-control form-control-sm"
                                placeholder="Enter Transactions Verifications"
                              />
                            </div>

                            <div class="mb-3 col-md-12">
                              <label style="float: left; font-size: 14px"
                                >Work Code
                                <span class="text-danger">*</span></label
                              >
                              <input
                                type="number"
                                name="transactionsWorkCode"
                                v-model="transactions.workCode"
                                class="form-control form-control-sm"
                                placeholder="Enter Transactions Work Code"
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
                            v-on:click="AddTransactionDetails"
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
                      <th>Id</th>
                      <th>PIN</th>
                      <th>EName</th>
                      <th>Time</th>
                      <th>State</th>
                      <th>Verification</th>
                      <th>Work Code</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="transData in transactionsData"
                      v-bind:key="transData.id"
                    >
                      <td>{{ transData.id }}</td>
                      <td>{{ transData.pin }}</td>
                      <td>{{ transData.eName }}</td>
                      <td>{{ transData.time }}</td>
                      <td>{{ transData.state }}</td>
                      <td>{{ transData.verification }}</td>
                      <td>{{ transData.workCode }}</td>
                      <td>
                        <span
                          class="badge bg-primary"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal1"
                          style="cursor: pointer"
                          v-on:click="updateData(transData.id)"
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
                                  Update Transactions Details
                                </h5>
                              </div>
                              <div class="modal-body">
                                <div class="row">
                                  <div class="mb-3 col-md-12">
                                    <label style="float: left; font-size: 14px"
                                      >PIN
                                      <span class="text-danger">*</span></label
                                    >
                                    <input
                                      type="text"
                                      name="PIN"
                                      v-model="updateTransactionsData.pin"
                                      class="form-control form-control-sm"
                                      placeholder="Enter PIN"
                                    />
                                  </div>
                                  <div class="mb-3 col-md-12">
                                    <label style="float: left; font-size: 14px"
                                      >EName
                                      <span class="text-danger">*</span></label
                                    >
                                    <input
                                      type="text"
                                      name="EName"
                                      v-model="updateTransactionsData.eName"
                                      class="form-control form-control-sm"
                                      placeholder="Enter EName"
                                    />
                                  </div>

                                  <div class="mb-3 col-md-12">
                                    <label style="float: left; font-size: 14px"
                                      >Time
                                      <span class="text-danger">*</span></label
                                    >
                                    <input
                                      type="time"
                                      name="time"
                                      v-model="updateTransactionsData.time"
                                      class="form-control form-control-sm"
                                      placeholder="Enter Time"
                                    />
                                  </div>

                                  <div class="mb-3 col-md-12">
                                    <label style="float: left; font-size: 14px"
                                      >State
                                      <span class="text-danger">*</span></label
                                    >
                                    <input
                                      type="text"
                                      name="state"
                                      v-model="updateTransactionsData.state"
                                      class="form-control form-control-sm"
                                      placeholder="Enter Transactions State"
                                    />
                                  </div>

                                  <div class="mb-3 col-md-12">
                                    <label style="float: left; font-size: 14px"
                                      >Verifications
                                      <span class="text-danger">*</span></label
                                    >
                                    <input
                                      type="text"
                                      name="verifications"
                                      v-model="
                                        updateTransactionsData.verification
                                      "
                                      class="form-control form-control-sm"
                                      placeholder="Enter Time"
                                    />
                                  </div>

                                  <div class="mb-3 col-md-12">
                                    <label style="float: left; font-size: 14px"
                                      >Work Code
                                      <span class="text-danger">*</span></label
                                    >
                                    <input
                                      type="number"
                                      name="workCode"
                                      v-model="updateTransactionsData.workCode"
                                      class="form-control form-control-sm"
                                      placeholder="Enter Work Code"
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
                                    UpdateTransactionsData(
                                      updateTransactionsData.id
                                    )
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
import axios from "axios";
import SearchBar from "../SearchBar/SearchBar.vue";
export default {
  name: "TransactionPage",
  data() {
    return {
      transactionsData: [],
      transactions: {
        pin: "",
        eName: "",
        time: "",
        state: "",
        verification: "",
        workCode: "",
      },
      updateTransactionsData: {
        pin: "",
        eName: "",
        time: "",
        state: "",
        verification: "",
        workCode: "",
      },
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
  methods: {
    async AddTransactionDetails() {
      let addTransactionsResult = await axios.post(
        "http://localhost:3000/transactions",
        {
          pin: this.transactions.pin,
          eName: this.transactions.eName,
          time: this.transactions.time,
          state: this.transactions.state,
          verification: this.transactions.verification,
          workCode: this.transactions.workCode,
        }
      );
      if (addTransactionsResult.status == 201) {
        this.$router.go();
      }
    },
    async UpdateTransactionsData(id) {
      let updateDataResult = await axios.put(
        "http://localhost:3000/transactions/" + id,
        {
          pin: this.updateTransactionsData.pin,
          eName: this.updateTransactionsData.eName,
          time: this.updateTransactionsData.time,
          state: this.updateTransactionsData.state,
          verification: this.updateTransactionsData.verification,
          workCode: this.updateTransactionsData.workCode,
        }
      );
      if (updateDataResult.status == 200) {
        this.$router.go();
      }
    },
    async updateData(id) {
      let result = await axios.get("http://localhost:3000/transactions/" + id);
      this.updateTransactionsData = result.data;
    },
  },
  async mounted() {
    let transactionResult = await axios.get(
      "http://localhost:3000/transactions"
    );
    this.transactionsData = transactionResult.data;
  },
  components: {
    SearchBar,
  },
};
</script>

<style>
.activity-grid {
  display: grid;
  grid-template-columns: 32% 32% 32%;
  grid-column-gap: 1.5rem;
}
</style>
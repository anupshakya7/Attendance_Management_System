<template>
  <div>
    <SearchBar />
    <main>
      <h2 class="dash-title">Overview</h2>
      <div class="dash-cards">
        <div class="card-single">
          <div class="card-body">
            <span><i class="fas fa-briefcase"></i></span>
            <div>
              <h5>Department</h5>
              <h4>{{ department.departmentTotalNumber }}</h4>
            </div>
          </div>
          <div class="card-footer">
            <router-link to="/department">View All</router-link>
          </div>
        </div>

        <div class="card-single">
          <div class="card-body">
            <span><i class="fas fa-users"></i></span>
            <div>
              <h5>Employee</h5>
              <h4>{{ employee.employeeTotalNumber }}</h4>
            </div>
          </div>
          <div class="card-footer">
            <router-link to="/employee">View All</router-link>
          </div>
        </div>

        <div class="card-single">
          <div class="card-body">
            <span><i class="far fa-money-bill-alt"></i></span>
            <div>
              <h5>Transaction</h5>
              <h4>{{ transaction.transactionTotalNumber }}</h4>
            </div>
          </div>
          <div class="card-footer">
            <router-link to="/transaction">View All</router-link>
          </div>
        </div>
      </div>

      <section class="recent">
        <div class="activity-grid">
          <div class="activity-card">
            <h3>Recent Activity</h3>
            <div class="table-responsive">
              <table>
                <thead>
                  <tr>
                    <th>Project</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Team</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>App Development</td>
                    <td>15 Aug, 2020</td>
                    <td>22 Aug, 2020</td>
                    <td class="td-team">
                      <div class="img-1"></div>
                      <div class="img-2"></div>
                      <div class="img-3"></div>
                    </td>
                    <td>
                      <span class="badge success">Success</span>
                    </td>
                  </tr>

                  <tr>
                    <td>Front-end Development</td>
                    <td>15 Aug, 2020</td>
                    <td>22 Aug, 2020</td>
                    <td class="td-team">
                      <div class="img-1"></div>
                      <div class="img-2"></div>
                      <div class="img-3"></div>
                    </td>
                    <td>
                      <span class="badge warning">Processing</span>
                    </td>
                  </tr>

                  <tr>
                    <td>Logo Development</td>
                    <td>15 Aug, 2020</td>
                    <td>22 Aug, 2020</td>
                    <td class="td-team">
                      <div class="img-1"></div>
                      <div class="img-2"></div>
                      <div class="img-3"></div>
                    </td>
                    <td>
                      <span class="badge success">Success</span>
                    </td>
                  </tr>

                  <tr>
                    <td>Server Setup</td>
                    <td>15 Aug, 2020</td>
                    <td>22 Aug, 2020</td>
                    <td class="td-team">
                      <div class="img-1"></div>
                      <div class="img-2"></div>
                      <div class="img-3"></div>
                    </td>
                    <td>
                      <span class="badge success">Success</span>
                    </td>
                  </tr>
                </tbody>
              </table>
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
            <div class="bday-card">
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
  name: "DashboardMain",
  components: {
    SearchBar,
  },
  data() {
    return {
      department: "",
      employee: "",
      transaction: "",
    };
  },
  async mounted() {
    const departmentResult = await axios.get(
      "http://localhost:3000/TotalNumberOfDepartment"
    );
    this.department = departmentResult.data;

    const employeeResult = await axios.get(
      "http://localhost:3000/TotalNumberOfEmployee"
    );
    this.employee = employeeResult.data;

    const transactionResult = await axios.get(
      "http://localhost:3000/TotalNumberOfTransaction"
    );
    this.transaction = transactionResult.data;
  },
};
</script>

<style>
</style>
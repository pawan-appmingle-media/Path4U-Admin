import "./Dashboard.css";
// import WelcomeBack from '../WelcomeBackMsg/WelcomeBack.jsx';
// import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <>
      <div className="dashboard-widgets">
        <div className="widget dashboard-search-widget">
          <h4>Dashboard</h4>
          <div className="dashboard-search-box-btns">
            <button className="dashboard-new-student">
              {" "}
              + Add New Student
            </button>
            <button className="dashboard-all-student">Fee Management</button>
          </div>
        </div>

        {/* <WelcomeBack/> */}

        <div id="today-tracking-container">
          <h5>Today</h5>
          <div className="student-tracking-container">
            <div className="total-student">
              <div className="total-leave-allowance">
                <p className="student-track-total-heading">Total Students</p>
                <p className="student-track-count">34</p>
                <div className="paid-unpaid">
                  <p>Paid {11}</p>
                  <p>Unpaid {4}</p>
                </div>
              </div>
              {/* leave div  */}
            </div>
            <div className="today-live-taken">
              <p className="student-track-total-heading">Total leave taken</p>
              <p className="student-track-count">20</p>
              <div className="paid-unpaid">
                <p>Paid {11}</p>
                <p>Unpaid {4}</p>
              </div>
            </div>
            {/* live taken  */}
            <div className="total-leave-available">
              <p className="student-track-total-heading">
                Total leave available
              </p>
              <p className="student-track-count">87</p>
              <div className="paid-unpaid">
                <p>Paid {11}</p>
                <p>Unpaid {4}</p>
              </div>
            </div>
            {/* total leave available  */}
            <div className="dues-students">
              <p className="student-track-total-heading">Dues Students</p>
              <p className="student-track-count">122</p>
              <div className="paid-unpaid">
                <p>Paid {11}</p>
                <p>Unpaid {4}</p>
              </div>
            </div>
            {/* dues student  */}
          </div>
        </div>

        <div id="amount-overview-container">
          <p className="amount-overview-heading">Amount Overview</p>
          <div className="amount-overview-main-child">
            <div className="amount-overview-child-container">
              <div className="amount-overview-content">
                <div className="dues-download">
                  <p>Dues</p>
                  <p>Download</p>
                </div>
                <div className="overview-amount">
                  <p>Amount</p>
                  <p>Rs. 15000</p>
                </div>
                <div className="worked-time">
                  <p>05:00</p>
                  <p>Worked</p>
                </div>
              </div>
            </div>
            <div className="amount-overview-child-container">
              <p>This month</p>
              <div className="month-progress-bar-container">
                <div className="month-total">
                  <p>
                    <span>Total</span>
                    <span>216 hour</span>
                  </p>
                  <div className="progress-bar">
                    <div className="progress-bar-fill"></div>
                  </div>
                </div>

                <div className="month-work-time">
                  <p>
                    <span>worked time</span> <span>189 hour</span>
                  </p>
                  <div className="progress-bar">
                    <div className="progress-bar-fill"></div>
                  </div>
                </div>

                <div className="month-storage-time">
                  <p>Storage time</p>
                  <div className="progress-bar">
                    <div className="progress-bar-fill"></div>
                  </div>
                </div>

                <div className="month-overtime">
                  <p>Overview time</p>
                  <div className="progress-bar">
                    <div className="progress-bar-fill"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="recent-transaction">
          <h6>Recenet Transactsion</h6>
          <table>
            <thead>
              <tr>
                <th>Student Name</th>
                <th>Course</th>
                <th>Date</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Scrum Master</td>
                <td>Dec 4, 2019 21:42</td>
                <td>Dec 7, 2019 23:26</td>
                <td>Corrected item alignment</td>
              </tr>
              <tr>
                <td>Scrum Master</td>
                <td>Dec 4, 2019 21:42</td>
                <td>Feb 2, 2019 19:28</td>
                <td>Embedded analytic scripts</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

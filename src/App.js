import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";

import CommonLayout from "./components/CommonLayout/CommonLayout.js";
import Dashboard from "./components/Dashboard/Dashboard.js";
import Login from "./components/Login/Login.jsx";

// School Components
import SchoolAllChapter from "./components/School/SchoolChapters/SchoolAllChapter/SchoolAllChapter.jsx";
import SchoolChapter from "./components/School/SchoolChapters/SchoolChapter/SchoolChapter.jsx";
import SchoolAllClass from "./components/School/SchoolClass/SchoolAllClass/SchoolAllClasses.jsx";
import SchoolEditClass from "./components/School/SchoolClass/SchoolEditClass/SchoolEditClass.jsx";
import SchoolAddClass from "./components/School/SchoolClass/SchoolNewClass/SchoolNewClass.jsx";
import SchoolAddSubject from "./components/School/SchoolSubjects/SchoolAddSubject/AddSubject.jsx";
import SchoolAllSubject from "./components/School/SchoolSubjects/SchoolAllSubject/AllSubject.jsx";

// University Components
import UniversityAllCourse from "./components/University/UniversityCourses/UniversityAllCourses/UniversityAllCourses.jsx";
import UniversityCourse from "./components/University/UniversityCourses/UniversityCourse/UniversityCourse.jsx";
import UniversitySemesterCreate from "./components/University/UniversitySemesters/UniversitySemesterCreate/UniversitySemesterCreate.jsx";
import UniversitySemesterTable from "./components/University/UniversitySemesters/UniversitySemesterTable/UniversitySemesterTable.jsx";
import UniversitySubjectCreate from "./components/University/UniversitySubject/UniversitySubjectCreate/UniversitySubjectCreate.jsx";
import UniversitySubjectTable from "./components/University/UniversitySubject/UniversitySubjectTable/UniversitySubjectTable.jsx";

//CE Components
import CEAddCompetitiveSubject from "./components/CompetitiveExam/CompetitiveSubject/AddCompetitiveSubject/AddCompetitiveSubject.jsx";
import CEAllCompetitiveSubject from "./components/CompetitiveExam/CompetitiveSubject/AllCompetitiveSubject/AllCompetitiveSubject.jsx";
import CEAddTopics from "./components/CompetitiveExam/CompetitiveTopics/AddTopic/AddTopics.jsx";
import CEAllTopics from "./components/CompetitiveExam/CompetitiveTopics/AllTopics/AllTopics.jsx";
import CEAddExamCategory from "./components/CompetitiveExam/ExamCategory/AddExamCategory/AddExamCategory.jsx";
import CEAllExamCategory from "./components/CompetitiveExam/ExamCategory/AllExamCaterory/AllExamCategory.jsx";

import TeacherAllDetails from "./components/Student/HomeTutor/TuitionManagementSystem/TeacherAllDetails/TeacherAllDetails.jsx";
import TMSshare from "./components/Student/HomeTutor/TuitionManagementSystem/TMSshare/TMSshare.jsx";

//Settings
import Path4uSettings from "./components/Settings/Settings.js";

// Exam Notes
import CourseManagement from "./components/Student/ExamNotes/CourseManagement/CourseManagement.jsx";
import StudentAllNotes from "./components/Student/ExamNotes/StudentAllNotes/StudentAllNotes.jsx";
// _Upload Notes
import UploadAddCollegeNotes from "./components/Student/ExamNotes/UploadNotes/UploadAddCollegeNotes.jsx";
import UploadAllCollegeNotes from "./components/Student/ExamNotes/UploadNotes/UploadAllCollegeNotes.jsx";

import UploadAddCompetitiveNotes from "./components/Student/ExamNotes/UploadNotes/UploadAddCompetitiveNotes.jsx";
import UploadCompetitiveNotes from "./components/Student/ExamNotes/UploadNotes/UploadAllCompetitiveNotes.jsx";

import UploadAllSchoolNotes from "./components/Student/ExamNotes/UploadNotes/AllSchoolNotes.jsx";
import UploadAllNotes from "./components/Student/ExamNotes/UploadNotes/UploadAllNotes.jsx";
import UploadSchoolNotes from "./components/Student/ExamNotes/UploadNotes/UploadSchoolNotes.jsx";

import HomeTutorCourseManagement from "./components/Student/HomeTutor/CourseManagement/HomeTutorCourseManagement.jsx";
import HomeTutorTuitionManagementSystem from "./components/Student/HomeTutor/TuitionManagementSystem/TuitionManagementSystem.jsx";
import HomeWorkAssistanceEnquiry from "./components/Student/HomeWorkAssistance/HomeWorkAssistanceEnquiry/HomeWorkAssistanceEnquiry.jsx";

import UniversityAdd from "./components/University/UniversityCreate/UniversityAdd/UniversityAdd.jsx";
import UniversityAllList from "./components/University/UniversityCreate/UniversityAll/UniversityAllList.jsx";

//Subjective Exam
import SubjectiveExam from "./components/Student/SubjectiveExam/SubjectiveExam.jsx";

// School SE
import SApprovalCE from "./components/Student/SubjectiveExam/SchoolSE/ApprovalCE/ApprovalCE.jsx";
import SApprovalSMTE from "./components/Student/SubjectiveExam/SchoolSE/ApprovalSMTE/ApprovalSMTE.jsx";
import SApprovalUE from "./components/Student/SubjectiveExam/SchoolSE/ApprovalUE/ApprovalUE.jsx";
import SchoolSE from "./components/Student/SubjectiveExam/SchoolSE/SchoolSE.jsx";

// University SE
import UApprovalCE from "./components/Student/SubjectiveExam/UniversitySE/ApprovalCE/ApprovalCE.jsx";
import UApprovalSMTE from "./components/Student/SubjectiveExam/UniversitySE/ApprovalSMTE/ApprovalSMTE.jsx";
import UApprovalUE from "./components/Student/SubjectiveExam/UniversitySE/ApprovalUE/ApprovalUE.jsx";
import UniversitySE from "./components/Student/SubjectiveExam/UniversitySE/UniversitySE.jsx";

//Compititive Exam _Subjective Exam
import CApprovalCE from "./components/Student/SubjectiveExam/CompExamSE/ApprovalCE/ApprovalCE.jsx";
import CApprovalSMTE from "./components/Student/SubjectiveExam/CompExamSE/ApprovalSMTE/ApprovalSMTE.jsx";
import CApprovalUE from "./components/Student/SubjectiveExam/CompExamSE/ApprovalUE/ApprovalUE.jsx";
import CompExamSE from "./components/Student/SubjectiveExam/CompExamSE/CompExamSE.jsx";

// State And City
// state
import State from "./components/Student/StateAndCity/State/AddState/State.jsx";
import AllStates from "./components/Student/StateAndCity/State/AllStates/AllStates.jsx";
import EditState from "./components/Student/StateAndCity/State/EditState/EditState.jsx";
// city
import City from "./components/Student/StateAndCity/City/AddCity/City.jsx";
import AllCity from "./components/Student/StateAndCity/City/AllCity/AllCity.jsx";
import EditCity from "./components/Student/StateAndCity/City/EditCity/EditCity.jsx";

import Logout from "./components/Logout/Logout.jsx";
import Assignment from "./components/Student/Assignment/Assignment.jsx";
import AllAssignmentSchool from "./components/Student/Assignment/AssignmentSchool/AllAssignmentSchool/AllAssignmentSchool.jsx";
import AssignmentSchool from "./components/Student/Assignment/AssignmentSchool/AssignmentSchool.jsx";
import AllAssignmentUniversity from "./components/Student/Assignment/AssignmentUniversity/AllAssignmentUniversity/AllAssignmentUniversity.jsx";
import AssignmentUniversity from "./components/Student/Assignment/AssignmentUniversity/AssignmentUniversity.jsx";

//Student Scholarship
import AllCentalGovScholarship from "./components/Student/StudentScholarship/CentralGovScholarship/AllCentralGovScholarship/AllCentralGovScholarship.jsx";
import CentalGovScholarship from "./components/Student/StudentScholarship/CentralGovScholarship/CentralGovScholarship.jsx";
import AllNGOPrivateGovScholarship from "./components/Student/StudentScholarship/NGOPrivateScholarship/AllNGOPrivateScholarship/AllNGOPrivateScholarship.jsx";
import NGOPrivateGovScholarship from "./components/Student/StudentScholarship/NGOPrivateScholarship/NGOPrivateScholarship.jsx";
import AllStateGovScholarship from "./components/Student/StudentScholarship/StateGovScholarship/AllStateGovScholarship/AllStateGovScholarship.jsx";
import StateGovScholarship from "./components/Student/StudentScholarship/StateGovScholarship/StateGovScholarship.jsx";
import StudentScholarship from "./components/Student/StudentScholarship/StudentScholarship.jsx";

// scholarship edit form
import EditCentralGovScholarship from "./components/Student/StudentScholarship/CentralGovScholarship/EditCentralGovScholarship/EditCentralGovScholarship.jsx";
import EditNGOPrivateScholarship from "./components/Student/StudentScholarship/NGOPrivateScholarship/EditNGOPrivateScholarship/EditNGOPrivateScholarship.jsx";
import EditStateGovScholarship from "./components/Student/StudentScholarship/StateGovScholarship/EditStateGovScholarship/EditStateGovScholarship.jsx";

// Choose Career
import BlogAdd from "./components/Student/ChooseCareer/Blog/BlogAdd/BlogAdd.jsx";
import BlogAll from "./components/Student/ChooseCareer/Blog/BlogAll/BlogAll.jsx";
import CareerAdd from "./components/Student/ChooseCareer/Career/CareerAdd/CareerAdd.jsx";
import CareerAll from "./components/Student/ChooseCareer/Career/CareerAll/CareerAll.jsx";
import ChooseCareer from "./components/Student/ChooseCareer/ChooseCareer.jsx";

//Notifications
import PushNotification from "./components/PushNotification/AddNotification/PushNotification.jsx";
import AllPushNotification from "./components/PushNotification/AllPushNotification/AllPushNotification.jsx";
import EditPushNotification from "./components/PushNotification/EditPushNotification/EditPushNotification.jsx";

//Gov Approved Council
import GovApprovedCouncil from "./components/Student/GovApprovedCouncil/AddGovApprovedCouncil/GovApprovedCouncil.jsx";
import AllGovApprovedCouncil from "./components/Student/GovApprovedCouncil/AllGovApprovedCouncil/AllGovApprovedCouncil.jsx";
import EditGovApprovedCouncil from "./components/Student/GovApprovedCouncil/EditGovApprovedCouncil/EditGovApprovedCouncil.jsx";

// Profiles
import StudentsProfileDetails from "./components/Student/StrudentsProfile/StrudentsProfileDetails/StrudentsProfileDetails.jsx";
import StudentsProfile from "./components/Student/StrudentsProfile/StudentsProfile.jsx";
import TeachersProfileDetails from "./components/Teacher/TeachersProfile/TeacherProfileDetails/TeacherProfileDetails.jsx";
import TeachersProfile from "./components/Teacher/TeachersProfile/TeachersProfile.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path={"login"} element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route element={<CommonLayout />}>
            <Route path="/" element={<h4>Path4U</h4>} />
            <Route path={"dashboard"} element={<Dashboard />} />

            {/* school routes  */}
            <Route path={"school-add-class"} element={<SchoolAddClass />} />
            <Route
              path={"school-edit-class/:id"}
              element={<SchoolEditClass />}
            />
            <Route path={"school-all-class"} element={<SchoolAllClass />} />
            <Route path={"school-add-subject"} element={<SchoolAddSubject />} />
            <Route path={"school-all-subject"} element={<SchoolAllSubject />} />
            <Route path={"school-add-chapter"} element={<SchoolChapter />} />
            <Route path={"school-all-chapter"} element={<SchoolAllChapter />} />
            {/* college routes  */}
            <Route path={"college-add-course"} element={<UniversityCourse />} />
            <Route path={"university-add"} element={<UniversityAdd />} />
            <Route path={"university-all"} element={<UniversityAllList />} />

            <Route
              path={"college-all-courses"}
              element={<UniversityAllCourse />}
            />
            <Route
              path={"college-subject"}
              element={<UniversitySubjectCreate />}
            />
            <Route
              path={"college-all-subject"}
              element={<UniversitySubjectTable />}
            />
            <Route
              path={"college-semester"}
              element={<UniversitySemesterCreate />}
            />
            <Route
              path={"college-semester-table"}
              element={<UniversitySemesterTable />}
            />
            {/* competitive exam routes  */}
            <Route
              path={"ce-exam-add-category"}
              element={<CEAddExamCategory />}
            />
            <Route
              path={"ce-exam-all-category"}
              element={<CEAllExamCategory />}
            />
            <Route
              path={"ce-add-subject"}
              element={<CEAddCompetitiveSubject />}
            />
            <Route
              path={"ce-all-subject"}
              element={<CEAllCompetitiveSubject />}
            />
            <Route path={"ce-add-topic"} element={<CEAddTopics />} />
            <Route path={"ce-all-topic"} element={<CEAllTopics />} />

            {/* Exam Notes -> All Notes  */}
            <Route path={"exam-all-notes"} element={<StudentAllNotes />} />
            <Route
              path={"exam-course-management"}
              element={<CourseManagement />}
            />
            <Route
              path={"exam-upload-notes"}
              element={<UniversitySemesterTable />}
            />

            <Route path={"settings"} element={<Path4uSettings />} />

            {/* Home Tutor  */}
            <Route
              path={"home-tutor/course-management"}
              element={<HomeTutorCourseManagement />}
            />
            <Route
              path={"home-tutor/tuition-management-system"}
              element={<HomeTutorTuitionManagementSystem />}
            />
            <Route
              path={"home-tutor/tuition-management-system/tms-share"}
              element={<TMSshare />}
            />
            <Route
              path={
                "home-tutor/tuition-management-system/home-tutor/tuition-management-system/tms-share/student-all-details"
              }
              element={<TMSshare />}
            />
            <Route
              path={
                "home-tutor/tuition-management-system/tms-share/teacher-all-details"
              }
              element={<TeacherAllDetails />}
            />

            {/* upload Notes  */}
            <Route
              path={"upload-notes/upload-add-university-notes"}
              element={<UploadAddCollegeNotes />}
            />
            <Route
              path={"upload-notes/upload-all-university-notes"}
              element={<UploadAllCollegeNotes />}
            />
            <Route
              path={"upload-notes/upload-add-competitive-notes"}
              element={<UploadAddCompetitiveNotes />}
            />
            <Route
              path={"upload-notes/upload-all-competitive-notes"}
              element={<UploadCompetitiveNotes />}
            />
            <Route
              path={"upload-notes/upload-competitive-notes"}
              element={<UploadAddCompetitiveNotes />}
            />
            <Route
              path={"upload-notes/upload-all-notes"}
              element={<UploadAllNotes />}
            />
            <Route
              path={"upload-notes/upload-school-notes"}
              element={<UploadSchoolNotes />}
            />
            <Route
              path={"upload-notes/all-school-notes"}
              element={<UploadAllSchoolNotes />}
            />
            {/* ////  */}

            {/* Home Work Assistance  */}
            <Route
              path={"home-work-assistance/course-management"}
              element={<CourseManagement />}
            />
            <Route
              path={"home-work-assistance/enquiry"}
              element={<HomeWorkAssistanceEnquiry />}
            />

            <Route path={"student-profile"} element={<StudentsProfile />} />
            <Route path={"teacher-profile"} element={<TeachersProfile />} />

            {/* Subjective Exam  */}
            <Route
              path={"student-subjective-exam"}
              element={<SubjectiveExam />}
            />

            {/* School SE  Routes */}
            <Route
              path={"student-subjective-exam/school-se"}
              element={<SchoolSE />}
            />
            <Route
              path={"student-subjective-exam/school-se/approval-uploaded-exam"}
              element={<SApprovalUE />}
            />
            <Route
              path={"student-subjective-exam/school-se/approval-submitted-exam"}
              element={<SApprovalSMTE />}
            />
            <Route
              path={"student-subjective-exam/school-se/approval-checked-exam"}
              element={<SApprovalCE />}
            />

            {/* University SE  Routes */}
            <Route
              path={"student-subjective-exam/university-se"}
              element={<UniversitySE />}
            />
            <Route
              path={
                "student-subjective-exam/university-se/approval-uploaded-exam"
              }
              element={<UApprovalUE />}
            />
            <Route
              path={
                "student-subjective-exam/university-se/approval-submitted-exam"
              }
              element={<UApprovalSMTE />}
            />
            <Route
              path={
                "student-subjective-exam/university-se/approval-checked-exam"
              }
              element={<UApprovalCE />}
            />

            {/* CompetitiveExam SE  */}
            <Route
              path={"student-subjective-exam/compititive-exam-se"}
              element={<CompExamSE />}
            />
            <Route
              path={
                "student-subjective-exam/compititive-subjective-exam/approval-uploaded-exam"
              }
              element={<CApprovalUE />}
            />
            <Route
              path={
                "student-subjective-exam/compititive-subjective-exam/approval-submitted-exam"
              }
              element={<CApprovalSMTE />}
            />
            <Route
              path={
                "student-subjective-exam/compititive-subjective-exam/approval-checked-exam"
              }
              element={<CApprovalCE />}
            />
            {/* States  */}
            <Route path={"create-state"} element={<State />} />
            <Route path={"edit-state/:id"} element={<EditState />} />
            <Route path={"all-states"} element={<AllStates />} />
            {/* Cities */}
            <Route path={"create-city"} element={<City />} />
            <Route path={"all-cities"} element={<AllCity />} />
            <Route path={"edit-city"} element={<EditCity />} />

            {/* student scholarship */}
            <Route
              path={"student-scholarship"}
              element={<StudentScholarship />}
            />
            <Route
              path={"student-scholarship/central-government"}
              element={<CentalGovScholarship />}
            />
            <Route
              path={"student-scholarship/state-government"}
              element={<StateGovScholarship />}
            />
            <Route
              path={"student-scholarship/private-scholarship"}
              element={<NGOPrivateGovScholarship />}
            />
            <Route
              path={"student-scholarship/all-central-government"}
              element={<AllCentalGovScholarship />}
            />
            <Route
              path={"student-scholarship/all-state-government"}
              element={<AllStateGovScholarship />}
            />
            <Route
              path={"student-scholarship/all-private-scholarship"}
              element={<AllNGOPrivateGovScholarship />}
            />
            {/* edit scholarship forms  */}
            <Route
              path={"student-scholarship/edit-central-gov-scholarship"}
              element={<EditCentralGovScholarship />}
            />
            <Route
              path={"student-scholarship/edit-state-gov-scholarship"}
              element={<EditStateGovScholarship />}
            />
            <Route
              path={"student-scholarship/edit-private-scholarship"}
              element={<EditNGOPrivateScholarship />}
            />
            {/* Student Assignment  */}
            <Route path={"student-assignment"} element={<Assignment />} />
            <Route
              path={"/student-assignment/school"}
              element={<AssignmentSchool />}
            />
            <Route
              path={"/student-assignment/university"}
              element={<AssignmentUniversity />}
            />
            {/* ALL Assignments */}
            <Route
              path={"student-assignment/all-school"}
              element={<AllAssignmentSchool />}
            />
            <Route
              path={"student-assignment/all-university"}
              element={<AllAssignmentUniversity />}
            />

            {/* Choose Career*/}
            <Route path="/management" element={<ChooseCareer />} />
            <Route path="/add-career" element={<CareerAdd />} />
            <Route path="/all-career" element={<CareerAll />} />
            <Route path="/add-blog" element={<BlogAdd />} />
            <Route path="/all-blog" element={<BlogAll />} />

            {/* Push Notification */}
            <Route path={"push-notification"} element={<PushNotification />} />
            <Route
              path={"all-push-notification"}
              element={<AllPushNotification />}
            />
            <Route
              path={"edit-push-notification"}
              element={<EditPushNotification />}
            />
            {/* govt. approve council  */}
            <Route
              path={"government-approved-council"}
              element={<GovApprovedCouncil />}
            />
            <Route
              path={"all-government-approved-council"}
              element={<AllGovApprovedCouncil />}
            />
            <Route
              path={"edit-government-approved-council"}
              element={<EditGovApprovedCouncil />}
            />

            {/* student profile  */}
            <Route path={"student-profile"} element={<StudentsProfile />} />
            <Route
              path={"student-profile/student-profile-details"}
              element={<StudentsProfileDetails />}
            />
            <Route path={"teacher-profile"} element={<TeachersProfile />} />
            <Route
              path={"teacher-profile/teacher-profile-details"}
              element={<TeachersProfileDetails />}
            />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

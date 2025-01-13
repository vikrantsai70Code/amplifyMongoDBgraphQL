import React, { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import {
  listStudents,
  listFAFSAApplications,
  listCostAndAids,
  listDisbursements,
  listSchoolEnrollments,
} from "./graphql/queries";
import "./dashboard.css"; // Import the CSS file


const client = generateClient();

const Dashboard = () => {
  const [students, setStudents] = useState([]);
  const [fafsaApplications, setFafsaApplications] = useState([]);
  const [costAndAid, setCostAndAid] = useState([]);
  const [disbursements, setDisbursements] = useState([]);
  const [schoolEnrollments, setSchoolEnrollments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedSection, setExpandedSection] = useState("students");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const studentsData = await client.graphql({ query: listStudents });
        setStudents(studentsData.data.listStudents.items);

        const fafsaData = await client.graphql({ query: listFAFSAApplications });
        setFafsaApplications(fafsaData.data.listFAFSAApplications.items);

        const costAidData = await client.graphql({ query: listCostAndAids });
        setCostAndAid(costAidData.data.listCostAndAids.items);

        const disbursementsData = await client.graphql({ query: listDisbursements });
        setDisbursements(disbursementsData.data.listDisbursements.items);

        const enrollmentsData = await client.graphql({ query: listSchoolEnrollments });
        setSchoolEnrollments(enrollmentsData.data.listSchoolEnrollments.items);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <div className="dashboard-container">
      {/* Sidebar Menu */}
      <div className="sidebar">
        {[
          { title: "Students", section: "students" },
          { title: "Applications", section: "fafsa" },
          { title: "Cost & Aid", section: "costAid" },
          { title: "Disbursements", section: "disbursements" },
          { title: "Enrollments", section: "enrollments" },
        ].map((item) => (
          <div
            key={item.section}
            className={`menu-item ${expandedSection === item.section ? "active" : ""}`}
            onClick={() => setExpandedSection(item.section)}
          >
            {item.title}
          </div>
        ))}
      </div>

      {/* Main Content Section */}
      <div className="main-content">
        {expandedSection === "students" && <DataTable title="Students" data={students} columns={studentColumns} />}
        {expandedSection === "fafsa" && <DataTable title="FAFSA Applications" data={fafsaApplications} columns={fafsaColumns} />}
        {expandedSection === "costAid" && <DataTable title="Cost & Aid" data={costAndAid} columns={costAidColumns} />}
        {expandedSection === "disbursements" && (
          <DataTable title="Disbursements" data={disbursements} columns={disbursementColumns} />
        )}
        {expandedSection === "enrollments" && (
          <DataTable title="School Enrollments" data={schoolEnrollments} columns={enrollmentColumns} />
        )}
      </div>
    </div>
  );
};

const DataTable = ({ title, data, columns }) => (
  <div className="table-section">
    <h2>{title}</h2>
    <div className="responsive-table-wrapper">
      <table className="dashboard-table">
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.key}>{col.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              {columns.map((col) => (
                <td key={col.key}>{item[col.key] || "N/A"}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

// Columns for tables
const studentColumns = [
  { label: "Student ID", key: "studentId" },
  { label: "Name", key: "firstName" },
  { label: "DOB", key: "dob" },
  { label: "Dependency Status", key: "dependencyStatus" },
];

const fafsaColumns = [
  { label: "FAFSA ID", key: "fafsaId" },
  { label: "Application Date", key: "applicationDate" },
  { label: "Student ID", key: "studentId" },
  { label: "School Codes", key: "schoolCodes" },
];

const costAidColumns = [
  { label: "Cost Aid ID", key: "costAidId" },
  { label: "Cost of Attendance", key: "costOfAttendance" },
  { label: "Aid Package", key: "aidPackageDetails" },
];

const disbursementColumns = [
  { label: "Disbursement ID", key: "disbursementId" },
  { label: "Payment Schedule", key: "paymentSchedule" },
  { label: "Banking Details", key: "bankingDetails" },
];

const enrollmentColumns = [
  { label: "Enrollment ID", key: "enrollmentId" },
  { label: "FAFSA ID", key: "fafsaId" },
  { label: "Confirmation Status", key: "schoolConfirmationStatus" },
];

export default Dashboard;

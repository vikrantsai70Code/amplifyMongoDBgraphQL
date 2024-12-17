import React, { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import {
  listStudents,
  listFAFSAApplications,
  listCostAndAids,
  listDisbursements,
  listSchoolEnrollments,
} from "./graphql/queries";

const client = generateClient();

const Dashboard = () => {
  const [students, setStudents] = useState([]);
  const [fafsaApplications, setFafsaApplications] = useState([]);
  const [costAndAid, setCostAndAid] = useState([]);
  const [disbursements, setDisbursements] = useState([]);
  const [schoolEnrollments, setSchoolEnrollments] = useState([]);
  const [loading, setLoading] = useState(true);

  const [expandedSection, setExpandedSection] = useState(null);

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

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  if (loading) return <div style={styles.loading}>Loading...</div>;

  return (
    <div style={styles.container}>
      {/* Page Header */}
      <div style={styles.pageHeader}>
        <h1>Financial Aid Dashboard</h1>
      </div>

      {/* Tiles for Expand/Collapse */}
      <div style={styles.tilesContainer}>
        {[
         
          { title: "Cost & Aid", section: "costAid", count: costAndAid.length },
          { title: "Disbursements", section: "disbursements", count: disbursements.length },
          { title: "School Enrollments", section: "enrollments", count: schoolEnrollments.length },
          { title: "Students", section: "students", count: students.length },
          { title: "Applications", section: "fafsa", count: fafsaApplications.length },
        ].map((tile) => (
          <div
            key={tile.section}
            style={styles.tile}
            onClick={() => toggleSection(tile.section)}
          >
            <h3>{tile.title}</h3>
            <p style={{ fontSize: "1.2rem", fontWeight: "bold" }}>Total: {tile.count}</p>
          </div>
        ))}
      </div>

      {/* Expandable Sections */}
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
  );
};

const DataTable = ({ title, data, columns }) => (
  <div style={styles.tableSection}>
    <h2>{title}</h2>
    <table style={styles.table}>
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col.key} style={styles.tableHeader}>
              {col.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index} style={styles.tableRow}>
            {columns.map((col) => (
              <td key={col.key} style={styles.tableCell}>
                {item[col.key] || "N/A"}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
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

// Styles
const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f9f9f9",
    minHeight: "100vh",
  },
  pageHeader: {
    textAlign: "center",
    marginBottom: "20px",
    paddingTop: "40px",
  },
  tilesContainer: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    gap: "15px",
    marginBottom: "20px",
  },
  tile: {
    flex: "1 1 calc(30% - 10px)",
    backgroundColor: "#e3f2fd",
    color: "#333",
    textAlign: "center",
    borderRadius: "8px",
    padding: "15px",
    cursor: "pointer",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    transition: "transform 0.2s",
  },
  tileHovered: {
    transform: "scale(1.05)",
  },
  tableSection: {
    marginTop: "30px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    padding: "20px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    textAlign: "center",
  },
  tableHeader: {
    backgroundColor: "#4db6ac",
    color: "#fff",
    padding: "10px",
  },
  tableRow: {
    borderBottom: "1px solid #ddd",
  },
  tableCell: {
    padding: "10px",
  },
  loading: {
    textAlign: "center",
    fontSize: "1.5rem",
    color: "#333",
    marginTop: "50px",
  },
};

export default Dashboard;

import React from "react";

const TopBar = () => {
    console.log("React version:", React.version); // Log React version

  return (
    <div style={styles.topBar}>
      <h1 style={styles.title}>Amplify POC</h1>
    </div>
  );
};

const styles = {
  topBar: {
    width: "100%",
    backgroundColor: "#4a90e2",
    color: "white",
    padding: "10px 20px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    margin: 0,
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
};

export default TopBar;

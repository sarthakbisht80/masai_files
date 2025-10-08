import React, { useState, useEffect } from "react";

// ✅ Custom Hook
function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    // Cleanup when component unmounts
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}

// ✅ Main Component
const ResponsiveTracker = () => {
  const width = useWindowWidth();
  const [theme, setTheme] = useState("light");
  const [isResizing, setIsResizing] = useState(false);

  // Detect active resizing
  useEffect(() => {
    let resizeTimer;
    const handleResize = () => {
      setIsResizing(true);
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => setIsResizing(false), 1000);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Determine view type
  const viewType =
    width < 768
      ? "Mobile View"
      : width < 1024
      ? "Tablet View"
      : "Desktop View";

  // Toggle theme
  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  // Style based on theme
  const styles = {
    container: {
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme === "light" ? "#f9fafb" : "#1f2937",
      color: theme === "light" ? "#111827" : "#f9fafb",
      transition: "all 0.3s ease",
      fontFamily: "sans-serif",
      textAlign: "center",
      padding: "20px",
    },
    button: {
      marginTop: "20px",
      padding: "10px 20px",
      border: "none",
      borderRadius: "8px",
      backgroundColor: theme === "light" ? "#111827" : "#f9fafb",
      color: theme === "light" ? "#f9fafb" : "#111827",
      cursor: "pointer",
      fontWeight: "bold",
    },
    resizeMsg: {
      color: "#ef4444",
      marginTop: "10px",
      fontStyle: "italic",
    },
  };

  return (
    <div style={styles.container}>
      <h1> Responsive Tracker</h1>
      <h2>Window Width: {width}px</h2>
      <h3>{viewType}</h3>
      {isResizing && <p style={styles.resizeMsg}>Resizing...</p>}
      <button style={styles.button} onClick={toggleTheme}>
        Toggle Theme ({theme === "light" ? "Dark" : "Light"})
      </button>
    </div>
  );
};

export default ResponsiveTracker;

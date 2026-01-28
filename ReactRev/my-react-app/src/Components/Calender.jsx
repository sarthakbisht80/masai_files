import React, { useState } from "react";

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const daysInMonth = new Date(2026, 1, 0).getDate(); // current month days
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();

  const handleClick = (day) => {
    const date = new Date(year, month, day);
    setSelectedDate(date.toDateString());
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Calendar</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          gap: "10px",
          maxWidth: "300px",
        }}
      >
        {[...Array(daysInMonth)].map((_, i) => (
          <div
            key={i}
            onClick={() => handleClick(i + 1)}
            style={{
              padding: "10px",
              textAlign: "center",
              border: "1px solid #333",
              cursor: "pointer",
              borderRadius: "6px",
            }}
          >
            {i + 1}
          </div>
        ))}
      </div>

      {selectedDate && (
        <h3 style={{ marginTop: "20px", backgroundColor:'green' }}>
          Selected Date: {selectedDate}
        </h3>
      )}
    </div>
  );
};

export default Calendar;

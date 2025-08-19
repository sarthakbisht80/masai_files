// src/components/Message.jsx
import React, { useMemo } from "react";
import "./Message.css";

const formatTimestamp = (ts) => {
  const d = ts instanceof Date ? ts : new Date(ts);
  const t = d.getTime();
  if (Number.isNaN(t)) return ""; // fallback if something unexpected is stored

  const mins = Math.floor((Date.now() - t) / 60000);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins} min${mins === 1 ? "" : "s"} ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs} hr${hrs === 1 ? "" : "s"} ago`;
  return d.toLocaleString();
};

const Message = React.memo(({ message, sender }) => {
  const formattedTime = useMemo(
    () => formatTimestamp(message.timestamp),
    [message.timestamp]
  );

  return (
    <div className="message">
      <strong>{sender.username}:</strong> {message.content}
      <span className="time"> ({formattedTime})</span>
    </div>
  );
});

export default Message;

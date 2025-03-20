import React from 'react';

export const Footer = () => {
  return (
    <footer 
      className="text-light py-3" 
      style={{
        backgroundColor: "#121212",
        borderTop: "2px solid #ffc107",
        textAlign: "center",
        padding: "15px",
        fontSize: "16px",
        boxShadow: "0px -4px 10px rgba(255, 193, 7, 0.2)"
      }}
    >
      <p style={{ margin: 0, color: "#bbb" }}>
        © {new Date().getFullYear()} MyTodoList.com | All Rights Reserved
      </p>
    </footer>
  );
};

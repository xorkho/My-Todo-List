import React from "react";

export const Todos = ({ todos, onDelete }) => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-start text-white py-4" style={{ minHeight: "60vh" }}>
      <div className="bg-dark p-3 rounded shadow-lg text-center" style={{ width: "100%", maxWidth: "600px", marginTop: "20px" }}>
        
        {/* Heading */}
        <h3 className="text-warning mb-3" style={{ fontSize: "28px", fontWeight: "bold", letterSpacing: "1px", textTransform: "uppercase" }}>
          Your Tasks
        </h3>

        {/* No Todos Case */}
        {todos.length === 0 ? (
          <div className="d-flex flex-column align-items-center justify-content-center">
            <img 
              src="https://cdn-icons-png.flaticon.com/512/4076/4076478.png" 
              alt="No Todos" 
              className="animate-fade"
              style={{ width: "90px", opacity: "0.8" }} 
            />
            <p className="text-muted mt-2" style={{ fontSize: "17px" }}>Nothing here yet, add a new task!</p>
          </div>
        ) : (
          <ul className="list-group w-100">
            {todos.map((todo) => (
              <li key={todo.sno} 
                  className="list-group-item d-flex justify-content-between align-items-center bg-dark border-0 text-light shadow-sm rounded px-3 py-3 mb-2 todo-item"
                  style={{ 
                    borderLeft: "4px solid #ffc107",
                    transition: "all 0.3s ease-in-out"
                  }}>
                
                {/* Todo Text */}
                <div className="flex-grow-1 text-start">
                  <span style={{ fontSize: "18px", fontWeight: "bold", color: "#ffc107" }}>
                    {todo.title}
                  </span>
                  <p className="mb-0 text-light" style={{ fontSize: "14px", opacity: "0.8" }}>
                    {todo.desc}
                  </p>
                  <p className="mb-0 text-light" style={{ fontSize: "14px", opacity: "0.8" }}>
                    <strong>Priority:</strong> {todo.priority}
                  </p>
                  <p className="mb-0 text-light" style={{ fontSize: "14px", opacity: "0.8" }}>
                    <strong>Due Date:</strong> {todo.dueDate}
                  </p>
                </div>

                {/* Cross Icon for Delete */}
                <span 
                  className="cross-icon"
                  onClick={() => onDelete(todo)}
                  style={{ 
                    cursor: "pointer", 
                    fontSize: "22px", 
                    fontWeight: "bold", 
                    color: "#ff4d4d", 
                    transition: "0.3s"
                  }}>
                  ✖
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Custom CSS for Animations */}
      <style>
        {`
          .todo-item:hover {
            transform: scale(1.02);
            background-color: rgba(255, 193, 7, 0.1);
          }

          .cross-icon:hover {
            color: #ff0000;
            transform: scale(1.3);
          }

          .animate-fade {
            animation: fadeIn 1s ease-in-out;
          }

          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(-10px); }
            100% { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
};

import React from "react";

const Message = ({ children, variant = "danger" }) => {
  return (
    <div className={`alert text-center alert-${variant}`}>
      {children}
      
    </div>
  );
};

export default Message;

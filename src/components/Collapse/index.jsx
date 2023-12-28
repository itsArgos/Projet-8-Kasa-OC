import React from "react";
import "./collapse.scss";

export function Collapse() {
  const [collapsed, setCollapsed] = React.useState(true);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="collapse">
      <button onClick={toggleCollapse}>
        Toggle Collapse <i className="fa-solid fa-chevron-up"></i>
      </button>
      {collapsed ? null : (
        <div className="collapse-content">Contenu du collapse</div>
      )}
    </div>
  );
}

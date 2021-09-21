import { Button, Typography } from "antd";
import { PlusOutlined, HomeOutlined } from "@ant-design/icons";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const MenuBar = () => {
  const { pathname } = useLocation();
  const { Title } = Typography;

  return (
     <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        padding: "0px 10px",
        borderBottom: "1px solid #f1f1f1",
      }}
    >
      {pathname !== "/" ? (
        <Title level={2} style={{ margin: 0 }}>
          Nome da Sprint
        </Title>
      ) :  <Title level={2} style={{ margin: 0 }}>
      Lista de Sprints
    </Title>}
      <Button
        // style={{ position: "relative", top: "-3px" }}
        icon={
          pathname === "/" ? (
            <Link to="/CreateSprint">
              <PlusOutlined />
            </Link>
          ) : (
            <Link to="/">
              <HomeOutlined />
            </Link>
          )
        }
        type="primary"
      />
    </div>
 
  );
};

export default MenuBar;

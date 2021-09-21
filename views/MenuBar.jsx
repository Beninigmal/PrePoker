import { Button, Menu, Space, Typography } from "antd";
import { PlusOutlined, HomeOutlined } from "@ant-design/icons";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { getSprintById } from "../service/firebaseService";

const MenuBar = () => {
  const { pathname } = useLocation();
  const { Title } = Typography;

  return (
    // <Menu
    //   theme="light"
    //   mode="horizontal"
    //   style={{
    //
    //   }}
    // >
    <div
      style={{
        display: "flex",
        justifyContent: pathname !== "/" ? "space-between" : "flex-end",
        alignItems: "center",
        width: "100%",
        padding: "0px 10px",
        margin: "0px 0",
        borderBottom: "1px solid #f1f1f1",
      }}
    >
      {pathname !== "/" && (
        <Title level={2} style={{ margin: 0 }}>
          Nome da Sprint
        </Title>
      )}
      <Button
        style={{ position: "relative", top: "-3px" }}
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
    // </Menu>
  );
};

export default MenuBar;

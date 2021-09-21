import React from "react";
import { Card } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { deleteSprintById } from "../service/firebaseService";
import { Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";

const Sprint = ({ children, title, id, onDelete }) => {
  const { confirm } = Modal;

  const handleSprintDelete = () => {
    confirm({
      title: "Você tem certeza que deseja Excluir essa sprint?",
      icon: <ExclamationCircleOutlined />,
      content: `Clicando em sim a ${title} será excluído!`,
      okText: "Sim",
      okType: "danger",
      cancelText: "Não",
      onOk() {
        deleteSprintById(id).then(onDelete);
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  
  return (
    <>
      <Card
        title={title}
        bordered
        style={{
          width: 300,
          height: 250,
          marginTop: 18,
          borderRadius: 15,
        }}
        actions={[
          <Link to={`/consultingSprint/${id}`}>
            <SearchOutlined key="search" />
          </Link>,
          <Link to={`/editSprint/${id}`}>
            <EditOutlined key="edit" />
          </Link>,

          <DeleteOutlined key="delete" onClick={handleSprintDelete} />,
        ]}
      >
        <div style={{ height: 85 }}>{children}</div>
      </Card>
    </>
  );
};

export default Sprint;

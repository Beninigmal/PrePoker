import React, { useState } from "react";
import {
  Button,
  Card,
  notification,
  Tooltip,
  InputNumber,
  Form,
  Input,
} from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  SearchOutlined,
  CreditCardOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { createCard, deleteSprintById } from "../service/firebaseService";
import { Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";

const Sprint = ({ children, title, id, onDelete }) => {
  const [modal, setModal] = useState(false);
  const [componentSize, setComponentSize] = useState("default");

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  const { confirm } = Modal;

  const openNotificationWithIcon = (type, message) => {
    notification[type]({
      description: message,
      style: { borderRadius: "10px" },
    });
  };

  const handleSprintDelete = () => {
    confirm({
      title: "Você tem certeza que deseja Excluir essa sprint?",
      icon: <ExclamationCircleOutlined />,
      content: `Clicando em sim a ${title} será excluído!`,
      okText: "Sim",
      okType: "danger",
      cancelText: "Não",
      onOk() {
        deleteSprintById(id)
          .then(onDelete)
          .then(() => openNotificationWithIcon("success", "Sucesso!"));
      },
    });
  };

  const handleIncludeCard = (card) => {
    createCard(id, card).then(() => setModal(false));
  };

  return (
    <>
      <Card
        title={title}
        extra={
          <Button
            shape="circle"
            icon={<CreditCardOutlined />}
            onClick={() => setModal(true)}
          />
        }
        bordered
        style={{
          width: 300,
          height: 250,
          marginTop: 15,
          paddingBottom: 5,
          borderRadius: 10,
        }}
        actions={[
          <Link to={`/consultingSprint/${id}`}>
            <Tooltip title="Pesquisar" placement="bottom">
              <SearchOutlined key="search" />
            </Tooltip>
          </Link>,
          <Link to={`/editSprint/${id}`}>
            <Tooltip title="Editar" placement="bottom">
              <EditOutlined key="edit" />
            </Tooltip>
          </Link>,
          <Tooltip title="Excluir" placement="bottom">
            <DeleteOutlined key="delete" onClick={handleSprintDelete} />
          </Tooltip>,
        ]}
      >
        <div style={{ height: 85 }}>{children}</div>
      </Card>
      <Modal
        title="Criar Cartão"
        centered
        visible={modal}
        footer={[
          <Button form="myForm" key="submit" htmlType="submit">
            Salvar
          </Button>,
          <Button onClick={() => setModal(false)}>Cancelar</Button>,
        ]}
      >
        <Form
          id="myForm"
          labelCol={{
            span: 6,
          }}
          wrapperCol={{
            span: 30,
          }}
          layout="horizontal"
          initialValues={{
            size: componentSize,
          }}
          onValuesChange={onFormLayoutChange}
          size={componentSize}
          onFinish={handleIncludeCard}
        >
          <Form.Item
            label="N° Cartão: "
            name="cartao"
            rules={[
              {
                required: true,
                message: "Número do Cartão necessário!",
              },
            ]}
          >
            <InputNumber min={0} max={10} />
          </Form.Item>
          <Form.Item
            label="Descrição: "
            name="descricao"
            rules={[
              {
                required: true,
                message: "Descrição necessária!",
              },
            ]}
          >
            <Input.TextArea />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default Sprint;

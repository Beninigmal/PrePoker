import { Form, Input, Button, Card, Space } from "antd";
import React from "react";
import {
  createSprint
  
} from "../service/firebaseService";

const CreateSprint = ({ history }) => {
  const handleSprintFormFinish = (sprint) => {
    createSprint(sprint).then((resp) => history.push("/"));
      };

  return (
    <Space
      align="start"
      style={{
        display: "flex",
        justifyContent: "center",
        height: "90vh",
      }}
    >
      <Form
        name="basic"
        labelCol={{
          span: 5,
        }}
        wrapperCol={{
          span: 18,
        }}
        onFinish={handleSprintFormFinish}
      >
        <Card
          title="Criar uma Sprint"
          bordered
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "15px",
            width: "40vw",
            marginTop: "20px",
          }}
          actions={[
            <Button
              type="primary"
              htmlType="submit"
              block
              style={{ width: "38vw" }}
            >
              Cadastrar
            </Button>,
          ]}
        >
          <Form.Item
            label="Sprint"
            name="name"
            rules={[{ required: true, message: "Campo Obrigatório" }]}
          >
            <Input placeholder="Sprint XX" />
          </Form.Item>
          <Form.Item
            label="Dias"
            name="days"
            rules={[{ required: true, message: "Campo Obrigatório" }]}
          >
            <Input placeholder="Sprint XX" />
          </Form.Item>
          <Form.Item
            label="Devs"
            name="devs"
            rules={[{ required: true, message: "Campo Obrigatório" }]}
          >
            <Input placeholder="Sprint XX" />
          </Form.Item>
        </Card>
      </Form>
    </Space>
  );
};

export default CreateSprint;

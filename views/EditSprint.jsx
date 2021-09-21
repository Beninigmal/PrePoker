import { Button, Card, Input, Space, Form } from "antd";
import React, { useEffect } from "react";
import { useParams } from "react-router";
import { getSprintById, updateSprint } from "../service/firebaseService";

const EditSprint = ({ history }) => {
  const { id } = useParams();

  const [form] = Form.useForm();

  const handleEditSprint = (sprint) => {
    const spt = { id, ...sprint };
    updateSprint(spt)
      .then(() => history.push("/"))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getSprintById(id).then((resp) => {
      form.setFieldsValue(resp);
    });
  }, []);

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
        form={form}
        name="basic"
        labelCol={{
          span: 5,
        }}
        wrapperCol={{
          span: 18,
        }}
        onFinish={handleEditSprint}
      >
        <Card
          title="Alterar uma Sprint"
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
              Editar
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
            <Input placeholder="Dias de execução" />
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

export default EditSprint;

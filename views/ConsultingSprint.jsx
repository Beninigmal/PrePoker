import { Button, Card, Input, Space } from 'antd'
import Form from 'rc-field-form/es/Form'
import React from 'react'

const ConsultingSprint = () => {
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
    )
}

export default ConsultingSprint

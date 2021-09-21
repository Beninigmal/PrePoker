import { Button, Card, Input, Space, Form } from 'antd'

import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { getSprintById } from '../service/firebaseService'

const ConsultingSprint = ({history}) => {

    const {id} = useParams()
    const [form] = Form.useForm()

    useEffect(() => {
        getSprintById(id).then((resp) => form.setFieldsValue(resp))
    }, [id, form])
    
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
        >
          <Card
            title="Consultar uma Sprint"
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
                block
                style={{ width: "38vw" }}
                onClick={() => history.push("/")}
              >
                Voltar
              </Button>,
            ]}
          >
            <Form.Item
              label="Sprint"
              name="name"
              rules={[{ required: true, message: "Campo Obrigatório" }]}
            >
              <Input placeholder="Sprint XX" disabled/>
            </Form.Item>
            <Form.Item
              label="Dias"
              name="days"
              rules={[{ required: true, message: "Campo Obrigatório" }]}
            >
              <Input placeholder="Dias de execução" disabled/>
            </Form.Item>
            <Form.Item
              label="Devs"
              name="devs"
              rules={[{ required: true, message: "Campo Obrigatório" }]}
            >
              <Input placeholder="Sprint XX" disabled/>
            </Form.Item>
          </Card>
        </Form>
      </Space>
    )
}

export default ConsultingSprint

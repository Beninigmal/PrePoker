import React, { useState } from "react";
import { Table, Input, InputNumber, Popconfirm, Form, Typography } from "antd";
import { useEffect } from "react/cjs/react.development";
import { useParams } from "react-router";

const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === "number" ? <InputNumber /> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

const TableSprint = ({ cardList, id }) => {
  const [form] = Form.useForm();
  const [cards, setCards] = useState([]);
  const [editingKey, setEditingKey] = useState("");

  useEffect(() => {
    setCards(cardList);
  }, [cardList]);

  const isEditing = (record) => record.key === editingKey;

  const edit = (record) => {
    form.setFieldsValue({
      Cartão: "",
      Descrição: "",
      Pontos: "",
      Horas: "",
      ...record,
    });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey("");
  };

  const save = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...cards];
      const index = newData.findIndex((item) => key === item.key);

      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setCards(newData);
        setEditingKey("");
      } else {
        newData.push(row);
        setCards(newData);
        setEditingKey("");
      }
    } catch (errInfo) {
      console.log("Validate Failed:", errInfo);
    }
  };

  const columns = [
    {
      title: "Cartão",
      dataIndex: "cartao",
      key: id,
      width: "25%",
      editable: true,
    },
    {
      title: "Descrição",
      dataIndex: "descricao",
      key: id,
      width: "60%",
      editable: true,
    },
    {
      title: "Pontos",
      dataIndex: "points",
      key: id,
      width: "10%",
      editable: true,
    },
    {
      title: "Horas",
      dataIndex: "hours",
      key: id,
      width: "10%",
      editable: true,
    },
    {
      title: "Ações",
      dataIndex: "operation",
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <a
              href="javascript:;"
              onClick={() => save(record.key)}
              style={{
                marginRight: 8,
              }}
            >
              Save
            </a>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <Typography.Link
            disabled={editingKey !== ""}
            onClick={() => edit(record)}
          >
            Edit
          </Typography.Link>
        );
      },
    },
  ];
  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === "age" ? "number" : "text",
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });
  return (
    <Form form={form} component={false}>
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        dataSource={cards}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={{
          onChange: cancel,
        }}
      />
    </Form>
  );
};

export default TableSprint;

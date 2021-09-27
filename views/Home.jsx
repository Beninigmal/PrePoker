import { Space, Form, Input } from "antd";
import React from "react";
import Sprint from "../component/Sprint";
import { useSprints } from "../service/Hooks/useSprints";

const Home = () => {
  const [sprints, loading, setOutdated] = useSprints();

  console.log(sprints);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        alignItems: "center",
      }}
    >
      <Form
        name="basic"
        wrapperCol={{
          span: 44,
        }}
        style={{ marginTop: "15px", width: "78vw" }}
      >
        <Form.Item name="search">
          <Input type="text" placeholder="Digite para filtro" />
        </Form.Item>
      </Form>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          width: "85vw",
          marginBottom: "20px",
          border: "1px solid #f1f1f1",
          borderRadius: "15px",
          paddingBottom: "15px",
        }}
      >
        {sprints.map(({ devs, days, name, id }) => {
          return (
            <Sprint
              title={name}
              id={id}
              key={id}
              onDelete={() => setOutdated(true)}
            >
              <h2>Desenvolvedores: {devs}</h2>
              <h2>Dias: {days}</h2>
              {/* <h2>Cartões: {cards.lenght}</h2> */}
            </Sprint>
          );
        })}
      </div>
    </div>
  );
};

export default Home;

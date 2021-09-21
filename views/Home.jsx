import { Space } from "antd";
import React, { useEffect, useState } from "react";
import Sprint from "../component/Sprint";
import { useSprints } from "../service/Hooks/useSprints";

const Home = () => {
  const [sprints, loading, setOutdated] = useSprints();
  return (
    <Space
      direction="horizontal"
      wrap={true}
      align="start"
      style={{ display: "flex", justifyContent: "space-evenly" }}
    >
      {sprints.map(({ devs, days, name, id }) => {
        return (
          <Sprint title={name} id={id} onDelete={() => setOutdated(true)}>
            <h2>Desenvolvedores: {devs}</h2>
            <h2>Dias: {days}</h2>
          </Sprint>
        );
      })}
    </Space>
  );
};

export default Home;

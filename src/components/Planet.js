import React from "react";

const Planet = ({ planet }) => {
  let date = planet.created.slice(0, 10);
  return (
    <tr>
      <td>{planet.name}</td>
      <td>{planet.rotation_period}</td>
      <td>{planet.climate}</td>
      <td>{planet.gravity}</td>
      <td>{date}</td>
      <td>
        <a href={planet.url}>link</a>
      </td>
    </tr>
  );
};

export default Planet;

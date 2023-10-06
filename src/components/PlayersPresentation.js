import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Col, Card, CardTitle, Icon } from "react-materialize";
export default function PlayersPresentation({ players }) {
  const [player, setPlayer] = useState([]);
  return (
    <div className="container" style={{ marginTop: "5rem" }}>
      {players.map((player) => (
        <Col className="column" key={player.id} m={6} s={12}>
          <Card
            closeIcon={<Icon>close</Icon>}
            header={<CardTitle image={player.img} reveal waves="light" />}
            reveal={<p>{player.info}</p>}
            revealIcon={<Icon>more_vert</Icon>}
            title={player.name}
          >
            <p>
              <Link to={`detail/${player.id}`}>Detail</Link>
            </p>
          </Card>
        </Col>
      ))}
      {/* <div id="popup1" className="overlay">
        <div className="popup">
          <img src={player.img} />
          <h2>{player.name}</h2>
          <a className="close" href="#">
            &times;
          </a>
          <div className="content">{player.info}</div>
        </div>
      </div> */}
    </div>
  );
}

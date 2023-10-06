import { useParams } from "react-router-dom";
import { Players } from "../Shared/ListOfPlayer";
import ModalCase from "./ModalCase";
import { useState } from "react";
import { Icon } from "react-materialize";
const Detail = () => {
  const [isOpen, setIsOpen] = useState(false);

  const userName = useParams();
  const player = Players.find((obj) => {
    return obj.id == userName.id;
  });
  let cost = player.cost.toLocaleString();
  return (
    <div className="container" style={{ marginTop: "10rem" }}>
      <div className="product-card">
        <div className="badge">{player.name}</div>
        <div className="product-tumb">
          <img src={`../${player.img}`} alt="" />
          <a
            onClick={() => setIsOpen(true)}
            className="btn-floating halfway-fab waves-effect waves-light red"
          >
            <Icon>ondemand_video</Icon>
          </a>
        </div>
        <div className="product-details">
          <h4>{player.club}</h4>
          <div className="product-price">Market value: € {cost}</div>
          <p>{player.info}</p>
          <div className="product-bottom-details"></div>
        </div>
      </div>
      {isOpen && <ModalCase setIsOpen={setIsOpen} player={player} />}
    </div>
  );
};

export default Detail;

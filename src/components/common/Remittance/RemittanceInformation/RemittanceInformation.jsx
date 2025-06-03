import "./RemittanceInformation.css";
import userIcon from "../../../../assets/icons/user_icon.svg";
import buildIcon from "../../../../assets/icons/building_icon.svg";
import dataIcon from "../../../../assets/icons/data_icon.svg";
import imgOne from "../../../../assets/images/Rectangle 968.png";
import imgTwo from "../../../../assets/images/Rectangle 969.png";
import imgThree from "../../../../assets/images/Rectangle 970.png";
import { Link, useLocation } from "react-router";
import { getPathByClient } from "../../../../util/getModeClient";

export const RemittanceInformation = () => {
  const {pathname} = useLocation();
  return (
    <div className="remittanceInformationBox">
      <p className="topText">
        Envía dinero al instante. Donde quieras, como quieras.
      </p>

      <div className="informationBox" >
        <Link className="cardBox" to={`${getPathByClient(pathname)}/remesas/enviar-usuario`}>
          <img src={imgOne} alt="imagenOne" className="informationImage" />
          <div className="cardContentOne">
            <div className="iconCircle">
              <img src={userIcon} alt="userIcon" />
            </div>
            <div className="cardLabel">usuario</div>
          </div>
        </Link>

        <Link className="cardBox" to={`${getPathByClient(pathname)}/remesas/enviar-cuenta`}>
          <img src={imgTwo} alt="imagenTwo" className="informationImage" />
          <div className="cardContentTwo">
            <div className="iconCircle">
              <img src={buildIcon} alt="buildIcon" />
            </div>
            <div className="cardLabel">cuenta bancaria</div>
          </div>
        </Link>

        <Link className="cardBox" to={`${getPathByClient(pathname)}/remesas/filtrar`}>
          <img src={imgThree} alt="imagenThree" className="informationImage" />
          <div className="cardContentThree">
            <div className="iconCircle">
              <img src={dataIcon} alt="dataIcon" />
            </div>
            <div className="cardLabel">retirar en efectivo</div>
          </div>
        </Link>
      </div>

      <div className="backText">
        Con nuestra plataforma basada en la red Stellar, puedes hacer remesas
        internacionales en segundos, con comisiones mínimas, seguimiento en
        tiempo real y múltiples opciones de entrega: cuenta bancaria, retiro en
        efectivo o wallet digital. Apoyar a los tuyos nunca fue tan fácil.
      </div>
    </div>
  );
};

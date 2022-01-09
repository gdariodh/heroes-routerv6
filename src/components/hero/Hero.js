// leer parametros por url
import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import getHeroById from "../../selectors/getHeroById";

const Hero = () => {
  // hero/:heroId
  const { heroId } = useParams();

  // si heroId es diferente al anterior ejecuta getHeroById
  const hero = useMemo(() => getHeroById(heroId), [heroId]);

  // useMemo sirve para memorizar valores y ejecutar funciones si ese state es diferente o cambia
  // si se mantiene o es el mismo, la funcion condicionada con useMemo no se ejecuta.

  const navigate = useNavigate();

  const handleReturn = () => {
    //   redireccionar a la ruta anterior, es decir marvel o dc

    // incluso va hacia la card clickeada antes
    navigate(-1);
  };

  // si no hay heroe, retornamos un component de Redireccion
  if (!hero) {
    return <Navigate to="/" />;
  }

  const { id, superhero, publisher, alter_ego, first_appearance, characters } =
    hero;

  const imagePath = `/assets/${id}.jpg`;

  return (
    <>
      <div className="row mt-5 ">
        <div className="col-4">
          <img src={imagePath} alt={superhero} className="img-thumbnail animate__animated animate__fadeInLeft" />
        </div>

        <div className="col-8 animate__animated animate__fadeIn">
          <h3>{superhero}</h3>
          <ul className="list-group ">
            <li className="list-group-item">
              {" "}
              <b>Alter ego: </b> {alter_ego}{" "}
            </li>
            <li className="list-group-item">
              {" "}
              <b>Publisher: </b> {publisher}{" "}
            </li>

            <li className="list-group-item">
              {" "}
              <b>First_appearance: </b> {first_appearance}{" "}
            </li>
            <li className="list-group-item">
              {" "}
              <b>Alter ego: </b> {alter_ego}{" "}
            </li>
          </ul>

          <h5>characters</h5>

          <p>{characters}</p>

          <button className="btn btn-outline-info" onClick={handleReturn}>
            To Back
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;

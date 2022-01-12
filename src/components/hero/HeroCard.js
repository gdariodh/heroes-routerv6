import { Link } from "react-router-dom";


const HeroCard = (props) => {
  // {/* acceder a las img en assets */}
  const imagePath = `/assets/${props.id}.jpg`;

  return (
    <div className="animate__animated animate__fadeIn">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-4">
            <img
              src={imagePath}
              className="card-img"
              alt={props.superhero}
            />
          </div>

          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{props.superhero}</h5>
              <p className="card-text">{props.alter_ego}</p>

              {props.alter_ego !== props.characters && (
                <p className="text-muted"> {props.characters}</p>
              )}

              
                <small className="text-muted"> {props.first_appearance}</small>

                <Link to={`/hero/${props.id}`}>Mas info {props.superhero}</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;

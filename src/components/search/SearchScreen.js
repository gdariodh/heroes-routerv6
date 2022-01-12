import { useForm } from "../../hooks/useForm";
import getHeroByName from "../../selectors/getHeroByName";
import HeroCard from "../hero/HeroCard";

const SearchScreen = () => {
  const [values, handleInputChange, reset] = useForm({
    searchText: "",
  });

  const heroFileted = getHeroByName("algo");

  const handleSearch = (e) => {
    e.preventDefault();

    console.log(values);
  };

  return (
    <>
      <h2>Busquedas</h2>

      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Buscar</h4>

          <hr />

          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Buscar un hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={values.searchText}
              onChange={handleInputChange}
            />

            <button type="submit" className="btn btn-outline-primary mt-3">
              search...
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>

          <hr />

          {heroFileted.map((hero) => (
            <>
              <HeroCard key={hero.id} {...hero} />
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchScreen;

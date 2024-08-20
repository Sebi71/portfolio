import PropTypes from "prop-types";

import "./index.scss";

export default function Card({handleFilter}) {
  return (
    <div className="btn-container">
      <button className="btn-filter" onClick={() => handleFilter("Tous")}>
        Tous
      </button>
      <button className="btn-filter" onClick={() => handleFilter("cat1")}>
        HTML / CSS
      </button>
      <button className="btn-filter" onClick={() => handleFilter("cat2")}>
        JavaScript
      </button>
      <button className="btn-filter" onClick={() => handleFilter("cat3")}>
        React
      </button>
      <button className="btn-filter" onClick={() => handleFilter("cat4")}>
        Autres
      </button>
    </div>
  );
}

Card.propTypes = {
  handleFilter: PropTypes.func
}

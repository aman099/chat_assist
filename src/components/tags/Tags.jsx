import "./Tags.css";

import right_chevron from "../../assets/right-chevron.svg";
import filter_icon from "../../assets/filter.svg";

function Tags({ tags_data }) {
  return (
    <section id="popular-tags">
      <div className="popular-tags-container center">
        <div className="popular-title">
          <p>{tags_data.title}</p>
          {tags_data.tag_5 && (
            <div className="filters-icon-container">
              <img src={filter_icon} alt="Filter icon" />
              <p>Filter</p>
            </div>
          )}
        </div>
        <ul
          className={`popular-handbag-tags ${
            tags_data.tag_5 ? "flex-wrap" : ""
          }`}
        >
          <li
            className={`${
              tags_data.tag_5 && tags_data.tag_1 !== "Strap-Long"
                ? "filters-styles"
                : "tags-styles"
            }`}
          >
            {tags_data.tag_1}{" "}
            {tags_data.tag_5 && (
              <span>
                <i className="fa-solid fa-x"></i>
              </span>
            )}
          </li>
          <li
            className={`${tags_data.tag_5 ? "filters-styles" : "tags-styles"}`}
          >
            {tags_data.tag_2}{" "}
            {tags_data.tag_5 && (
              <span>
                <i className="fa-solid fa-x"></i>
              </span>
            )}
          </li>
          <li
            className={`${tags_data.tag_5 ? "filters-styles" : "tags-styles"}`}
          >
            {tags_data.tag_3}{" "}
            {tags_data.tag_5 && (
              <span>
                <i className="fa-solid fa-x"></i>
              </span>
            )}
          </li>
          <li
            className={`${tags_data.tag_5 ? "filters-styles" : "tags-styles"}`}
          >
            {tags_data.tag_4}{" "}
            {tags_data.tag_5 && (
              <span>
                <i className="fa-solid fa-x"></i>
              </span>
            )}
          </li>
          {tags_data.tag_5 && (
            <li className="filters-styles">
              {tags_data.tag_5}{" "}
              <span>
                <i className="fa-solid fa-x"></i>
              </span>
            </li>
          )}
        </ul>
      </div>
      {!tags_data.tag_5 && (
        <div className="arrow">
          <img src={right_chevron} alt="right arrow" />
        </div>
      )}
    </section>
  );
}

export default Tags;

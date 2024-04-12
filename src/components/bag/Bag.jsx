import "./Bag.css";

import handbag from "../../assets/handbag.jpg";
import vector_1 from "../../assets/vector_1.png";
import right_chevron_3 from "../../assets/right_chevron_3.svg";

function Bag() {
  return (
    <section id="handbag">
      <div className="handbag-container">
        <div className="handbag-top">
          <div className="handbag-img">
            <img src={handbag} alt="Handbag" />
          </div>
          <div className="handbag-desc">
            <h5>
              Bags on Timpu{" "}
              <span>
                <img src={vector_1} alt="" />
              </span>
            </h5>
            <p>
              1123 products{" "}
              <span>
                <img src={right_chevron_3} alt="right arrow" />
              </span>
            </p>
          </div>
        </div>
        <div className="handbag-bottom">
          <p>
            Or set filter and help us choose the <br /> best bag for you.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Bag;

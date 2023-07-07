/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
const CarListCard = ({
  model,
  year,
  kmDriven,
  location,
  fuelType,
  transmission,
  price,
}) => {
  console.log("data from car card", model);
  return (
    <div className="col-md-9 col-sm-7">
      <ul className="searchList">
        {/* {cars.map((e) => {
          return (
            <Car
              key={CommonUtilities.randomString(50)}
              imageSrc={e.imageSrc}
              model={e.model}
              price={e.price}
              year={e.year}
              kilometersDriven={e.kilometersDriven}
              location={e.location}
              fuelType={e.fuelType}
              cc={e.cc}
              transmission={e.transmission}
              lastUpdated={e.lastUpdated}
            />
          );
        })} */}

        <li>
          <div className="row">
            <div className="col-md-3 col-sm-4">
              {/* <div className="ribbon_3 popular">
                      <span>Featured</span>
                    </div> */}
              <div className="adimg">
                {/* <img src={imageSrc} alt="Ad Name" /> */}
              </div>
            </div>
            <div className="col-md-9 col-sm-8">
              <div className="jobinfo">
                <div className="row">
                  <div className="col-md-8 col-sm-7">
                    <h3>
                      <a>{model}</a>
                    </h3>
                    <div className="location">
                      <i className="fa fa-calendar" aria-hidden="true"></i>{" "}
                      <span>{year}</span>
                    </div>
                    <div className="location">
                      <i className="fa fa-tachometer" aria-hidden="true"></i>{" "}
                      <span>{Number(kmDriven).toLocaleString("en-IN")} km</span>
                    </div>
                    <div className="location">
                      <i className="fa fa-map-marker" aria-hidden="true"></i>{" "}
                      <span>{location}</span>
                    </div>
                    <div className="clearfix"></div>
                    <div className="vinfo">
                      <span>{fuelType}</span>
                    </div>
                    {/* <div className="vinfo">
                      <span>{cc} cc</span>
                    </div> */}
                    <div className="vinfo">
                      <span>{transmission}</span>
                    </div>
                    <div className="clearfix"></div>
                  </div>
                  <div className="col-md-4 col-sm-5 text-right">
                    <div className="adprice">
                      ₹{Number(price).toLocaleString("en-IN")}
                    </div>
                    <div className="listbtn">
                      <Link to="/carDetails">
                        View Details{" "}
                        <i
                          className="fa fa-arrow-circle-right"
                          aria-hidden="true"
                        ></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default CarListCard;

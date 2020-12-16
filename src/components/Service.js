import React from "react";
import Card from "../components/Card";
import serviceData from "../components/serviceData";

function Service() {
  return (
    <div>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>
      <div className="container container-fluid mb-5">
        <div className="row">
          <div className="col-sm mx-auto">
            <div className="row gy-4">
              {serviceData.map((val, index) => {
                return (
                  <Card
                    key={index}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    info={val.info}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;

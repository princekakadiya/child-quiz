import React from "react";

const Carousel = () => {
  return (
    <>
     
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://img.freepik.com/free-photo/proud-little-boy-with-glasses-graduation-cap_1098-3424.jpg?size=626&ext=jpg&ga=GA1.2.113794106.1674897412&semt=sph"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://img.freepik.com/free-photo/banner-with-surprised-children-peeking-edge_155003-12206.jpg?size=626&ext=jpg&ga=GA1.1.113794106.1674897412&semt=sph"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.freepik.com/free-photo/little-boy-playing-superhero-playground_53876-46868.jpg?size=626&ext=jpg&ga=GA1.2.113794106.1674897412&semt=sph"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
     
    </>
  );
};

export default Carousel;

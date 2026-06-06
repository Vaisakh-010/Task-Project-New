import React from "react";
import "./TestimonialsNew.css";

function TestimonialsNew() {
  // Exact mapping of the 9 columns based on the design
  const columns = [
    [
      { id: "1-1", type: "empty", height: "60px" },
      {
        id: "1-2",
        type: "img",
        src: "https://i.pravatar.cc/300?img=11",
        height: "100px",
      },
      {
        id: "1-3",
        type: "img",
        src: "https://i.pravatar.cc/300?img=12",
        height: "160px",
      },
    ],
    [
      { id: "2-1", type: "empty", height: "50px" },
      {
        id: "2-2",
        type: "img",
        src: "https://i.pravatar.cc/300?img=13",
        height: "150px",
      },
      {
        id: "2-3",
        type: "img",
        src: "https://i.pravatar.cc/300?img=14",
        height: "140px",
      },
    ],
    [
      { id: "3-1", type: "empty", height: "60px" },
      {
        id: "3-2",
        type: "img",
        src: "https://i.pravatar.cc/300?img=15",
        height: "130px",
      },
    ],
    [
      { id: "4-1", type: "empty", height: "50px" },
      {
        id: "4-2",
        type: "img",
        src: "https://i.pravatar.cc/300?img=16",
        height: "140px",
      },
    ],
    [
      { id: "5-1", type: "empty", height: "60px" },
      {
        id: "5-2",
        type: "img",
        src: "https://i.pravatar.cc/300?img=17",
        height: "120px",
      },
    ],
    [
      { id: "6-1", type: "empty", height: "60px" },
      {
        id: "6-2",
        type: "img",
        src: "https://i.pravatar.cc/300?img=18",
        height: "160px",
      },
    ],
    [
      { id: "7-1", type: "blue-box", height: "90px" },
      {
        id: "7-2",
        type: "img",
        src: "https://i.pravatar.cc/300?img=19",
        height: "130px",
      },
    ],
    [
      { id: "8-1", type: "empty", height: "60px" },
      {
        id: "8-2",
        type: "img",
        src: "https://i.pravatar.cc/300?img=20",
        height: "150px",
      },
      {
        id: "8-3",
        type: "img",
        src: "https://i.pravatar.cc/300?img=21",
        height: "140px",
      },
    ],
    [
      { id: "9-1", type: "empty", height: "50px" },
      {
        id: "9-2",
        type: "img",
        src: "https://i.pravatar.cc/300?img=22",
        height: "120px",
      },
      {
        id: "9-3",
        type: "img",
        src: "https://i.pravatar.cc/300?img=23",
        height: "130px",
      },
    ],
  ];

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="gallery-grid">
          {columns.map((col, colIndex) => (
            <div key={colIndex} className={`gallery-col col-${colIndex + 1}`}>
              {col.map((item) => {
                // Render the light grey placeholder boxes
                if (item.type === "empty") {
                  return (
                    <div
                      key={item.id}
                      className="box empty-box"
                      style={{ height: item.height }}
                    ></div>
                  );
                }
                // Render the distinct blue bordered box
                if (item.type === "blue-box") {
                  return (
                    <div
                      key={item.id}
                      className="box blue-box"
                      style={{ height: item.height }}
                    ></div>
                  );
                }
                // Render the actual testimonial photos
                return (
                  <img
                    key={item.id}
                    src={item.src}
                    alt="Testimonial profile"
                    className="box img-box"
                    style={{ height: item.height }}
                  />
                );
              })}
            </div>
          ))}
        </div>

        <h2 className="testimonials-title">TESTIMONIALS</h2>
      </div>
    </section>
  );
}

export default TestimonialsNew;

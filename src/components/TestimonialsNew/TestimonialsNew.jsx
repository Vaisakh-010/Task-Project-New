// import React from "react";
// import "./TestimonialsNew.css";

// import t1 from "../../assets/images/t1.png";
// import t2 from "../../assets/images/t2.png";
// import t3 from "../../assets/images/t4.png";
// import t4 from "../../assets/images/t5.png";
// import t5 from "../../assets/images/t6.png";
// import t6 from "../../assets/images/t7.png";
// import t7 from "../../assets/images/t8.png";
// import t8 from "../../assets/images/t9.png";
// import t9 from "../../assets/images/t10.png";
// import t10 from "../../assets/images/t11.png";
// import t11 from "../../assets/images/t12.png";
// import t12 from "../../assets/images/t13.png";
// import t13 from "../../assets/images/t14.png";
// import t14 from "../../assets/images/t1.png";

// const TestimonialsNew = () => {
//   const columns = [
//     { id: 1, offset: "0px", images: [t1, t2] },
//     { id: 2, offset: "-40px", images: [t3, t4] },
//     { id: 3, offset: "-10px", images: [t5] },
//     { id: 4, offset: "-100px", images: [t6] },
//     { id: 9, offset: "0px", images: [t7] },
//     { id: 5, offset: "-100px", images: [t8] },
//     { id: 6, offset: "-10px", images: [t9] },
//     { id: 7, offset: "-40px", images: [t10, t11] },
//     { id: 8, offset: "0px", images: [t12, t13] },
//   ];

//   return (
//     <div className="testimonial-section">
//       <div className="grid-container">
//         {columns.map((col) => (
//           <div
//             key={col.id}
//             className="grid-column"
//             style={{ transform: `translateY(${col.offset})` }}
//           >
//             <div className="image-card placeholder"></div>

//             {col.images.map((img, index) => (
//               <div
//                 key={index}
//                 className="image-card"
//                 style={{
//                   backgroundImage: `url(${img})`,
//                 }}
//               />
//             ))}
//           </div>
//         ))}
//       </div>

//       {/* <h1 className="testimonial-heading">TESTIMONIALS</h1> */}
//     </div>
//   );
// };

// export default TestimonialsNew;
import React, { useRef } from "react";
import "./TestimonialsNew.css";

import t1 from "../../assets/images/t1.png";
import t2 from "../../assets/images/t2.png";
import t3 from "../../assets/images/t4.png";
import t4 from "../../assets/images/t5.png";
import t5 from "../../assets/images/t6.png";
import t6 from "../../assets/images/t7.png";
import t7 from "../../assets/images/t8.png";
import t8 from "../../assets/images/t9.png";
import t9 from "../../assets/images/t10.png";
import t10 from "../../assets/images/t11.png";
import t11 from "../../assets/images/t12.png";
import t12 from "../../assets/images/t13.png";
import t13 from "../../assets/images/t14.png";

const TestimonialsNew = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  const columns = [
    { id: 1, offset: "0px", images: [t1, t2] },
    { id: 2, offset: "-40px", images: [t3, t4] },
    { id: 3, offset: "-10px", images: [t5] },
    { id: 4, offset: "-100px", images: [t6] },
    { id: 9, offset: "0px", images: [t7] },
    { id: 5, offset: "-100px", images: [t8] },
    { id: 6, offset: "-10px", images: [t9] },
    { id: 7, offset: "-40px", images: [t10, t11] },
    { id: 8, offset: "0px", images: [t12, t13] },
  ];

  const allImages = [t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13];

  return (
    <div className="testimonial-section">
      {/* Desktop Layout */}
      <div className="grid-container desktop-view">
        {columns.map((col) => (
          <div
            key={col.id}
            className="grid-column"
            style={{ transform: `translateY(${col.offset})` }}
          >
            <div className="image-card placeholder"></div>

            {col.images.map((img, index) => (
              <div
                key={index}
                className="image-card"
                style={{
                  backgroundImage: `url(${img})`,
                }}
              />
            ))}
          </div>
        ))}
      </div>

      {/* Mobile Layout */}
      <div className="mobile-view">
        <button className="mobile-arrow left" onClick={scrollLeft}>
          ❮
        </button>

        <div className="mobile-slider" ref={sliderRef}>
          {allImages.map((img, index) => (
            <div
              key={index}
              className="mobile-image-card"
              style={{
                backgroundImage: `url(${img})`,
              }}
            />
          ))}
        </div>

        <button className="mobile-arrow right" onClick={scrollRight}>
          ❯
        </button>
      </div>
    </div>
  );
};

export default TestimonialsNew;

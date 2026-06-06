// import "./Home.css";
// // import bgImage from "../../assets/images/Mask group.png";
// import bgImage1 from "../../assets/images/home.png";
// import bgImage2 from "../../assets/images/modern.jpg";
// import bgImage3 from "../../assets/images/studio1.jpg";

// function Home() {
//   return (
//     <main className="home" style={{ backgroundImage: `url(${bgImage1})` }}>
//       <section className="hero-content">
//         <div className="hero-left">
//           <h1>
//             <div className="fresh">FRESH</div>
//             <span>JUICY</span>
//             <strong>BRIGHT</strong>
//           </h1>

//           <p>
//             Streamlining Media Relations for Brands. Orange PR manages media
//             relations, freeing clients to focus on daily operations, while
//             ensuring campaign initiatives are constantly monitored and updated
//             for success.
//           </p>

//           <button className="explore-btn">EXPLORE</button>
//         </div>

//         <aside className="video-card">
//           <div className="video-thumb">
//             <button className="play-btn" aria-label="Play video">
//               ▶
//             </button>
//           </div>
//         </aside>
//       </section>

//       <div className="slider-wrapper">
//         <button aria-label="Previous slide">←</button>

//         <div className="dots">
//           <span className="active"></span>
//           <span></span>
//           <span></span>
//           <span></span>
//         </div>

//         <button aria-label="Next slide">→</button>
//       </div>
//     </main>
//   );
// }

// export default Home;
import { useState } from "react";
import "./Home.css";

import bgImage1 from "../../assets/images/home.png";
import bgImage2 from "../../assets/images/modern.jpg";
import bgImage3 from "../../assets/images/studio1.jpg";

function Home() {
  const slides = [bgImage1, bgImage2, bgImage3];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <>
      <main
        className="home"
        style={{
          backgroundImage: `url(${slides[currentSlide]})`,
        }}
      >
        <section className="hero-content">
          <div className="hero-left">
            <h1>
              <div className="fresh">FRESH</div>
              <span>JUICY</span>
              <strong>BRIGHT</strong>
            </h1>

            <p>
              Streamlining Media Relations for Brands. Orange PR manages media
              relations, freeing clients to focus on daily operations, while
              ensuring campaign initiatives are constantly monitored and updated
              for success.
            </p>

            <button className="explore-btn">EXPLORE</button>
          </div>

          <aside className="video-card">
            <div className="video-thumb" onClick={() => setShowVideo(true)}>
              <button className="play-btn" aria-label="Play Video">
                ▶
              </button>
            </div>
          </aside>
        </section>

        <div className="slider-wrapper">
          <button onClick={prevSlide}>←</button>

          <div className="dots">
            {slides.map((_, index) => (
              <span
                key={index}
                className={currentSlide === index ? "active" : ""}
              />
            ))}
          </div>

          <button onClick={nextSlide}>→</button>
        </div>
      </main>
      {showVideo && (
        <div className="video-modal" onClick={() => setShowVideo(false)}>
          <div className="video-container" onClick={(e) => e.stopPropagation()}>
            <iframe
              src="https://www.youtube.com/embed/r0x972BaT20?si=eDM02ms_HDEE98cD&autoplay=1"
              title="YouTube Video"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Home;

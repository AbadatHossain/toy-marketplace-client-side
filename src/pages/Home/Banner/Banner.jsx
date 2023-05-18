import toy1 from "../../../assets/toy1.png";
import toy2 from "../../../assets/toy2.png";
import toy3 from "../../../assets/toy3.png";
import toy4 from "../../../assets/toy4.png";
import Gallery from "../Home/Gallery";



const Banner = () => {
  return (
    <div className="carousel w-full h-[600px]">
      <div id="slide4" className="carousel-item relative w-full">
        <img src={toy1} className="w-full" />
        <div className="absolute flex items-center h-full left-0  top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white w-1/2 pl-7 space-y-7">
            <h2 className="text-6xl">A Dolls House as a Feminist Play</h2>
            <p>
              Show off your brands personality with a custom doll logo designed
              just for you by a professional designer. Need ideas? We have
              collected some amazing examples of doll logos from our global
              community of designers. Get inspired and start planning the
              perfect doll logo design today.
            </p>
            <div>
              <button className="btn btn-outline btn-secondary">
                Shop New Arival
              </button>
            </div>
          </div>
        </div>

        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={toy2} className="w-full" />
        <div className="absolute flex items-center h-full left-0  top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white w-1/2 pl-7 space-y-7">
            <h2 className="text-6xl">A Dolls House as a Feminist Play</h2>
            <p>
              Show off your brands personality with a custom doll logo designed
              just for you by a professional designer. Need ideas? We have
              collected some amazing examples of doll logos from our global
              community of designers. Get inspired and start planning the
              perfect doll logo design today.
            </p>
            <div>
              <button className="btn btn-outline btn-secondary">
                Shop New Arival
              </button>
            </div>
          </div>
        </div>

        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={toy3} className="w-full" />
        <div className="absolute flex items-center h-full left-0  top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white w-1/2 pl-7 space-y-7">
            <h2 className="text-6xl">A Dolls House as a Feminist Play</h2>
            <p>
              Show off your brands personality with a custom doll logo designed
              just for you by a professional designer. Need ideas? We have
              collected some amazing examples of doll logos from our global
              community of designers. Get inspired and start planning the
              perfect doll logo design today.
            </p>
            <div>
              <button className="btn btn-outline btn-secondary">
                Shop New Arival
              </button>
            </div>
          </div>
        </div>

        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={toy4} className="w-full" />
        <div className="absolute flex items-center h-full left-0  top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white w-1/2 pl-7 space-y-7">
            <h2 className="text-6xl">A Dolls House as a Feminist Play</h2>
            <p>
              Show off your brands personality with a custom doll logo designed
              just for you by a professional designer. Need ideas? We have
              collected some amazing examples of doll logos from our global
              community of designers. Get inspired and start planning the
              perfect doll logo design today.
            </p>
            <div>
              <button className="btn btn-outline btn-secondary">
                Shop New Arival
              </button>
            </div>
          </div>
        </div>

        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

<Gallery></Gallery>
  
    </div>
  );
};

export default Banner;

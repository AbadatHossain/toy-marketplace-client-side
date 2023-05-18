
import gallery1 from "../../../assets/gallery/gallery1.jpg"
import gallery2 from "../../../assets/gallery/gallery2.jpg"
import gallery3 from "../../../assets/gallery/gallery3.jpg"
import gallery4 from "../../../assets/gallery/gallery4.jpg"
import gallery5 from "../../../assets/gallery/gallery5.jpg"
import gallery6 from "../../../assets/gallery/gallery6.jpg"

const Gallery = () => {
    return (
        <div >
            <h1 className="text-3xl text-center font-bold m-5">Dolls Photo Gallery</h1>
            <p className="text-center mb-5">(Feminist Play)</p>
                <div className="flex justify-center mx-auto ">
                <div className="grid sm:grid-cols-1 lg:grid-cols-3">
                    {/* <PhotoAlbum layout="rows" photos={photos} /> */}
                <img className=" w-100% h-96 gap-5 border-2 mb-5 rounded-xl shadow-xl" src={gallery1} alt="" />
                <img className=" w-100% h-96 gap-5 border-2 mb-5 rounded-xl shadow-xl" src={gallery2} alt="" />
                <img className=" w-100% h-96 gap-5 border-2 mb-5 rounded-xl shadow-xl"src={gallery3} alt="" />
                <img className=" w-100% h-96 gap-5 border-2 mb-5 rounded-xl shadow-xl" src={gallery4} alt="" />
                <img className=" w-100% h-96 gap-5 border-2 mb-5 rounded-xl shadow-xl" src={gallery5} alt="" />
                <img className=" w-100% h-96 gap-5 border-2 mb-5 rounded-xl shadow-xl" src={gallery6} alt="" />
                </div>
                </div>
        </div>
    );
};

export default Gallery;
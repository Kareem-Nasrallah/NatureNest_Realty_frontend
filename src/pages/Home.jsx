import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, Scrollbar } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css/scrollbar';
import axios from "axios";
import Footer from "../components/Footer";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [navigation, setNavigation] = useState(true);
  const [number, setNumper] = useState(4);

  const getData = async () => {
    try {
      const getAxiosData = await axios.get(
        "http://naturenestrealty.42web.io/api/products"
      );
      setProducts(getAxiosData.data);
    } catch (err) {
      console.log(err);
    }
  };

  const resizeScreen = () => {
    if (innerWidth < 576) {
      setNumper(1);
      setNavigation(false);
    } else if (innerWidth < 768) {
      setNumper(2);
      setNavigation(true);
    } else if (innerWidth < 1200) {
      setNumper(3);
      setNavigation(true);
    } else {
      setNumper(4);
      setNavigation(true);
    }
  };

  useEffect(() => {
    getData();
    resizeScreen();
    addEventListener("resize", resizeScreen);
    return () => removeEventListener("resize", resizeScreen);
  }, []);

  const showProducts = products.map((product, index) => {
    return (
      <SwiperSlide key={index}>
        <div key={index} className="card p-2 brr-15">
          <img src={product.image} className="card-img-top brr-15"/>
          <p className="card-title m-auto mt-2 mb-1">{product.title}</p>
        </div>
      </SwiperSlide>
    );
  });

  return (
    <>
      <div className="homeBackground">
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          slidesPerView={1}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          loop={true}
          navigation={navigation}
          modules={[Autoplay, Pagination, Navigation]}
          className="vh-100 "
        >
          <SwiperSlide>
            <div className="bgHome bgHome1 d-flex justify-content-center align-items-center">
              <span className="cinzel-decorative fs-1 homeWord">
                NatureNest Realty
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bgHome bgHome2 d-flex justify-content-center align-items-center">
              <span className="cinzel-decorative fs-1 homeWord">
                NatureNest Realty
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bgHome bgHome3 d-flex justify-content-center align-items-center">
              <span className="cinzel-decorative fs-1 homeWord">
                NatureNest Realty
              </span>
            </div>
          </SwiperSlide>
          <div className="autoplay-progress" slot="container-end"></div>
        </Swiper>
      </div>
      <div className="container">
        <Header />
        <div className="my-5 pt-5">
          <div className="maxWidth p-3 row bgMain justify-content-evenly gap-3">
            <div className="d-flex align-items-center justify-content-center col-12 col-xl-6 pt-3 overflow-hidden">
              <img
                src="images/3.jpg"
                className="bgMain"
                style={{ maxHeight: "500px", maxWidth: "100%" }}
              />
            </div>
            <div className="p-3 col-12 col-xl-5">
              <h3>
                Welcome to
                {<span className="cinzel-decorative"> NatureNest Realty</span>}–
                Your Gateway to Luxury Living
              </h3>
              <br />
              <p>
                Founded in 2000 in Alexandria, Egypt, we’ve become a global
                leader in real estate marketing, specializing in breathtaking
                chalets and villas located in some of the world’s most
                picturesque destinations—perched atop mountains, nestled in
                forests, near majestic waterfalls, and even surrounded by snow.
                <br />
                <br />
                Our services go beyond property sales. We cater to investors by
                offering comprehensive solutions: renting properties at optimal
                prices, collecting rent on their behalf, and ensuring profitable
                resale when desired. At
                {<span className="cinzel-decorative-NoSpace"> NatureNest Realty</span>},
                we’re dedicated to maximizing your investment while delivering
                an unparalleled lifestyle.
                <br />
                <br />
                Join us in shaping the future of luxury living, where your
                dreams of elegance and adventure come to life.
              </p>
                <br />
              <Link to="/AboutUs" className="d-block text-end">
                <button className="btn btn-outline-primary fw-bold">
                  More About Us
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="my-5 py-5">
          <h3>
            Some of our<span className="cinzel-decorative"> Nature Nests</span>
          </h3>

          <Swiper
            spaceBetween={30}
            slidesPerView={number}
            scrollbar={{
               hide: true,
               draggable: true,
                
              }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={showProducts.length > number}
            navigation={true}
            modules={[Autoplay, Navigation, Scrollbar]}
          >
            {showProducts}
          </Swiper>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;

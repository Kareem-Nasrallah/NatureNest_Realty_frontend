import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AboutUs = () => {
  return (
    <>
      <Header />
      <div className="mt-5 pt-5 ">
        <h3 className="py-2 text-center fs-2 bgMainNoBrr">
          Welcome to
          <span className="cinzel-decorative"> NatureNest Realty</span>
        </h3>
        <br />
        <div className="container">
          <h1 className="fs-3">Abut Us</h1>
          <br />
          <p>
            Founded in 2000 in Alexandria, Egypt,
            <span className="cinzel-decorative-NoSpace">NatureNest Realty</span>
            has emerged as a global leader in real estate marketing,
            specializing in the sale of exquisite chalets and villas. Our
            commitment to excellence and customer satisfaction drives us to
            provide unparalleled services to our clients, whether they are
            homeowners, investors, or individuals seeking luxury living.
          </p>
          <br />
          <h4>Our Mission</h4>
          <p>
            At
            <span className="cinzel-decorative-NoSpace">
              {" "}
              NatureNest Realty
            </span>
            , our mission is to create dream homes in breathtaking locations. We
            believe in blending architectural elegance with the natural beauty
            of our surroundings. Our portfolio features stunning properties
            nestled atop mountains, surrounded by lush forests, near mesmerizing
            waterfalls, and blanketed in pristine snow.
          </p>
          <br />
          <h4>Comprehensive Services</h4>
          <p>
            We go beyond traditional real estate services to ensure a seamless
            experience for our clients. Here’s what we offer:
          </p>
          <p className="mb-4">
            <b>Property Sales: </b>We help our clients find their dream homes
            with an extensive portfolio of luxurious chalets and villas.
          </p>
          <div className="row gap-3">
            <div className="bgMain p-3 bgLightBlue col-lg justify-content-evenly">
              <p>
                <b>Investor Support: </b>For our investor clients, we provide
                comprehensive property management services, including:
              </p>
              <div className="row gap-2 px-4 justify-content-center">
                <p className="dataCard mx-2 bgMain p-3 col-lg border border-1 border-dark">
                  <b>Rent Collection: </b>We manage rental properties,
                  collecting rent on your behalf to ensure a hassle-free
                  experience.
                </p>
                <p className="dataCard mx-2 bgMain p-3 col-lg border border-1 border-dark">
                  <b>Resale Assistance: </b>Should you wish to sell your
                  property, we ensure it’s done at the best possible price.
                </p>
                <p className="dataCard mx-2 bgMain p-3 col-lg border border-1 border-dark">
                  <b>Legal Assurance: </b>Our contracts are meticulously
                  prepared by senior lawyers to protect your interests and avoid
                  any exploitable clauses.
                </p>
              </div>
            </div>
            <br />
            <div className="bgMain p-3 bgLightBlue col-lg">
              <p>
                <b>Home Maintenance: </b>We provide residents with periodic
                maintenance of their homes, ensuring everything remains in top
                condition. Our services include:
              </p>
              <div className="row gap-2 px-4">
                <p className="dataCard bgMain p-3 col-lg  border border-1 border-dark mx-2">
                  <b>Environmental Care: </b>We are committed to maintaining the
                  cleanliness and upkeep of the surrounding environment, at no
                  additional cost to residents.
                </p>
                <p className="dataCard bgMain p-3 col-lg  border border-1 border-dark mx-2">
                  <b>Staffing Services: </b>If requested, we can provide
                  dedicated servants to assist with daily tasks and upkeep.
                </p>
              </div>
            </div>
          </div>
          <br />
          <br />
          <h4 className="mb-3">Our Values</h4>{" "}
          <div className="bgMain p-3 bgLightBlue col-lg">
            <p>
              At
              <span className="cinzel-decorative-NoSpace">
                {" "}
                NatureNest Realty
              </span>
              , we pride ourselves on our core values:
            </p>
            <div className="row gap-3 px-4">
              <p className="dataCard bgMain p-3 col-lg  border border-1 border-dark mx-2">
                <b>Integrity: </b>We believe in transparency and honesty in all
                our dealings, ensuring that our clients are fully informed at
                every step.
              </p>
              <p className="dataCard bgMain p-3 col-lg  border border-1 border-dark mx-2">
                <b>Quality: </b>We are dedicated to providing high-quality
                services and maintaining the highest standards in everything we
                do.
              </p>
              <p className="dataCard bgMain p-3 col-lg  border border-1 border-dark mx-2">
                <b>Customer Satisfaction: </b>Our clients’ happiness is our top
                priority. We strive to exceed expectations and foster
                long-lasting relationships.
              </p>{" "}
            </div>
          </div>
          <br />
          <br />
          <h4>Join Us</h4>
          <p>
            We invite you to experience the elegance and adventure that awaits
            with
            <span className="cinzel-decorative-NoSpace">
              {" "}
              NatureNest Realty
            </span>
            . Whether you’re looking to purchase a luxury property or seeking a
            reliable partner for property management, we’re here to help you
            every step of the way.
          </p>
          <br />
          <p>
            <b>
              Discover your dream home with
              <span className="cinzel-decorative-NoSpace">
                {" "}
                NatureNest Realty
              </span>{" "}
              – where luxury meets nature.
            </b>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;

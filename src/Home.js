import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="001"
            title="The lean startup"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
            rating={5}
          />

          <Product
            id="002"
            title="ASUS F512JA-AS34 VivoBook 15 Thin and Light Laptop, 15.6” FHD Display, Intel i3-1005G1 CPU, 8GB RAM, 128GB SSD, Backlit Keyboard, Fingerprint, Windows 10 Home in S Mode, Slate Gray"
            price={429.88}
            image="https://images-na.ssl-images-amazon.com/images/I/81fstJkUlaL._AC_SL1500_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="003"
            title="iPad Pro (12.9-inch, Wi-Fi, 128GB) - Space Gray (4th Generation)"
            price={949.0}
            image="https://images-na.ssl-images-amazon.com/images/G/01/appcore/tablet/240x160_iPadPro129_031820._CB419473736_.png"
            rating={5}
          />

          <Product
            id="004"
            title="Fossil Gen 5 Carlyle Stainless Steel Touchscreen Smartwatch with Speaker, Heart Rate, GPS, NFC, and Smartphone Notifications"
            price={334.0}
            image="https://images-na.ssl-images-amazon.com/images/I/715XCCERmDL._AC_UX679_.jpg"
            rating={2}
          />

          <Product
            id="005"
            title="TREBLAB HD77 - Ultra Premium Bluetooth Speaker - Loud 360° HD Surround Sound, Wireless Dual Pairing, Best 25W Stereo, Loudest Bass, 20H Battery, IPX6 Waterproof, Sports Outdoor, Portable Blue Tooth"
            price={79.97}
            image="https://images-na.ssl-images-amazon.com/images/I/81g26BxrTAL._AC_SL1500_.jpg"
            rating={3}
          />
        </div>

        <div className="home__row">
          <Product
            id="006"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual"
            price={1094.98}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

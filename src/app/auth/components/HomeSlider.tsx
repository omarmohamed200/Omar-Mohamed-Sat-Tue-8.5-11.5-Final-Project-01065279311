"use client";

import HomeSliderImg from "../../../assets/images/home-slider-1.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function HomeSlider() {
  return (
    <>
      <section>
        <Swiper slidesPerView={1} loop={true}>
          <SwiperSlide>
            <div
              className="py-20 text-white"
              style={{
                backgroundImage: `linear-gradient(to bottom right, #15803dcc, #86efaccc), url('${HomeSliderImg.src}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="container">
                <h2 className="text-2xl">
                  Fresh Products Delivered to your Door
                </h2>

                <p>Get 20% off your first order</p>

                <div className="action-btns">
                  <button>Shop Now</button>
                  <button>View Deals</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
}

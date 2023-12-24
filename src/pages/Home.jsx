/* eslint-disable no-unused-vars */
import React from "react";
import {
  iPhone15pro,
  iPhone15,
  iPad,
  watch,
  macBook,
} from "../assets/Icons/icon";
import {
  HomeColContainer,
  HomeContainer,
  SearchInput,
} from "../components/index";
import Sidebar from "./Sidebar";

const Home = () => {
  return (
    <>
      <div className="grid grid-flow-col-dense">
        <div className="grid">
          <section className="grid-rows-4">
            <SearchInput />
            <HomeContainer
              figure={iPhone15pro}
              title={`iPhone 15 Pro`}
              subtitle={`Titanium.So strong.So light.So Pro`}
            />

            <HomeContainer
              className="mt-2"
              figure={iPhone15}
              title={`iPhone 15`}
              subtitle={`New camera.New design.Newphoria`}
              style={`text-black`}
            />

            {/* Video */}
            <div className="mt-2">
              <video
                className="shadow-[20px_20px_rgba(255,255,255)] w-full"
                muted
                loop
                autoPlay
              >
                <source src={watch} type="video/mp4" />
              </video>
            </div>
          </section>

          <div className="md:grid grid-cols-2 gap-2">
            <HomeColContainer
              figure={macBook}
              className="p-4 mx-auto"
              title={`MacBook Pro`}
              subtitle={`Mind-blowing.Head-turning`}
              style={`text-black`}
            />

            <HomeColContainer
              figure={iPad}
              className="p-4 mx-auto"
              title={`iPad`}
              subtitle={`Lovable.Drawable.Magical`}
              style={`text-black`}
            />
          </div>
        </div>
        <div className="shadow bg-slate-900 text-gray-500 md:hidden">
          <Sidebar />
        </div>
      </div>
    </>
  );
};

export default Home;

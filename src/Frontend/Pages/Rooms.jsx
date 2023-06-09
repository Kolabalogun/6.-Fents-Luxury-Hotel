import React, { useEffect } from "react";
import { useGlobalContext } from "../../Function/Context";
import AnimatedPage from "../../Utils/AnimatedPage";
import Header from "../../Components/Header";
import RoomCard from "../Components/Rooom/RoomCard";
import FAQMenu from "../Components/FAQMenu";
import Loader from "../../Components/Loader";
import Footer from "../../Components/Footer";

const Rooms = () => {
  const { Rooms, loader, pageInfos } = useGlobalContext();

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  if (loader) {
    return <Loader />;
  }

  return (
    <AnimatedPage>
      <Header
        title={pageInfos.roomsCaptionTitle}
        caption={pageInfos.roomsCaption}
      />

      <section className="my-20">
        <div className="flex justify-center items-center mb-16 flex-col">
          <h1 className="text-5xl font-light mb-10">{pageInfos.roomsHeader}</h1>

          <p className="text-center px-5">{pageInfos.roomsHeaderCaption}</p>
        </div>

        <div>
          {Rooms.length > 0 ? (
            Rooms.map((room, index) => {
              return (
                <RoomCard
                  key={index}
                  room={room}
                  layout={index % 2 === 0 && true}
                />
              );
            })
          ) : (
            <p>No Room Available</p>
          )}
        </div>
      </section>

      <FAQMenu />
      <Footer />
    </AnimatedPage>
  );
};

export default Rooms;

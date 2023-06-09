import React from "react";
import { Link } from "react-router-dom";
import { NairaIcon } from "../../../assets/data";

const RoomCard = ({ room, layout }) => {
  return (
    <div
      className={`flex mb-28 flex-col ${
        layout ? "md:flex-row-reverse" : "md:flex-row"
      } items-center justify-between`}
    >
      <div style={{ flex: 1.5 }} className="flex ">
        <img src={room.RoomImage} alt="" />
      </div>

      <div
        style={{ flex: 1 }}
        className="flex flex-col items-center flex-1  justify-center md:mx-6"
      >
        <h1 className="text-6xl mt-7 md:mt-0 text-center  mb-10">
          {room.RoomName}
        </h1>

        <div className="flex items-center mb-8 ">
          <img src={NairaIcon} alt="" className="h-7 mt-1.5" />
          <div className="roomprice ">
            {room.PricePerNight}
            <span className="per">/night</span>
          </div>
        </div>

        <div
          className=" text-sm px-5"
          dangerouslySetInnerHTML={{
            __html: `${room?.RoomDetails.substring(0, 650)}...`,
          }}
        />

        <div className="my-5 flex flex-col md:flex-row gap-5 ">
          <>
            <Link to="/room" state={room}>
              <button className=" px-8 py-3 hover:bg-white hover:text-black bg-black border-black border-2  uppercase text-sm font-semibold rounded-sm text-white ">
                room details
              </button>
            </Link>
          </>
          <>
            <Link to={`/bookroom/${room.RoomName}`}>
              <button className="px-8 py-3 hover:bg-black hover:text-white border-black border-2 uppercase text-sm font-semibold rounded-sm text-black w-full">
                Book Room
              </button>
            </Link>
          </>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;

import React from 'react'
import dienteSvg from "../../assets/tooth.svg"

export const Diente = ({ numero, ImgOrientation = "top" }) => {

  const handleToothClick = (id) => {
    alert(id);
  }

  return (
    <div className='flex flex-col items-center'>
      {
        ImgOrientation == "top" &&
        <>
          <img src={dienteSvg} alt="" className='w-[25px] h-[25px] rotate-180' />
          <p>{numero}</p>
        </>
      }


      <svg
        width="60px"
        height="60px"
        xmlns="http://www.w3.org/2000/svg"
        style={{}}
      >
        <rect
          id={"1"}
          className="hoverable-rect"
          x="20"
          y="20"
          width="20"
          height="20"
          fill="white"
          stroke="black"
          strokeWidth="1"
          onClick={(e) => {
            handleToothClick(e.target.id);
          }}
        />


        <polygon

          className="hoverable-rect"
          points="20,20 40,20 49.3,10 10.6,10"
          fill="white"
          stroke="black"
          strokeWidth="1"
        />


        <polygon
          className="hoverable-rect"
          points="20,40 40,40 49.5,50 10.5,50"
          fill="white"
          stroke="black"
          strokeWidth="1"
        />


        <polygon
          className="hoverable-rect"
          points="20,20 20,40 10,49.5 10,10.7"
          fill="white"
          stroke="black"
          strokeWidth="1"
        />


        <polygon
          className="hoverable-rect"
          points="40,20 40,40 50,49.2 50,10.6"
          fill="white"
          stroke="black"
          strokeWidth="1"
        />
      </svg>

      {
        ImgOrientation == "bottom" &&
        <div>
          <p className='text-center'>{numero}</p>
          <img src={dienteSvg} alt="" className='w-[25px] h-[25px]' />
        </div>
      }
    </div>
  )
}

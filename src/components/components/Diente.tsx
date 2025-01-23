import React, { useEffect, useState } from 'react'
import dienteSvg from "../../assets/tooth.svg"
import { ModalVerDiente } from './ModalVerDiente';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export const Diente = ({ numero, ImgOrientation = "top", dienteImg }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToothClick = (id) => {
    setIsModalOpen(prev => !prev);
  }

  return (
    <div className='flex flex-col items-center relative'>
      {
        ImgOrientation == "top" &&
        <>
          <img src={dienteImg ?? dienteSvg} alt="" className='w-[35px] h-[75px] ' />
          <p>{numero}</p>
        </>
      }
      <Popover>
        <PopoverTrigger>
          <svg
            id={"1"}
            className=''
            width="60px"
            height="60px"
            xmlns="http://www.w3.org/2000/svg"
            style={{}}
            onClick={(e) => {
              handleToothClick(e.target.id);
            }}
          >
            <rect
              className="hoverable-rect"
              x="20"
              y="20"
              width="20"
              height="20"
              fill="white"
              stroke="black"
              strokeWidth="1"
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
        </PopoverTrigger>
        <PopoverContent>
          Place content for the popover here.
        </PopoverContent>
      </Popover>
      {
        ImgOrientation == "bottom" &&
        <div>
          <p className='text-center'>{numero}</p>
          <img src={dienteImg ?? dienteSvg} alt="" className='w-[25px] h-[25px]' />
        </div>
      }
    </div>
  )
}

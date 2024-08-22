import React, { PureComponent } from 'react';
import Front_image from '../images/F_1.png'
import icon from '../images/icon_v.png'

export class Front extends PureComponent {
  render() {
    return (
      <>
        <div className=" w-full md:h-[100vh] relative">
      
          <div>
          <img src={Front_image} alt="Front" className="w-full h-[70vh] md:h-full object-cover" />
            <div className=" absolute z-20 top-[20vh] left-0 right-0 flex justify-center items-center md:mt-[4vh] md:ml-[20vh] md:justify-start md:items-start ">
              <img src={icon} alt="icon" className=" md:h-[40vh]" />
            </div>
            <div className="absolute z-30 top-[30vh] left-0 right-0 flex justify-center items-center mt-[15vh] md:mt-[45vh]">
              <button className=" bg-fuchsia-900 rounded-lg text-fuchsia-400 pl-4 pr-4 pt-2 pb-2 md:text-2xl md:pt-3 md:pb-3 md:pl-8 md:pr-8   ">Add to Chrome for FREE!!</button>
              </div>
          </div>

        </div>
      </>
    )
  }
}

export default Front
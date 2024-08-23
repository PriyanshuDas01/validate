import React, { PureComponent } from 'react';
// import Front_image from '../images/F_1.png'
import icon from '../images/icon_v.png'

export class Front extends PureComponent {
  render() {
    return (
      <>
        <div className=" w-full md:h-[100vh] relative">
      
          
          <div className="w-full h-[70vh] md:h-[80vh] lg:h-[90vh] object-cover bg-purple-100" >
            <div className=" absolute z-20 top-[20vh] left-0 right-0 flex justify-center items-center lg:mt-[4vh] lg:ml-[10vh] md:justify-start md:items-start ">
              <img src={icon} alt="icon" className=" lg:h-[30vh] md:h-[30vh]" />
            </div>
            <div className="absolute z-30 top-[30vh] left-0 right-0 flex justify-center items-center mt-[28vh] lg:mt-[40vh]">
              <button className=" bg-fuchsia-800 rounded-lg text-fuchsia-400 hover:bg-fuchsia-950 hover:translate-y-0.5 hover:shadow-md hover:shadow-fuchsia-800  pl-4 pr-4 pt-2 pb-2 md:text-2xl md:pt-3 md:pb-3 md:pl-8 md:pr-8   ">Add to Chrome for FREE!!</button>
              </div>
          </div>

        </div>
      </>
    )
  }
}

export default Front
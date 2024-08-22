import React, { PureComponent } from 'react';
import Front_image  from '../images/F_1.png'

export class Front extends PureComponent {
  render() {
    return (
      <>
        <div className=" w-full md:h-[100vh] relative">
      
          <div>
          <img src={Front_image} alt="Front" className="w-full h-[70vh] md:h-full object-cover" />
            <div className=" absolute z-20 top-[25vh] flex items-center  md:top-[20vh]">
              hello
          </div>
          </div>

        </div>
      </>
    )
  }
}

export default Front
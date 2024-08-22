import React, { PureComponent } from 'react';


export class Nav extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  toggleMenu = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <div className=" w-full  z-40 absolute">
        <div className="flex justify-between items-center bg-fuchsia-500 bg-opacity-10 h-16 rounded-lg">
          <div>
          <div className="text-xl text-fuchsia-900 ml-4  md:ml-8 lg:text-2xl">Validate</div>
          </div>
        
          <div className="lg:hidden">
            <button
              onClick={this.toggleMenu}
              className="text-fuchsia-900 mr-3 focus:outline-none "
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
          <ul className="hidden lg:flex space-x-8 mr-20 ">
            <li className="text-xl text-fuchsia-900">Home</li>
            <li className="text-xl text-fuchsia-900">About</li>
          </ul>
        </div>
        <ul
          className={`${
            this.state.isOpen ? 'block' : 'hidden' 
          } lg:hidden mt-4 space-y-2`}
        >
          <li className="text-xl text-fuchsia-900 ml-[37vh]">Home</li>
          <li className="text-xl text-fuchsia-900 ml-[37vh]">About</li>
        </ul>
      </div>
    );
  }
}

export default Nav;

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
      <div className="bg-gray-800 p-4">
        <div className="flex justify-between items-center">
          <div className="text-xl text-white ml-4">Validate</div>
          <div className="lg:hidden">
            <button
              onClick={this.toggleMenu}
              className="text-white focus:outline-none"
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
          <ul className="hidden lg:flex space-x-4 mr-4">
            <li className="text-xl text-white">Home</li>
            <li className="text-xl text-white">About</li>
          </ul>
        </div>
        <ul
          className={`${
            this.state.isOpen ? 'block' : 'hidden'
          } lg:hidden mt-4 space-y-2`}
        >
          <li className="text-xl text-white">Home</li>
          <li className="text-xl text-white">About</li>
        </ul>
      </div>
    );
  }
}

export default Nav;

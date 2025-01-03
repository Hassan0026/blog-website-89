import Image from "next/image";

export default function Footer() {
  return (
    <footer className="min-h-[80vh] w-full text-grey-400 body-font shadow-lg">
    <div className=" flex flex-wrap text-black justify-center">
      <div className="mt-12 mr-12">
        <h2 className="text-bold">Contact Us</h2>
        <p className="text-black mt-2">hassan.j1036@gmail.com</p>
        <p className=" text-black/75 mt-2">+92 332-7874504</p>
      </div>
        <div className="mt-12 ml-28">
          <h4 className="text-black font-light	 text-[18px] ">Links</h4>
          <ul className="mt-2 space-y-2 text-black/75">
            <li>Home</li>
            <li>Blogs</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
        <div className="flex flex-wrap items-center text-black justify-center mt-6">
        <div className="flex justify-center items-center w-[80%] text-[15px]  border-gray-700 border-t">
          <div className="mr-12">
            <p className="text-center text-sm ">
              Copyright © 2024. All rights reserved.
            </p>
          </div>
          <div className="flex justify-center items-center mr-12">
            <a href="#" className="hover:text-gray-300 mr-10">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-gray-300 mr-10">
              Refund Policy
            </a>
            <a href="#" className="hover:text-gray-300 mr-10">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    
    </footer>
  );
}
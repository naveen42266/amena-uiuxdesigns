import { Inter } from "next/font/google";
import medicines from "../images/medicines.png"
import dineeasy from "../images/dineeasy.png"
import findcars from "../images/findcars.png"
import electronics from "../images/electronics.png"
import x from "../images/x.png"

export default function Home() {
  return (
    <div className="h-screen w-full mx-auto overflow-y-scroll">
      <div className="flex justify-between items-center m-10 text-[#310E0E] text-[23px] font-normal">
        <div className="cursor-pointer">LOGO</div>
        <div className="flex justify-between items-center gap-5">
          <div className="cursor-pointer">Home</div>
          <div className="cursor-pointer">About Us</div>
          <div className="cursor-pointer">Contact Us</div>
        </div>
        <div className="border-black border-2 rounded-full px-6 py-1 text-[#140000] font-medium cursor-pointer">Login</div>
      </div>
      <div className="text-center text-[55px] font-bold mx-72">Medicines, Cars, Dining, Electronics Your All-in-One Solution!</div>
      <div className="flex justify-between my-7">
        <div className="w-[22%]"></div>
        <div className="bg-[#00E0FF3D] rounded-lg w-[22%] flex flex-col justify-center items-center">
          <img src={medicines.src} height={'177.94px'} width={'193px'} className='mt-4' alt="" />
          <div className="text-[#00588A] text-[28px] font-bold">Medicines</div>
          <div className="text-[#233E60] mx-8 text-center">Welcome to Heal Hub, where wellness meets convenience on your terms...</div>
          <div className="rounded-full px-6 py-1 bg-[#00588A] text-white mt-4 mb-6 shadow-lg cursor-pointer">Visit Page</div>
        </div>
        <div className="bg-[#FFC7005E] rounded-lg w-[22%] flex flex-col justify-center items-center">
          <img src={dineeasy.src} height={'177.94px'} width={'193px'} className='mt-4' alt="" />
          <div className="text-[#00000099] text-[28px] font-bold">Dine Ease</div>
          <div className="text-[#742D06] mx-8 text-center">Dine Ease, ultimate and best destination, Ease brings you your favorite flavors...</div>
          <div className="rounded-full px-6 py-1 bg-[#665E40] text-white mt-4 mb-6 shadow-lg cursor-pointer">Visit Page</div>
        </div>
        <div className="w-[22%]"></div>
      </div>
      <div className="flex justify-between mb-7">
        <div className="w-[22%]"></div>
        <div className="bg-[#FF7A0078] rounded-lg w-[22%] flex flex-col justify-center items-center">
          <img src={findcars.src} height={'177.94px'} width={'193px'} className='mt-4' alt="" />
          <div className="text-[#00000099] text-[28px] font-bold">Find Cars</div>
          <div className="text-[#742D06] mx-8 text-center">AutoCrafters, where is Care. We take pride in delivering smooth care for your vehicle...</div>
          <div className="rounded-full px-6 py-1 bg-[#664D36] text-white mt-4 mb-6 shadow-lg cursor-pointer">Visit Page</div>
        </div>
        <div className="bg-[#42FF005E] rounded-lg w-[22%] flex flex-col justify-center items-center">
          <img src={electronics.src} height={'177.94px'} width={'193px'} className='mt-4' alt="" />
          <div className="text-[#00000099] text-[28px] font-bold">Electronics</div>
          <div className="text-[#742D06] mx-8 text-center">ElectroSwift brings you the latest gadgets at your fingertips, seamless tech experience.</div>
          <div className="rounded-full px-6 py-1 bg-[#4A6640] text-white mt-4 mb-6 shadow-lg cursor-pointer">Visit Page</div>
        </div>
        <div className="w-[22%]"></div>
      </div>
      <div className="flex flex-row justify-between m-4">
        <div className="flex">
          <div className="flex flex-col justify-between">
            <div className="h-2.5"></div>
            <img src={x.src} height={'37px'} width={'37px'} alt="" />
          </div>
          <div className="text-[20px] font-medium">
            <div>Designed by</div>
            <a href="https://x.com/AmenaiSabuwala" className="underline cursor-pointer" target="_blank" rel="noopener noreferrer"> @AmenaiSabuwala </a>
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col justify-between">
            <div className="h-2.5"></div>
            <img src={x.src} height={'37px'} width={'37px'} alt="" />
          </div>
          <div className="text-[20px] font-medium">
            <div>Developed by</div>
            <a href="https://x.com/billanaveen0001" className="underline cursor-pointer" target="_blank" rel="noopener noreferrer"> @naveen</a>
          </div>
        </div>
      </div>
    </div>
  );
}

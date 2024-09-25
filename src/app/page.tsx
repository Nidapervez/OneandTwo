import Image from "next/image";
import glogo from "@/glogo.png"; // Adjust the path as necessary

import gimg from "@/gimg.png";
import Header from "./components/header";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <div className="sticky">
        <Header/>
        
        <div className="z-10 -m-10 ml-2">
          <Image 
            src={glogo}
            alt="Logo" 
            width={100} 
            height={100} 
            className="object-contain" 
          />
        </div>

        <div className="flex justify-between items-center ml-10">
          <div className="max-w-lg"> {/* Increase width for paragraph */}
            <p className="text-lg"> {/* Increase font size */}
              Governor Sindh<br />
              Kamran Khan Tessori<br />
              Certified Cloud Applied Generative AI Engineer (GenEng)<br />
              Earn up to $5,000 / month<br />
              Now admissions are open in Hyderabad
            </p>
            <button className="w-full rounded-md py-3 text-center text-sm font-semibold tracking-widest text-white transition-all hover:translate-y-1 sm:py-4 sm:text-base md:w-52">
              APPLY NOW
            </button>
          </div>
          <div className="ml-[400px]"> {/* Adjust margin for spacing */}
            <Image 
              src={gimg}
              alt="Promotional Image" 
              width={800} // Adjusted width
              height={606} // Adjusted height
              className="object-contain" 
            />
          </div>
        </div>
        <Footer/>
      </div>
    </>
  );
}

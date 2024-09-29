import Image from "next/image"; // Adjust the path as necessary

import nidapic from "@/nidapic.jpg";
import Header from "./components/header";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div>
      <div className="sticky">
        <Header/>
        
     

        <div className="flex justify-between items-center ml-10">
          <div className="max-w-lg"> {/* Increase width for paragraph */}
            <p className="text-lg font-bold bg-pink-200"> {/* Increase font size */}
              Hi this is <br />
             Nida Pervez here<br />
              I am doing Certified Cloud Applied Generative AI Engineering (GenEng)<br />
             I am available<br />
            for the services
            </p>
            <button className="w-full rounded-md py-3 text-center text-sm font-semibold tracking-widest text-white transition-all hover:translate-y-1 sm:py-4 sm:text-base md:w-52">
              APPLY NOW
            </button>
          </div>
          <div className="ml-[400px]"> {/* Adjust margin for spacing */}
            <Image 
              src={nidapic}
              alt="Promotional Image" 
              width={800} // Adjusted width
              height={606} // Adjusted height
              className="object-contain" 
            />
          </div>
        </div>
        <Footer/>
      </div>
    </div>
  );
}

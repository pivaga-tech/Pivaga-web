import Image from "next/image";

import {
  Left,
  Right,
  Logo,
  Boxb,
  Boxa,
  Boxc,
  Boxx,
  Blogo,
  Linkdin,
  Mail,
} from "../public";

export default function Home() {
  return (
    <main className="flex min-h-screen relative flex-col items-center justify-between overflow-hidden  bg-[#171717]">
      <section className=" h-[100vh]  ">
        <div className="absolute -left-2 top-0  md:h-full">
          <Image src={Left} alt="left" height={800} />
        </div>
        <div className="absolute m-auto left-0 right-0  md:w-3/4  mt-9 flex flex-col items-center z-20  ">
          <div className="w-40 md:w-96 flex items-center justify-center ">
            <Image src={Logo} alt="logo" height={120} />
          </div>
          <div className="text-center mt-10 flex flex-col items-center">
            <h1 className="text-xl md:text-5xl font-rubik font-extrabold mb-4">
              Elevating Competitive Esports
            </h1>
            <h4 className="text-xs md:text-lg w-56 md:w-full font-rubik font-extrabold mb-4">
              Reshaping the Future for Fair Play and Strategic Insight
            </h4>
            <p className="text-xs md:text-base font-poppins font-light mb-4 h-1/2 w-2/3 text-center ">
              Discover a world where fair play meets deep insights. Join us in
              integrating with esports to reshape the landscape of competitive
              gaming, as we raise the bar for both integrity and strategic
              understanding.
            </p>
            <div className=" mt-20 md:mt-5  top-[70vh] md:top-0 md:relative">
              <button className="bg-[#A3F7BF] text-black font-rubik font-bold px-6 py-3 rounded-2xl">
                Join the Revolution
              </button>
            </div>
          </div>
        </div>
        <div className="absolute -right-2 top-0 x-0  h-full hidden md:block">
          <Image src={Right} alt="right" height={800} />
        </div>
      </section>
      <section className="h-[100vh] ">
        <div className="h-full flex flex-col justify-evenly items-center mt-28 md:mt-0 w-full px-10">
          <div className=" text-center flex justify-center ">
            <h1 className=" text-xl md:text-4xl w-2/3 md:w-full font-bold font-rubik text-[#764AF1]">
              Battle Against <span className="text-[#A3F7BF]">Hackers</span> and{" "}
              <span className="text-[#A3F7BF]">Ringers</span> in Esports
            </h1>
          </div>
          <div className="mt-10 md:mt-0 mb-10 md:mb-0">
            <p className="text-center font-poppins md:px-5 text-xs md:text-base w-72 md:w-full">
              At PIVAGA, we excel in Player Integrity Verification and Gameplay
              Analysis, providing robust solutions to combat unfair play in open
              esports tournaments. Leveraging our AI-powered system, we ensure
              verification through a streamlined process encompassing pre, on,
              and post-tournament stages for each player, reinforcing fair play
              in every facet of competitive gaming.
            </p>
          </div>
          <div className="flex justify-evenly flex-col md:flex-row w-full">
            <div className="  md:w-1/4 h-64  mb-9 md:mr-5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.79)] ">
              <div className="flex flex-col justify-between items-center h-full">
                <div className="flex justify-center items-center h-1/3 mt-3">
                  <Image src={Boxa} alt="boxa" height={70} />
                </div>
                <div className="flex flex-col justify-center items-center h-2/3">
                  <h1 className="text-base w-2/3 text-center font-rubik font-extrabold mb-4 text-[#A3F7BF]">
                    Biometric ID Based Registration
                  </h1>
                  <p className="text-xs text-center font-poppins font-light mb-4 px-8 ">
                    Secure entries with biometric authentication, preventing
                    ringing issues and ensuring fair play.
                  </p>
                </div>
              </div>
            </div>
            <div className="  md:w-1/4 h-64 mb-9 md:mr-5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.79)]">
              <div className="flex flex-col justify-between items-center h-full">
                <div className="flex justify-center items-center h-1/3 mt-3">
                  <Image src={Boxb} alt="boxb" height={70} />
                </div>
                <div className="flex flex-col justify-center items-center h-2/3">
                  <h1 className="text-base w-2/3 text-center font-rubik font-extrabold mb-4 text-[#A3F7BF]">
                    Real-time Playstyle Comparison
                  </h1>
                  <p className="text-xs text-center font-poppins font-light mb-4 px-8 ">
                    Empower players with live playstyle comparisons for a level
                    playing field and hacker deterrence.
                  </p>
                </div>
              </div>
            </div>
            <div className="  md:w-1/4 mb-9  h-64 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.79)]">
              <div className="flex flex-col justify-between items-center h-full">
                <div className="flex justify-center items-center h-1/3 mt-3">
                  <Image src={Boxc} alt="boxc" height={70} />
                </div>
                <div className="flex flex-col justify-center items-center h-2/3">
                  <h1 className="text-base w-2/3 text-center font-rubik font-extrabold mb-4 text-[#A3F7BF]">
                    Enhanced Strategic Insights
                  </h1>
                  <p className="text-xs text-center font-poppins font-light mb-4 px-8 ">
                    Optimize playstyles and vitality with precise insights,
                    fostering continuous performance improvement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="h-[100vh] w-screen relative ">
        <div className="h-full w-full flex flex-col mt-28 md:mt-0 justify-center md:justify-normal items-center md:items-start p-5 md:p-0">
          <div className="bg-slate-50 flex w-full flex-col p-5 justify-evenly md:right-32 md:mt-16 z-20 md:h-[75vh] md:absolute font-poppins text-[#141414] font-extralight md:text-sm text-xs  md:w-2/5 rounded-2xl">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
              className="border-[1px] border-gray-400 rounded-md py-3 mb-5 md:mb-0 px-3 bg-transparent outline-none"
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email Address"
              className="border-[1px] border-gray-400 rounded-md py-3 px-3 mb-5 md:mb-0 bg-transparent outline-none"
            />
            <input
              type="number"
              name="num"
              id="num"
              placeholder="Your Contact Number"
              className="border-[1px] border-gray-400 rounded-md py-3 px-3 mb-5 md:mb-0 bg-transparent outline-none"
            />
            <textarea
              name="desc"
              id="desc"
              cols="30"
              rows="10"
              placeholder="Share your thoughts"
              className="border-[1px] border-gray-400 rounded-md mb-5 md:mb-0 py-3 px-3 bg-transparent outline-none"
              draggable="false"
            />
            <div className="flex items-center mb-5 md:mb-0">
              <input
                type="checkbox"
                className="w-4 h-4 text-[#A3F7BF] bg-gray-100 border-gray-300 rounded focus:ring-green-200 dark:focus:ring-green-200 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="checked-checkbox"
                class="ms-2 text-sm font-extralight font-poppins text-[#141414] dark:text-gray-400"
              >
                Accept Terms and Condition
              </label>
            </div>
            <button className="bg-[#A3F7BF] text-[#141414] font-rubik md:w-1/3 w-2/3 font-bold px-6 py-3 rounded-xl">
              Connect Now!
            </button>
          </div>

          <div className=" hidden md:block p-16 absolute w-full bottom-0">
            <Image src={Boxx} />
          </div>
        </div>
      </section>
      <section className="h-[30vh] relative w-screen md:mt-20 ">
        <div className="w-full flex flex-col items-center justify-between h-full bg-[#764AF1]">
          <div className="flex flex-col items-center mt-5">
            <Image src={Blogo} width={150} />
            <div className="flex mt-4">
              <Image src={Linkdin} width={50} />
              <Image src={Mail} width={50} />
            </div>
          </div>
          <div className="text-[#141414] mb-4 font-light">
            <p>© PIVAGA 2023 | All rights reserved</p>
          </div>
        </div>
      </section>
    </main>
  );
}

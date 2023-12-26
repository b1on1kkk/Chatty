"use client";

// import { useEffect, useRef, useState } from "react";

import Header from "../../components/MainChat/Header/Header";

import Footer from "../../components/MainChat/Footer/Footer";

export default function Chat() {
  // const ref = useRef<null | HTMLDivElement>(null);
  // const [messageWidth, setMessageWidth] = useState<number>(0);

  // useEffect(() => {
  //   if (ref.current?.innerText) {
  //     setMessageWidth(ref.current?.innerText.length * 2);
  //   }
  // }, [ref]);

  // console.log(messageWidth);

  const fakeArray = new Array(10).fill(0);

  return (
    <>
      <Header />
      <main className="flex-1 px-16 flex flex-col overflow-auto pt-5 scrollbar-thin scrollbar-thumb-gray-700">
        {fakeArray.map((_, idx) => {
          return (
            <>
              {/* our message */}
              <div className="flex flex-col items-end gap-3">
                <div className="flex items-end gap-3">
                  <div
                    className={`w-[40rem] px-10 py-4 bg-gray-800 rounded-l-[60px] rounded-t-[60px]`}
                  >
                    <span>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Nemo unde vero inventore magnam rerum dolorem labore
                      incidunt eveni
                    </span>
                  </div>
                  <div className="w-8 h-8 bg-gray-600 rounded"></div>
                </div>
                <div className="text-xs text-[#7f829e]">4:11 pm</div>
              </div>
              {/*  */}

              {/* friend message */}
              <div className="flex flex-col gap-3">
                <div className="flex items-end gap-3">
                  <div className="w-8 h-8 bg-gray-600 rounded"></div>
                  <div
                    className={`w-[40rem] px-10 py-4 bg-indigo-500 rounded-r-[60px] rounded-t-[60px] text-white`}
                  >
                    <span>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Nemo unde vero inventore magnam rerum dolorem labore
                      incidunt eveni
                    </span>
                  </div>
                </div>
                <div className="text-xs text-[#7f829e]">4:11 pm</div>
              </div>
              {/*  */}
            </>
          );
        })}
      </main>
      <Footer />
    </>
  );
}

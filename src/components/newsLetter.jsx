import React from "react";
import { saveEmail } from "@/api/FetchData";
// import NewsLetterForm from "@/components/newsLetterForm";
const NewsLetter = () => {
  const handleSubmit =async (e) => {
    "use server";
    // saveEmail(e.get("Email"));
    saveEmail({data : {Subscribers:e.get("Email")}});
  };
  return (
    <div>
      <div className=" py-[5rem] bg-bggray dark:bg-bgdark">
        <div className="flex justify-center md:flex-row flex-col gap-16">
          <div className="flex justify-center ">
            <img src="/Home/logo.svg " alt="Logo" />
          </div>
          <div className="font-roboto font-bold text-3xl text-black dark:text-white text-center">
            Subscribe For Updates About The AFL!
            {/* <NewsLetterForm/> */}
            <form action={handleSubmit}>
              <div className="flex md:justify-around justify-center px-5 md:px-0">
                <div className="w-3/4 m-3">
                  <input
                    type="text"
                    placeholder="Email"
                    name="Email"
                    className="bg-textInput rounded-2xl p-4 font-roboto text-base font-bold w-full"
                  />
                </div>
                <div className="m-3">
                  <button
                  type="submit"
                  className="font-roboto text-base font-bold text-white p-4 bg-bgblue inline-flex rounded-2xl"
                  >
                    Subscribe
                    <span className="mt-1 ml-3">
                      <img src="/Home/Union.svg" alt="Arrow svg" />
                    </span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
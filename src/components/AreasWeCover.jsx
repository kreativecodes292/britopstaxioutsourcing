import map from "../assets/map.png";
import { useNavigate } from "react-router-dom";

export default function AreasWeCover() {
  const navigate = useNavigate();

  return (
    <section className="w-full py-10 bg-[#F7FAFC]">
      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#0B4F6C] mb-8">
          Areas We Cover
        </h2>

        {/* MAP + BUTTONS */}
        <div className="flex flex-col md:flex-row items-center justify-between bg-white rounded-xl shadow-sm p-6 md:p-8 border border-gray-200">

          {/* MAP IMAGE */}
          <div className="w-full md:w-2/3 flex justify-center">
            <img
              src={map}
              alt="Map"
              className="w-full max-w-xl rounded-md h-[200px] sm:h-[230px] md:h-[260px] object-cover"
            />
          </div>

          {/* BUTTONS */}
          <div className="w-full md:w-1/3 mt-6 md:mt-0 flex flex-col gap-3">

            <button
              onClick={() => navigate("/services")}
              className="bg-[#0B4F6C] hover:opacity-90 transition text-white px-5 py-3 rounded-lg text-sm flex items-center justify-between shadow-sm"
            >
              Home Care in Bradford
              <span>›</span>
            </button>

            <button
              onClick={() => navigate("/services")}
              className="bg-[#1CA89B] hover:opacity-90 transition text-white px-5 py-3 rounded-lg text-sm flex items-center justify-between shadow-sm"
            >
              Home Care in Leeds
              <span>›</span>
            </button>

            <button
              onClick={() => navigate("/services")}
              className="bg-[#36C986] hover:opacity-90 transition text-white px-5 py-3 rounded-lg text-sm flex items-center justify-between shadow-sm"
            >
              Supported Living in Wakefield
              <span>›</span>
            </button>

          </div>
        </div>

        {/* Bottom Quote */}
        <div className="mt-6 text-center text-gray-600 italic text-sm max-w-4xl mx-auto">
          “The carers are wonderful and have made a huge difference for my mum. Highly recommend Assist Home Care.” –{" "}
          <span className="font-semibold text-[#0B4F6C]">
            Sarah J.
          </span>
        </div>

      </div>
    </section>
  );
}

import { FaCheckCircle } from "react-icons/fa";

export default function StorySection() {

    const points = [
    "Turn failure into fuel",
    "Push dreamers to become doers",
    "Share lessons from the battlefield — not the textbook",
    "Capture the story before it becomes a success case",
    "Build a tribe of founders who refuse to quit",
    ];


  return (
    <section className="text-gray-800 px-4 md:px-16 py-10 md:py-20 ">
        <h1 className="font-poppins text-[8px] sm:text-[12px] lg:text-[16px] font-semibold text-gray-500  tracking-wider">
          Story 
        </h1>
      <h2 className="font-poppins text-[20px] sm:text-[30px] lg:text-[40px] font-bold text-black tracking-wider mb-4 md:mb-10">
        Why Startup Uncut Exists
      </h2>
      <p className="font-poppins text-[12px] sm:text-[16px] lg:text-[24px] font-medium leading-relaxed text-gray-600">
        Success is glorified at the finish line — but the real story is written in the struggle.
        I once chased a medical career until I failed to hit the required results.
        That moment didn’t end my journey — it sparked a new one.
      </p>

     <ul className="mt-4 md:mt-10 pl-6 md:pl-20 space-y-2 md:space-y-4">
      {points.map((point, index) => (
        <li key={index} className="flex items-start gap-3">
          <span className="font-poppins text-black text-[12px] sm:text-[16px] lg:text-[24px] font-medium">
            <FaCheckCircle />
          </span>
          <span className="font-poppins text-gray-700 text-[12px] sm:text-[16px] lg:text-[24px] font-medium">{point}</span>
        </li>
      ))}
    </ul>
    <p className="font-poppins text-[14px] sm:text-[24px] lg:text-[32px] font-medium leading-relaxed text-gray-600 mt-4 md:mt-10">
        If your first dream broke, maybe it was just making space for your real one. <br />
        <span className="font-bold text-[16px] sm:text-[30px] lg:text-[40px]"> Let’s build, break, learn, and rise — uncut, together.</span>
      </p>
    </section>
  );
}

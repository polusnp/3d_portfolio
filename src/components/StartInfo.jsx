import { FaRotateRight, FaRotateLeft } from "react-icons/fa6"

function StartInfo() {
  return (
    <div className="absolute top-[325px] left-0 right-0 z-10 flex items-center justify-center animate-pulse">
      <FaRotateLeft className="text-slate-200 sm:text-xl text-base" />
      <h1 className="sm:text-2xl text-lg sm:leading-snug text-center px-4 text-slate-200">
        DRAG TO EXPLORE
      </h1>
      <FaRotateRight className="text-slate-200 sm:text-xl text-base" />
    </div>
  )
}

export default StartInfo

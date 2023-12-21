import { FaRotateRight, FaRotateLeft } from "react-icons/fa6"

function StartInfo() {
  return (
    <div className="absolute top-72 left-0 right-0 z-10 flex items-center justify-center blue-gradient_text opacity-80 ">
      <FaRotateLeft className=" text-sky-300 animate-pulse" />
      <h1 className="sm:text-xl sm:leading-snug text-center px-6 text-blue-500 animate-pulse">
        DRAG TO EXPLORE
      </h1>
      <FaRotateRight className=" text-sky-300  animate-pulse" />
    </div>
  )
}

export default StartInfo

//

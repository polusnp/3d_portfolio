import { FaRegCopyright } from "react-icons/fa"

function Copyright() {
  return (
    <div className=" z-10 flex items-center justify-center">
      <FaRegCopyright size={10} className="text-slate-100" />
      <p className="text-[10px] mx-4 font-poppins text-slate-100">
        2024 P.Nahurnyi
      </p>
    </div>
  )
}

export default Copyright

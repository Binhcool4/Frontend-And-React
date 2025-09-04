export default function Exersices05() {
  return (
    <div>
        <div className="relative bg-[#b7e8fd] h-[200px] w-[300px] border-20 border-[#d7f2fe] p-4 rounded-2xl">
            <p className="text-left text-[#037cb7]"><b>Relative parent</b></p>
            <div className="absolute bottom-0 left-0 bg-[#0ea5e9] text-white rounded-[5px]">
                <p><b>Absolute child</b></p>
            </div>
        </div>
    </div>
  )
}

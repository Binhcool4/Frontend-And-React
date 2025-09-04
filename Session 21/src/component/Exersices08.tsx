export default function Exersices08() {
  return (
    <div>
        <div>
            {/*Các phần tử nằm bên trái */}
            <div className="flex justify-start gap-[10px] border-y-2">
                <div className="w-[50px] h-[50px] flex justify-center items-center bg-[#3b82f6] text-white rounded-[8px]">
                01
                </div>
                <div className="w-[50px] h-[50px] flex justify-center items-center bg-[#3b82f6] text-white rounded-[8px]">
                02
                </div>
                <div className="w-[50px] h-[50px] flex justify-center items-center bg-[#3b82f6] text-white rounded-[8px]">
                03
                </div>
            </div>
            <br />
            {/*Các phần tử nằm bên phải */}
            <div className="flex justify-end gap-[10px] border-y-2">
                <div className="w-[50px] h-[50px] flex justify-center items-center bg-[#3b82f6] text-white rounded-[8px]">
                01
                </div>
                <div className="w-[50px] h-[50px] flex justify-center items-center bg-[#3b82f6] text-white rounded-[8px]">
                02
                </div>
                <div className="w-[50px] h-[50px] flex justify-center items-center bg-[#3b82f6] text-white rounded-[8px]">
                03
                </div>
            </div>
            <br />
            {/*Các phần tử nằm ở giữa */}
            <div className="flex justify-center gap-[10px] border-y-2">
                <div className="w-[50px] h-[50px] flex justify-center items-center bg-[#3b82f6] text-white rounded-[8px]">
                01
                </div>
                <div className="w-[50px] h-[50px] flex justify-center items-center bg-[#3b82f6] text-white rounded-[8px]">
                02
                </div>
                <div className="w-[50px] h-[50px] flex justify-center items-center bg-[#3b82f6] text-white rounded-[8px]">
                03
                </div>
            </div>
            <br />
            {/*Các phần tử giãn ra hai bên */}
            <div className="flex justify-between gap-[10px] border-y-2">
                <div className="w-[50px] h-[50px] flex justify-center items-center bg-[#3b82f6] text-white rounded-[8px]">
                01
                </div>
                <div className="w-[50px] h-[50px] flex justify-center items-center bg-[#3b82f6] text-white rounded-[8px]">
                02
                </div>
                <div className="w-[50px] h-[50px] flex justify-center items-center bg-[#3b82f6] text-white rounded-[8px]">
                03
                </div>
            </div>
            <br />
            {/*Các phần tử giãn đều 2 bên */}
            <div className="flex justify-around gap-[10px] border-y-2">
                <div className="w-[50px] h-[50px] flex justify-center items-center bg-[#3b82f6] text-white rounded-[8px]">
                01
                </div>
                <div className="w-[50px] h-[50px] flex justify-center items-center bg-[#3b82f6] text-white rounded-[8px]">
                02
                </div>
                <div className="w-[50px] h-[50px] flex justify-center items-center bg-[#3b82f6] text-white rounded-[8px]">
                03
                </div>
            </div>
            <br />
            {/*Các phần tử giữa đều */}
            <div className="flex justify-evenly gap-[10px] border-y-2">
                <div className="w-[50px] h-[50px] flex justify-center items-center bg-[#3b82f6] text-white rounded-[8px]">
                01
                </div>
                <div className="w-[50px] h-[50px] flex justify-center items-center bg-[#3b82f6] text-white rounded-[8px]">
                02
                </div>
                <div className="w-[50px] h-[50px] flex justify-center items-center bg-[#3b82f6] text-white rounded-[8px]">
                03
                </div>
            </div>
        </div>
    </div>
  )
}

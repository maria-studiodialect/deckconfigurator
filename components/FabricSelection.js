import Link from "next/link"
import Image from "next/image"
import CustomSelect from "./CustomSelect"

const FabricSelection = ({text, mainColour, href, icon}) => {
    const skin = [
        { value: null, label: 'Test 1' },
        { value: 'To Let', label: 'Test 2' },
        { value: 'For Sale', label: 'Test 3' },
      ]
    return (
        <div className="bg-beige rounded-xl w-2/5 shadow-xl">
            <div className="px-9 pt-9">
            <div className="flex justify-between">
                <div className="uppercase">Outer Fabric</div>
                <Image src='/arrow-drawer.svg' width={25} height={25} className='rotate-180'/>
            </div>
            <div className="flex justify-between space-x-4">
            <CustomSelect opt={skin} ph='MATERIAL'/>
            <CustomSelect opt={skin} ph='COLOUR'/>
            <CustomSelect opt={skin} ph='PRICE'/>
            </div>
            <div className="mt-7 border-t  border-charcoal/25 py-7 text-xs h-[20vh] overflow-y-scroll pr-4 grid grid-cols-3 gap-4">
                <div>
                    <div className="bg-gray-200 h-20 w-full"></div>
                    <div className="uppercase mt-2">Fabric Name</div>
                    <div className="uppercase mt-1 text-[0.6rem]">Detail</div>
                </div>
                <div>
                    <div className="bg-gray-200 h-20 w-full"></div>
                    <div className="uppercase mt-2">Fabric Name</div>
                    <div className="uppercase mt-1 text-[0.6rem]">Detail</div>
                </div>
                <div>
                    <div className="bg-gray-200 h-20 w-full"></div>
                    <div className="uppercase mt-2">Fabric Name</div>
                    <div className="uppercase mt-1 text-[0.6rem]">Detail</div>
                </div>
                <div>
                    <div className="bg-gray-200 h-20 w-full"></div>
                    <div className="uppercase mt-2">Fabric Name</div>
                    <div className="uppercase mt-1 text-[0.6rem]">Detail</div>
                </div>
                <div>
                    <div className="bg-gray-200 h-20 w-full"></div>
                    <div className="uppercase mt-2">Fabric Name</div>
                    <div className="uppercase mt-1 text-[0.6rem]">Detail</div>
                </div>
                <div>
                    <div className="bg-gray-200 h-20 w-full"></div>
                    <div className="uppercase mt-2">Fabric Name</div>
                    <div className="uppercase mt-1 text-[0.6rem]">Detail</div>
                </div>
                <div>
                    <div className="bg-gray-200 h-20 w-full"></div>
                    <div className="uppercase mt-2">Fabric Name</div>
                    <div className="uppercase mt-1 text-[0.6rem]">Detail</div>
                </div>
                <div>
                    <div className="bg-gray-200 h-20 w-full"></div>
                    <div className="uppercase mt-2">Fabric Name</div>
                    <div className="uppercase mt-1 text-[0.6rem]">Detail</div>
                </div>
                
            </div>
            </div>
            <button className="border-t border-charcoal p-3 px-9 text-center text-sm w-full flex items-center justify-between hover:opacity-50"><span>INNER LINNING</span><Image src='/arrow-drawer.svg' width={25} height={25}/></button>
            <button className="border-t border-charcoal p-3 px-9 text-center text-sm w-full flex items-center justify-between hover:opacity-50"><span>TRIMS</span><Image src='/arrow-drawer.svg' width={25} height={25}/></button>
            <button className="p-3 text-center text-sm w-full rounded-b-xl bg-charcoal flex items-center text-beige hover:opacity-50"><span className="w-full">DONE</span></button>
        </div>
    )
}
export default FabricSelection
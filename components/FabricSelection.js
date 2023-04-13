import Link from "next/link"
import Image from "next/image"
import CustomSelect from "./CustomSelect"
import { useState, useEffect } from "react"
import FabricCard from "./FabricCard"

const FabricSelection = ({productData, productType}) => {
    const test = [
        { value: null, label: 'Test 1' },
        { value: 'To Let', label: 'Test 2' },
        { value: 'For Sale', label: 'Test 3' },
      ]
      
      const [checkedIndex, setCheckedIndex] = useState(-1);

      const handleCardClick = (index) => {
        if (index === checkedIndex) {
            setCheckedIndex(-1);
            sessionStorage.removeItem(`selected${productType}`);
        } else {
            setCheckedIndex(index);
            sessionStorage.setItem(`selected${productType}`, JSON.stringify(productData[index]));
        }
    };
    console.log(productType)
    return (
        <div className="bg-beige rounded-b-xl shadow-xl">
            <div className="px-9 pt-9">
            <div className="flex justify-between">
                <div className="uppercase">Outer Fabric</div>
                <Image src='/arrow-drawer.svg' width={25} height={25} className='rotate-180'/>
            </div>
            <div className="flex justify-between space-x-4">
            <CustomSelect opt={test} ph='MATERIAL'/>
            <CustomSelect opt={test} ph='COLOUR'/>
            <CustomSelect opt={test} ph='PRICE'/>
            </div>
            <div className="mt-7 border-t  border-charcoal/25 py-7 text-xs h-[20vh] overflow-y-scroll pr-4 grid grid-cols-3 gap-4">
                {productData.map((product, index) => (
                        <FabricCard
                        key={index}
                        img={product.img}
                        price={product.price}
                        title={product.title}
                        isChecked={index === checkedIndex}
                        onCheck={() => handleCardClick(index)}
                        />
                    ))}
                
            </div>
            </div>
            <button className="border-t border-charcoal p-3 px-9 text-center text-sm w-full flex items-center justify-between hover:opacity-50"><span>INNER LINNING</span><Image src='/arrow-drawer.svg' width={25} height={25}/></button>
            <button className="border-t border-charcoal p-3 px-9 text-center text-sm w-full flex items-center justify-between hover:opacity-50"><span>TRIMS</span><Image src='/arrow-drawer.svg' width={25} height={25}/></button>
            <Link href='/checkout'><button className="p-3 text-center text-sm w-full rounded-b-xl bg-charcoal flex items-center text-beige hover:opacity-50"><span className="w-full">DONE</span></button></Link>
        </div>
    )
}
export default FabricSelection
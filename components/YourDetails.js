import Link from "next/link"
import { useEffect, useState } from 'react'

const YourDetails = ({text, mainColour, href, icon}) => {
    const [isHidden, setIsHidden] = useState(false)
    const [formData, setFormData] = useState(null)
    useEffect(() => {
        const storedData = JSON.parse(sessionStorage.getItem('formData') || '{}');
        setFormData(storedData)
    }, []) // <-- removed formData from dependency array
    return (
        <div className={`flex items-center md:block `}>
        <div className={`bg-beige rounded-xl p-9 md:w-1/4 shadow-xl ${isHidden ? 'hidden': 'block'}`}>
            <div>YOUR DETAILS</div>
            <div className="mt-3 text-sm">Lorem ipsum dolor sit amet dictum consectetur adipiscing elit. Etiameu turpis molestie.</div>
            {formData &&
            <div className="grid grid-cols-2 gap-3 mt-7 border-y py-7 text-sm">
                <div>NAME</div>
                <div className="text-end">{formData.name}</div>
                <div>AGE</div>
                <div className="text-end uppercase">{formData.age} yrs</div>
                <div>HEIGHT</div>
                <div className="text-end uppercase">{formData.height} {formData.heightUnit}</div>
                <div>WEIGHT</div>
                <div className="text-end uppercase">{formData.weight} {formData.weightUnit}</div>
                <div>SKIN TONE</div>
                <div className="rounded-full w-5 h-5 justify-self-end" style={{backgroundColor: formData.skinTone}}></div>
            </div>
            }
        </div>
        <div className="bg-charcoal text-beige h-fit py-3 px-1 rounded-r-lg vertical md:hidden mr-4" onClick={() =>  setIsHidden(!isHidden)}>DETAILS</div>
        </div>
    )
}
export default YourDetails

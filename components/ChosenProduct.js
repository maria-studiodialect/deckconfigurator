import Link from "next/link"
import Image from "next/image"
import ButtonNoLink from "./ButtonNoLink"
import { useEffect, useState } from "react"


function getTextByNumber(number) {
    switch(number) {
        case 0:
        return "THREE PIECE SUIT";
        case 1:
        return "TWO PIECE SUIT";
        case 2:
        return "JACKET";
        case 3:
        return "TROUSERS";
        default:
        return "Invalid number provided";
    }
}


const ChosenProduct = () => {
    const [chosenSet, setChosenSet] = useState()
    const [chosenJacket, setChosenJacket] = useState(null)
    const [chosenTrousers, setChosenTrousers] = useState(null)
    const [chosenWaistcoat, setChosenWaistcoat] = useState(null)
    const [price, setPrice] = useState()

    useEffect(() => {
        const set = sessionStorage.getItem('chosenSet');
        const jacket = JSON.parse(sessionStorage.getItem('jacket'));
        const trouser = JSON.parse(sessionStorage.getItem('trousers'));
        const waistcoat = JSON.parse(sessionStorage.getItem('waistcoat'));
        if (set !== null) {
            setChosenSet(parseInt(set));
        }
        if (jacket !== null) {
            setChosenJacket(jacket);
        }
        if (trouser !== null) {
            setChosenTrousers(trouser);
        }
        if (waistcoat !== null) {
            setChosenWaistcoat(waistcoat);
        }

        const totalPrice = (jacket ? parseInt(jacket.price) : 0) +
                           (trouser ? parseInt(trouser.price) : 0) +
                           (waistcoat ? parseInt(waistcoat.price) : 0);
        setPrice(totalPrice);
    }, [])

    return (
        <div className="bg-beige rounded-xl w-1/4 shadow-xl">
            <div className="px-9 pt-9">
            <div>{getTextByNumber(chosenSet)}</div>
            <div className="text-end text-sm font-bold">£{price}</div>
            <div className="mt-7 border-t  border-charcoal/25 py-7 text-xs h-[20vh] overflow-y-scroll pr-4">
                {[0,1,2].includes(chosenSet) &&
                <>
                    <div className="mb-3 uppercase">{chosenJacket.title}</div>
                    <div>{chosenJacket.description}</div>
                </>    
                }
                {[0,1,3].includes(chosenSet) &&
                <>
                    <div className="my-3 uppercase border-t pt-3">{chosenTrousers.title}</div>
                    <div>{chosenTrousers.description}</div>
                </>
                }
                {chosenWaistcoat !== null &&
                <>
                    <div className="my-3 uppercase border-t pt-3">{chosenWaistcoat.title}</div>
                    <div>{chosenWaistcoat.description}</div>
                </>
                }
            </div>
            </div>
            <button className="border-t border-charcoal p-3 text-center text-sm w-full flex items-center hover:opacity-50"><Image src='/change.svg' width={25} height={25}/><span className="w-full">CHANGE POSE</span></button>
            <button className="border-t border-charcoal p-3 text-center text-sm w-full flex items-center hover:opacity-50"><Image src='/camera.svg' width={25} height={25}/><span className="w-full">SAVE SNAPSHOT</span></button>
            <Link href='/fabric-selection'><button className="p-3 text-center text-sm w-full rounded-b-xl bg-charcoal flex items-center text-beige hover:opacity-50"><Image src='/fabric.svg' width={25} height={25}/><span className="w-full">CHOOSE FABRIC</span></button></Link>
        </div>
    )
}
export default ChosenProduct
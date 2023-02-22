import Link from "next/link"

const YourDetails = ({text, mainColour, href, icon}) => {
    return (
        <div className="bg-beige rounded-xl p-9 w-1/4 shadow-xl">
            <div>YOUR DETAILS</div>
            <div className="mt-3 text-sm">Lorem ipsum dolor sit amet dictum consectetur adipiscing elit. Etiameu turpis molestie.</div>
            <div className="grid grid-cols-2 gap-3 mt-7 border-y py-7 text-sm">
                <div>NAME</div>
                <div className="text-end">Joanna Smith</div>
                <div>AGE</div>
                <div className="text-end">32 YRS</div>
                <div>WEIGHT</div>
                <div className="text-end">52KG</div>
                <div>HEIGHT</div>
                <div className="text-end">148CM</div>
                <div>SKIN TONE</div>
                <div className="rounded-full bg-yellow-600 w-5 h-5 justify-self-end"></div>
            </div>
        </div>
    )
}
export default YourDetails
import Link from "next/link"

const YourMeasurements = ({text, mainColour, href, icon}) => {
    return (
        <div className="bg-beige rounded-xl p-9 w-1/4 shadow-xl">
            <div className="uppercase">YOUR MeasurementS</div>
            <div className="grid grid-cols-[0.8fr_0.2fr] gap-3 mt-5 border-y py-5 text-sm">
                <div>SLEEVE LENGTH</div>
                <div className="text-end">26.1 IN</div>
                <div>SHOULDER WIDTH</div>
                <div className="text-end">17.2 IN</div>
                <div>CHEST AROUND</div>
                <div className="text-end">17.2 IN</div>
                <div>WAIST</div>
                <div className="text-end">31.9 IN</div>
            </div>
            <div className="grid grid-cols-[0.8fr_0.2fr] gap-3 mb-5 border-b py-5 text-sm">
                <div>TROUSER LENGTH</div>
                <div className="text-end">35.1 IN</div>
                <div>LEG LENGTH</div>
                <div className="text-end">43.5 IN</div>
                <div>HIPS</div>
                <div className="text-end">39.9 IN</div>
                <div>THIGH</div>
                <div className="text-end">22.8 IN</div>
            </div>
            <button className="border border-charcoal p-3 text-center text-sm w-full uppercase hover:bg-charcoal hover:text-beige">EDIT MeasurementS</button>
        </div>
    )
}
export default YourMeasurements
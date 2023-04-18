import Link from "next/link"
import { useEffect, useState } from "react";
import RangeSlider from "./RangeSlider";

const RefineProportions = () => {

    return (
        <div className="hidden md:block bg-beige rounded-xl p-9 w-1/4 shadow-xl">
            <div className="uppercase">Refine Proportions</div>
            <div className="grid grid-cols-2 gap-3 mt-7 border-t pt-7 text-sm">
                <div>ABDOMEN</div>
                <div className="text-end text-xs">SIZE HERE</div>
                <div className="col-span-2">
                <RangeSlider/>
                </div>
                <div>WAIST</div>
                <div className="text-end text-xs">SIZE HERE</div>
                <div className="col-span-2">
                    <RangeSlider/>
                </div>
                <div>HIP</div>
                <div className="text-end text-xs">SIZE HERE</div>
                <div className="col-span-2">
                    <RangeSlider/>
                </div>
                <div>BUST</div>
                <div className="text-end text-xs">SIZE HERE</div>
                <div className="col-span-2">
                    <RangeSlider/>
                </div>
            </div>
        </div>
    )
}
export default RefineProportions
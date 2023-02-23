import Link from "next/link"
import Image from "next/image"

const ChosenProduct = ({text, mainColour, href, icon}) => {
    return (
        <div className="bg-beige rounded-xl w-1/4 shadow-xl">
            <div className="px-9 pt-9">
            <div>THREE PIECE SUIT</div>
            <div className="text-end text-sm">£2500</div>
            <div className="mt-7 border-t  border-charcoal/25 py-7 text-xs h-[20vh] overflow-y-scroll pr-4">
                <div className="mb-3">DOUBLE BRESTED JACKET</div>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum viverra suscipit turpis sed hendrerit. Phasellus sit amet est eget libero ultrices elementum. Curabitur lacinia, velit non feugiat semper, tortor sapien cursus nibh, fermentum tincidunt quam ipsum nec enim. Suspendisse ut placerat nibh, ut gravida arcu. Mauris sed ex nec enim convallis porta laoreet at quam. Proin fringilla ligula ac interdum elementum. Vivamus vulputate vel urna ac sollicitudin. Pellentesque eget sem fringilla, ultricies dui eget, lacinia augue. Quisque finibus ultrices velit vitae rutrum.</div>
                
            </div>
            </div>
            <button className="border-t border-charcoal p-3 text-center text-sm w-full flex items-center hover:opacity-50"><Image src='/change.svg' width={25} height={25}/><span className="w-full">CHANGE POSE</span></button>
            <button className="border-t border-charcoal p-3 text-center text-sm w-full flex items-center hover:opacity-50"><Image src='/camera.svg' width={25} height={25}/><span className="w-full">SAVE SNAPSHOT</span></button>
            <Link href='/fabric-selection'><button className="p-3 text-center text-sm w-full rounded-b-xl bg-charcoal flex items-center text-beige hover:opacity-50"><Image src='/fabric.svg' width={25} height={25}/><span className="w-full">CHOOSE FABRIC</span></button></Link>
        </div>
    )
}
export default ChosenProduct
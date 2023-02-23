import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Button from '@/components/Button'
import Header from '@/components/Header'
import YourDetails from '@/components/YourDetails'
import RefineProportions from '@/components/RefineProportions'
import Link from 'next/link'
import YourMeasurements from '@/components/YourMeasurements'
import ProductCard from '@/components/ProductCard'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Suit() {
    const [selected, setSelected] = useState(null);
    const [opacity, setOpacity] = useState([1, 1, 1, 1]);
        
    const handleCardClick = (index) => {
        setSelected(index);
        setOpacity(opacity.map((o, i) => (i === index ? 1 : 0.5)));
    };
    console.log(opacity);
    const products =  [
        {img:'/three-piece.webp', title:'Three Piece'},
        {img:'/two-piece.webp', title:'Two Piece'},
        {img: '/safari.webp', title:'Jacket'}, 
        {img:'/trousers.webp', title:'Trousers'},
    ]
    return (
        <>
        <Head>
            <title>The Deck Configurator</title>
            <meta name="description" content="The Deck Configurator" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header fill='#2F2727'/>
        <div className="h-screen w-screen bg-beige flex justify-center items-center p-7">
            <div>
                <div className='uppercase mb-5 text-sm'>Select your suit</div>
                <div className='flex space-x-2'>
                {products.map((product, index) => (
                    <ProductCard
                    key={product.id}
                    img={product.img}
                    title={product.title}
                    isChecked={index === selected}
                    handleCardClick={() => handleCardClick(index)}
                    cardOpacity={opacity[index]}
                    />
                ))}
                </div>
            </div>
        </div>
        <div className='flex justify-between items-center mr-14 absolute bottom-7 w-full px-7'>
            <Link href='/measurements'>
            <svg width="50" height="37" viewBox="0 0 50 37" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-4 w-7 rotate-180">
                <path d="M31.25 0.5C31.25 0.5 34.3071 18.5 50 18.5" stroke="#2F2727" stroke-width="2" stroke-miterlimit="10"/>
                <path d="M31.25 36.5C31.25 36.5 34.3071 18.5 50 18.5" stroke="#2F2727" stroke-width="2" stroke-miterlimit="10"/>
                <path d="M50 18.5L0 18.5" stroke="#2F2727" stroke-width="2" stroke-miterlimit="10"/>
            </svg>
            </Link>
            <Button href='/silhouette' mainColour='text-charcoal' text='Next step' icon='#2F2727' />
        </div>
        </>
    )
}

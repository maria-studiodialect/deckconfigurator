import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Button from '@/components/Button'
import Header from '@/components/Header'
import YourDetails from '@/components/YourDetails'
import RefineProportions from '@/components/RefineProportions'
import Link from 'next/link'
import YourMeasurements from '@/components/YourMeasurements'

const inter = Inter({ subsets: ['latin'] })

export default function Measurements() {
    return (
        <>
        <Head>
            <title>Create Next App</title>
            <meta name="description" content="The Deck Configurator" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header fill='#2F2727'/>
        <div className="h-screen w-screen bg-gray-200 flex justify-between items-center p-7">
            <YourMeasurements/>
        </div>
        <div className='flex justify-between items-center mr-14 absolute bottom-7 w-full px-7'>
            <Link href='/details'>
            <svg width="50" height="37" viewBox="0 0 50 37" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-4 w-7 rotate-180">
                <path d="M31.25 0.5C31.25 0.5 34.3071 18.5 50 18.5" stroke="#2F2727" stroke-width="2" stroke-miterlimit="10"/>
                <path d="M31.25 36.5C31.25 36.5 34.3071 18.5 50 18.5" stroke="#2F2727" stroke-width="2" stroke-miterlimit="10"/>
                <path d="M50 18.5L0 18.5" stroke="#2F2727" stroke-width="2" stroke-miterlimit="10"/>
            </svg>
            </Link>
            <Button href='/suit' mainColour='text-charcoal' text='Next step' icon='#2F2727' />
        </div>
        </>
    )
}

import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Button from '@/components/Button'
import CustomSelect from '@/components/CustomSelect'
import Link from 'next/link'
import Header from '@/components/Header'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

const COLORS = [
  '#ff0000', // red
  '#00ff00', // green
  '#0000ff', // blue
  '#ffff00', // yellow
];

export default function BaseInfo() {

  const [width, setWidth] = useState()

  const skin = [
    { value: null, label: 'Test 1' },
    { value: 'To Let', label: 'Test 2' },
    { value: 'For Sale', label: 'Test 3' },
  ]

  useEffect(() => {
    setWidth(window.innerWidth);
  })
  
  return (
    <>
      <Head>
        <title>The Deck Configurator</title>
        <meta name="description" content="The Deck Configurator" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header fill={ width < 1024 ? '#2F2727' : 'white'}/>
      <div className='lg:grid grid-cols-2 bg-beige min-h-screen'>
        <div className='relative w-[50vw] h-screen z-0 hidden lg:block'>
        <Image src='/bg-img.webp' fill className='object-cover' />
        </div>
      <div className='bg-beige flex justify-center items-center px-7 pt-36 lg:pt-0 md:px-24'>
        <div>
          <div className='mb-3'>ENTER YOUR BASE INFORMATION</div>
          <div className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ullamcorper bibendum dui, nec condimentum quam dignissim in.</div>
          <form action="/send-data-here" method="post">
            <div className='grid grid-cols-2 mt-10 gap-8'>
            <div>
              <label for="first">NAME</label><br/>
              <input type="text" id="first" name="first" className='bg-transparent border-b border-charcoal mt-3 text-sm pb-2 w-full'/>
            </div>
            <div>
              <label for="last">AGE</label><br/>
              <input type="text" id="last" name="last" className='bg-transparent border-b border-charcoal mt-3 text-sm pb-2 w-full'/>
            </div>
            <div>
              <label for="last">HEIGHT</label><br/>
              <input type="text" id="last" name="last" className='bg-transparent border-b border-charcoal mt-3 text-sm pb-2 w-full'/>
            </div>
            <div>
              <label for="last">WEIGHT</label><br/>
              <input type="text" id="last" name="last" className='bg-transparent border-b border-charcoal mt-3 text-sm pb-2 w-full'/>
            </div>
            </div>
            <CustomSelect opt={skin} ph='SKIN TONE (OPTIONAL)'/>
            {/*<button type="submit">Submit</button>*/}
          </form>
        </div>
      </div>
      </div>
      <div className='flex justify-between items-center mr-14 absolute bottom-7 w-full px-7'>
        <Link href='/'>
        <svg width="50" height="37" viewBox="0 0 50 37" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-4 w-7 rotate-180">
            <path d="M31.25 0.5C31.25 0.5 34.3071 18.5 50 18.5" stroke="white" stroke-width="2" stroke-miterlimit="10"/>
            <path d="M31.25 36.5C31.25 36.5 34.3071 18.5 50 18.5" stroke="white" stroke-width="2" stroke-miterlimit="10"/>
            <path d="M50 18.5L0 18.5" stroke="white" stroke-width="2" stroke-miterlimit="10"/>
        </svg>
        </Link>
        <Button href='/details' mainColour='text-charcoal' text='Start designing' icon='#2F2727' />
      </div>
    </>
  )
}

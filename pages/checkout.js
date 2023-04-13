import Head from 'next/head'
import Image from 'next/image'
import ButtonClick from '@/components/ButtonClick'
import Header from '@/components/Header'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import FinalProduct from '@/components/FinalProduct'



export default function Checkout() {
    const [checkoutUrl, setCheckoutUrl] = useState(null);
    const [jacket, setJacket] = useState(null);
    const [trouser, setTrouser] = useState(null);
    const [jacketFabric, setJacketFabric] = useState(null);
    const [trouserFabric, setTrouserFabric] = useState(null);

    useEffect(() => {
      // const storedSizes = JSON.parse(sessionStorage.getItem("sizes"));
      const storedJacket = JSON.parse(sessionStorage.getItem('jacket'));
      const storedTrouser = JSON.parse(sessionStorage.getItem('trousers'));
      const storedJacketFabric = JSON.parse(sessionStorage.getItem('selectedJacketFabric'));
      const storedTrouserFabric = JSON.parse(sessionStorage.getItem('selectedTrouserFabric'));


      if (storedJacket !== null) {
          setJacket(storedJacket);
      }
      if (storedTrouser !== null) {
          setTrouser(storedTrouser);
      }
      if (storedJacketFabric !== null) {
          setJacketFabric(storedJacketFabric);
      }
      if (storedTrouserFabric !== null) {
          setTrouserFabric(storedTrouserFabric);
      }
    }, []);


    async function handleCreateCheckout() {
      const lineItems = [  ...(jacket ? [{ quantity: 1, variantId: jacket.id }] : []),
        ...(trouser ? [{ quantity: 1, variantId: trouser.id }] : []),
        ...(jacketFabric ? [{ quantity: 1, variantId: jacketFabric.id }] : []),
        ...(trouserFabric ? [{ quantity: 1, variantId: trouserFabric.id }] : []),
      ];

        console.log(lineItems)
      
        const response = await fetch('/api/createCheckout', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ lineItems }),
        });
      
        const data = await response.json();
      
        if (!response.ok) {
          throw new Error(data.message);
        }
      
        window.open(data.webUrl, '_blank', 'noopener,noreferrer'); // Open the checkout URL in a new tab or window
      }
      
      

    return (
        <>
        <Head>
            <title>The Deck Configurator</title>
            <meta name="description" content="The Deck Configurator" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header fill='#2F2727'/>
        <div className="h-screen w-screen bg-gray-200 flex justify-between items-center p-7">
          <FinalProduct/>
        </div>
        <div className='flex justify-between items-center mr-14 absolute bottom-7 w-full px-7'>
            <Link href='/fabric-selection'>
            <svg width="50" height="37" viewBox="0 0 50 37" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-4 w-7 rotate-180">
                <path d="M31.25 0.5C31.25 0.5 34.3071 18.5 50 18.5" stroke="#2F2727" stroke-width="2" stroke-miterlimit="10"/>
                <path d="M31.25 36.5C31.25 36.5 34.3071 18.5 50 18.5" stroke="#2F2727" stroke-width="2" stroke-miterlimit="10"/>
                <path d="M50 18.5L0 18.5" stroke="#2F2727" stroke-width="2" stroke-miterlimit="10"/>
            </svg>
            </Link>
            <ButtonClick click={handleCreateCheckout} mainColour='text-charcoal' text='Checkout' icon='#2F2727' />
        </div>
        </>
    )
}

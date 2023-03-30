import React from 'react'
import { Unity, useUnityContext } from 'react-unity-webgl'


function UnityBuild() {
    const { unityProvider, sendMessage } = useUnityContext({
        loaderUrl: '/unity/Build/TheDeckModelViewer.loader.js',
        dataUrl: '/unity/Build/TheDeckModelViewer.data',
        frameworkUrl: '/unity/Build/TheDeckModelViewer.framework.js',
        codeUrl: '/unity/Build/TheDeckModelViewer.wasm',
    });

    function handleColor() {
        sendMessage("[Bridge]", "ChangeColor");
    }
    return (
        <>
        <div style={{ position: 'fixed', top: '0', left:'0', width: '100%', paddingBottom: '56.25%' }}>
        <Unity
            unityProvider={unityProvider}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
            }}
            />
        </div>
        <div className='absolute top-0 right-0 w-screen h-screen pointer-events-none flex justify-center items-center'><button onClick={handleColor} className='z-10 pointer-events-auto h-fit bg-slate-200 px-5 py-1 rounded-2xl'>Send Message</button></div>
        </>
    )
}

export default UnityBuild

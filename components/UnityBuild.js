import React from 'react'
import { Unity, useUnityContext } from 'react-unity-webgl'


function UnityBuild() {
    const { unityProvider, sendMessage } = useUnityContext({
        loaderUrl: '/unity/Build/BridgeTestBuild.loader.js',
        dataUrl: '/unity/Build/BridgeTestBuild.data',
        frameworkUrl: '/unity/Build/BridgeTestBuild.framework.js',
        codeUrl: '/unity/Build/BridgeTestBuild.wasm',
    });

    function handleClick() {
        sendMessage("[Bridge]", "ReceiveMessage", 'hi!');
    }
    return (
        <>
        <button onClick={handleClick}>Send Message</button>
        <Unity unityProvider={unityProvider} width={960} height={600}/>
        </>
    )
}

export default UnityBuild

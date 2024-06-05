import {setApiKey, setCurrentPage, setFingerprint} from "~/stores/useWidgetStore";

interface IframeControl {
    updateCoreValueOnStore(): void
    notifyOpen(): void
    notifyClose(): void
}

export default function useIframeControl (): IframeControl {
//setar as configurações do iframe na init.js na store quando montar o widget

    function updateCoreValueOnStore(){
        if(process.env.NODE_ENV === 'production'){
            const query = new URLSearchParams(window.location.search)
            const apiKey = query.get('api_key') ?? ''
            const page = query.get('page') ?? ''
            const fingerprint = query.get('fingerprint') ?? ''

            setCurrentPage(page)
            setApiKey(apiKey)
            setFingerprint(fingerprint)

            return
        } else {
            setCurrentPage('https://playground-url.com')
            setApiKey('5q2R83Eng7KLZlKmhw2yRMg1SgNj4cDDMon3EHYqgS2V2npWbji2XQP9Esdo')
            setFingerprint('8978678587565')
        }
    }

    function notifyClose(){
        window.parent.postMessage({
            isWidget: true,
            isOpen: false
        }, '*')
    }

    function notifyOpen(){
        window.parent.postMessage({
            isWidget: true,
            isOpen: true
        }, '*')
    }

    return {
        updateCoreValueOnStore, notifyClose, notifyOpen
    }
}
const localHost = 'http://localhost:3001'
const localApi = 'http://127.0.0.1:8000'
function init (apikey){
    async function handleLoadWidget(){
        const page = `${window.location.origin}${window.location.pathname}`
        // const fp = await window.FingerprintJS.load()
        // const fingerprint = await fp.get()
        const fingerprint = 'fingerprint'
        //URL DO WIDGET FEEDBACKER
        const WIDGET_URL = `${localHost}?api_key=${apikey}&page=${page}&fingerprint=${fingerprint}`
        const config = {method: 'HEAD'}
        const res = await fetch(`${localApi}/api/apikey/exists?api_key=${apikey}`, config)
        if(res.status === 200){
            const iframe = document.createElement('iframe')
            iframe.src = WIDGET_URL
            iframe.id = 'feedbacker-iframe'
            iframe.style.position = 'fixed'
            iframe.style.bottom = '0px'
            iframe.style.right = '0px'
            iframe.style.overflow = 'hidden'
            iframe.style.border = '0px'
            iframe.style.zIndex = '99999'
            document.body.appendChild(iframe)
            window.addEventListener('message', (event) => {
              if(!event.data.isWidget) return
              if(event.data.isOpen){
                  iframe.width = '100%'
                  iframe.height = '100%'
              } else {
                  iframe.width = '300px'
                  iframe.height = '150px'
              }
            })
            return
        }
        console.log('* [feedbacker] was not loaded because apikey does not exists')
    }
    const script = document.createElement('script')
    script.src = 'https://openfpcdn.io/fingerprintjs/v4'
    script.async = 'async'
    script.addEventListener('load', handleLoadWidget)
    document.body.appendChild(script)
}
window.init = init

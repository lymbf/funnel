export const pv = (GA_MEASUREMENT_ID:string, url:string)=>{
    // @ts-ignore
    window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: url
    })
}
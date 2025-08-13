declare global {
    interface Window {
        cloudinary: any;
        gtag: (...args: any[]) => void;
    }
}

export const pv = (GA_MEASUREMENT_ID:string, url:string)=>{
    console.log('ga id: ', GA_MEASUREMENT_ID);
    window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: url
    })
    console.log('window.gtag: ', window.gtag)
}
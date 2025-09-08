import localFont from 'next/font/local'
const k95alphabet = localFont({src: '../public/fonts/k95alphabet/K95Alphabet.ttf'})

export default function Logo({style} : any){
    return(
        <img src="/images/keita.png" className="h-6 w-auto"/>
    )
}

//* {/*<span className={`${k95alphabet.className} ${style} font-semibold`}>KEITA</span>*/}
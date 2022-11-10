import logo from '../assets/logo-twitter.webp'

export function PageNotFound(){
  return(
    <div className="h-[100vh]">
      <header className="bg-primary-blue-active h-[25%] flex items-center justify-center">
        <h1 className="text-dark-8 text-40 uppercase font-700 tracking-[.2em]">Twitter</h1>
      </header>
      <main className="h-[75%] flex flex-col items-center pt-12">
        <h2 className='text-black font-700 text-40'>Error 404 - Page not found</h2>
        <img src={logo} alt="" width={200} height={200} className='mt-8'/>
        <p className='mt-8 text-dark-3 text-19'>Descupe! Essa página não existe</p>
      </main>
    </div>
  )
}
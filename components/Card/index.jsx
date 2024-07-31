import Image from "next/image";

export default function Card({name, symbol, image, balance, color}) {
  return (
        <div className='px-8 bg-black pt-32 pb-0 flex justify-center opacity-90 h-fit'>
            <div className={ 'w-full max-w-sm bg-blue-200 border-4 border-blue-700 rounded-xl shadow sm:p-6 hover:scale-105 duration-300 transition-all'}>
                <div className="flex flex-row justify-between">
                    <h5 class="mb-4 text-2xl font-bold font-sans text-black">{name}</h5>
                    <h5 class="mb-4 text-2xl font-thin font-sans text-black">{symbol}</h5>
                </div> 
                <div className=' text-sm font-bold font-sans text-black basis-1 inline-flex justify-center pt-2 md:basis-2/3 mt-3 mb-6 md:mr-10 md:pl-10'>
                    <Image 
                        src={image} 
                        width={500}
                        height={500}
                        alt='token image'
                        className="rounded-full" />
                </div>                
                <div class="flex items-baseline text-black">
                    <span class="text-xl font-thin tracking-tight">balance:</span>
                </div>
                <div class="flex items-baseline text-black">
                    <span class="text-gray-800 text-6xl font-sans font-semibold tracking-tight">{balance}</span>
                </div>
            </div>
        </div>
      );    
  
}
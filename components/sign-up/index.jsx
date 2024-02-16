"use client"
import Image from 'next/image'
const SignUp = ()=>{
    return (
        <div className="grid grid-cols-2">
            <div className='flex flex-col items-center justify-center min-h-screen bg-[#ECE9EC] gap-8'>
                <div className='flex flex-col items-center gap-2'>
                    <h1 className='text-4xl font-bold'>Edex</h1>
                    <p className='text-dm text-[grey]'>Let's learn something new today!</p>
                </div>
                <Image 
                    src="/images/sign.svg"
                    alt="sign"
                    width={400}
                    height={400}
                />
            </div>
            <div>2</div>
        </div>
    )
}

export default SignUp;
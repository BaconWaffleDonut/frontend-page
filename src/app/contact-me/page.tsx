import cookie from '@/app/coffee/cookie-svgrepo-com.svg'
import Image from 'next/image'
import Link from 'next/link'

export default function Page () {
    return (
        <div className="py-16">
            <p className="text-center text-4xl text-red-500">What are you looking for? 
                <br />
                Well here take a cookie for your journey
                <Link href={"./"}>
                    <Image
                        src={cookie}
                        aria-label='cookie'
                        alt='c o o k i e'
                        height={200}
                        width={200}
                        className='mx-auto'
                    />
                </Link>
            </p>
        </div>
    )
}
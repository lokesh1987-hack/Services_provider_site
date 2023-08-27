import Image from 'next/image'
import Link from 'next/link'
import LandingBanner from '../Components/HomePage/LandingServicesBanner'
import { SERVICES_DATA } from '../DEMO_DATA/Data'


function services() {
    return (
        <div>
            <LandingBanner />
            <div className='flex flex-col'>
                {SERVICES_DATA.map(({ id, section_name, card_title, card_description, git_url, image_url, heading, approches }) => {
                    return (
                        <div className="mt-10" key={id}>
                            {/* Section Heading  */}
                            <h1 className="mb-5">{section_name}</h1>
                            <hr />
                            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-10 lg:mx-10'>

                                {/* Card */}
                                <div className='h-full' >
                                    <div className={`bg-slate-50 rounded-md py-5 px-8 md:p-5 lg:py-16 lg:px-10 `} >
                                        <h2 className="text-2xl">{card_title}</h2>
                                        <p className="mt-4 sm:mt-4 md:mt-5 text-sm  md:text-lg lg:text-xl font-light text-slate-400" >{card_description}</p>
                                        <div className='mt-6 sm:mt-6 md:mt-10'>
                                            <Link className=" bg-black text-white py-2 px-3 rounded-full" href={git_url} >Get in Touch</Link>
                                        </div>
                                    </div>
                                </div>

                                {/* Image with Description  */}
                                <div className='lg:col-span-3 md:col-span-2'>
                                    <Image src={image_url} width={1100} height={1000} style={{ width: "auto", height: "auto" }} alt='check Network' />
                                    <p className=' lg:text-4xl my-8'>{heading}</p>
                                    <div className='lg:mr-12 mt-5  '>
                                        {approches.map(({ id, name, desc }) => {
                                            return (
                                                <div key={id} className='mt-7 flex flex-col lg:flex-row  gap-5 lg:mb-5'>
                                                    <div className='w-full'>
                                                        <p className='lg:text-sm'>{name}</p>
                                                    </div>
                                                    <div>
                                                        <p className="lg:text-sm ">{desc}</p>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>

                                </div>
                            </div>
                        </div >
                    )

                })}
            </div>
        </div >
    )
}

export default services
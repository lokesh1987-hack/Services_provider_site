/* Import Packages */
import Image from 'next/image'
import Link from 'next/link'

/* Import Data */
import { FOOTER_DATA, SOCIAL_MEDIA } from '../DEMO_DATA/Data'

function Footer() {
    return (
        <div className="w-full mt-16 mb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                <div className='md:col-span-2 lg:col-span-1'>
                    <img src="https://assets.website-files.com/63c3f1995d4c3581bbc944b5/63c3fed42405e70f33df42ee_logo.svg" style={{ width: "auto", height: "auto" }} className="mt-3 mr-3" alt="Company Logo" />
                    <div className='flex mt-5 h-5 w-50'>
                        {SOCIAL_MEDIA.map(({ id, logo, url }) => {
                            return (
                                <a href={url} key={id}>
                                    <Image src={logo} width={30} height={30} className=" mr-3" alt="check network" />
                                </a>
                            )
                        })}
                    </div>
                </div>
                {FOOTER_DATA.map(({ id, title, data }: FooterType) => (
                    <div key={id}>
                        <p className='text-lg md:text-xl my-2'> {title}</p>
                        <hr />
                        {data.map(({ id, name, path }: LinkData) => (
                            <div key={id} className='my-3'>
                                <Link href={path} className='text-sm md:text-lg'>{name}</Link>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <hr className='mt-10' />
        </div>
    )
}

export default Footer
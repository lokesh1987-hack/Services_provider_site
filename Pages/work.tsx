/* Import Packages */
import Image from 'next/image'

/* Import Components */
import LandingBanner from '../Components/HomePage/LandingServicesBanner'
import Contact from '../Components/Contact'

/* Import Data */
import { WORK_DATA } from '../DEMO_DATA/Data'

function Work() {
    return (
        <div>
            <LandingBanner />
            <div className='my-20'>
                {WORK_DATA.map(({ id, image_url, project_name, category_name }: WorkDataType) => {
                    return (
                        <div key={id}>
                            <div className="flex justify-between mt-10 mb-3 md:mt-10 md:mb-5">
                                <button className="mt-4 sm:mt-4 md:mt-2 text-xl" >{project_name}</button>
                                <button className="text-sm  px-5 py-0 mt-4 md:mt-2  text-gray-900 bg-gray-100 rounded-full border border-gray-200 hover:text-white hover:bg-gray-900" >{category_name}</button>
                            </div>
                            <div className="overflow-hidden">
                                <Image src={image_url} alt="Please check your network" width={0} height={0} layout="responsive" objectFit="contain" className="hover:scale-125" />
                            </div>
                        </div>)
                })}
            </div>
            <Contact />
        </div>
    )
}

export default Work
import Image from "next/image"
import { WORK_DATA } from "../../DEMO_DATA/Data"

function OurWorks() {
    return (
        <div className="my-24">
            <h1 className="mb-5">OUR WORK</h1>
            <hr />
            <div className="flex justify-between py-10">
                <h1 className=" text-5xl">Selected Work</h1>
                <button className="hidden md:block text-xl px-5 py-2 mt-2  text-gray-900 bg-gray-100 rounded-full border border-gray-200 hover:text-white hover:bg-gray-900">All Work</button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {WORK_DATA.map(({ id, image_url, project_name, category_name, category_url }: WorkDataType) => {
                    return (
                        <div key={id}>
                            <div className=" overflow-hidden">
                                <Image src={image_url} alt="Please check your network" width={900} height={500} className="hover:scale-125" />
                            </div>
                            <div className="flex justify-between mt-2">
                                <button className="mt-4 sm:mt-4 md:mt-2 text-xl" >{project_name}</button>
                                <button className="text-sm px-5 py-0 mt-2  text-gray-900 bg-gray-100 rounded-full border border-gray-200 hover:text-white hover:bg-gray-900" >{category_name}</button>
                            </div>
                        </div>)
                })
                }
            </div>
        </div>
    )
}

export default OurWorks
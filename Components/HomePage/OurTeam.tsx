import Image from "next/image"
import { TEAM_DATA } from '../../DEMO_DATA/Data'

function OurTeam() {
    return (
        <div className="my-32">
            <h1 className="mb-5">OUR TEAM</h1>
            <hr />
            <div className="flex justify-between py-10">
                <h1 className=" text-5xl">Our Team Of Experts</h1>
                <button className="hidden md:block text-xl px-5 py-2 mt-2  text-gray-900 bg-gray-100 rounded-full border border-gray-200 hover:text-white hover:bg-gray-900">About Us</button>
            </div>
            <div className="grid mb-24 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
                <div className={`bg-slate-50 py-5 px-8 md:p-10 lg:py-16 lg:px-10 md:col-span-2 lg:col-span-1 `}>
                    <div className="mt-20">
                        <div>
                            <h2 className="mt-4 sm:mt-4 md:mt-5 text-sm  md:text-sm lg:text-lg font-light text-slate-400">JOIN THE TEAM</h2>
                            <p className="text-3xl mt-5" >Want to shape the future of branding?</p>
                            <p className="mt-4 sm:mt-4 md:mt-5 text-sm  md:text-sm lg:text-lg font-light text-slate-300">Join us and shape the future of branding today!</p>
                        </div>
                        <button className="mt-20">Apply Now</button>
                    </div>
                </div>
                {TEAM_DATA.map((details: TeamDataType) => (
                    <div key={details.id} className="">
                        <Image src={details.image_url} alt="Check data" width={400} height={570} />
                        <div className="flex justify-between mt-2">
                            <button className="mt-4 sm:mt-4 md:mt-2 text-xl">{details.name}</button>
                            <button className="text-sm px-5 py-0 mt-2  text-gray-900 bg-gray-100 rounded-full border border-gray-200 hover:text-white hover:bg-gray-900">category_name</button>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    )
}

export default OurTeam
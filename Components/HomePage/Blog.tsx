/* Import Pakages */
import Image from "next/image"

/* Import Data */
import { BLOG_DATA } from "../../DEMO_DATA/Data"

function Blog() {
    return (
        <div className="my-24">
            <h1 className="mb-5">BLOG</h1>
            <hr />
            <div className="flex justify-between py-10">
                <h1 className=" text-5xl">Insights on Branding</h1>
                <button className="hidden md:block text-xl px-5 py-2 mt-2  text-gray-900 bg-gray-100 rounded-full border border-gray-200 hover:text-white hover:bg-gray-900">SEE All</button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {BLOG_DATA.map(({ id, image_url, description, redirect_url }: BlogType) => (
                    <div key={id}>
                        <div className=" overflow-hidden ">
                            <Image src={image_url} alt="Please check your network" width={900} height={500} className="hover:scale-125" />
                        </div>
                        <p className="my-4 sm:my-4 md:my-2 text-xl" >{description}</p>
                        <div className="group  transition-all duration-300 ease-in-out">
                            <button className="bg-left-bottom bg-gradient-to-r from-pink-500 to-pink-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out ">Read More</button>
                        </div>
                    </div>)
                )
                }
            </div>
        </div>
    )
}

export default Blog
import Image from "next/image"
import Contact from "../Components/Contact"
import { BLOG_DATA } from "../DEMO_DATA/Data"


function blog() {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 mt-14 lg:px-10" >
                <div className="">
                    <Image src="https://assets.website-files.com/63c3f1995d4c354236c944de/63c6926c3e0cadb265cce971_post-01-thumb-p-800.webp" width={900} height={1000} alt="check network" />
                </div>
                <div className="flex flex-col justify-around lg:ml-10">
                    <div className="md:my-4" >
                        <h3 className="text-xl lg:text-2xl lg:leading-tight" >SOCIAL MEDIA</h3>
                        <h1 className="text-3xl lg:text-5xl mt-2 lg:leading-tight">The Importance of a Strong Brand Positioning</h1>
                        <h3 className="text-2xl lg:text-3xl lg:leading-tight text-slate-500 pr-5 mt-2" >Having a strong brand positioning is crucial for any business looking to stand out in the market and achieve its business objectives.</h3>
                    </div>
                    <button className="bg-black text-white text-xl rounded-full py-3 lg:px-4 lg:w-2/4"> Read More  &#8599;</button>
                </div>
            </div>
            <div className="my-24">
                <h1 className="mb-5">LATEST NEWS</h1>
                <hr />
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                    {BLOG_DATA.map(({ id, image_url, description, redirect_url }: BlogType) => (
                        <div key={id} className=" md:my-5">
                            <div className=" overflow-hidden ">
                                <Image src={image_url} alt="Please check your network" width={900} height={500} className="hover:scale-125" />
                            </div>
                            <div className="lg:flex justify-between content-center ">
                                <p className="my-4 sm:my-4 md:my-2 text-xl lg:text-xl lg:mr-7 lg:leading-tight" >{description}</p>
                                <div className="">
                                    <button className="lg:text-xl text-black mt-3 border rounded-full px-4 py-2 hover:text-white hover:bg-black">Branding</button>

                                </div>
                            </div>
                        </div>)
                    )}
                </div>
            </div>
            <Contact />
        </div>
    )
}

export default blog
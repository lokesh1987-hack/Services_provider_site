/* Import Data */
import { OUR_VALUE_DATA } from "../../DEMO_DATA/Data"

function OurValue() {
    return (
        <div className="mt-28 mb-28">
            <h1 className="mb-5">OUR VALUES</h1>
            <hr />
            <div className="grid mb-24 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
                {OUR_VALUE_DATA.map(({ id, title, des, redirect_url, redirect_urlname }: ValueDataType) => (
                    <div className={`bg-slate-50 rounded-md py-5 px-8 md:p-10 lg:py-16 lg:px-10 `} key={id}>
                        <div className="w-3/4">
                            <h2 className="mt-4 sm:mt-4 md:mt-5 text-sm  md:text-sm lg:text-lg font-light text-slate-400">{title}</h2>
                            {redirect_urlname ? <p className="text-3xl mt-5" >{des}</p> : <p className="h-20 md:h-30 lg:h-40"></p>}
                            {redirect_url ? <button className="mt-5 sm:mt-4 md:mt-5" >{redirect_urlname}</button> : <p className="text-3xl" >{des}</p>}
                        </div>
                    </div>)
                )}
            </div>
            <div className="mt-10 flex justify-center">
                <div className="lg:w-2/4">
                    <p className="text-3xl md:text-4xl lg:text-5xl lg:leading-snug">Crafting Exceptional Digital Experiences Across All Platforms: Our Goal at Øliv.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 text-lg gap-5">
                        <p className="mt-5 md:mt-10">At Øliv, our goal is to craft exceptional digital experiences across all platforms. In today's digitally driven world, having a strong online presence is paramount for businesses to connect with their target audience effectively. We understand the importance of delivering seamless and engaging experiences that leave a lasting impression.</p>
                        <p className="mt-5 md:mt-10">Our team of skilled designers, developers, and digital strategists collaborate to create customized digital solutions tailored to your unique business needs. Whether it's designing a user-friendly website, developing a mobile application, or enhancing your e-commerce platform, we strive to provide solutions that not only meet but exceed your expectations.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurValue
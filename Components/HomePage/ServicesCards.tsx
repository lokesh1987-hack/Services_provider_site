import { SERVICES_CARD_DATA } from "../../DEMO_DATA/Data"

function ServicesCards() {
    return (
        <div className="grid mb-24 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {SERVICES_CARD_DATA.map(({ id, title, desc, button_title, redirect_url }: ServicesCardType) => (
                <div className={`bg-slate-50 rounded-md py-5 px-8 md:p-10 lg:py-16 lg:px-10 `} key={id}>
                    <h2 className="text-2xl">{title}</h2>
                    <p className="mt-4 sm:mt-4 md:mt-5 text-sm  md:text-lg lg:text-xl font-light text-slate-400" >{desc}</p>
                    <button className="mt-4 sm:mt-4 md:mt-5" >{button_title}</button>
                </div>)
            )
            }
        </div>
    )
}

export default ServicesCards
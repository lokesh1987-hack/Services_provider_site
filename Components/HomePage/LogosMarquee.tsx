/* Import Style  */
import Style from '@Styles/LogoMarquee.module.scss'

const logoUrls = [
    "https://assets.website-files.com/63c3f1995d4c3581bbc944b5/63c418af3b2b766cebaba02d_client-logo-01.svg",
    "https://assets.website-files.com/63c3f1995d4c3581bbc944b5/63c418ce6a0062cf2d279e35_client-logo-02.svg",
    "https://assets.website-files.com/63c3f1995d4c3581bbc944b5/63c418ce9f1b45e141bf28b5_client-logo-03.svg",
    "https://assets.website-files.com/63c3f1995d4c3581bbc944b5/63c418ce2c404b364300ba31_client-logo-04.svg",
    "https://assets.website-files.com/63c3f1995d4c3581bbc944b5/63c418cea9dabe252e43b0c0_client-logo-07.svg",
    "https://assets.website-files.com/63c3f1995d4c3581bbc944b5/63c418cea9dabef95143b0c1_client-logo-06.svg"
]

function LogosMarquee() {
    return (
        <div className={`${Style.marquee} mt-20 `}>
            <div className={Style.marqueeContent}>
                {logoUrls.map((url, index) => (
                    <img key={index} src={url} alt={`logo-${index}`} className={Style.marqueeLogo} />
                ))}
                {/* Repeating for continuous effect */}
                {logoUrls.map((url, index) => (
                    <img key={`second-${index}`} src={url} alt={`logo-${index}`} className={Style.marqueeLogo} />
                ))}
            </div>
        </div>
    )
}

export default LogosMarquee
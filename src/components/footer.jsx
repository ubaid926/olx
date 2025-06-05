import { CiFacebook } from "react-icons/ci";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { AiOutlineYoutube } from "react-icons/ai";
import { RxInstagramLogo } from "react-icons/rx";
function Appfooter() {
    return (
        <>
            <div className="flex justify-between " style={{marginBottom:"60px", color: "#002f34" }}>
                <div>
                    <h4 className="uppercase font-bold mb-2 text-left">popular categories</h4>
                    <ul className="text-left">
                        <li className="capitalize">cars</li>
                        <li className="capitalize">flats for rents</li>
                        <li className="capitalize">mobile phones</li>
                        <li className="capitalize">jobs</li>
                    </ul></div>

                <div>   <h4 className="uppercase font-bold mb-2 text-left">trending searches</h4>
                    <ul className="text-left">
                        <li className="capitalize">bikes</li>
                        <li className="capitalize">watches</li>
                        <li className="capitalize">books</li>
                        <li className="capitalize">dogs</li>
                    </ul></div>

                <div>   <h4 className="uppercase font-bold mb-2 text-left">about us</h4>
                    <ul className="text-left">
                        <li className="capitalize">about dubbizle group</li>
                        <li className="capitalize">olx blog</li>
                        <li className="capitalize">contact us</li>
                        <li className="capitalize">olx for businesses</li>
                    </ul></div>


                <div>  <h4 className="uppercase font-bold mb-2 text-left">olx</h4>
                    <ul className="text-left">
                        <li className="capitalize">help</li>
                        <li className="capitalize">site map</li>
                        <li className="capitalize">term of use</li>
                        <li className="capitalize">privacy policy</li>
                    </ul></div>

                <div>   <h4 className="uppercase font-bold mb-2 text-left">follow us</h4>
                    <div className="flex gap-2 align-center">
                        <TiSocialTwitterCircular className="text-2xl" />
                        <CiFacebook className="text-2xl" />
                        <AiOutlineYoutube className="text-2xl" />
                        <RxInstagramLogo className="text-2xl" />
                    </div>
                </div>
            </div>
         
        </>
    )
}
export default Appfooter
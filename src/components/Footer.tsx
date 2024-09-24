import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"
import { FooterData } from "../data/data"


const Footer = () => {
  return (
    <>
        <div className="bg-gray-100 dark:bg-dark mt-14 rounded-t-3xl">
            <div data-aos="fade-up" className="container">
                <div className="grid py-4 md:grid-cols-3">
                    <div className="px-4 py-8">
                        <h1 className="flex items-center gap-3 mb-3 text-xl font-bold text-justify sm:text-3xl sm:text-left">
                            Metaverse
                        </h1>
                        <p className="text-sm">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit optio dicta consectetur accusamus soluta expedita officiis aliquid tenetur earum doloribus impedit.
                        </p>
                        <br />
                        {/* social handle */}
                        <div className="flex items-center gap-3 mt-6">
                            <a href="#">
                                <FaFacebook className="text-3xl duration-300 hover:text-primary" />
                            </a>
                            <a href="#">
                                <FaInstagram className="text-3xl duration-300 hover:text-primary" />
                            </a>
                            <a href="#">
                                <FaLinkedin className="text-3xl duration-300 hover:text-primary" />
                            </a>
                        </div>
                    </div>
                    {/* link section */}
                    <div className="grid grid-cols-2 col-span-2 sm:grid-cols-3 md:pl-10">
                        <div className="">
                            <div className="px-4 py-8">
                                <h1 className="mb-3 text-xl font-bold">Quick Links</h1>
                                <ul className="space-y-3">
                                    {FooterData.map((data) => (
                                        <li key={data.id} className="duration-300 hover:translate-x-1">
                                            <a href={data.link} className="cursor-pointer hover:text-primary">
                                                {data.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer
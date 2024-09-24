import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";

interface Features {
    id: number;
    name: string;
    icon: JSX.Element;
    link: string;
    desc: string;
    aosDelay:number;
}

export const FeaturesData: Features[] = [
    {
        id: 1,
        name: "Captivating Videos",
        icon: <FaCameraRetro className="text-5xl text-primary group-hover:text-black duration-300" />,
        link: "#",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        aosDelay: 300,
    },
    {
        id: 2,
        name: "Safe Transactions",
        icon: <GiNotebook className="text-5xl text-primary group-hover:text-black duration-300" />,
        link: "#",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        aosDelay: 500,
    },
    {
        id: 3,
        name: "Experience Reality",
        icon: <SlNote className="text-5xl text-primary group-hover:text-black duration-500" />,
        link: "#",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        aosDelay: 700,
    },
]
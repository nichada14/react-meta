interface Navbar {
    id: number;
    name: string;
    link: string;
}

interface Footer {
    id: number;
    name: string;
    link: string;
}

export const NavbarData: Navbar[] = [
    {
        id: 1,
        name: "Home",
        link: "#"
    },
    {
        id: 2,
        name: "Product",
        link: "#"
    },
    {
        id: 3,
        name: "Pricing",
        link: "#"
    },
    {
        id: 4,
        name: "Contact",
        link: "#"
    },
]

export const FooterData: Footer[] = [
    {
        id: 1,
        name: "Home",
        link: "#"
    },
    {
        id: 2,
        name: "About",
        link: "#"
    },
    {
        id: 3,
        name: "Contact",
        link: "#"
    },
    {
        id: 4,
        name: "Blog",
        link: "#"
    },
]


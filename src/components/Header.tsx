import { type ReactNode } from "react";

type HeaderProps = {
    image: {
        src: string;
        alt: string;
    };
    children: ReactNode
}

export default function Header(props: HeaderProps){
    return <header>
        <img src={props.image.src} alt={props.image.alt} />
        {props.children}
    </header>
}

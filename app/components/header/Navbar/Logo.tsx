import Image from "next/image";



export default function Logo() {
    return <Image 
        src={"/logofull.png"}
        alt="logo"
        width={100}
        height={200}
        objectFit="contain"
        objectPosition="center"
    />;

}

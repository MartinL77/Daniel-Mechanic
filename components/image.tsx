import Image from "next/image"

export const imageComponent = () => (
    <Image 
        src="/images/bleach.jpg"
        height={144}
        width={144}
        alt="bleach"
    />
);
import Head from 'next/head'
import Link from "next/link";

import { imageComponent } from '@component/components/image';

const FirstPost: React.FC = () => {
    return (
        <>
            <Head>
                <title>Daniel's Mechanic</title>
            </Head>
            <main>
                <h1>First Post</h1>
                <h2><Link href="/">Home</Link></h2>
            </main>
        </>
    );
}

export default FirstPost;
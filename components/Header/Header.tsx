import Link from "next/link";
import React from "react";
import Head from "next/head";

export const HeaderComponent: React.FC = () => {
    return (
      <>
        <Head>
          <title>Daniel's Mechanic</title>
        </Head>
        <main>         
          <h1>
            Welcome to Daniel's mechanic! <Link href='/first-post'>Post</Link>
          </h1>
        </main>
      </>
    )
  }

//Random information about where I am in the process. DELETE NEXT TIME YOU OPEN 
// Time: 1:57
// command: npx @slicemachine/init@latest --repository ts-portfolio
// npm run dev




import React from "react";
import { createClient } from "@/prismicio";
import Link from "next/link";
import { PrismicNextLink } from "@prismicio/next";

export default async function Header(){
    const client = createClient();
    const settings = await client.getSingle("settings");
    return(
        <header className="top-0 z-50 mx-auto max-w-7xl md:sticky md:top-4 text-ferngreen-800">
            <nav>
                <ul>
                    <li>
                        <Link href="/" aria-label="Home Page">
                            {settings.data.name}
                        </Link>
                    </li>
                    {settings.data.nav_item.map(({link, label}, index)=> (

                    <li key={index}>
                        <PrismicNextLink field={link}>
                           {label} 
                        </PrismicNextLink>
                    </li>
                    
                    
                    ))}
                    
                </ul>
            </nav>

        </header>
    );
}
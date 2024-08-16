
//Random information about where I am in the process. DELETE NEXT TIME YOU OPEN 
// Time: 1:57
// command: npx @slicemachine/init@latest --repository ts-portfolio
// npm run dev




import React from "react";
import { createClient } from "@/prismicio";
import NavBar from "./navbar";

export default async function Header(){
    const client = createClient();
    const settings = await client.getSingle("settings");
    return(
        <header className="top-0 z-50 mx-auto max-w-7xl md:sticky md:top-4 text-ferngreen-200">
            <NavBar settings={settings} />

        </header>
    );
}
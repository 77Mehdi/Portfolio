"use client";

import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import GridGlobe from "@/components/ui/GridGlobe";
import { navItems } from "@/data/data";


export default function Home() {
  return (
    <main className=" relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className=" max-w-full w-full">
        <FloatingNav navItems={
          navItems.map((items)=>({
            name: items.name,
            link: items.link
          }))
        }/>
        <Hero/>
        <Grid/> 
        <GridGlobe/>
      </div>
    </main>
  );
}

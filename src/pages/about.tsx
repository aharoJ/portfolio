import React from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/src/components/ui/hover-card"

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/src/components/ui/resizable"

import { Avatar, AvatarFallback, AvatarImage } from "@/src/components/ui/avatar"

import Image from 'next/image'

import { Card, CardContent } from "@/src/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/src/components/ui/carousel"
 
import { CarouselOrientation } from "../components/CarouselOrientation";

import dog from "public/dog.jpg";





export function ResizableDemo() {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="min-h-[200px] max-w-md rounded-lg border"
    >
      <ResizablePanel defaultSize={40}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Sidebar</span>
        </div>
      </ResizablePanel>
      
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={100}>
        <div className="flex h-full items-center justify-center p-6 ml-10">
          <span className="font-semibold">Content</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}



export default function About() {
  return (
<>
  <div>
    <h1 className="text-4xl font-bold text-red-500 ">LALALALA</h1>
  </div>

    <CarouselOrientation/>


    <Carousel orientation="horizontal">
      <CarouselContent>
        <CarouselItem><img src="/dog.jpg" alt="Cute dog" /></CarouselItem>
        <CarouselItem><img src="/dog.jpg" alt="Cute dog" /></CarouselItem>
        <CarouselItem><img src="/dog.jpg" alt="Cute dog" /></CarouselItem>
      </CarouselContent>
    </Carousel>


  
</>
  );
}

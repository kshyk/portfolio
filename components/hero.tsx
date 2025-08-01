import { cn } from "@/lib/utils"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card"
import { siteConfig } from "@/config/site"
import Link from "next/link"
import { Button } from "./ui/button"
import { ThemeToggler } from "./theme-toggler"
import { SimpleIcon } from "./simple-icons"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import React from "react";

type CardProps = React.ComponentProps<typeof Card>

export default function Hero({ className, ...props }: CardProps) {
  return (
    <Card className={cn("w-full mx-auto md:w-[40vw]", className)} {...props}>
      <CardHeader>
        <div className="flex justify-end mb-2">
          <ThemeToggler />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start text-center md:text-left">
          <Avatar className="h-24 w-24 mx-auto md:mx-0 mb-4 md:mb-0 md:mr-4">
            <AvatarImage src={siteConfig.avatar} className="bg-secondary"/>
            <AvatarFallback>{siteConfig.name[0]}</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle
              className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl"
            >
              {siteConfig.name}
            </CardTitle>
            <CardDescription>
              {siteConfig.description} @
              <Link href={siteConfig.links.company} target="_blank" rel="noopener noreferrer" className="hover:underline">
                {siteConfig.company}
              </Link>
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
      <div className="flex flex-wrap gap-2 justify-center md:justify-start">
        <Button variant="outline">
          <Link href={siteConfig.links.github} target="_blank" rel="noopener noreferrer">
            <div className="flex gap-2">
              <SimpleIcon icon={"github"} size={20} /> GitHub
            </div>
          </Link>
        </Button>
        <Button variant="outline">
          <Link href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer">
            <div className="flex gap-2">
              <SimpleIcon icon={"linkedin"} size={20} /> LinkedIn
            </div>
          </Link>
        </Button>
        <Button variant="secondary">
          <Link href={siteConfig.links.cv} target="_blank" rel="noopener noreferrer">
            <div className="flex gap-2">
              <SimpleIcon icon={"canva"} size={20} /> Resume
            </div>
          </Link>
        </Button>
      </div>
      </CardContent>
    </Card>
  )
}

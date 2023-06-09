import { Inter } from "next/font/google"
import Head from "next/head"
import styled from "styled-components"
import { Button, Tooltip, TooltipProvider } from "test-tailwind"

import styles from "@/styles/Home.module.css"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <Button>Library Primary</Button>
        <Button variant="destructive">Library Destructive</Button>
        <StyledButton>Styled Component</StyledButton>
        <ThemeButton>theme.brand.primary[300]</ThemeButton>
        <TooltipProvider>
          <Tooltip>
            <Tooltip.Trigger>Hover</Tooltip.Trigger>
            <Tooltip.Content>
              <p>tooltip</p>
            </Tooltip.Content>
          </Tooltip>
        </TooltipProvider>
      </main>
    </>
  )
}

const StyledButton = styled(Button)`
  background-color: green;
  color: pink;
`
const ThemeButton = styled(Button)`
  background-color: ${({ theme }) => theme.brand.primary[300]};
`

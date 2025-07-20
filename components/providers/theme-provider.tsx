"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider({ 
  children, 
  ...props 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
}: any) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
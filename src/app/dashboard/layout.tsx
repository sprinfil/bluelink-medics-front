import { MenuSuperior } from '@/components/bluelinkComponents/MenuSuperior'
import { ThemeProvider } from "@/components/ui/theme-provider"
import React from 'react'
import { Toaster } from "@/components/ui/toaster"
const layout = ({ children }) => {
  return (
    <div>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <MenuSuperior />
        {children}
        <Toaster />
      </ThemeProvider>
    </div>
  )
}

export default layout
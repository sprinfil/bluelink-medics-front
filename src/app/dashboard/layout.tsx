import { MenuSuperior } from '@/components/bluelinkComponents/MenuSuperior'
import { ThemeProvider } from "@/components/ui/theme-provider"
import React from 'react'

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
      </ThemeProvider>
    </div>
  )
}

export default layout
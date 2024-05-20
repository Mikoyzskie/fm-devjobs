"use client"

import { Switch } from "@/components/ui/switch"
import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

export default function Switcher() {

    const { setTheme, resolvedTheme } = useTheme()
    const [checked, setChecked] = useState(false)

    useEffect(() => {
        if (resolvedTheme === 'dark') {
            setChecked(true)
        } else {
            setChecked(false)
        }

    }, [resolvedTheme])

    function handleClick() {
        if (resolvedTheme === 'dark') {
            setTheme('light')
        } else {
            setTheme('dark')
        }
    }

    return (
        <>
            <Switch checked={checked} onClick={handleClick} />
        </>
    )
}

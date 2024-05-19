"use client"

import { Switch } from "@/components/ui/switch"
import { useEffect, useState } from "react"

export default function Switcher() {

    const [switcher, setSwitcher] = useState(false)

    useEffect(() => {
        if (switcher) {
            console.log("dark");
        }

    }, [switcher])

    return (
        <>
            <Switch checked={switcher} onClick={() => setSwitcher(!switcher)} />
        </>
    )
}

import React from "react"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Card from "../components/Card"
import expData from "../Data/data"

/*
Challenge: Pass props to the Card component and display that data

- img ("katie-zaferes.png")
- rating ("5.0")
- reviewCount (6)
- country (Whatever you want)
- title ("Life Lessons with Katie Zaferes")
- price (136)

*/

export default function App() {
    // <Hero />
    const items = expData.map((item) => {
        return (
            <Card
                key={item.id}
                item={item}
            />
        )
    })

    return (
        <div>
            <Navbar />
            <section className="cards-list">
                {items}
            </section>
        </div>
    )
}

import React from "react"
import Accordion from "../Accordion/Accordion"

const Item = [
  {
    title: "Can I Play a Quiz More than Once?",
    content: `
    Yes, you can play every quiz as many times as you like.`,
  },
  
  {
    title: "How does drawing help students?",
    content: `While drawing can be fun and expressive, 
    it is also a tool that can aid in creativity.`,
  },

  {
    title: "Can we save our drawings?",
    content: `Yes, absolutely you can download and save your drawings.`,
  },
]

const FAQ = () => {
  return (
    <div className="container py-5">
      <h2 className="fat-text pb-2 border-bottom text-center">FAQ</h2>
      <div className="row justify-content-center py-5">
        {Item.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </div>
  )
}

export default FAQ
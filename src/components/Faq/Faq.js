import React from "react"
import Accordion from "../Accordion/Accordion"

const Item = [
  {
    title: "Can I take the quiz more than once?",
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

  {
    title: "Can I add text to my drawing?",
    content: `Yes! Text tool in draw section is provided for this purpose.`,
  },

  {
    title: "What are the categories of blog available?",
    content: `The blog section consists of hot and current topics worldwide.`,
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
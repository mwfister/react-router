import React, { useState } from 'react'
import { Prompt } from 'react-router-dom'

const Form = () => {
  const [preventTransition, setPreventTransition] = useState(false)

  const handleChange = e => {
    const isBlocking = e.target.value.length > 0
    setPreventTransition(isBlocking)
  }

  const handleSubmit = e => {
    e.preventDefault()
    e.target.reset()
    setPreventTransition(false)
  }

  return (
    <form onSubmit={handleSubmit}>
      FORM
      <Prompt
        when={preventTransition}
        message={`Are you sure you want to navigate away? All changes will be lost`}
      />
      <p>{preventTransition ? 'Blocking' : 'Nope'}</p>
      <p>
        <label>Inputty</label>
        <input
          size="50"
          placeholder="Type something to block transition"
          onChange={handleChange}
        />
      </p>
      <button>Reset form</button>
    </form>
  )
}

export const BlockedTransition = () => {
  return (
    <Form />
  )
}

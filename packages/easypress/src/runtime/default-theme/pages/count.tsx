import { useState } from 'react'
import { Link } from 'react-router-dom'

export function Count() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Add Count</button>
      <Link to={'/'}>go to home</Link>
    </div>
  )
}

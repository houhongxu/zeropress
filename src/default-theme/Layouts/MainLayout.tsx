import { useState } from 'react'

export function MainLayout() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h1>This is Layout Component</h1>
      <div>
        {count}
        <button onClick={() => setCount(count + 1)}>Add Count</button>
      </div>
    </div>
  )
}

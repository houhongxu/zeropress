import { Link } from 'react-router-dom'

export function Me() {
  return (
    <div>
      me <Link to={'/count'}>go to count</Link>
    </div>
  )
}

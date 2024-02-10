import { Link } from 'react-router-dom'

export function Hello() {
  return (
    <div>
      hello <Link to={'/me'}>go to me</Link>
    </div>
  )
}

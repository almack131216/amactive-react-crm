import { FaStar } from "react-icons/fa"

const Priority = ({ priority }) => {
  return (
    <div className='priority-display'>
      <div className='star-container'>
        <FaStar color={priority >= 1 ? "rgb(253,253,150)" : ""} />
        <FaStar color={priority >= 2 ? "rgb(253,253,150)" : ""} />
        <FaStar color={priority >= 3 ? "rgb(253,253,150)" : ""} />
        <FaStar color={priority >= 4 ? "rgb(253,253,150)" : ""} />
        <FaStar color={priority >= 5 ? "rgb(253,253,150)" : ""} />
      </div>
    </div>
  )
}

export default Priority

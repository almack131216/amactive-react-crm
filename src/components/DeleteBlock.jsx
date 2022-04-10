import { FaTrash } from "react-icons/fa"

const Delete = () => {
  const deleteTicket = () => {
    console.log("Deleted")
  }

  return (
    <div className='delete-block'>
      <div className='delete-icon' onClick={deleteTicket}>
        <FaTrash />
      </div>
    </div>
  )
}

export default Delete

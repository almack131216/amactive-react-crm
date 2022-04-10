import { FaHome, FaPlus, FaChevronLeft } from "react-icons/fa"
import { useNavigate } from "react-router-dom"

const Nav = () => {
  const navigate = useNavigate()

  return (
    <nav>
      <div className='logo-container'>
        <FaHome />
      </div>
      <div className='controls-container'>
        <div className='icon' onClick={() => navigate("/ticket")}>
          <FaPlus />
        </div>
        <div className='icon' onClick={() => navigate("/")}>
          <FaChevronLeft />
        </div>
      </div>
    </nav>
  )
}

export default Nav

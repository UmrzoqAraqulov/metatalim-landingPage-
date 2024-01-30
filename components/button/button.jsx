import "./button.css"

const Button = ({text,onClick}) => {
  return (
    <button onClick={onClick} className="register-btn">{text}</button>
  )
}

export default Button
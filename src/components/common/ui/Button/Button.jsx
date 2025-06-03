import './Button.css'

export const Button = ({icon, children, className}) => {
  const classes = className ? `button ${className}` : 'button' 
  return (
    <button className={classes}>
      {icon && icon} {children}
    </button>
  )
}

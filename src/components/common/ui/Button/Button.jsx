import './Button.css'

export const Button = ({icon, children, className, onClick = () => {}}) => {
  const classes = className ? `button ${className}` : 'button' 
  return (
    <button className={classes} onClick={onClick}>
      {icon && icon} {children}
    </button>
  )
}

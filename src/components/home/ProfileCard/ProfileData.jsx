export const ProfileData = ({label, children, className}) => {
  return (
    <div className={`profile-data-container ${className}`}>
      <label> {label} </label>
      <span> {children} </span>
    </div>
  )
}

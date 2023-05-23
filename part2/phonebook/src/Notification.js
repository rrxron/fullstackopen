const NotificationInfo = ({ message, isInfo = true }) => {
  if (message === null) {
    return null
  }
  return (
    <div className={isInfo ? 'notification-info' : 'notification-error'}>
      {message}
    </div>
  )
}

export default NotificationInfo

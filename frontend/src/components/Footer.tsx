const Footer = () => {
  const today = new Date()
  return (
    <footer className="footer">
      <p>All Rights Reserved &copy; {today.getFullYear()}</p>
    </footer>
  )
}

export default Footer

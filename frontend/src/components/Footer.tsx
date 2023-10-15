const Footer = () => {
  const today = new Date()
  return (
    <footer className="footer">
      <div className="text-center">
        All Rights Reserved &copy; {today.getFullYear()}
      </div>
    </footer>
  )
}

export default Footer

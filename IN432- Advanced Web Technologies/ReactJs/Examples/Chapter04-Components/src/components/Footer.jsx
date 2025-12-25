// Footer Component
function Footer() {
  const year = new Date().getFullYear()
  
  return (
    <footer className="footer">
      <p>&copy; {year} My React App. All rights reserved.</p>
      <p>Built with ⚛️ React & ⚡ Vite</p>
    </footer>
  )
}

export default Footer









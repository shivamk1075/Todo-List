import React from 'react'

const Footer = () => {
    let footerStyle={
        border : "2px solid red"
    }
  return (
    <footer className="bg-dark text-light py-3" style={footerStyle}>
      <p className="text-center">
        Copyright &copy; Myself.com
      </p>
    </footer>
  )
}

export default Footer

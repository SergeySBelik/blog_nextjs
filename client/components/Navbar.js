import styled from 'styled-components'

const Nav = styled.nav`
  background: grey;
`
const NavbarItem = styled.div`
  position: relative;
`
const Logo = styled.a`
  display: block;
  font-weight: 500px;
  font-size: 18 px;
  line-height: 21px;
`
const AddPostBtn = styled.a`
display:block;
background:green;
position;absolute;
width:100px; 
`
export default function Navbar() {
  return (
    <Nav>
      <div className="conteiner">
        <NavbarItem>
          <Logo>MY BLOG</Logo>
          <AddPostBtn>Add post</AddPostBtn>
        </NavbarItem>
      </div>
    </Nav>
  )
}

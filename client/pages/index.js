import Head from 'next/head'
import styled from 'styled-components'
import Navbar from '../components/Navbar'

const Wrapper = styled.div`
  background: blue;
  min-height: 100vh;
  width: 100%;
`
const PostWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 30px;
`
const Post = styled.a`
  height: 200px;
  width: 300px;
  border-radius: 15px;
  position: relative;
  cursor: pointer;
  background: url('${(props) => props.bgImage}');
`
//center cover no-repeat
export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>My blog</title>
      </Head>
      <Navbar />
      <Wrapper>
        <div className="conteiner">
          <PostWrapper>
            <Post bgImage={'./images/1.jpeg'}></Post>
          </PostWrapper>
        </div>
      </Wrapper>
    </div>
  )
}

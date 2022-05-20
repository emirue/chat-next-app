import type { NextPage } from 'next';
import {
  Container,
  BoxWrapper,
  BoxLeft,
  BoxBottom,
  LeftWrap,
  LeftBodyWrapper,
  RightWrap,
  Wrapper,
} from '../styles/home';
import HomeLeftHeader from '../components/home/HomeLeftHeader';
import HomeLeftSearch from '../components/home/HomeLeftSearch';
import HomeList from '../components/home/HomeList';

const Home: NextPage = () => {
  return (
    <Wrapper>
      <Container>
        <BoxWrapper>
          <BoxLeft />
          <LeftWrap>
            <HomeLeftHeader />
            <LeftBodyWrapper>
              <HomeLeftSearch />
              <HomeList />
            </LeftBodyWrapper>
          </LeftWrap>
          <RightWrap>2</RightWrap>
        </BoxWrapper>
        <BoxBottom />
      </Container>
    </Wrapper>
  );
};

export default Home;

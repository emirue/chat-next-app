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
import HomeLeftHeader from '../components/home/left/HomeLeftHeader';
import HomeLeftSearch from '../components/home/left/HomeLeftSearch';
import HomeList from '../components/home/left/HomeList';
import HomeRightHeader from '../components/home/right/HomeRightHeader';

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
          <RightWrap>
            <HomeRightHeader />
          </RightWrap>
        </BoxWrapper>
        <BoxBottom />
      </Container>
    </Wrapper>
  );
};

export default Home;

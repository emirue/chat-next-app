import styled from 'styled-components';

const HEADER_HEIGHT = 98;
const SEARCH_HEIGHT = 74;
const LIST_BOTTOM_HEIGHT = 56;

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  min-height: 100vh;
`;

const Container = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
`;

const BoxWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 5px);
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const BoxBottom = styled.div`
  width: 100%;
  height: 4px;
  background-color: #fafafa;
`;

const BoxLeft = styled.div`
  width: 4px;
  height: 100vh;
  background-color: #fafafa;
`;

const LeftWrap = styled.div`
  width: 46%;
  height: 100%;
  border-left: 1px solid var(--light);
  border-bottom: 1px solid var(--light);
`;

const LeftHeaderWrapper = styled.div`
  width: 100%;
  height: ${HEADER_HEIGHT}px;
  border-top: 1px solid var(--light);
  border-bottom: 1px solid var(--light);
  padding: 12px 0;
  display: flex;
  justify-content: space-between;

  &:after {
    content: '';
    display: block;
    width: 2px;
    height: 100%;
    background-color: #e5e9ff;
  }
`;

const LeftHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 16px;
  color: var(--gray);
`;

const LeftBodyWrapper = styled.div`
  width: 100%;
  height: calc(100% - ${HEADER_HEIGHT}px);
  border-right: 1px solid var(--light);
`;

const LeftSearchWrapper = styled.div`
  width: 100%;
  height: ${SEARCH_HEIGHT}px;
  padding: 14px;

  .input-search {
    width: 100%;
    padding: 0 70px;
    height: 40px;
    border-radius: 50px;
    border: 1px solid #b8b8b8;
    background-image: url('/icon/ico_search.png');
    background-repeat: no-repeat;
    background-position: 34px center;

    &::placeholder {
      color: #c4c4c4;
    }
  }
`;

const HomeListWrapper = styled.div`
  width: 100%;
  height: calc(100vh - ${HEADER_HEIGHT}px - ${SEARCH_HEIGHT}px - 4px);
  position: relative;
`;

const HomeListContainer = styled.div`
  width: 100%;
  height: calc(100% - ${LIST_BOTTOM_HEIGHT}px);
  overflow-y: auto;
`;

const HomeListItemWrapper = styled.div`
  width: 100%;
  height: 92px;
  border-top: 1px solid var(--light);
  padding: 0;
  background-color: var(--white);
  display: flex;

  &:last-child {
    border-bottom: 1px solid var(--light);
  }

  &.active {
    background-color: #eff2f7;
    border-top: 1px solid #c1c4ca;
    border-right: 1px solid #c1c4ca;

    &:before {
      content: '';
      display: block;
      width: 4px;
      height: 100%;
      background-color: var(--primary);
    }
  }

  &.read {
    background-color: #fafafa;
  }
`;

const HomeListItem = styled.div`
  width: 100%;
  padding: 18px 15px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  .avatar-wrap {
    width: 50px;
    height: 50px;
    padding: 10px;
    border-radius: 50%;
    border: 2px solid #2ee1d3;
    margin-right: 10px;
    background-color: #d8d8d8;

    &.read {
      border: 1px solid #6783fe;
    }
    .avatar {
      width: 100%;
    }
  }

  .home-item-content {
    width: 80%;

    .home-item-name-wrap {
      display: flex;
      justify-content: flex-start;
      align-items: center;

      .name {
        color: #595959;
        font-size: 1rem;
        margin-right: 8px;
      }

      .time {
        color: #a9a9a9;
        font-size: 0.9rem;
      }
    }

    .message {
      width: 100%;
      color: #999999;
      margin-top: 12px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;

const HomeListBottomWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 5px;
  width: 100%;
  height: ${LIST_BOTTOM_HEIGHT}px;
  background-color: var(--white);
  color: var(--primary);
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid var(--light);
`;

const RightWrap = styled.div`
  width: 54%;
  height: 100%;
  border-bottom: 1px solid var(--light);
`;

const RightHeaderWrapper = styled.div`
  width: 100%;
  padding: 0 30px;
  height: ${HEADER_HEIGHT}px;
  display: flex;
  align-items: center;
  box-shadow: 0 4px 6px -4px rgba(0, 0, 0, 0.3);
`;

const RightHeader = styled.div`
  width: 100%;
  height: 50px;

  .header-my-name {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 11px;

    h3 {
      font-size: 1.313rem;
      color: #5f5f5f;
      margin-right: 8px;
    }

    .header-my-relation {
      height: 20px;
      border-radius: 50px;
      background-color: #17dfd0;
      color: var(--white);
      font-size: 0.563rem;
      padding: 5px 11px;
    }
  }

  .header-my-position {
    font-size: 0.875rem;
    color: var(--primary);
  }
`;

export {
  Wrapper,
  Container,
  BoxWrapper,
  BoxBottom,
  BoxLeft,
  LeftWrap,
  LeftHeaderWrapper,
  LeftHeader,
  LeftBodyWrapper,
  LeftSearchWrapper,
  HomeListWrapper,
  HomeListContainer,
  HomeListItemWrapper,
  HomeListItem,
  HomeListBottomWrapper,
  RightWrap,
  RightHeaderWrapper,
  RightHeader,
};

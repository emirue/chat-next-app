import styled from 'styled-components';

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
  height: 98px;
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
  height: calc(100% - 98px);
  border-right: 1px solid var(--light);
`;

const LeftSearchWrapper = styled.div`
  width: 100%;
  height: 74px;
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
  height: calc(100vh - 98px - 74px - 4px);
  position: relative;
`;

const HomeListContainer = styled.div`
  width: 100%;
  height: calc(100% - 56px);
  overflow-y: auto;
`;

const HomeListItemWrapper = styled.div`
  width: 100%;
  height: 92px;
  border-top: 1px solid var(--light);
  padding: 18px 0;
  background-color: #fafafa;
  &:last-child {
    border-bottom: 1px solid var(--light);
  }

  &.active {
    background-color: #eff2f7;

    &:before {
      content: '';
      display: block;
      width: 2px;
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
  padding: 0 15px;
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
  height: 56px;
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
};

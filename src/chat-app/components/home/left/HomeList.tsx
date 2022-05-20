import type { NextComponentType } from 'next';
import {
  HomeListWrapper,
  HomeListContainer,
  HomeListItemWrapper,
  HomeListItem,
  HomeListBottomWrapper,
} from '../../../styles/home';
import classNames from 'classnames';
import { IfcHomeListItem } from '../IfcHomeListItem';
import { useSelector, useDispatch } from 'react-redux';
import { SELECT_LIST_ITEM } from '../../../store/types';
import { RootState } from '../../../store';

const list: IfcHomeListItem[] = [
  {
    _id: '1',
    isRead: false,
    isActive: true,
    name: '최예슬',
    time: '오전 1:21',
    message: '안녕하세요. 서류지원 합격한 최예슬입니다.',
  },
  {
    _id: '2',
    isRead: false,
    isActive: false,
    name: 'Shin Ye-Ji(4)',
    time: '2016.12.13',
    message: '안녕하세요. 서류지원 합격한 신예지입니다.',
  },
  {
    _id: '3',
    isRead: true,
    isActive: false,
    name: '김펀치',
    time: '2016.12.06',
    message: '디자이너 최예슬님을 소개를 좀 부탁드립니다.',
  },
  {
    _id: '4',
    isRead: true,
    isActive: false,
    name: '이윤호',
    time: '2016.12.02',
    message: '나도 이제 곧 포폴 준비해야하는데 나중에 완료되겠지',
  },
  {
    _id: '5',
    isRead: true,
    isActive: false,
    name: 'Kim Eun-ji',
    time: '2016.11.30',
    message: '안녕하세요. 헬로네이쳐 UX팀장 김은지 입니다.',
  },
  {
    _id: '6',
    isRead: true,
    isActive: false,
    name: 'AndrewKim',
    time: '2016.10.21',
    message: '우버에서 최근에 진행한 리디자인에 대하여 설명드리겠습니다.',
  },
  {
    _id: '7',
    isRead: true,
    isActive: false,
    name: '황지홍',
    time: '2016.10.21',
    message: '감사해요! 우버 Andrew Kim님과 연락이 닿았어요.',
  },
];

const HomeList: NextComponentType = () => {
  const selectedItem = useSelector((state: RootState) => state.homeList.item);
  const dispatch = useDispatch();

  /**
   * 클릭
   * @param item
   */
  function handleClick(item: IfcHomeListItem) {
    dispatch({ type: SELECT_LIST_ITEM, payload: item });
  }

  /**
   * 아이템 활성화 여부
   * @param item
   */
  function isActive(item: IfcHomeListItem) {
    return item._id === selectedItem?._id;
  }

  return (
    <HomeListWrapper>
      <HomeListContainer>
        {list.map((item: IfcHomeListItem, index: number) => (
          <HomeListItemWrapper
            key={index}
            className={classNames({ active: isActive(item), read: item.isRead })}
            onClick={() => {
              handleClick(item);
            }}
          >
            <HomeListItem>
              <div className={classNames('avatar-wrap', { read: item.isRead })}>
                <img src="/icon/ico_user.png" alt="avatar" className="avatar" />
              </div>
              <div className="home-item-content">
                <div className="home-item-name-wrap">
                  <div className="name">{item.name}</div>
                  <div className="time">{item.time}</div>
                </div>
                <div className="message">{item.message}</div>
              </div>
            </HomeListItem>
          </HomeListItemWrapper>
        ))}
      </HomeListContainer>
      <HomeListBottomWrapper>이전 대화 불러오기</HomeListBottomWrapper>
    </HomeListWrapper>
  );
};

export default HomeList;

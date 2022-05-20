/**
 * 제작 : emirue
 * 날짜 : 2022/05/21
 * 내용 : 홈 오른쪽 헤더
 */

import type { NextComponentType } from 'next';
import { RightHeaderWrapper, RightHeader } from '../../../styles/home';

const HomeRightHeader: NextComponentType = () => {
  return (
    <RightHeaderWrapper>
      <RightHeader>
        <div className="header-my-name">
          <h3>최예슬</h3>
          <div className="header-my-relation">친구</div>
        </div>
        <div className="header-my-position">웹앱 UX 디자이너</div>
      </RightHeader>
    </RightHeaderWrapper>
  );
};

HomeRightHeader.propTypes = {};
HomeRightHeader.defaultProps = {};

export default HomeRightHeader;

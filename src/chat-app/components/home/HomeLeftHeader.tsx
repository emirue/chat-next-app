import type { NextComponentType } from 'next';
import { LeftHeaderWrapper, LeftHeader } from '../../styles/home';
import { ButtonPrimary } from '../../styles/buttons';

const HomeLeftHeader: NextComponentType = () => {
  return (
    <LeftHeaderWrapper>
      <LeftHeader>
        <div>안읽은 대화(2)</div>
        <div>
          <ButtonPrimary>+ 새로운 메시지</ButtonPrimary>
        </div>
      </LeftHeader>
    </LeftHeaderWrapper>
  );
};

export default HomeLeftHeader;

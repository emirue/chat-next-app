import type { NextComponentType } from 'next';
import { LeftSearchWrapper } from '../../../styles/home';
import { useState } from 'react';

const HomeLeftSearch: NextComponentType = () => {
  const [search, setSearch] = useState('');

  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
  }

  return (
    <LeftSearchWrapper>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="대화 검색하기"
          className="input-search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </LeftSearchWrapper>
  );
};

export default HomeLeftSearch;

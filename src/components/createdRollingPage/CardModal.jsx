import React from 'react';
import { styled } from 'styled-components';

import profile from '../../assets/profile.png';

function CardModal() {
  return (
    <Container>
      <ProfileWrap>
        <Wrap>
          <ProfileImg src={profile} alt="profileImg" />
          <div>
            <Name>
              <span className="from">From.</span>
              <span className="name">김동훈</span>
            </Name>
            <RelrationLabel>가족</RelrationLabel>
          </div>
        </Wrap>
        <CreatedAt>2023.07.08</CreatedAt>
      </ProfileWrap>
      <Comment>
        코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또
        하세요! 코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심
        또 하세요!코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심
        또 하세요!코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심
        또 하세요!코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심
        또 하세요!코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심
        또 하세요! 코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두
        조심 또 하세요! 코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력
        모두 조심 또 하세요!코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력
        모두 조심 또 하세요!코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력
        모두 조심 또 하세요!코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력
        모두 조심 또 하세요!코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력
        모두 조심 또 하세요! 코로나가 또다시 기승을 부리는 요즘이네요. 건강,
        체력 모두 조심 또 하세요! 코로나가 또다시 기승을 부리는 요즘이네요.
        건강, 체력 모두 조심 또 하세요!코로나가 또다시 기승을 부리는 요즘이네요.
        건강, 체력 모두 조심 또 하세요!코로나가 또다시 기승을 부리는 요즘이네요.
        건강, 체력 모두 조심 또 하세요!코로나가 또다시 기승을 부리는 요즘이네요.
        건강, 체력 모두 조심 또 하세요!코로나가 또다시 기승을 부리는 요즘이네요.
        건강, 체력 모두 조심 또 하세요! 코로나가 또다시 기승을 부리는
        요즘이네요. 건강, 체력 모두 조심 또 하세요! 코로나가 또다시 기승을
        부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요!코로나가 또다시 기승을
        부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요!코로나가 또다시 기승을
        부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요!코로나가 또다시 기승을
        부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요!코로나가 또다시 기승을
        부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요!
      </Comment>
    </Container>
  );
}

const Container = styled.div`
  width: 600px;
  height: 476px;
  background-color: var(--White);
  padding: 40px;
  border: 16px;
  border-radius: 16px;
  filter: brightness(100%);

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -40%);
`;

const ProfileWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 28px 0 15px;

  border-bottom: 1px solid var(--Gray-200);
`;

const ProfileImg = styled.img`
  border-radius: 100%;
  width: 56px;
  height: 56px;
`;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const Name = styled.span`
  display: flex;
  gap: 6px;

  .from {
    color: var(--Black);
    font-size: 20px;
    font-weight: 400;
  }

  .name {
    color: var(--Black);
    font-size: 20px;
    font-weight: 700;
  }
`;

const RelrationLabel = styled.span`
  padding: 0 8px;
  text-align: center;
  border-radius: 4px;
  background-color: var(--Green-100);

  color: var(--Green-500);
  font-size: 14px;
  font-weight: 400;
`;

const CreatedAt = styled.span`
  color: var(--gray-400);
  font-size: 14px;
  font-weight: 400;
`;

const Comment = styled.div`
  width: 100%;
  height: 240px;
  overflow-y: scroll;
  padding-right: 16px;
  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: var(--Gray-300);
  }

  color: #5a5a5a;
  font-size: 18px;
  font-weight: 400;

  margin-top: 16px;
`;

export default CardModal;

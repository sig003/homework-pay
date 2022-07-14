import styled from 'styled-components';

const LeftAsideLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 2rem;
  height: 8rem;
  gap: 2rem;
`;

const Content = styled.div`
  cursor: pointer;
`;

export default function LeftAside() {
  return (
    <>
      <LeftAsideLayout>
        <Content>Charge</Content>
        <Content>Charge Log</Content>
      </LeftAsideLayout>
    </>
  );
}

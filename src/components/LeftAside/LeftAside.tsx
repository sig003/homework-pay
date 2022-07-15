import styled from 'styled-components';

const LeftAsideLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  //padding: 2rem;
  height: 8rem;
  gap: 1rem;
`;

const Content = styled.div`
  cursor: pointer;
  width: 100%;
  padding: 10px 10px 10px 20px;
  &:hover {
    background-color: hsl(0, 6%, 93%);
  }
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

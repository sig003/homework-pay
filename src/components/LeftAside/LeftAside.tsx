import styled from 'styled-components';

const LeftAsideLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  cursor: pointer;
`;
export default function LeftAside() {
  return (
    <>
      <LeftAsideLayout>Charge</LeftAsideLayout>
    </>
  );
}

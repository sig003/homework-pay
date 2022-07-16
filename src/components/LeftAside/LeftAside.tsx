import styled from 'styled-components';
import { useRouter } from 'next/router';

const LeftAsideLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 8rem;
  gap: 1rem;
`;

const Content = styled.div`
  cursor: pointer;
  width: 100%;
  padding: 10px 10px 10px 20px;
  &:hover {
    background-color: hsla(0, 6%, 93%, 0.6);
  }
`;

export default function LeftAside() {
  const router = useRouter();

  const handleClickLeftMenu = (menu: string) => {
    if (menu === 'charge') {
      router.push('/charge/Charge');
    } else {
      alert('Coming Soon!!');
    }
  };
  return (
    <>
      <LeftAsideLayout>
        <Content onClick={() => handleClickLeftMenu('charge')}>Charge</Content>
        <Content onClick={() => handleClickLeftMenu('log')}>Charge Log</Content>
      </LeftAsideLayout>
    </>
  );
}

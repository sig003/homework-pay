import styled from 'styled-components';

interface ChildrenProps {
  children: ReactNode;
}

const LayoutWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const HeaderLayout = styled.div`
  background-color: hsl(191, 63%, 38%);
  height: 50px;
`;

export default function Layout({ children }: ChildrenProps) {
  return (
    <>
      <LayoutWrapper>
        <HeaderLayout>Top</HeaderLayout>
        <div>
          <div>aside</div>
          <div>{children}</div>
        </div>
      </LayoutWrapper>
    </>
  );
}

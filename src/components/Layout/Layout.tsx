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
  height: 70px;
  display: flex;
  align-items: center;
  padding: 1rem;
`;

const AsideSectionLayout = styled.div`
  display: flex;
`;

const AsideLayout = styled.div`
  max-width: 200px;
  min-width: 200px;
  height: calc(100vh - 70px);
`;

const SectionLayout = styled.div`
  width: 100%;
  height: calc(100vh - 70px);
  background-color: hsl(0, 6%, 93%);
`;

const LogoStyle = styled.div`
  font-weight: 600;
  font-size: 2rem;
  color: hsl(0, 0%, 100%);
`;

export default function Layout({ children }: ChildrenProps) {
  return (
    <>
      <LayoutWrapper>
        <HeaderLayout>
          <LogoStyle>HomeworkPay</LogoStyle>
        </HeaderLayout>
        <AsideSectionLayout>
          <AsideLayout>aside</AsideLayout>
          <SectionLayout>{children}</SectionLayout>
        </AsideSectionLayout>
      </LayoutWrapper>
    </>
  );
}

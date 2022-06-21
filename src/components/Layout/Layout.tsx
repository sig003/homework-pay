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

const AsideSectionLayout = styled.div`
  display: flex;
`;

const AsideLayout = styled.div`
  width: 15%;
  height: calc(100vh - 50px);
`;

const SectionLayout = styled.div`
  width: 85%;
  height: calc(100vh - 50px);
  background-color: hsl(0, 6%, 93%);
`;

export default function Layout({ children }: ChildrenProps) {
  return (
    <>
      <LayoutWrapper>
        <HeaderLayout>Top</HeaderLayout>
        <AsideSectionLayout>
          <AsideLayout>aside</AsideLayout>
          <SectionLayout>{children}</SectionLayout>
        </AsideSectionLayout>
      </LayoutWrapper>
    </>
  );
}

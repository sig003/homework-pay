import styled from 'styled-components';
import React from 'react';
import { LeftAside } from 'components';

interface ChildrenProps {
  children: React.ReactNode;
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
  height: calc(100% - 70px);
`;

const AsideLayout = styled.div`
  width: 200px;
  max-width: 200px;
  min-width: 200px;
  height: 100%;
  @media screen and (max-width: 1100px) {
    display: none;
  }
`;

const SectionLayout = styled.div`
  width: calc(100% - 200px);
  height: 100%;
  //position: fixed;
  overflow: auto;
  left: 200px;
  background-color: hsl(0, 6%, 93%);
  @media screen and (max-width: 1100px) {
    width: 100%;
  }
`;

const LogoStyle = styled.div`
  font-weight: 600;
  font-size: 1.5rem;
  color: hsl(0, 0%, 100%);
`;

export default function Layout({ children }: ChildrenProps) {
  return (
    <>
      <LayoutWrapper data-testid="LayoutWrapper">
        <HeaderLayout data-testid="HeaderLayout">
          <LogoStyle>HomeworkPay</LogoStyle>
        </HeaderLayout>
        <AsideSectionLayout data-testid="AsideSectionLayout">
          <AsideLayout data-testid="AsideLayout">
            <LeftAside />
          </AsideLayout>
          <SectionLayout data-testid="SectionLayout">{children}</SectionLayout>
        </AsideSectionLayout>
      </LayoutWrapper>
    </>
  );
}

import styled from 'styled-components';

export default function PageNotFound() {
  const Wrapper = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: center;
    height: 40%;
    font-weight: 600;
    font-size: 24px;
  `;

  return (
    <>
      <Wrapper>404. Page not found.</Wrapper>
    </>
  );
}

import styled from 'styled-components';

const Wrapper = styled.div`
display: flex;
align-items: flex-end;
justify-content: center;
height: 40%;
font-weight: 600;
font-size: 24px;
`;

export default function PageNotFound() {
  return (
    <>
      <Wrapper>404. Page not found.</Wrapper>
    </>
  );
}

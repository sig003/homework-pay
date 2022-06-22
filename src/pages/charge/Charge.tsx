import styled from 'styled-components';

const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: flex-start;
  justify-content: center;
  padding: 2rem;
`;

const ContentBox = styled.div`
  width: 60rem;
  height: 10rem;
  border-radius: 10px;
  background-color: white;
`;

function Charge() {
  return (
    <>
      <ContentsWrapper>
        <ContentBox>section 1</ContentBox>
        <ContentBox>section 2</ContentBox>
        <ContentBox>section 3</ContentBox>
      </ContentsWrapper>
    </>
  );
}

export default Charge;

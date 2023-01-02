import styled from 'styled-components';

export const Teste = styled.div`
  margin: 0 auto;
  margin-top: 25%;
  width: 20%;
`;

export const Container = styled.div`
width: 100%;
flex-direction: column;
`;

export const Div = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  width: 30%;
`;

export const DivPost = styled.div`
    margin: 0 auto;
    width: 50%;
`;

export const DivButton = styled.div`
  backgroud-color: #000000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  width: 100%;
`;

export const Name = styled.text`
  font-size: 22px;
  font-family: Staatliches;


  @media screen and (max-width: 900px) {
    font-size: 20px;
  }
`;

export const City = styled.text`
  font-size: 10px;
  font-family: Roboto;

  @media screen and (max-width: 900px) {
    font-size: 8px;
  }
`;

export const Company = styled.text`
  font-size: 10px;
  font-family: Roboto;
  @media screen and (max-width: 900px) {
    font-size: 8px;
  }
`;

export const Title = styled.p`
    font-size: 22px;
    font-family: Staatliches;
    @media screen and (max-width: 900px) {
      font-size: 16px;
    }
`;

export const Body = styled.p`
    font-size: 14px;
    font-family: Roboto;

    @media screen and (max-width: 900px) {
      font-size: 10px;
    }
`;

export const Comentarios = styled.p`
    font-size: 14px;
    font-family: Roboto;

    @media screen and (max-width: 900px) {
      font-size: 6px;
    }
`;

export const Button = styled.button`
  background-color: #000;   
  border: 0;
  font-family: Staatliches;
  font-size: 20px;
  border-radius: 50px;
  padding: 6px 12px;
  width: 250px;
  height: 40px;
  color: #FFF;
  font-family: 'Roboto';

  &:hover {
    background-color: #191970;
  }

  @media screen and (max-width: 900px) {
    width: 100px;
    height: 20px;
    font-size: 12px;
  }
`;



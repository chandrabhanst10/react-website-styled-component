import styled from "styled-components";

export const SignInContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 50px;
`;
export const SignInWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
`;
export const Icon = styled.h2`
  font-size: 30px;
  font-style: italic;
  color: white;
  margin-bottom: 10px;
  border-bottom: 0px solid white;
  width: 100%;
  text-align: start;

`;
export const FormContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #01bf71;
  border-radius: 20px;
  padding: 30px 50px;
`;
export const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
export const FormButton = styled.button`
  padding: 8px 13px;
  border: none;
  color: white;
  background-color: #01bf71;
  border-radius: 8px;
  padding: 10px 30px;
  margin: auto 10px;
  font-size: 16px;
  font-weight: 500;
  transition: 0.3s all ease-out;
  &:hover {
    transition: 0.2s ease-out;
    background-color: #989190;
    transform: scale(1.07);
    transition: all 0.3s ease-in-out;
  }
  @media screen  and (max-width:575px){
    font-size: 15px;
    padding: 7px 25px;
    
  }
  
`;

export const FormH1 = styled.h1`
  display: flex;
  justify-content: center;
  margin: auto;
  color: white;
  margin: 0 10px 10px 10px;
  @media screen  and (max-width:575px){
    font-size: 17px;
    margin: 0 7px 7px 7px;

    
  }
  @media screen  and (max-width:375px){
    font-size: 12px;
    width: auto;
    
  }
`;
export const FormLabel = styled.label`
  text-align: start;
  width: 100%;
  color: white;
  margin: 10px 10px;
  @media screen  and (max-width:575px){
    font-size: 15px;    
  }
`;
export const FormInput = styled.input`
  padding: 5px 10px;
  font-size: 17px;
  font-weight: 400;
  color: black;
  background: white;
  margin: 10px 10px;
  width: 100%;
  border-radius: 10px;
  border: 1px solid white;
  &:focus {
    outline: none;
  }
  
`;
export const FormBtnContainer = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  align-items: center;
  @media screen  and (max-width:575px){
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
  }
`;
export const Text = styled.h3`
  color: gray;
  width: 100%;
  text-align: end;
  font-size: 14px;
  &:hover {
    transform: scale(1.07);
    transition: all 0.2s ease-in-out;
  }
  @media screen  and (max-width:575px){
    font-size: 13px;
    width: auto;
    margin-top: 10px;
    
  }
`;

import styled from "styled-components";

export const Section = styled.section`
  width: 950px;
  display: flex;
  justify-content: right;
  text-align: center;
  margin: 0 auto;
  padding: 10px 0;
  background-color: #574b4b;
  border-bottom: #fbf6f6;
`;
export const Select = styled.select`
  background-color: #392f31;
  color: #fff;
  font-size: 18px;
  border: none;
  font-weight: bold;
  width: 150px;
  height: 30px;
  margin: 10px;
  padding: 5px;
`;
export const InputSkillSet = styled.input`
  background-color: #AE9D9D;
  color: #fff;
  font-size: 18px;
  border: none;
  font-weight: bold;
  width: 200px;
  margin: 10px;
  margin-right: 0;
  padding: 5px;

  ::placeholder {
    color: #FBECEC;
  }
`;
export const muiSearchIcon = {
    width: "22px",
    height: "22px",
    zIndex: "1000",
    backgroundColor: "#fff",
    marginTop: "10px",
    marginRight: "10px",
    padding: "5px",
    paddingBottom: "4px",
    fontSize: "22px",
    opacity: "1",
    "&:hover": {
      opacity: "0.5",
    }
  }
import { useState } from "react";
import {
  Section,
  Select,
  InputSkillSet,
  muiSearchIcon,
} from "./ParamInput.style";
import SearchIcon from "@mui/icons-material/Search";
import { useStateValue } from "store/StateProvider";

function ParamInput() {
  const [initialState, dispatch] = useStateValue(); // eslint-disable-line no-unused-vars
  const [nation, setNation] = useState(null);
  const [employeeType, setEmployeeType] = useState(null);
  const [searchParams, setSearchParams] = useState(null);

  const handleNation = (e) => {
    if (e.target.value === "null") {
      setNation(null);
    } else {
      setNation(e.target.value);
    }
  };
  const handleType = (e) => {
    if (e.target.value === "null") {
      setEmployeeType(null);
    } else {
      setEmployeeType(e.target.value);
    }
  };
  const handleSearch = (e) => {
    if (e.target.value === "") {
      setSearchParams(null);
    } else {
      setSearchParams(e.target.value);
    }
  };

  // const SetInput = () => {
  //   dispatch({
  //     type: `SetInput`,
  //     nation: nation,
  //     employeeType: employeeType,
  //   });
  // };
  return (
    <Section>
      <Select onChange={handleNation}>
        <option value="null">-- 전체 국가 --</option>
        <option value="INDIA">인도</option>
        <option value="CHINA">중국</option>
        <option value="VIETNAM">베트남</option>
        <option value="PHILIPPINE">필리핀</option>
      </Select>
      <Select onChange={handleType}>
        <option value="null">-- 전체 유형 --</option>
        <option value="FULLTIME">정규직</option>
        <option value="PARTTIME">계약직</option>
        <option value="FREELANCER">프리랜서</option>
      </Select>
      <InputSkillSet onChange={handleSearch} placeholder="스킬셋을 입력하세요." />
      <SearchIcon
        sx={muiSearchIcon}
        onClick={() =>
          dispatch({
            type: `SetInput`,
            nation: nation,
            employeeType: employeeType,
            searchParams: searchParams,
          })
        }
      />
    </Section>
  );
}

export default ParamInput;

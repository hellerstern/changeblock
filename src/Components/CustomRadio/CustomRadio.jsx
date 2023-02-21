import styled from "styled-components";
import {
  MdOutlineRadioButtonChecked,
  MdOutlineRadioButtonUnchecked,
} from "react-icons/md";

const CustomRadio = (props) => {
  return (
    <Wrapper color={props.st.color}>
      <span>
        {props.status ? (
          <MdOutlineRadioButtonChecked />
        ) : (
          <MdOutlineRadioButtonUnchecked />
        )}
      </span>
      {props.label}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  cursor: pointer;
  svg {
    color: ${(p) => p.color};
  }
`;

export default CustomRadio;

import styled from "styled-components";
import { IMG_SUB_BACK } from "../../constants/images/images";

const InformDiv = () => {
  return (
    <Wrapper bgImg={IMG_SUB_BACK}>
      <div>
        <h3>Hello John Doe</h3>
        <p>Subscribe and unlock full potential of our tool.</p>
      </div>
      <button>Start 7 days Trial</button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-image: url(${(p) => p.bgImg});
  background-repeat: no-repeat;
  background-size: cover;
  box-sizing: border-box;
  width: 100%;
  height: 126px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  border-radius: 5px;
  padding: 0 32px;
  margin-bottom: 30px;
  * {
    z-index: 1;
  }
  position: relative;
  &::before {
    position: absolute;
    content: " ";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 5px;
  }
  div {
    h3,
    p {
      margin: 0;
      padding: 0;
    }
    h3 {
      margin-bottom: 10px;
    }
  }

  button {
    color: black;
    background: #e4ec37;
    border-radius: 5px;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    border: 0;
    outline: 0;
    padding: 11px 39px;
    margin-top: 20px;
  }
`;

export default InformDiv;

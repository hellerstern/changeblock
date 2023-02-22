// import Dropdown from "./Dropdown";
import styled from "styled-components";
import { IMG_RING, IMG_PROFILE } from "../../constants/images/images";
import { RiArrowDropDownLine } from "react-icons/ri";
// import styles from "../../styles/Dashboard/navbar.module.css";

const DashboardNavbar = (props) => {
  return (
    <Wrapper>
      <MiddleWrapper>
        <Container>
          <div className="left-div">
            <img src="images/logo-black.png" alt="Logo"></img>
            <p>Dashboard</p>
          </div>

          <div className="right-div">
            <div className="notifi">
              <img src={IMG_RING} />
              <label>2</label>
            </div>
            <div className="spliter"></div>
            <div
              className="profile"
              onClick={() => props.setSelectedSidebarTab("profile")}
            >
              <img src={IMG_PROFILE}></img>
              <p>{props.user.multiFactor.user.displayName}</p>
              <RiArrowDropDownLine></RiArrowDropDownLine>
            </div>
          </div>
        </Container>
      </MiddleWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.05);
`;

const MiddleWrapper = styled.div`
  padding: 20px 66px;
  max-width: 1440px;
  margin: auto;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: #ffffff;

  .left-div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
    p {
      margin: 0;
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 24px;
      color: #000000;
    }
  }

  .right-div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    .notifi {
      position: relative;
      label {
        top: -3px;
        right: -3px;
        width: 14px;
        height: 14px;
        position: absolute;
        color: white;
        background-color: red;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        font-size: 8px;
      }
    }

    .spliter {
      border: 1px solid rgba(92, 91, 91, 0.2);
      height: 100%;
    }

    .profile {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 20px;
      p {
        font-size: 16px;
        line-height: 19px;
        display: flex;
        align-items: center;
        margin: 0;
      }
      svg {
        transform: scale(1.5);
      }
      cursor: pointer;
    }

    img {
      cursor: pointer;
    }
  }
`;

export default DashboardNavbar;

import { useState } from "react";
import styled from "styled-components";

import {
  IMG_ALLOW_LEFT,
  IMG_EYE_OFF,
  IMG_PROFILE,
} from "../../constants/images/images";

const Profile = (props) => {
  const [pFlag, setPFlag] = useState(false);
  const password = "20miracle125";

  return (
    <Wrapper>
      <Container>
        <h3 className="page-label">User Information</h3>
        <ProfileDiv>
          <div className="photo">
            <img src={IMG_PROFILE}></img>
            <span>Change Photo</span>
          </div>
          <h3 className="pinfo-label">Personal Information</h3>
          <PerInfo>
            <label className="info-label">
              <span>First Name</span>
              <p>Joe</p>
            </label>
            <label className="info-label">
              <span>Last Name</span>
              <p>Doe</p>
            </label>
          </PerInfo>
          <label className="info-label" style={{ marginBottom: "50px" }}>
            <span>Work Email</span>
            <p>Emmanueldavis@workemail.com</p>
          </label>
        </ProfileDiv>

        <PasswordDiv>
          <div>
            <p className="pass-label">Password</p>
            <p className="pass">
              {!pFlag ? "*".repeat(password.length) : password}
              <img src={IMG_EYE_OFF} onClick={() => setPFlag(!pFlag)}></img>
            </p>
          </div>
          <button> Change Password</button>
        </PasswordDiv>
        <AllowBack
          onClick={() => {
            props.setSelectedSidebarTab("AnalysisHistory");
          }}
        >
          <img src={IMG_ALLOW_LEFT}></img>
          <span>Back</span>
        </AllowBack>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 1440px;
  margin: auto;
  background: #f4f5fb;
  * {
    margin: 0;
    padding: 0;
  }
`;

const Container = styled.div`
  padding: 33px 66px;
  .page-label {
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    margin-bottom: 20px;
  }
`;

const AllowBack = styled.div`
  cursor: pointer;
  img {
    margin-right: 10px;
  }
  span {
    font-size: 16px;
    line-height: 19px;
  }
  margin-bottom: 50px;
`;

const ProfileDiv = styled.div`
  background: #ffffff;
  box-shadow: 0px 3px 6px 2px rgba(32, 32, 32, 0.05);
  border-radius: 5px;
  padding: 34px;
  width: 500px;
  margin-bottom: 20px;
  .photo {
    img {
      margin-right: 20px;
      outline: 1px solid #05be70;
      padding: 5px;
      border-radius: 50%;
    }
    span {
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
    }
    margin-bottom: 35px;
  }

  .pinfo-label {
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    margin-bottom: 35px;
  }

  .info-label {
    margin-right: 50px;
    span {
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;

      color: rgba(0, 0, 0, 0.5);
    }

    p {
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
    }
  }
`;

const PerInfo = styled.div`
  margin-bottom: 16px;
`;

const PasswordDiv = styled.div`
  background: #ffffff;
  box-shadow: 0px 3px 6px 2px rgba(32, 32, 32, 0.05);
  border-radius: 5px;
  padding: 34px;
  width: 500px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  button {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #ff0100;
    outline: 0;
    border: 0;
    background: #ffcccc;
    border-radius: 5px;
    padding: 7px 17px;
  }

  .pass-label {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    margin-bottom: 15px;
  }

  .pass {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    img {
      cursor: pointer;
    }
  }
`;

export default Profile;

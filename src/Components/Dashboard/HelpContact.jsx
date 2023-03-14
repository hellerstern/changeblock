import styled from "styled-components";
import {
  IMG_TUTO_BACK,
  IMG_PLAY_ICON,
  IMG_EMAIL_ICON,
  IMG_FORM_ICON,
} from "../../constants/images/images";

const HelpContract = () => {
  return (
    <Wrapper>
      <Container>
        <h3>Need Some Guidance?</h3>
        <p>Watch our free demo tutorial</p>
        <VideoDiv bgImg={IMG_TUTO_BACK} icon={IMG_PLAY_ICON}>
          <div>
            <img src={IMG_PLAY_ICON}></img>
          </div>
        </VideoDiv>
      </Container>
      <Container>
        <h3>Contract Suppo</h3>
        <p>
          For general enquiries or questions relating to our tool, kindly
          contact our customer support team or fill a form
        </p>
        <Contact>
          <div className="contact">
            <img src={IMG_EMAIL_ICON} />
            <h2>Contact via email</h2>
            <p>
              support@datatool.com<span></span>
            </p>
          </div>
          <div className="contact">
            <img src={IMG_FORM_ICON} />
            <h2>Fill a contact form</h2>
            <p>Fill form</p>
          </div>
        </Contact>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;

const Container = styled.div`
  width: 49%;
  @media screen and (max-width: 1200px) {
    width: 100%;
  }
  border: 1px solid rgba(92, 91, 91, 0.1);
  border-radius: 5px;
  padding: 20px 30px;
  height: 340px;
  h3 {
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    color: #000000;
  }
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #5c5b5b;
  }
`;

const VideoDiv = styled.div`
  background-image: url(${(p) => p.bgImg});
  background-repeat: no-repeat;
  background-position-x: 50%;
  background-size: cover;
  width: 100%;
  height: 195px;
  border-radius: 5px;
  position: relative;

  &::before {
    position: absolute;
    content: " ";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 5px;
  }

  div {
    cursor: pointer;
    position: absolute;
    top: calc(50% - 15px);
    left: calc(50% - 15px);
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: white;
    img {
      background-color: white;
      transform: scale(1.2);
    }
  }
`;

const Contact = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  .contact {
    padding: 30px 20px;
    background: #f2f8fb;
    border-radius: 5px;
    text-align: center;
    h2 {
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      margin-top: 10px;
    }
    p {
      color: #5c5b5b;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
    }
  }
`;
export default HelpContract;

import styled from "styled-components";
import {
  IMG_ALLOW_LEFT,
  IMG_CHECK_ICON,
  IMG_ELEC_ICON,
} from "../../constants/images/images";
import BillInfo from "../BillInfo/BillInfo";

const BillingInfo = (props) => {
  return (
    <Wrapper>
      <Container>
        <AllowBack
          onClick={() => {
            props.setSelectedSidebarTab("upgrade-plan");
          }}
        >
          <img src={IMG_ALLOW_LEFT}></img>
          <span>Back</span>
        </AllowBack>
        <div className="main-bill">
          <BillInfo></BillInfo>
          <TodayTotal>
            <div className="step">
              <img src={IMG_ELEC_ICON}></img>
              <div>
                <h2>Basic Monthly Subscription</h2>
                <p>Enjoy full access, no payment needed.</p>
              </div>
            </div>
            <div className="step">
              <img src={IMG_CHECK_ICON}></img>
              <div>
                <h2>Day 7</h2>
                <p>
                  your account is charged $50. Cancal anytime before this day
                </p>
              </div>
            </div>

            <div className="spliter"></div>
            <div className="label-price">
              <h1>Today's Total</h1>
              <h1>$0</h1>
            </div>
          </TodayTotal>
        </div>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 1440px;
  margin-top: auto;
  padding: 33px 66px;
`;

const Container = styled.div`
  .div-footer {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    padding: 17px 30px;
  }

  .main-bill {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
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

const TodayTotal = styled.div`
  background: #ffffff;
  border: 1px solid rgba(142, 142, 142, 0.15);
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  padding: 36px 25px;
  width: 528px;

  .step {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 30px;

    div {
      h2 {
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        margin: 0;
        margin-bottom: 5px;
      }
      p {
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        color: #5c5b5b;
      }
    }
    margin-bottom: 10px;
  }

  .spliter {
    border: 1px solid rgba(142, 142, 142, 0.15);
  }

  .label-price {
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    h1 {
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 24px;
      letter-spacing: -0.02em;
    }
  }
`;

export default BillingInfo;

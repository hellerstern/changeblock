import styled from "styled-components";
import { toast } from "react-toastify";

const BillInfo = (props) => {
  function handleAcc() {
    toast.success("Billing Info updated!");
    props.setFlag(false);
  }

  return (
    <Wrapper>
      <Container>
        <h2 className="bill-label">Billing Information</h2>
        <div className="input-group">
          <p>
            Email Address <span>*</span>
          </p>
          <input className="general" placeholder="example@email.com"></input>
        </div>

        <div className="input-group">
          <p>
            Phone number
            <span>*</span>
          </p>
          <input className="general" placeholder="Enter phone number"></input>
        </div>

        <div className="checkbox-group">
          <input
            type="checkbox"
            id="tmp"
            style={{ width: "22px", height: "22px" }}
          ></input>
          <label htmlFor="tmp">
            Signup for exclusive offers and news via text messages or email
          </label>
        </div>

        <div className="spliter"></div>

        <h2 className="bill-label">Shipping Address</h2>

        <div className="shipA">
          <div className="input-group">
            <p>
              First Name
              <span>*</span>
            </p>
            <input className="general" placeholder="First Name"></input>
          </div>
          <div className="input-group">
            <p>
              Last Name
              <span>*</span>
            </p>
            <input className="general" placeholder="Last Name"></input>
          </div>
        </div>

        <div className="input-group">
          <p>
            Country
            <span>*</span>
          </p>
          <input className="general" placeholder="Country"></input>
        </div>
        <div className="shipA">
          <div className="input-group">
            <p>
              Town/City
              <span>*</span>
            </p>
            <input className="general" placeholder="Town/City"></input>
          </div>
          <div className="input-group">
            <p>
              State
              <span>*</span>
            </p>
            <input className="general" placeholder="State"></input>
          </div>
        </div>
        <div className="main-btn" onClick={() => handleAcc()}>
          Update
        </div>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 693px;

  padding: 30px 0;
  background-color: white;
  border-radius: 5px;
  border: 1px solid rgba(142, 142, 142, 0.15);
`;

const Container = styled.div`
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  max-height: 600px;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: transparent;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    border: 1px solid transparent;
  }
  padding: 27px 34px !important;

  .bill-label {
    margin-bottom: 10px;
  }

  .input-group {
    display: flex;
    flex-direction: column;
    margin-top: 25px;
    p {
      font-weight: 600;
      font-size: 18px;
      line-height: 24px;
      color: #272443;
      margin-bottom: 15px;
      span {
        color: red;
      }
    }
  }

  .general {
    border: 1px solid #8e8e8e;
    border-radius: 5px;
    padding: 8px 19px;
    outline: 0;
  }

  .checkbox-group {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 25px 0;
  }

  .spliter {
    border: 1px solid rgba(142, 142, 142, 0.5);
    margin: 25px 0;
  }

  .shipA {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
  }

  .main-btn {
    padding: 13px 0;
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    color: #ffffff;
    background: #05be70;
    border-radius: 5px;
    outline: 0;
    border: 0;
    text-align: center;
    margin: 20px 0;
    cursor: pointer;
  }
`;
export default BillInfo;

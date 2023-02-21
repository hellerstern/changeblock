import { useState } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import CustomRadio from "../CustomRadio/CustomRadio";
import {
  IMG_PAYPAL,
  IMG_VISA,
  IMG_MASTER_CARD,
  IMG_AMEX,
} from "../../constants/images/images";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-toastify";

const CardUpdateForm = (props) => {
  const [startDate, setStartDate] = useState(null);
  return (
    <Wrapper>
      <p className="txt-1">Update Payment Plan</p>
      <p className="txt-2">All transactions are secure and encrypted</p>
      <PayPalDiv>
        <CustomRadio
          label="Paypal"
          status={false}
          st={{ color: "#8E8E8E" }}
        ></CustomRadio>
        <img src={IMG_PAYPAL}></img>
      </PayPalDiv>

      <PayPalDiv style={{ border: "none" }}>
        <CustomRadio
          label="Card"
          status={true}
          st={{ color: "#05BE70" }}
        ></CustomRadio>
        <div style={{ display: "flex", gap: "10px" }}>
          <img src={IMG_VISA}></img>
          <img src={IMG_MASTER_CARD}></img>
          <img src={IMG_AMEX}></img>
          and more...
        </div>
      </PayPalDiv>

      <p className="general">Name on card</p>
      <input className="general-input" style={{ width: "100%" }} />
      <p className="general">Card Number</p>
      <input className="general-input" style={{ width: "100%" }} />
      <div className="date-code-container">
        <div>
          <p className="general">Expiration Date</p>
          <DatePicker
            className="general-input"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="MM/yyyy"
            showMonthYearPicker
            placeholderText="MM/YY"
          />
        </div>
        <div>
          <p className="general">Security Code</p>
          <input className="general-input" placeholder="3 digital code" />
        </div>
      </div>
      <SubmitButton
        style={{ padding: "11px" }}
        onClick={() => {
          toast.success("Card updated successfully");
          props.set_upt_py_mth(false);
        }}
      >
        Update Card
      </SubmitButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 693px;
  background-color: white;
  border: 1px solid rgba(142, 142, 142, 0.15);
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  position: relative;
  padding: 50px 34px !important;
  .txt-1 {
    font-style: normal;
    font-weight: 800;
    font-size: 18px;
    line-height: 24px;
    color: #272443;
  }

  .txt-2 {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #8e8e8e;
    margin: 10px 0 20px 0;
  }

  .general {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #272443;
    margin: 15px 0;
  }

  .general-input {
    border: 1px solid #8e8e8e;
    border-radius: 5px;
    padding: 10px 11px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    outline: none;
  }

  .date-code-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const PayPalDiv = styled.div`
  border: 1px solid #8e8e8e;
  border-radius: 5px;
  padding: 10px !important;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
`;

const SubmitButton = styled.button`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  color: #ffffff;
  background: #05be70;
  border-radius: 5px;
  border: 0;
  outline: 0;
  margin-top: 30px !important;
  width: 100%;
`;

export default CardUpdateForm;

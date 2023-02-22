import { useState } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import { BsCheck2 } from "react-icons/bs";
import CustomModal from "../Modal/CustomModal";
import CardUpdateForm from "../CardUpdateForm/CardUpdateForm";
import {
  IMG_ALLOW_LEFT,
  IMG_VISA,
  IMG_FILE_UPLOAD,
} from "../../constants/images/images";

const Subscription = (props) => {
  const [upt_py_mth, set_upt_py_mth] = useState(false);

  const theader = [
    "Date",
    "Subscription Type",
    "Tax Invoice Number",
    "Total Amount",
    "Status",
    "",
  ];

  const tbody = [
    {
      dat: "February 2nd, 2023",
      st: "Basic Sub",
      tin: "7896756",
      tAm: "50",
      status: true,
    },
    {
      dat: "February 2nd, 2023",
      st: "Premium",
      tin: "7896756",
      tAm: "500",
      status: true,
    },
  ];

  return (
    <Wrapper>
      <Container>
        <AllowBack
          onClick={() => {
            props.setSelectedSidebarTab("AnalysisHistory");
          }}
        >
          <img src={IMG_ALLOW_LEFT}></img>
          <span>Back</span>
        </AllowBack>
        <Plans>
          <Plan>
            <h3 className="plan-title">My Subscription Plan</h3>
            <PlanDiv>
              <h2 className="plandiv-title">Current Plan</h2>
              <p className="plandiv-way">Basic Plan-Monthly</p>
              <SplitDiv></SplitDiv>
              <p className="label-1">Subscription renewal data</p>
              <h2 className="label-2">February 2nd, 2023</h2>
              <div className="buttons">
                <Button1 style={{ marginRight: "28px" }}>
                  Cancel Renewal
                </Button1>
                <Button2
                  onClick={() => props.setSelectedSidebarTab("upgrade-plan")}
                >
                  Upgrade Plan
                </Button2>
              </div>
              <SplitDiv></SplitDiv>
              <p className="general">Your next payment is $50</p>
              <p className="general">
                Your plan will be automatically renewed each month
              </p>
              <p className="general">VAT and local taxes may apply</p>
            </PlanDiv>
          </Plan>
          <Plan>
            <h3 className="plan-title">Payment Details</h3>
            <PlanDiv1>
              <h2 className="plandiv-title">Payment Method</h2>
              <p className="plandiv-way">Credit card</p>
              <div className="visa-info">
                <div className="visa-number">
                  <img src={IMG_VISA}></img>
                  <span>**** **** **** 7178</span>
                </div>
                <Button1 onClick={() => set_upt_py_mth(!upt_py_mth)}>
                  Update Payment Method
                </Button1>
                <CustomModal
                  flag={upt_py_mth}
                  setFlag={set_upt_py_mth}
                  children={<CardUpdateForm set_upt_py_mth={set_upt_py_mth} />}
                ></CustomModal>
              </div>
              <SplitDiv></SplitDiv>
              <div className="visa-info">
                <h2 className="bill-label">Billing Information</h2>
                <Button1>Update Information</Button1>
                <CustomModal
                  flag={upt_py_mth}
                  setFlag={set_upt_py_mth}
                  children={<CardUpdateForm set_upt_py_mth={set_upt_py_mth} />}
                ></CustomModal>
              </div>
              <p className="general">Customer Name - John Doe</p>
              <p className="general">Email- Johndoe@gmail.com</p>
              <p className="general">
                Address- 5, Orchid Road, Layman Street United Kingdom
              </p>
            </PlanDiv1>
          </Plan>
        </Plans>

        <InvoiceTableContainer>
          <h2 className="invoice-lable">Invoices</h2>
          <InvoiceTable>
            <thead>
              <tr>
                {theader.map((item, index) => (
                  <th key={index}>{item}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tbody.map((item, index) => (
                <tr key={index}>
                  <td>{item.dat}</td>
                  <td>{item.st}</td>
                  <td>{item.tin}</td>
                  <td>{item.tAm}</td>
                  <td>
                    <span className="status">
                      {item.status ? <BsCheck2 /> : undefined}
                    </span>
                  </td>
                  <td>
                    <img
                      src={IMG_FILE_UPLOAD}
                      style={{ cursor: "pointer" }}
                    ></img>
                  </td>
                </tr>
              ))}
            </tbody>
          </InvoiceTable>
        </InvoiceTableContainer>
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
  padding: 33px 84px;
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

const Plans = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 25px;

  @media screen and (max-width: 1110px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Plan = styled.div`
  width: 45%;
  min-width: 450px;
  @media screen and (max-width: 1110px) {
    margin: 40px 0;
  }
  .plan-title {
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    margin-bottom: 10px;
  }
`;

const PlanDiv = styled.div`
  background: #ffffff;
  border: 1px solid rgba(142, 142, 142, 0.15);
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  padding: 29px 34px;
  height: 400px;
  .plandiv-title {
    color: #272443;
    font-style: normal;
    font-weight: 800;
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 10px;
  }

  .plandiv-way {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 10px;
  }
  .label-1 {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #5c5b5b;
    margin-bottom: 10px;
  }
  .label-2 {
    margin-bottom: 20px;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
  }
  .general {
    color: #333333;
  }
`;

const SplitDiv = styled.div`
  border: 0.5px solid rgba(139, 155, 172, 0.2);
  margin-bottom: 20px;
  margin: 20px 0;
`;

const Button1 = styled.button`
  border: 1px solid #8b9bac;
  border-radius: 5px;
  padding: 10px 24px;
  color: #5c5b5b;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  outline: none;
  margin: 10px 0;
`;
const Button2 = styled.button`
  background: #05be70;
  border-radius: 5px;
  padding: 10px 24px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  border: none;
  outline: none;
  margin: 10px 0;
`;

const PlanDiv1 = styled.div`
  background: #ffffff;
  border: 1px solid rgba(142, 142, 142, 0.15);
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  padding: 29px 34px;
  height: 400px;
  .plandiv-title {
    color: #272443;
    font-style: normal;
    font-weight: 800;
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 10px;
  }

  .plandiv-way {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 10px;
  }
  .visa-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    * {
      white-space: nowrap;
    }

    .visa-number {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 20px;
    }
  }
  .bill-label {
    font-style: normal;
    font-weight: 800;
    font-size: 18px;
    line-height: 24px;
    color: #272443;
  }

  .general {
    color: #333;
  }
`;

const InvoiceTableContainer = styled.div`
  background: #ffffff;
  border: 1px solid rgba(142, 142, 142, 0.15);
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  padding: 23px 40px;
  overflow: scroll;

  .invoice-lable {
    font-style: normal;
    font-weight: 800;
    font-size: 18px;
    line-height: 24px;
    color: #272443;
  }
`;

const InvoiceTable = styled.table`
  width: 100%;
  * {
    white-space: nowrap;
  }
  thead {
    th {
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: #5c5b5b;
      padding: 24px 10px;
      border-bottom: 1px solid rgba(139, 155, 172, 0.2);
    }
  }

  tbody {
    td {
      padding: 24px 10px;
      border-bottom: 1px solid rgba(139, 155, 172, 0.2);
      .status {
        svg {
          transform: scale(1.3);
          color: #05be70;
        }
      }
    }
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
  }
`;

export default Subscription;

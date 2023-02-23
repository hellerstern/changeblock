import styled, { css } from "styled-components";
import { IMG_ALLOW_LEFT } from "../../constants/images/images";
import { BsCheckCircle, BsCheckLg } from "react-icons/bs";

const UpgradePlan = (props) => {
  const plan_datas = [
    {
      flag: 0,
      name: "BASIC",
      price: 1999,
      desc: "For one user only/ Per Montly",
      items: [
        "Access to the What-if Analysis Tool",
        "Basic Information Extraction",
        "Basic Text Summarization",
        "Basic Aspect-based Sentiment Analysis",
        "Basic Customer Support",
        "Ideal for individual users and small organizations with basic climate data analysis needs.",
        "(20 API calls a month per feature per user)",
      ],
    },
    {
      flag: 1,
      name: "STANDARD",
      price: 2999,
      desc: "For one user only/ Per monthly",
      items: [
        `Full Access to the What-if Analysis Tool`,
        `Advanced Information Extraction`,
        `Advanced Text Summarization`,
        `Advanced Aspect-based Sentiment Analysis`,
        `Standard Customer Support`,
        `Ideal for individual users and small organizations with basic climate dataanalysis needs.`,
        `(50 API calls a month per feature per user)`,
      ],
    },

    {
      flag: 0,
      name: "PREMIUM",
      price: 3999,
      desc: "For one user only/ Per monthly",
      items: [
        `Full Access to the What-if Analysis Tool`,
        `Advanced Information Extraction`,
        `Advanced Text Summarization`,
        `Advanced Aspect-based Sentiment Analysis`,
        `Premium Customer Support`,
        "Customizable Dashboard and Reports",
        `Ideal for large organizations with complex climate data analysis requirements.`,
        `(Unlimited API calls a month per feature per user)`,
      ],
    },
  ];

  const planc_table = [
    ["Pricing", "$1999 Monthly", "$2999 Monthly", "$3999 Monthly"],
    ["Users", 1, 1, "Unlimited"],
    [
      "API calls",
      "20 API calls per feature per user",
      "50 API calls per feature per user",
      "Unlimited calls per user",
    ],
    ["Data Security", "@@@", "@@@", "@@@"],
    ["Customer Support", "@@@", "@@@", "@@@"],
  ];

  return (
    <Wrapper>
      <Container>
        <AllowBack
          onClick={() => {
            props.setSelectedSidebarTab("Subscription");
          }}
        >
          <img src={IMG_ALLOW_LEFT}></img>
          <span>Back</span>
        </AllowBack>

        <Subscription>
          <span className="sub-label">
            <h3>Subscription</h3>
            <p>Select a plan best suits your needs</p>
          </span>
          <div className="main-sub">
            {plan_datas.map((item, index) => (
              <SubIndex key={index} flag={item.flag}>
                <h2 className="index-label">{item.name}</h2>
                <h2 className="price">${item.price}</h2>
                <h2 className="desc">{item.name}</h2>
                <button
                  onClick={() => props.setSelectedSidebarTab("BillingInfo")}
                >
                  Buy Now
                </button>
                <div className="items">
                  {item.items.map((sItem, sIndex) => (
                    <div className="item" key={sIndex}>
                      <div>
                        <BsCheckCircle></BsCheckCircle>
                      </div>
                      <span>{sItem}</span>
                    </div>
                  ))}
                </div>
              </SubIndex>
            ))}
          </div>
        </Subscription>

        <PlanComparision>
          <h2 className="plc-label">Explore Our Complete Plan Comparision</h2>

          <PlanCTable>
            <thead>
              <tr style={{ backgroundColor: "white" }}>
                <th></th>
                <th>
                  <div>
                    <BsCheckCircle />
                    Basci
                    <button>Start trial</button>
                  </div>
                </th>
                <th>
                  <div>
                    <BsCheckCircle />
                    Basci
                    <button>Start trial</button>
                  </div>
                </th>
                <th>
                  <div>
                    <BsCheckCircle />
                    Basci
                    <button>Start trial</button>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {planc_table.map((item, index) => (
                <>
                  <tr key={index}>
                    {item.map((sItem, sIndex) => (
                      <td
                        key={sIndex}
                        style={sIndex === 0 ? { textAlign: "left" } : undefined}
                      >
                        {sItem === "@@@" ? <BsCheckLg></BsCheckLg> : sItem}
                      </td>
                    ))}
                  </tr>
                  <tr key={index + planc_table.length}>
                    {item.map((sItem, sIndex) => (
                      <td key={sIndex}>
                        <label style={{ opacity: 0 }}>Hi</label>
                      </td>
                    ))}
                  </tr>
                </>
              ))}
            </tbody>
          </PlanCTable>
        </PlanComparision>
        <p className="div-footer">
          Pricing (Local taxes (VAT, GST, etc.) will be charged in addition to
          the prices mentioned.)
        </p>
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

const Subscription = styled.div`
  text-align: center;
  border: 1px solid rgba(142, 142, 142, 0.15);
  border-radius: 5px;
  padding: 50px 34px;
  .sub-label {
    h3 {
      font-weight: 700;
      font-size: 24px;
      line-height: 29px;
      margin-bottom: 20px;
    }
    p {
      font-weight: 400;
      font-size: 18px;
      line-height: 22px;
    }
  }

  .main-sub {
    display: flex;
    justify-content: center;
  }
  margin-bottom: 150px;
`;

const SubIndex = styled.div`
  box-sizing: border-box;
  ${(p) =>
    p.flag
      ? css`
          margin-top: 50px;
          padding: 103px 39px;
          background: #05be70;
          box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
          .desc {
            color: white;
          }
          .items {
            svg {
              color: white;
            }
            .item {
              color: white;
            }
          }

          button {
            color: black;
            background: #e4ec37;
          }
        `
      : css`
          .desc {
            color: #5c5b5b;
          }
          button {
            color: white;
            background-color: black;
          }
          margin-top: 100px;
          padding: 53px 39px;
          background: #ffffff;
          border: 1px solid rgba(92, 91, 91, 0.2);
          box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);

          .items {
            svg {
              color: #05be70;
            }
            .item {
              color: #5c5b5b;
            }
          }
        `}

  border-radius: 5px;
  width: 400px;
  .index-label {
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    margin-bottom: 20px;
  }

  .price {
    font-weight: 700;
    font-size: 36px;
    line-height: 43px;
    margin-bottom: 20px;
  }

  .desc {
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    margin-bottom: 20px;
  }

  button {
    border: 0;
    outline: 0;
    padding: 10px 30px;
    border-radius: 5px;
  }

  .items {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    margin-top: 30px;
    svg {
      transform: scale(1.3);
    }
    .item {
      display: flex;
      gap: 15px;
      margin: 10px 0;
    }
  }
`;

const PlanComparision = styled.div`
  text-align: center;
`;

const PlanCTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 50px;
  svg {
    color: #05be70;
  }
  tr,
  td,
  th {
    border: 1px solid rgba(92, 91, 91, 0.15);
  }

  th {
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 28px 0;
      gap: 10px;

      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 24px;

      button {
        border: 2px solid #05be70;
        border-radius: 5px;
        padding: 8px 30px;
        font-size: 18px;
        color: #333;
        background-color: transparent;
      }
    }
  }

  td {
    padding: 16px 32px;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
  }

  tr:nth-child(odd) {
    background-color: #f4f4f4;
  }
`;

export default UpgradePlan;

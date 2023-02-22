import styled from "styled-components";
import { toast } from "react-toastify";

const ConfirmCancelRenewal = (props) => {
  return (
    <Wrapper>
      <Container>
        <p className="confirm">
          Are you sure you want to cancel subscription renewal
        </p>

        <div className="buttons">
          <button
            className="btn-1"
            onClick={() => {
              props.setFlag(false);
            }}
          >
            No
          </button>
          <button
            className="btn-2"
            onClick={() => {
              toast.success("Autorenewal canceled successfully");
              props.setFlag(false);
            }}
          >
            Yes, Cancel
          </button>
        </div>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border: 1px solid rgba(142, 142, 142, 0.15);
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  background-color: white;
  padding: 76px 51px !important;
`;

const Container = styled.div`
  .confirm {
    font-weight: 700;
    font-size: 18px;
    line-height: 36px;
    margin-bottom: 50px;
  }

  .buttons {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .btn-1 {
    border: 1px solid #8b9bac;
    border-radius: 5px;
    background-color: white;
    padding: 14px 30px;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    color: #5c5b5b;
  }

  .btn-2 {
    border: none;
    background: #ff0100;
    border-radius: 5px;
    padding: 14px 30px;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    color: white;
  }
`;

export default ConfirmCancelRenewal;

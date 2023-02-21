import styled from "styled-components";

const CustomModal = (props) => {
  const class_name = "custom-modal";
  console.log(props.flag);
  function handleModal(e) {
    if (e.target.className.indexOf(class_name) !== -1)
      props.setFlag(!props.flag);
  }

  return (
    <Wrapper flag={props.flag} className={class_name} onClick={handleModal}>
      <Container>{props.children}</Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  display: ${(p) => (p.flag ? "flex" : "none")};
  align-items: center;
  justify-content: center;
`;

const Container = styled.div``;

export default CustomModal;

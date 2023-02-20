import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FiAlignRight } from "react-icons/fi";
import { CgPlayListRemove } from "react-icons/cg";
// import "../styles/Navbar.css";

const Navbar = () => {
  const navItems = [
    { txt: "Features", href: "/features" },
    { txt: "Pricing", href: "/pricing" },
    { txt: "FAQ", href: "/faq" },
    { txt: "Contact Us", href: "/contact-us" },
  ];

  const [mFlag, setMFlag] = useState(false);

  return (
    <Wrapper>
      <Container>
        <Link to="/">
          <img src="images/logo-white.png" alt="img" />
        </Link>
        <NavItems>
          <div className="left">
            {navItems.map((item, index) => (
              <Link to={item.href} key={index} className="txtItem">
                {item.txt}
              </Link>
            ))}
          </div>

          <div className="right">
            <Link className="buttonItem login" to={"/login"}>
              Login
            </Link>
            <Link className="buttonItem signup" to={"/signup"}>
              Signup
            </Link>
          </div>
        </NavItems>
        <MobileNavItems>
          <span className="mobile-resp" onClick={() => setMFlag(!mFlag)}>
            <FiAlignRight />
          </span>
          <MobileContainer flag={mFlag}>
            <div className="container">
              <span className="remove-mobile" onClick={() => setMFlag(!mFlag)}>
                <CgPlayListRemove></CgPlayListRemove>
              </span>
              <div className="items">
                {navItems.map((item, index) => (
                  <Link
                    to={item.href}
                    key={index}
                    className="txtItem"
                    onClick={() => setMFlag(!mFlag)}
                  >
                    {item.txt}
                  </Link>
                ))}
                <Link
                  className="buttonItem login"
                  to={"/login"}
                  onClick={() => setMFlag(!mFlag)}
                >
                  Login
                </Link>
                <Link
                  className="buttonItem signup"
                  to={"/signup"}
                  onClick={() => setMFlag(!mFlag)}
                >
                  Signup
                </Link>
              </div>
            </div>
          </MobileContainer>
        </MobileNavItems>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: black;
  width: 100vw;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 19px 0;
  max-width: 1440px;
  margin: auto;
  @media screen and (max-width: 1600px) {
    padding: 19px 100px;
  }
  @media screen and (max-width: 1100px) {
    padding: 19px 20px;
  }
`;

const NavItems = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 95px;
  @media screen and (max-width: 1100px) {
    gap: 30px;
  }
  @media screen and (max-width: 900px) {
    display: none;
  }
  .left {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
    .txtItem {
      text-decoration: none;
      color: white;
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 22px;
    }
  }

  .right {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
  .buttonItem {
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    text-decoration: none;
  }
  .buttonItem.login {
    color: white;
    border: 1px solid #05be70;
    border-radius: 30px;
    padding: 10px 30px;
  }
  .buttonItem.signup {
    color: black;
    background-color: #05be70;
    border-radius: 30px;
    padding: 10px 30px;
  }
`;

const MobileNavItems = styled.div`
  display: none;
  @media screen and (max-width: 900px) {
    display: block;
  }
  .mobile-resp {
    color: white;
    cursor: pointer;
    svg {
      transform: scale(2);
    }
  }
`;

const MobileContainer = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: ${(p) => (p.flag ? 0 : "-100vw")};
  transition: all 0.3s;
  /* backdrop-filter: blur(10px); */
  background-color: black;

  .container {
    position: relative;
    padding: 30px 30px;
    padding-top: 60px;
    .remove-mobile {
      position: absolute;
      top: 30px;
      right: 30px;
      color: white;
      transform: scale(2);
    }

    .items {
      display: flex;
      flex-direction: column;
      gap: 30px;

      * {
        text-decoration: none;
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 22px;
      }

      .txtItem {
        color: white;
      }
      .buttonItem.login {
        color: white;
        border: 1px solid #05be70;
        border-radius: 30px;
        padding: 10px 30px;
        width: 115px;
        text-align: center;
      }
      .buttonItem.signup {
        width: 115px;
        text-align: center;
        color: black;
        background-color: #05be70;
        border-radius: 30px;
        padding: 10px 30px;
        width: min-content;
      }
    }
  }
`;

export default Navbar;

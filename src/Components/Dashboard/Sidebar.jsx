import { useContext } from "react";
import AppContext from "../../context/context";
import styles from "../../styles/Dashboard/Sidebar.module.css";
import styled from "styled-components";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { SIDEBAR_DATA } from "../../constants/sidebar/sidebar";

const Sidebar = ({ setSelectedSidebarTab, selectedSidebarTab }) => {
  const myContext = useContext(AppContext);
  return (
    <Wrapper>
      <Container>
        <SidebarToggleButton
          onClick={() => myContext.setSbFlag(!myContext.sbFlag)}
          flag={myContext.sbFlag}
        >
          <BsFillArrowLeftCircleFill></BsFillArrowLeftCircleFill>
        </SidebarToggleButton>
        <ul>
          <li
            className={
              selectedSidebarTab === "Dashboard"
                ? `${styles.listitemSelected}`
                : `${styles.listitemUnselected}`
            }
            onClick={(e) => setSelectedSidebarTab("Dashboard")}
          >
            <img
              src={
                selectedSidebarTab === "Dashboard"
                  ? SIDEBAR_DATA.dashboard.img.bright
                  : SIDEBAR_DATA.dashboard.img.dark
              }
              className="me-3"
              alt="dashboard"
            />
            {SIDEBAR_DATA.dashboard.title}
          </li>
          <li
            className={
              selectedSidebarTab === "AnalysisHistory"
                ? `${styles.listitemSelected}`
                : `${styles.listitemUnselected}`
            }
            onClick={(e) => setSelectedSidebarTab("AnalysisHistory")}
          >
            <img
              src={
                selectedSidebarTab === "AnalysisHistory"
                  ? SIDEBAR_DATA.analysis.img.bright
                  : SIDEBAR_DATA.analysis.img.dark
              }
              className="me-3"
              alt="dashboard"
            />
            {SIDEBAR_DATA.analysis.title}
          </li>
          <li
            className={
              selectedSidebarTab === "Subscription"
                ? `${styles.listitemSelected}`
                : `${styles.listitemUnselected}`
            }
            onClick={(e) => setSelectedSidebarTab("Subscription")}
          >
            <img
              src={SIDEBAR_DATA.subscription.img.dark}
              className="me-3"
              alt="dashboard"
            />
            {SIDEBAR_DATA.subscription.title}
          </li>
          <li
            className={
              selectedSidebarTab === "HelpAndSupport"
                ? `${styles.listitemSelected}`
                : `${styles.listitemUnselected}`
            }
            onClick={(e) => setSelectedSidebarTab("HelpAndSupport")}
          >
            <img
              src={
                selectedSidebarTab === "HelpAndSupport"
                  ? SIDEBAR_DATA.help.img.bright
                  : SIDEBAR_DATA.help.img.dark
              }
              className="me-3"
              alt="dashboard"
            />
            {SIDEBAR_DATA.help.title}
          </li>
        </ul>
        {/* <span>
          <FontAwesomeIcon icon={faCircleLeft} className="me-1" />
          Close
        </span> */}
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Container = styled.div`
  position: relative;
  ul {
    padding: 19px !important;
    overflow: hidden;
  }
`;

const SidebarToggleButton = styled.span`
  position: absolute;
  top: 10px;
  right: -8px;
  transform: scale(1.3);
  svg {
    transition: all 0.3s;
    transform: ${(p) => (p.flag ? "rotate(0deg)" : "rotate(180deg)")};
    color: black;
  }
  cursor: pointer;
`;

export default Sidebar;

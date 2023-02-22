import { useEffect, useState, useContext } from "react";
import styled, { css } from "styled-components";
import { useNavigate } from "react-router-dom";
import DashboardNavbar from "../Components/Dashboard/DashboardNavbar";
import Heading from "../Components/Dashboard/Heading";
import Main from "../Components/Dashboard/Main";
import Sidebar from "../Components/Dashboard/Sidebar";
import Subscription from "../Components/Dashboard/Subscription";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import AnalysisHistory from "../Components/Dashboard/AnalysisHistory";
import AppContext from "../context/context";
import { RotatingLines } from "react-loader-spinner";
import { IMG_SUB_BACK } from "../constants/images/images";
import InformDiv from "../Components/Dashboard/InformDiv";
import HelpContract from "../Components/Dashboard/HelpContact";
import Profile from "../Components/Profile/Profile";
import UpgradePlan from "../Components/UpgradePlan/UpgradePlan";

const Dashboard = () => {
  const myContext = useContext(AppContext);

  const [user, setUser] = useState(null);
  const [selectedTab, setSelectedTab] = useState("WhatIf");
  const [selectedSidebarTab, setSelectedSidebarTab] = useState("Dashboard");
  const navigate = useNavigate();
  const headingDesc = {
    WhatIf: {
      heading: "Welcome to our What-If analysis data tool",
      desc: "Our analysis tool makes it easy to conduct What-If scenario planning as fast as possible and also forecast the impact of any proposed change to your project and program portfolios across costs, resources, benefits, value, timeline and more.",
    },
    InformationExtraction: {
      heading: "Welcome to our Information Extraction tool",
      desc: "Unlock the Full Potential of Your Projects with InsightX's Advanced Information Extraction Feature.",
    },
    EntityExtraction: {
      heading: "Welcome to our Aspect Based Sentiment tool",
      desc: "Uncover Emotional Landscape of Climate Projects with InsightX's Aspect-Based Sentiment Analysis",
    },
    Summarization: {
      heading: "Welcome to our Summarization tool",
      desc: "Unleash the Power of Project Data: InsightX's Summarization Feature Streamlines Information for Better Decisions",
    },
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        navigate("/login");
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  if (!user) {
    return (
      <div
        style={{
          display: "block",
          position: "fixed",
          zIndex: "20",
          top: "calc(50% - 60px)",
          right: "calc(50% - 60px)",
        }}
      >
        <RotatingLines
          strokeColor="#4fa94d"
          strokeWidth="5"
          animationDuration="0.75"
          width="60"
          wrapperClassName=""
          visible={true}
        />
      </div>
    );
  }

  // useEffect(() => {
  //   alert("wat");
  // }, [selectedSidebarTab]);

  return (
    <div style={{ background: "#F4F5FB" }}>
      <DashboardNavbar
        user={user}
        setSelectedSidebarTab={setSelectedSidebarTab}
      />
      {(() => {
        if (selectedSidebarTab === "Dashboard") {
          return (
            <Container>
              <DivSidebar flag={myContext.sbFlag}>
                <Sidebar
                  selectedSidebarTab={selectedSidebarTab}
                  setSelectedSidebarTab={setSelectedSidebarTab}
                />
              </DivSidebar>

              <div
                className="main-content"
                style={{
                  minWidth: "calc(100vw - 260px)",
                  padding: "20px 30px",
                }}
              >
                <div className="container py-3">
                  <InformDiv />
                  <Heading
                    selectedTab={selectedTab}
                    headingDesc={headingDesc}
                  />
                  <Main
                    selectedTab={selectedTab}
                    setSelectedTab={setSelectedTab}
                  />
                </div>
              </div>
            </Container>
          );
        } else if (selectedSidebarTab === "AnalysisHistory") {
          return (
            <Container>
              <DivSidebar flag={myContext.sbFlag}>
                <Sidebar
                  selectedSidebarTab={selectedSidebarTab}
                  setSelectedSidebarTab={setSelectedSidebarTab}
                />
              </DivSidebar>

              <div
                style={{
                  minWidth: "calc(100vw - 260px)",
                  padding: "20px 30px",
                }}
              >
                <div className="container py-3">
                  <AnalysisHistory />
                </div>
              </div>
            </Container>
          );
        } else if (selectedSidebarTab === "Subscription") {
          return (
            <Subscription
              setSelectedSidebarTab={setSelectedSidebarTab}
            ></Subscription>
          );
        } else if (selectedSidebarTab === "HelpAndSupport") {
          return (
            <Container>
              <DivSidebar flag={myContext.sbFlag}>
                <Sidebar
                  selectedSidebarTab={selectedSidebarTab}
                  setSelectedSidebarTab={setSelectedSidebarTab}
                />
              </DivSidebar>

              <div
                className="col-9"
                style={{
                  minWidth: "calc(100vw - 260px)",
                  padding: "20px 30px",
                }}
              >
                <div className="container py-3">
                  <InformDiv />
                  <HelpContract />
                </div>
              </div>
            </Container>
          );
        } else if (selectedSidebarTab === "profile") {
          return (
            <Profile setSelectedSidebarTab={setSelectedSidebarTab}></Profile>
          );
        } else if (selectedSidebarTab === "notifi") {
          return <h1>Notification</h1>;
        } else if (selectedSidebarTab === "upgrade-plan") {
          return (
            <UpgradePlan
              setSelectedSidebarTab={setSelectedSidebarTab}
            ></UpgradePlan>
          );
        }
      })()}
    </div>
  );
};

const Container = styled.div`
  display: flex;
`;

const DivSidebar = styled.div`
  transition: all 0.3s;
  ${(p) =>
    p.flag
      ? css`
          min-width: 260px;
        `
      : css`
          min-width: 87px;
        `}
  max-width: 0;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.05);
`;

export default Dashboard;

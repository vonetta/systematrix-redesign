import React from "react";
import machineLearning from "./../images/machine-learning.png";

const Home = () => {
  return (
    <div className="home-section">
      <img height="500" src={machineLearning} alt=" machine learning" />
      <div className="vertical-line">&nbsp;</div>
      <p>
        Systematrix has pioneered AI that conceives the initial problem,
        constructs solutions and integrates the finished product into the
        client's production environment. Its Algorithms run massive scale graph
        networks and computer vision products to extract information from data
        stored in videos or still photographs, geospatial business intelligence,
        decision systems that predict money laundering (AML), know-your-customer
        information (KYC), online and offline transaction fraud, human
        trafficking, malware intrusion, insurance claim adjudication status,
        loan loss, insurance fraud, and proper wire transfer information. These
        highlight some of the most in-demand use cases of Systematrix's
        products. Systematrix is delineated by its approach that utilizes the
        many areas that make up an effective AI practice, such as natural
        language processing (NLP), computer vision, graph network analytics,
        time series forecasting, information gathering, distributed computing,
        and more. Systematrix builds the majority of its algorithms from the
        bottom up, therefore its solutions are robust and platform agnostic.
        Systematrix deploys its products and services across a diverse range of
        industries such as financial services, manufacturing, retail, law
        enforcement, environment, power generation, insurance, medical devices
        and governmental agencies that need to convert data to information to
        understand effects of their policy.
      </p>
    </div>
  );
};

export default Home;

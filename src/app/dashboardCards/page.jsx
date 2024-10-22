














"use client";
import React from "react";
import { Card, Col, Row } from "antd";
import {
  EyeOutlined,
  DollarCircleOutlined,
  ShoppingCartOutlined,
  UsergroupAddOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import MainLayout from "../../components/app-components/Layout/MainLayout";
import { dashboardData } from "../../components/app-components/data/dashboardData";
import ChatList from "@/components/app-components/data/chatList";
import TopChannelsTable from "@/components/app-components/data/channel";
import DashboardCharts from "@/components/app-components/data/charts";
import { useSelector } from "react-redux";

const iconMapping = {
  eye: (
    <EyeOutlined
      className="text-xl fill-primary dark:fill-white !important"
      width="20"
      height="17"
    />
  ),
  dollar: <ShoppingCartOutlined className="text-xl" />,
  shopping: <ShoppingOutlined className="text-xl" />,
  user: <UsergroupAddOutlined className="text-xl" />,
};





const DashboardCards = () => {
  const darkMode = useSelector((state) => state.tasks.darkMode);

  return (
    <MainLayout>
      <div className="p-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {dashboardData.map((card, index) => (
            <div key={index} className="w-full">
              <Card
                className="text-center rounded-sm border border-stroke bg-white shadow-sm transition-all duration-200 ease-in-out"
                style={{
                  backgroundColor: darkMode ? "#24303f" : "#ffffff",
                  color: darkMode ? "#ffffff" : "#000000",
                }}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full border bg-meta-2 dark:bg-meta-4 mr-8 h-[31px] w-[35px] bg-[#eff2f7]">
                  <div
                    className="h-4 w-5 flex items-center justify-center rounded-full"
                    style={{
                      backgroundColor: darkMode ? "#c0c3c7" : "#ffffff",
                    }}
                  >
                    {React.cloneElement(iconMapping[card.icon], {
                      
                      style: {
                        color: darkMode ? "#c0c3c7" : "#3B82F6",
                        width: "14px",
                      },
                    })}
                  </div>
                </div>

                <div className="flex flex-col items-left justify-between h-full">
                  <h3
                    className="flex items-left text-title-md font-bold text-black dark:text-white text-[18px] leading-[30px]"
                    style={{ color: darkMode ? "#ffffff" : "#000000" }}
                  >
                    {card.value}
                  </h3>

                  <p
                    className="flex flex-col items-left m-0 text-left font-bold text-black dark:text-white"
                    style={{
                      fontSize: "10px",
                      lineHeight: "1.25rem",
                      color: darkMode ? "#ffffff" : "#808080",
                    }}
                  >
                    {card.title}
                  </p>
                </div>

                <p className="m-0 text-green-500 absolute bottom-6 right-2">
                  {card.percentage}
                </p>
              </Card>
            </div>
          ))}
        </div>

        <div className="container mx-auto py-10">
          <DashboardCharts />
        </div>

<<<<<<< HEAD
    
{/* 
=======
     
>>>>>>> bdc4bd3beb9dc743034c1b78154bdce8d1b33fe7
<div>
  <Row gutter={24}>
    <Col
      xs={24}
      lg={16}
<<<<<<< HEAD
      className="w-full sm:w-full"
    >
      <TopChannelsTable />
    </Col>

    <Col
      xs={24}
      lg={8}
      className="w-full sm:w-full"
      style={{ maxWidth: "100%" }} 
    >
      <Card
        style={{
          backgroundColor: darkMode ? "#24303f" : "#ffffff",
          width: "100%", 
          border: "none",
          borderRadius: "0",
          height: "467px",
        }}
        title={
          <div
            className={`border-none ${darkMode ? "text-white" : "bg-[#ffffff]"}`}
            style={{ marginBottom: "-5px"}}
          >
            <ChatList />
          </div>
        }
      />
    </Col>
  </Row>
</div>  */}
 
<div>
  <Row gutter={24}>
    <Col
      xs={24}
      lg={16}
      className="w-full"
    >
      <TopChannelsTable />
    </Col>

    <Col
      xs={24}
      lg={8}
      className="w-full mt-4 sm:mt-4 md:mt-0"  // Apply margin-top only for smaller screens
      style={{ maxWidth: "100%" }} 
    >
      <Card
        style={{
          backgroundColor: darkMode ? "#24303f" : "#ffffff",
          width: "100%", 
          border: "none",
          borderRadius: "0",
          height: "467px",
        }}
        title={
          <div
            className={`border-none ${darkMode ? "text-white" : "bg-[#ffffff]"}`}
            style={{ marginBottom: "-5px"}}
          >
            <ChatList />
          </div>
        }
      />
    </Col>
  </Row>
</div>

 
     
      </div> 

      
=======
      className="w-full"
    >
      <TopChannelsTable />
    </Col>

    <Col
      xs={24}
      lg={8}
      className="w-full mt-4 sm:mt-4 md:mt-0"  
      style={{ maxWidth: "100%" }} 
    >
      <Card
        style={{
          backgroundColor: darkMode ? "#24303f" : "#ffffff",
          width: "100%", 
          border: "none",
          borderRadius: "0",
          height: "467px",
        }}
        title={
          <div
            className={`border-none ${darkMode ? "text-white" : "bg-[#ffffff]"}`}
            style={{ marginBottom: "-5px"}}
          >
            <ChatList />
          </div>
        }
      />
    </Col>
  </Row>
</div>

      </div>
>>>>>>> bdc4bd3beb9dc743034c1b78154bdce8d1b33fe7
    </MainLayout>
  );
};

export default DashboardCards;

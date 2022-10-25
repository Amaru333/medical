import React from "react";
import Styles from "../styles/DashboardLayout.module.css";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DownloadIcon from "@mui/icons-material/Download";
import UICalendar from "../../../widgets/calendar/UICalendar";

function DashboardHeader() {
  return (
    <div className={Styles.parent}>
      <div className={Styles.div1}>
        <div className="text-3xl font-bold">
          <p className="m-0 mb-2">Hey, Name!</p>
          <p className="m-0">Good Afternoon!</p>
        </div>
      </div>
      <div className={Styles.div2}>
        <div>
          <div className="flex flex-row items-center bg-cs/10 w-fit p-2 px-4 rounded-3xl">
            <CheckCircleIcon color="cs" />
            <p className="m-0 pl-2 font-semibold text-cs">No notifications</p>
          </div>
          <div>
            <p className="m-0 mt-4 text-xs text-gr">Previous appointment</p>
            <span className="flex items-center cursor-pointer">
              <p className="text-2xl font-semibold m-0 mr-2">5th Sept, 2021</p>
              <DownloadIcon />
            </span>
          </div>
        </div>
      </div>
      <div className={Styles.div3}>
        <div className="w-3/5">
          <UICalendar />
        </div>
        <div className="ml-4 w-2/5">
          <p className="font-bold text-xl text-black">Basic Informations</p>
          <div className="flex justify-between">
            <div className="flex flex-col">
              <p className="m-0">Height</p>
              <p className="m-0">173cm</p>
            </div>
            <div className="flex flex-col">
              <p className="m-0">Height</p>
              <p className="m-0">173cm</p>
            </div>
            <div className="flex flex-col">
              <p className="m-0">Height</p>
              <p className="m-0">173cm</p>
            </div>
          </div>
        </div>
      </div>
      <div className={Styles.div4}></div>
      <div className={Styles.div5}></div>
      <div className={Styles.div6}></div>
      <div className={Styles.div7}></div>
    </div>
  );
}

export default DashboardHeader;

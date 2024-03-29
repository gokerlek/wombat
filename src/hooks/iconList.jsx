import React from "react";

import { ReactComponent as Loading } from "../assets/icons/Loading.svg";
import { ReactComponent as Buildings } from "../assets/icons/Buildings.svg";
import { ReactComponent as Search } from "../assets/icons/Search.svg";
import { ReactComponent as Dot } from "../assets/icons/Dot.svg";
import { ReactComponent as InfoCircle } from "../assets/icons/InfoCircle.svg";

import { ReactComponent as Wombat } from "../assets/icons/logo/Wombat.svg";
import { ReactComponent as Hamburger } from "../assets/icons/Hamburger.svg";

import { ReactComponent as DownBold } from "../assets/icons/arrows/DownBold.svg";
import { ReactComponent as Left } from "../assets/icons/arrows/Left.svg";
import { ReactComponent as Right } from "../assets/icons/arrows/Right.svg";
import { ReactComponent as Up } from "../assets/icons/arrows/Up.svg";
import { ReactComponent as Down } from "../assets/icons/arrows/Down.svg";
import { ReactComponent as Selector } from "../assets/icons/arrows/Selector.svg";
import { ReactComponent as ArrowLeft } from "../assets/icons/arrows/ArrowLeft.svg";
import { ReactComponent as ArrowRight } from "../assets/icons/arrows/ArrowRight.svg";

import { ReactComponent as Overview } from "../assets/icons/sidebar/Overview.svg";
import { ReactComponent as OverviewSolid } from "../assets/icons/sidebar/OverviewSolid.svg";
import { ReactComponent as Jobs } from "../assets/icons/sidebar/Jobs.svg";
import { ReactComponent as JobsSolid } from "../assets/icons/sidebar/JobsSolid.svg";
import { ReactComponent as Candidates } from "../assets/icons/sidebar/Candidates.svg";
import { ReactComponent as CandidatesSolid } from "../assets/icons/sidebar/CandidatesSolid.svg";
import { ReactComponent as TalentPools } from "../assets/icons/sidebar/TalentPools.svg";
import { ReactComponent as TalentPoolsSolid } from "../assets/icons/sidebar/TalentPoolsSolid.svg";
import { ReactComponent as Reports } from "../assets/icons/sidebar/Reports.svg";
import { ReactComponent as ReportsSolid } from "../assets/icons/sidebar/ReportsSolid.svg";
import { ReactComponent as Campaigns } from "../assets/icons/sidebar/Campaigns.svg";
import { ReactComponent as CampaignsSolid } from "../assets/icons/sidebar/CampaignsSolid.svg";
import { ReactComponent as Settings } from "../assets/icons/sidebar/Settings.svg";
import { ReactComponent as SettingsSolid } from "../assets/icons/sidebar/SettingsSolid.svg";

import { ReactComponent as Bell } from "../assets/icons/header/Bell.svg";
import { ReactComponent as Calendar } from "../assets/icons/header/Calendar.svg";
import { ReactComponent as Eye } from "../assets/icons/header/Eye.svg";
import { ReactComponent as EyeActive } from "../assets/icons/header/EyeActive.svg";
import { ReactComponent as HideEye } from "../assets/icons/header/HideEye.svg";
import { ReactComponent as World } from "../assets/icons/header/World.svg";
import { ReactComponent as Building } from "../assets/icons/header/Building.svg";

import { ReactComponent as Plus } from "../assets/icons/buttons/Plus.svg";
import { ReactComponent as Reorder } from "../assets/icons/buttons/Reorder.svg";
import { ReactComponent as Filter } from "../assets/icons/buttons/Filter.svg";
import { ReactComponent as Play } from "../assets/icons/buttons/Play.svg";
import { ReactComponent as Disqualify } from "../assets/icons/buttons/Disqualify.svg";

import { ReactComponent as Stars } from "../assets/icons/priority/Stars.svg";

import { ReactComponent as Clock } from "../assets/icons/job-card/Clock.svg";
import { ReactComponent as Marker } from "../assets/icons/job-card/Marker.svg";
import { ReactComponent as Salary } from "../assets/icons/job-card/Salary.svg";
import { ReactComponent as User } from "../assets/icons/job-card/User.svg";
import { ReactComponent as Followed } from "../assets/icons/job-card/Followed.svg";
import { ReactComponent as Drag } from "../assets/icons/job-card/Drag.svg";
import { ReactComponent as Edit } from "../assets/icons/job-card/Edit.svg";
import { ReactComponent as Share } from "../assets/icons/job-card/Share.svg";

import { ReactComponent as Check } from "../assets/icons/status/Check.svg";
import { ReactComponent as Cross } from "../assets/icons/status/Cross.svg";
import { ReactComponent as Archived } from "../assets/icons/status/Archived.svg";

const iconList = (purpose, { custom }) => {
  switch (purpose) {
    //LOGO
    case "logo":
      return <Wombat />;
    case "hamburger":
      return <Hamburger />;
    case "search":
      return <Search />;
    case "info_circle":
      return <InfoCircle />;

    case "loading":
      return <Loading />;
    case "buildings":
      return <Buildings />;
    case "dot":
      return <Dot />;

    //ARROWS
    case "down-bold":
      return <DownBold />;
    case "left":
      return <Left />;
    case "right":
      return <Right />;
    case "up":
      return <Up />;
    case "down":
      return <Down />;
    case "selector":
      return <Selector />;
    case "arrow-left":
      return <ArrowLeft />;
    case "arrow-right":
      return <ArrowRight />;

    // SIDEBAR
    case "overview":
      return <Overview />;
    case "overview active":
      return <OverviewSolid />;
    case "jobs":
      return <Jobs />;
    case "jobs active":
      return <JobsSolid />;
    case "candidates":
      return <Candidates />;
    case "candidates active":
      return <CandidatesSolid />;
    case "talent-pools":
      return <TalentPools />;
    case "talent-pools active":
      return <TalentPoolsSolid />;
    case "reports":
      return <Reports />;
    case "reports active":
      return <ReportsSolid />;
    case "campaigns":
      return <Campaigns />;
    case "campaigns active":
      return <CampaignsSolid />;
    case "settings":
      return <Settings />;
    case "settings active":
      return <SettingsSolid />;

    // HEADER
    case "bell":
      return <Bell />;
    case "calendar":
      return <Calendar />;
    case "eye":
      return <Eye />;
    case "hide eye":
      return <HideEye />;
    case "eye active":
      return <EyeActive />;
    case "world":
      return <World />;
    case "building":
      return <Building />;

    // BUTTONS
    case "plus":
      return <Plus />;
    case "reorder":
      return <Reorder />;
    case "filter":
      return <Filter />;
    case "play":
      return <Play />;
    case "disqualify":
      return <Disqualify />;

    //PRIORITY
    case "stars":
      return <Stars />;

    //JOB_CARD
    case "clock":
      return <Clock />;
    case "marker":
      return <Marker />;
    case "salary":
      return <Salary />;
    case "recruiter":
      return <User />;
    case "followed":
      return <Followed className={custom} />;
    case "drag":
      return <Drag />;
    case "edit":
      return <Edit />;
    case "share":
      return <Share />;

    //STATUS
    case "check":
      return <Check />;
    case "cross":
      return <Cross />;
    case "archived":
      return <Archived />;

    default:
      return null;
  }
};

export default iconList;

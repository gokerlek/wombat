import React from "react";

import { ReactComponent as Loading } from "../assets/icons/Loading.svg";

import { ReactComponent as Paketus } from "../assets/icons/logo/Paketus.svg";
import { ReactComponent as SmsMessage } from "../assets/icons/SmsMessage.svg";
import { ReactComponent as Alarm } from "../assets/icons/Alarm.svg";
import { ReactComponent as Refresh } from "../assets/icons/Refresh.svg";
import { ReactComponent as Quit } from "../assets/icons/header/Quit.svg";
import { ReactComponent as Order } from "../assets/icons/header/Order.svg";
import { ReactComponent as Envelope } from "../assets/icons/header/Envelope.svg";
import { ReactComponent as Info } from "../assets/icons/Info.svg";
import { ReactComponent as Upload } from "../assets/icons/Upload.svg";

import { ReactComponent as DownBold } from "../assets/icons/arrows/DownBold.svg";
import { ReactComponent as Left } from "../assets/icons/arrows/Left.svg";
import { ReactComponent as Right } from "../assets/icons/arrows/Right.svg";
import { ReactComponent as Up } from "../assets/icons/arrows/Up.svg";
import { ReactComponent as Down } from "../assets/icons/arrows/Down.svg";
import { ReactComponent as Selector } from "../assets/icons/arrows/Selector.svg";
import { ReactComponent as Dot } from "../assets/icons/Dot.svg";
import { ReactComponent as Likes } from "../assets/icons/Likes.svg";
import { ReactComponent as Stars } from "../assets/icons/Stars.svg";
import { ReactComponent as City } from "../assets/icons/City.svg";
import { ReactComponent as Districts } from "../assets/icons/Districts.svg";
import { ReactComponent as Street } from "../assets/icons/Street.svg";

const iconList = (purpose, { width, height, color }) => {
  switch (purpose) {
    //LOGO
    case "logo":
      return <Paketus />;

    case "loading":
      return <Loading />;

    case "info":
      return <Info />;

    case "upload":
      return <Upload />;

    //LOGIN
    case "sms":
      return <SmsMessage />;
    case "alarm":
      return <Alarm />;
    case "refresh":
      return <Refresh />;
    case "quit":
      return <Quit />;
    case "order":
      return <Order />;
    case "envelope":
      return <Envelope />;

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

    case "dot":
      return <Dot />;

    case "likes":
      return <Likes />;
    case "stars":
      return <Stars />;

    //PROFILE
    case "city":
      return <City />;
    case "districts":
      return <Districts />;
    case "street":
      return <Street />;

    default:
      return null;
  }
};

export default iconList;

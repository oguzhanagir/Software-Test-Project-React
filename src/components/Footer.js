import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";

function Footer() {
  return (
    <BottomNavigation style={{ backgroundColor: "#9EDFCE" }}>
      <BottomNavigationAction
        color="red"
        label="Facebook"
        value="recents"
        icon={
          <FacebookIcon
            style={{ fill: "#006600", height: "40", width: "40" }}
          />
        }
      />
      <BottomNavigationAction
        label="Twitter"
        value="favorites"
        icon={
          <TwitterIcon style={{ fill: "#006600", height: "40", width: "40" }} />
        }
      />
      <BottomNavigationAction
        label="Instagram"
        value="nearby"
        icon={
          <InstagramIcon
            style={{ fill: "#006600", height: "40", width: "40" }}
          />
        }
      />
      <BottomNavigationAction
        label="YouTube"
        value="folder"
        icon={
          <YouTubeIcon style={{ fill: "#006600", height: "40", width: "40" }} />
        }
      />
    </BottomNavigation>
  );
}

export default Footer;

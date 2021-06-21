import React from "react";
import { makeStyles, IconButton } from "@material-ui/core";
import { EmailRounded, Telegram, WhatsApp } from "@material-ui/icons";
import EmailForm from "./EmailForm";

const useStyles = makeStyles((theme) => ({
  sendTo: {
    margin: "2rem auto 0rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  chatIcon: {
    marginLeft: "2rem",
  },
}));
const ContactForm = () => {
  const classes = useStyles();
  return (
    <div className="php-email-form">
      <EmailForm />

      <div className={classes.sendTo}>
        Or Via:
        <span className={classes.chatIcon}>
          WhatsApp:
          <IconButton>
            <WhatsApp style={{ color: "green" }} />
          </IconButton>
        </span>
        <span>
          Telegram:
          <IconButton>
            <Telegram style={{ color: "#149ddd" }} />
          </IconButton>
        </span>
        <span>
          Email:
          <IconButton>
            <EmailRounded style={{ color: "red" }} />
          </IconButton>
        </span>
      </div>
    </div>
  );
};

export default ContactForm;

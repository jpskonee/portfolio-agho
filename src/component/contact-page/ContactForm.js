import React from "react";
import { makeStyles, IconButton } from "@material-ui/core";
import { LinkedIn, Telegram, WhatsApp } from "@material-ui/icons";
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
  hideName: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
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
          <span className={classes.hideName}>WhatsApp:</span>
          <a rel="noreferrer" href="https://wa.link/d2xeue" target="_blank">
            <IconButton>
              <WhatsApp style={{ color: "green" }} />
            </IconButton>
          </a>
        </span>
        <span>
          <span className={classes.hideName}>Telegram:</span>
          <a rel="noreferrer" href="https://t.me/aghodotwork" target="_blank">
            <IconButton>
              <Telegram style={{ color: "#149ddd" }} />
            </IconButton>
          </a>
        </span>
        <span>
          <span className={classes.hideName}> LinkedIn: </span>
          <a
            rel="noreferrer"
            href="https://www.linkedin.com/in/agho-dev/"
            target="_blank"
          >
            <IconButton>
              <LinkedIn style={{ color: "#0a66c2" }} />
            </IconButton>
          </a>
        </span>
      </div>
    </div>
  );
};

export default ContactForm;

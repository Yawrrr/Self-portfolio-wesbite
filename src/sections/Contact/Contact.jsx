import React from "react";
import styles from "./ContantStyle.module.css";

function Contact() {
  return (
    <section className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form method="POST" action="">
        <div className="formGroup">
          <label htmlFor="name" hidden>
            name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            required
          ></textarea>
        </div>
        <input className="hover btn" value="Submit" type="submit" />
      </form>
    </section>
  );
}

export default Contact;

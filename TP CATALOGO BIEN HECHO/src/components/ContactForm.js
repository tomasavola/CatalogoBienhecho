import React from "react";
import '../styles.css'

export default function ContactForm() {
  return (
    <section className="contact">
      <h2>Dudas y consultas</h2>
      <form>
        <label style={{ marginTop: "2rem", fontWeight: "bold" }} for="name">
          Nombre:
        </label>
        <input type="text" id="name" name="name" required />
        <label style={{ fontWeight: "bold" }} for="email">
          Mail:
        </label>
        <input type="email" id="email" name="email" required />
        <label style={{ fontWeight: "bold" }} for="message">
          Mensaje:
        </label>
        <textarea id="message" name="message" rows="4" required></textarea>
        <button className="btnSubmit">Submit</button>
      </form>
    </section>
  );
}

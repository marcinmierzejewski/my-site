import { useEffect, useState, useRef } from "react";
import { FormOverlay, FormWrapper, FormBoxText } from "./ContactForm.styled";
import emailjs, { init } from "@emailjs/browser";

export const ContactForm = ({ formIsOpen, setFormIsOpen }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  init("E1Aba-sg_6xJTrYkf");
  const form = useRef();

  const inputChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
    }
    if (name === "number") {
      setNumber(value);
    }
    if (name === "email") {
      setEmail(value);
    }
    if (name === "message") {
      setMessage(value);
    }
  };

  const resetForm = () => {
    setName("");
    setNumber("");
    setEmail("");
  };

  //press Escape to close Contact form modal
  useEffect(() => {
    const close = (e) => {
      console.log(e.key);
      if (e.key === "Escape") {
        setFormIsOpen(false);
      }
    };
    if (formIsOpen) {
      window.addEventListener("keydown", close);
      return () => window.removeEventListener("keydown", close);
    }
  }, [formIsOpen]);

  const valueSubmit = (e) => {
    e.preventDefault();
    if (1 === 0) {
      console.log("Incorrect data"); //stworzyc validator
    } else {
      emailjs.sendForm("service_xzdi6cl", "template_06kxnin", form.current, "E1Aba-sg_6xJTrYkf").then(
        (result) => {
          alert("Message Sent Successfully");
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      console.log(name, number, email);
      resetForm();
      setFormIsOpen(false);
    }
  };

  return (
    <>
      <FormOverlay
        formIsOpen={formIsOpen}
        onClick={() => setFormIsOpen(false)}
      />
      <FormWrapper formIsOpen={formIsOpen}>
        <form onSubmit={valueSubmit} ref={form} >
          <FormBoxText isActive={name}>
            <input
              type="text"
              name="name"
              value={name}
              onChange={inputChange}
              pattern="^[a-zA-ZĐ°-ŃŹĐ-ĐŻ]+(([' -][a-zA-ZĐ°-ŃŹĐ-ĐŻ ])?[a-zA-ZĐ°-ŃŹĐ-ĐŻ]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <span>C</span>
            <label>Name</label>
          </FormBoxText>
          <FormBoxText isActive={number}>
            <input
              type="tel"
              name="number"
              value={number}
              onChange={inputChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
            <span>N</span>
            <label>Number</label>
          </FormBoxText>
          <FormBoxText isActive={email}>
            <input
              type="email"
              name="email"
              value={email}
              onChange={inputChange}
              // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
            <span>E</span>
            <label>E-mail</label>
          </FormBoxText>
          <FormBoxText isActive={message}>
            <input
              type="text"
              name="message"
              value={message}
              onChange={inputChange}
              // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
            <span>M</span>
            <label>Message</label>
          </FormBoxText>

          <button type="submit">Submit</button>
        </form>
      </FormWrapper>
    </>
  );
};

import { useEffect, useState, useRef } from "react";
import {
  FormOverlay,
  FormWrapper,
  FormBoxText,
  SubmitButton,
  CloseBtn,
  NotificationBox,
} from "./ContactForm.styled";
import emailjs, { init } from "@emailjs/browser";
import {
  IoIosContact,
  IoIosPhonePortrait,
  IoIosMail,
  IoIosFiling,
  IoIosCloseCircleOutline,
} from "react-icons/io";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ContactForm = ({ formIsOpen, setFormIsOpen }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  init(`${import.meta.env.VITE_USER_KEY}`);
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
    setMessage("");
  };

  //press Escape to close Contact form modal
  useEffect(() => {
    const close = (e) => {
      // console.log(e.key);
      if (e.key === "Escape") {
        setFormIsOpen(false);
      }
    };
    if (formIsOpen) {
      window.addEventListener("keydown", close);
      return () => window.removeEventListener("keydown", close);
    }
  }, [formIsOpen]);

  const notify = () => {
    toast.success("Message Sent Successfully !", {
      position: toast.POSITION.TOP_CENTER
    });
  }

  const valueSubmit = (e) => {
    e.preventDefault();
    const SERVICE = import.meta.env.VITE_SERVICE_KEY;
    const TEMPLATE = import.meta.env.VITE_TEMPLATE_KEY;
    const USER = import.meta.env.VITE_USER_KEY;
    if (1 === 0) {
      console.log("Incorrect data"); //stworzyc validator
    } else {
      emailjs
        .sendForm(`${SERVICE}`, `${TEMPLATE}`, form.current, `${USER}`)
        .then(
          () => {
            notify();
          },
          (error) => {
            console.log(error.text);
          }
        );
      // console.log(name, number, email);
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
        <form onSubmit={valueSubmit} ref={form}>
          <p>Contact me!</p>
          <CloseBtn onClick={() => setFormIsOpen(false)}>
            <IoIosCloseCircleOutline />
          </CloseBtn>
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
            <span>
              <IoIosContact />
            </span>
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
            />
            <span>
              <IoIosPhonePortrait />
            </span>
            <label>Number</label>
          </FormBoxText>
          <FormBoxText isActive={email}>
            <input
              type="email"
              name="email"
              value={email}
              onChange={inputChange}
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              required
            />
            <span>
              <IoIosMail />
            </span>
            <label>E-mail</label>
          </FormBoxText>
          <FormBoxText isActive={message}>
            <input
              type="text"
              name="message"
              value={message}
              onChange={inputChange}
              title="Please, input your message"
              required
            />
            <span>
              <IoIosFiling />
            </span>
            <label>Message</label>
          </FormBoxText>
          <SubmitButton type="submit" isAvailable={name && email && message}>
            Send message
          </SubmitButton>
          <NotificationBox />
        </form>
      </FormWrapper>
    </>
  );
};

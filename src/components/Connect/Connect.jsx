import { useEffect, useState, useRef } from "react";
import emailjs, { init } from "@emailjs/browser";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaLinkedin,
  FaArrowRight,
} from "react-icons/fa";
import {
  ConnectWrapper,
  ConnectText,
  SocialMedia,
  ConnectForm,
  InputBox,
  ConnectButton,
} from "./Connect.styled";

export const Connect = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  init(`${import.meta.env.VITE_USER_KEY}`);
  const form = useRef();

  const inputChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
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
    setEmail("");
    setMessage("");
  };

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
          (result) => {
            alert("Message Sent Successfully");
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      console.log(name, email);
      resetForm();
      setFormIsOpen(false);
    }
  };

  return (
    <ConnectWrapper>
      <div>
        <ConnectText>
          <p>Let's</p>
          <p>Connect</p>
        </ConnectText>
        <SocialMedia>
          <li>
            <a
              href="https://www.facebook.com/marcin.mierzejewski.16/"
              target="_blank"
            >
              <FaFacebookSquare />
            </a>
          </li>
          <li>
            <a href="https://github.com/marcinmierzejewski" target="_blank">
              <FaGithubSquare />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/marcin-mierzejewski-a85257221/"
              target="_blank"
            >
              <FaLinkedin />
            </a>
          </li>
        </SocialMedia>
      </div>
      <div>
        <ConnectForm onSubmit={valueSubmit} ref={form}>
          <InputBox isActive={name}>
            <input
              type="text"
              id="form_name"
              name="name"
              value={name}
              onChange={inputChange}
              required
            />
            <label htmlFor="form_name">Your name:</label>
          </InputBox>

          <InputBox isActive={email}>
            <input
              type="email"
              id="form_email"
              name="email"
              value={email}
              onChange={inputChange}
              // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
            <label htmlFor="form_email">Your email address:</label>
          </InputBox>

          <InputBox isActive={message}>
            <input
              type="text"
              id="form_message"
              name="message"
              value={message}
              onChange={inputChange}
              pattern="^[a-zA-ZĐ°-ŃŹĐ-ĐŻ]+(([' -][a-zA-ZĐ°-ŃŹĐ-ĐŻ ])?[a-zA-ZĐ°-ŃŹĐ-ĐŻ]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <label htmlFor="form_message">Your message:</label>
          </InputBox>
          <ConnectButton type="submit" isAvailable={name && email && message}>
            Send <FaArrowRight />
          </ConnectButton>
        </ConnectForm>
      </div>
    </ConnectWrapper>
  );
};

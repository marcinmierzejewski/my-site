import { useEffect } from "react";
import { FormOverlay, FormWrapper } from "./ContactForm.styled";

export const ContactForm = ({ formIsOpen, setFormIsOpen }) => {
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
    const form = e.target;
    const name = form.name.value;
    const number = form.number.value;

    if (1 === 0) {
      console.log("Incorrect data"); //stworzyc validator
    } else {
      console.log(name, number);
      form.reset();
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
        <form onSubmit={valueSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-ZĐ°-ŃŹĐ-ĐŻ]+(([' -][a-zA-ZĐ°-ŃŹĐ-ĐŻ ])?[a-zA-ZĐ°-ŃŹĐ-ĐŻ]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label>
            Number
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
      </FormWrapper>
    </>
  );
};

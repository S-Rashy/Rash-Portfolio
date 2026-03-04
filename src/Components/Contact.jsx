import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styled, { keyframes } from "styled-components";

const FORMSPREE_URL = "https://formspree.io/f/mgolgkvk";

const validate = (formData) => {
  const errors = {};
  if (!formData.name.trim()) errors.name = "Name is required";
  if (!formData.email.trim()) errors.email = "Email is required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
    errors.email = "Enter a valid email address";
  if (!formData.message.trim()) errors.message = "Message is required";
  else if (formData.message.trim().length < 10)
    errors.message = "Message is too short (min 10 characters)";
  return errors;
};

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
    if (status.error) setStatus((s) => ({ ...s, error: null }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }
    setStatus({ submitting: true, submitted: false, error: null });
    try {
      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus({ submitting: false, submitted: true, error: null });
        setFormData({ name: "", email: "", message: "" });
        setErrors({});
      } else {
        throw new Error("Server error");
      }
    } catch {
      setStatus({
        submitting: false,
        submitted: false,
        error: "Failed to send message. Please try again.",
      });
    }
  };

  return (
    <Root>
      <h2 data-aos="fade-down">CONTACT ME</h2>
      <hr data-aos="fade-up" data-aos-delay="200" />
      <Card>
        <AccentBar />

        {status.submitted ? (
          <Success>
            <SuccessIcon>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#52154e"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </SuccessIcon>
            <SuccessTitle>Message sent!</SuccessTitle>
            <SuccessSub>
              Thank you for reaching out — your message will be attended to
              shortly.
            </SuccessSub>
            <ResetButton
              onClick={() =>
                setStatus({ submitting: false, submitted: false, error: null })
              }
            >
              Send another
            </ResetButton>
          </Success>
        ) : (
          <>
            <Subtitle>
              Have a project in mind or just want to say hello? Drop me a
              message.
            </Subtitle>

            {status.error && <AlertError>⚠ {status.error}</AlertError>}

            <Row>
              <Group>
                <Label>Name</Label>
                <Input
                  type="text"
                  name="name"
                  placeholder="Jane Smith"
                  value={formData.name}
                  onChange={handleChange}
                  $hasError={!!errors.name}
                />
                {errors.name && <FieldError>{errors.name}</FieldError>}
              </Group>
              <Group>
                <Label>Email</Label>
                <Input
                  type="email"
                  name="email"
                  placeholder="jane@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  $hasError={!!errors.email}
                />
                {errors.email && <FieldError>{errors.email}</FieldError>}
              </Group>
            </Row>

            <Group>
              <Label>Message</Label>
              <Textarea
                name="message"
                placeholder="Tell me what you're thinking..."
                value={formData.message}
                onChange={handleChange}
                $hasError={!!errors.message}
              />
              {errors.message && <FieldError>{errors.message}</FieldError>}
            </Group>

            <SubmitButton onClick={handleSubmit} disabled={status.submitting}>
              {status.submitting ? (
                <>
                  <Spinner /> Sending…
                </>
              ) : (
                "Send Message →"
              )}
            </SubmitButton>
          </>
        )}
      </Card>
    </Root>
  );
};

export default Contact;

const spin = keyframes`to { transform: rotate(360deg); }`;

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(14px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const shake = keyframes`
  0%, 100% { transform: translateX(0); }
  20%       { transform: translateX(-5px); }
  40%       { transform: translateX(5px); }
  60%       { transform: translateX(-3px); }
  80%       { transform: translateX(3px); }
`;

const slideDown = keyframes`
  from { opacity: 0; transform: translateY(-4px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const Root = styled.div`
  /* min-height: 100vh; */
  display: flex;
  flex-direction: column;
  align-items: center;

  justify-content: center;
  background-color: hsl(311, 64%, 94%);
  padding: 48px 16px;
  h2 {
    text-align: center;
    color: #52154e;
    margin: 50px auto 0px;
    text-shadow: 2px 2px #f641d8;
    font-size: 30px;
  }
  hr {
    width: 100px;
    color: #f641d8;
    border-radius: 3px;
    border: 3px solid;
  }
`;

const Card = styled.div`
  width: 100%;
  max-width: 580px;
  margin-top: 30px;
  background: white;
  border-radius: 6px;
  padding: 30px 42px;
  position: relative;
  overflow: hidden;
  box-shadow:
    rgba(82, 21, 78, 0.12) 0px 4px 16px,
    rgba(246, 65, 216, 0.08) 0px 16px 48px;

  @media (max-width: 560px) {
    padding: 40px 24px;
  }
`;

const AccentBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #52154e 0%, #f641d8 60%, #f68fe5 100%);
`;

const Subtitle = styled.p`
  /* font-size: 14px; */
  color: #a0609a;
  font-weight: 300;
  margin-bottom: 36px;
  line-height: 1.6;
`;

const AlertError = styled.div`
  background: #fff0f5;
  border: 1px solid #f9b8cb;
  border-radius: 6px;
  padding: 12px 16px;
  font-size: 13px;
  color: #c0392b;
  margin-bottom: 20px;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

const Group = styled.div`
  margin-bottom: 24px;

  &:focus-within label {
    color: #52154e;
  }
`;

const Label = styled.label`
  display: block;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #c07ab8;
  margin-bottom: 8px;
  transition: color 0.2s;
`;

const baseInputStyles = `
  width: 100%;
  border: none;
  border-bottom: 2px solid #f0b8eb;
  padding: 8px 0;
  font-size: 15px;
  font-weight: 300;
  color: #52154e;
  background: transparent;
  outline: none;
  transition: border-color 0.25s;
  border-radius: 0;
  font-family: inherit;

  &::placeholder {
    color: #e0a8da;
  }

  &:focus {
    border-bottom-color: #f641d8;
  }
`;

const Input = styled.input`
  ${baseInputStyles}
  height: 36px;
  border-bottom-color: ${({ $hasError }) =>
    $hasError ? "#c0392b" : "#f0b8eb"};
  animation: ${({ $hasError }) => ($hasError ? shake : "none")} 0.35s ease;
`;

const Textarea = styled.textarea`
  ${baseInputStyles}
  resize: none;
  min-height: 110px;
  line-height: 1.7;
  border-bottom-color: ${({ $hasError }) =>
    $hasError ? "#c0392b" : "#f0b8eb"};
  animation: ${({ $hasError }) => ($hasError ? shake : "none")} 0.35s ease;
`;

const FieldError = styled.span`
  display: block;
  color: #c0392b;
  font-size: 12px;
  font-weight: 500;
  margin-top: 5px;
  animation: ${slideDown} 0.2s ease forwards;
`;

const SubmitButton = styled.button`
  margin-top: 8px;
  width: 100%;
  padding: 16px;
  background: #52154e;
  color: #f641d8;
  border: none;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 10px;
  transition:
    background 0.25s,
    color 0.25s,
    transform 0.15s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-family: inherit;
  box-shadow:
    rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px;

  &:hover:not(:disabled) {
    background-color: #f68fe5;
    color: #52154e;
    transform: translateY(-2px);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.65;
    cursor: not-allowed;
  }
`;

const Spinner = styled.span`
  display: inline-block;
  width: 14px;
  height: 14px;
  border: 2px solid rgba(246, 65, 216, 0.3);
  border-top-color: #f641d8;
  border-radius: 50%;
  animation: ${spin} 0.7s linear infinite;
`;

const Success = styled.div`
  text-align: center;
  padding: 16px 0;
  animation: ${fadeUp} 0.5s ease forwards;
`;

const SuccessIcon = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 2px solid #52154e;
  background: #f9c9f4;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
`;

const SuccessTitle = styled.h3`
  font-size: 30px;
  color: #52154e;
  margin-bottom: 8px;
  text-shadow: 2px 2px #f9c9f4;
`;

const SuccessSub = styled.p`
  font-size: 14px;
  color: #a0609a;
  font-weight: 300;
  line-height: 1.6;
`;

const ResetButton = styled.button`
  margin-top: 24px;
  background: none;
  border: none;
  font-size: 12px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #c07ab8;
  cursor: pointer;
  text-decoration: underline;
  text-underline-offset: 3px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  font-family: inherit;

  &:hover {
    color: #52154e;
  }
`;

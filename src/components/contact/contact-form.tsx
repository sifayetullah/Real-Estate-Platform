"use client";

import { useRef, useState } from "react";
import type { FormEvent } from "react";

import { Button } from "@/components/shared/button";
import { Field } from "@/components/shared/field";
import { Input } from "@/components/shared/input";
import { Select } from "@/components/shared/select";
import { Textarea } from "@/components/shared/textarea";

const SUBJECTS = [
  "General enquiry",
  "Property enquiry",
  "Sales",
  "Press",
  "Something else",
];

type ContactValues = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

type ContactFormProps = {
  preselect?: { propertyName: string } | null;
};

const initialValues: ContactValues = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export function ContactForm({ preselect }: ContactFormProps) {
  const [values, setValues] = useState<ContactValues>(initialValues);
  const [errors, setErrors] = useState<Partial<ContactValues>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle",
  );
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLSelectElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const refs = {
    name: nameRef,
    email: emailRef,
    phone: phoneRef,
    subject: subjectRef,
    message: messageRef,
  };

  const setField = (field: keyof ContactValues, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const validate = (): Partial<ContactValues> => {
    const next: Partial<ContactValues> = {};
    if (!values.name.trim()) {
      next.name = "Please enter your name.";
    }
    if (!values.email.trim()) {
      next.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
      next.email = "This email address doesn't look quite right.";
    }
    if (values.phone.trim() && !/^[0-9+\-()\s.]{6,}$/.test(values.phone.trim())) {
      next.phone = "This phone number doesn't look quite right.";
    }
    if (!values.subject) {
      next.subject = "Please choose a subject.";
    }
    if (!values.message.trim()) {
      next.message = "Please add a short message.";
    }
    return next;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const next = validate();
    setErrors(next);
    const firstInvalid = (Object.keys(next) as (keyof ContactValues)[]).find(
      (key) => next[key],
    );
    if (firstInvalid) {
      refs[firstInvalid].current?.focus();
      return;
    }
    setStatus("submitting");
    window.setTimeout(() => {
      setStatus("success");
    }, 900);
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-start gap-6 border-t border-line pt-10">
        <h2 className="font-display text-3xl font-semibold leading-tight tracking-[-0.01em]">
          Thank you — your message is on its way.
        </h2>
        <p className="max-w-prose font-body text-base leading-relaxed text-muted">
          We&rsquo;ll reply by email within two working days. If your enquiry is
          urgent, give us a call or arrange a visit directly.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button
            variant="secondary"
            onClick={() => {
              setValues(initialValues);
              setStatus("idle");
            }}
          >
            Send another message
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="flex flex-col gap-7"
    >
      {preselect ? (
        <p className="font-body text-sm text-muted">
          You&rsquo;re enquiring about{" "}
          <span className="font-medium text-foreground">
            {preselect.propertyName}
          </span>
          .
        </p>
      ) : null}
      <div className="grid gap-x-6 gap-y-7 sm:grid-cols-2">
        <Field
          htmlFor="contact-name"
          label="Name"
          required
          error={errors.name}
        >
          <Input
            id="contact-name"
            ref={nameRef}
            type="text"
            autoComplete="name"
            value={values.name}
            invalid={Boolean(errors.name)}
            onChange={(event) => setField("name", event.target.value)}
          />
        </Field>
        <Field
          htmlFor="contact-email"
          label="Email"
          required
          error={errors.email}
        >
          <Input
            id="contact-email"
            ref={emailRef}
            type="email"
            autoComplete="email"
            value={values.email}
            invalid={Boolean(errors.email)}
            onChange={(event) => setField("email", event.target.value)}
          />
        </Field>
      </div>
      <div className="grid gap-x-6 gap-y-7 sm:grid-cols-2">
        <Field
          htmlFor="contact-phone"
          label="Phone"
          error={errors.phone}
          hint="Optional — handy if we need to confirm quickly."
        >
          <Input
            id="contact-phone"
            ref={phoneRef}
            type="tel"
            autoComplete="tel"
            value={values.phone}
            invalid={Boolean(errors.phone)}
            onChange={(event) => setField("phone", event.target.value)}
          />
        </Field>
        <Field
          htmlFor="contact-subject"
          label="Subject"
          required
          error={errors.subject}
        >
          <Select
            id="contact-subject"
            ref={subjectRef}
            value={values.subject}
            invalid={Boolean(errors.subject)}
            onChange={(event) => setField("subject", event.target.value)}
          >
            <option value="">Select a subject</option>
            {SUBJECTS.map((subject) => (
              <option key={subject} value={subject}>
                {subject}
              </option>
            ))}
          </Select>
        </Field>
      </div>
      <Field
        htmlFor="contact-message"
        label="Message"
        required
        error={errors.message}
      >
        <Textarea
          id="contact-message"
          ref={messageRef}
          value={values.message}
          invalid={Boolean(errors.message)}
          onChange={(event) => setField("message", event.target.value)}
        />
      </Field>
      <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:gap-6">
        <Button type="submit" size="lg" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending…" : "Send message"}
        </Button>
        <p className="font-body text-sm text-muted">
          We reply within two working days.
        </p>
      </div>
    </form>
  );
}
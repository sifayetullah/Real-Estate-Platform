"use client";

import { useRef, useState } from "react";
import type { FormEvent, RefObject } from "react";

import { ArrowLink } from "@/components/shared/arrow-link";
import { Button } from "@/components/shared/button";
import { Field } from "@/components/shared/field";
import { Input } from "@/components/shared/input";
import { Select } from "@/components/shared/select";
import { Textarea } from "@/components/shared/textarea";
import { CONTACT_EMAIL } from "@/lib/site";

const TIME_SLOTS = [
  "Morning, before noon",
  "Midday, noon to 2",
  "Afternoon, 2 to 5",
  "Early evening, 5 to 7",
];

type VisitValues = {
  name: string;
  email: string;
  phone: string;
  project: string;
  date: string;
  time: string;
  message: string;
};

type VisitFormProps = {
  projects: { value: string; label: string }[];
};

const initialValues: VisitValues = {
  name: "",
  email: "",
  phone: "",
  project: "",
  date: "",
  time: "",
  message: "",
};

export function VisitForm({ projects }: VisitFormProps) {
  const [values, setValues] = useState<VisitValues>(initialValues);
  const [errors, setErrors] = useState<Partial<VisitValues>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle",
  );
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const projectRef = useRef<HTMLSelectElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);
  const timeRef = useRef<HTMLSelectElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const refs: Record<keyof VisitValues, RefObject<HTMLElement | null>> = {
    name: nameRef,
    email: emailRef,
    phone: phoneRef,
    project: projectRef,
    date: dateRef,
    time: timeRef,
    message: messageRef,
  };

  const today = new Date().toISOString().slice(0, 10);

  const setField = (field: keyof VisitValues, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const validate = (): Partial<VisitValues> => {
    const next: Partial<VisitValues> = {};
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
    if (!values.project) {
      next.project = "Please choose a project.";
    }
    if (!values.date) {
      next.date = "Please choose a date.";
    } else if (values.date < today) {
      next.date = "Please choose a future date.";
    }
    if (!values.time) {
      next.time = "Please choose a time.";
    }
    return next;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const next = validate();
    setErrors(next);
    const firstInvalid = (Object.keys(next) as (keyof VisitValues)[]).find(
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
          Thank you — your visit is being arranged.
        </h2>
        <p className="max-w-prose font-body text-base leading-relaxed text-muted">
          We&rsquo;ll be in touch within two working days to confirm your tour.
          Visits are private and unhurried, with a member of the development
          team.
        </p>
        <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:gap-6">
          <Button
            variant="secondary"
            onClick={() => {
              setValues(initialValues);
              setStatus("idle");
            }}
          >
            Arrange another visit
          </Button>
          <ArrowLink href={`mailto:${CONTACT_EMAIL}`}>
            Prefer to write to us instead
          </ArrowLink>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-7">
      <div className="grid gap-x-6 gap-y-7 sm:grid-cols-2">
        <Field htmlFor="visit-name" label="Name" required error={errors.name}>
          <Input
            id="visit-name"
            ref={nameRef}
            type="text"
            autoComplete="name"
            value={values.name}
            invalid={Boolean(errors.name)}
            onChange={(event) => setField("name", event.target.value)}
          />
        </Field>
        <Field
          htmlFor="visit-email"
          label="Email"
          required
          error={errors.email}
        >
          <Input
            id="visit-email"
            ref={emailRef}
            type="email"
            autoComplete="email"
            value={values.email}
            invalid={Boolean(errors.email)}
            onChange={(event) => setField("email", event.target.value)}
          />
        </Field>
      </div>
      <Field
        htmlFor="visit-phone"
        label="Phone"
        error={errors.phone}
        hint="Optional — handy if we need to confirm quickly."
      >
        <Input
          id="visit-phone"
          ref={phoneRef}
          type="tel"
          autoComplete="tel"
          value={values.phone}
          invalid={Boolean(errors.phone)}
          onChange={(event) => setField("phone", event.target.value)}
        />
      </Field>
      <Field
        htmlFor="visit-project"
        label="Preferred project"
        required
        error={errors.project}
      >
        <Select
          id="visit-project"
          ref={projectRef}
          value={values.project}
          invalid={Boolean(errors.project)}
          onChange={(event) => setField("project", event.target.value)}
        >
          <option value="">Choose a project</option>
          {projects.map((project) => (
            <option key={project.value} value={project.value}>
              {project.label}
            </option>
          ))}
        </Select>
      </Field>
      <div className="grid gap-x-6 gap-y-7 sm:grid-cols-2">
        <Field
          htmlFor="visit-date"
          label="Preferred date"
          required
          error={errors.date}
        >
          <Input
            id="visit-date"
            ref={dateRef}
            type="date"
            min={today}
            value={values.date}
            invalid={Boolean(errors.date)}
            onChange={(event) => setField("date", event.target.value)}
          />
        </Field>
        <Field
          htmlFor="visit-time"
          label="Preferred time"
          required
          error={errors.time}
        >
          <Select
            id="visit-time"
            ref={timeRef}
            value={values.time}
            invalid={Boolean(errors.time)}
            onChange={(event) => setField("time", event.target.value)}
          >
            <option value="">Choose a time</option>
            {TIME_SLOTS.map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </Select>
        </Field>
      </div>
      <Field
        htmlFor="visit-message"
        label="Message"
        hint="Optional — anything we should know beforehand?"
      >
        <Textarea
          id="visit-message"
          ref={messageRef}
          value={values.message}
          onChange={(event) => setField("message", event.target.value)}
        />
      </Field>
      <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:gap-6">
        <Button type="submit" size="lg" disabled={status === "submitting"}>
          {status === "submitting" ? "Requesting…" : "Request a visit"}
        </Button>
        <p className="font-body text-sm text-muted">
          We&rsquo;ll confirm within two working days.
        </p>
      </div>
    </form>
  );
}
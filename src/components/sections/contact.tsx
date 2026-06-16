"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ContactForm from "../ContactForm";
import { config } from "@/data/config";
import { SectionHeader } from "./section-header";
import SectionWrapper from "../ui/section-wrapper";

const ContactSection = () => {
  return (
    <SectionWrapper id="contact" className="mx-auto max-w-5xl px-6 py-24">
      <SectionHeader
        id="contact"
        title={
          <>
            ÉCHANGEONS
            <br />
            ENSEMBLE
          </>
        }
        desc="Une question, une opportunité ou un projet cyber à discuter ?"
      />

      <Card className="mt-12 border-white/10 bg-slate-950/70">
        <CardHeader>
          <CardTitle className="text-4xl">Formulaire de contact</CardTitle>
          <CardDescription className="text-base">
            Contacte-moi directement à{" "}
            <a
              href={`mailto:${config.email}`}
              className="font-semibold text-white underline underline-offset-4"
            >
              {config.email.replace(/@/g, "(at)")}
            </a>{" "}
            ou laisse-moi un message ci-dessous.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <ContactForm />
        </CardContent>
      </Card>
    </SectionWrapper>
  );
};

export default ContactSection;

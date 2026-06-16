import React from "react";
import { EmailTemplate } from "@/components/email-template";
import { config } from "@/data/config";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

const rateLimit = new Map<string, RateLimitEntry>();

const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW_MS = 60 * 1000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimit.set(ip, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    });

    return false;
  }

  entry.count++;
  return entry.count > RATE_LIMIT_MAX;
}

const Email = z.object({
  fullName: z
    .string()
    .min(2, "Le nom complet est invalide."),
  email: z
    .string()
    .email({ message: "L'adresse email est invalide." }),
  message: z
    .string()
    .min(10, "Le message est trop court."),
});

export async function POST(req: Request) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

    if (isRateLimited(ip)) {
      return Response.json(
        {
          error: "Trop de requêtes. Merci de réessayer plus tard.",
        },
        { status: 429 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      return Response.json(
        {
          error:
            "RESEND_API_KEY n'est pas configurée. L'envoi du message est désactivé.",
        },
        { status: 500 }
      );
    }

    const body = await req.json();

    const {
      success: zodSuccess,
      data: zodData,
      error: zodError,
    } = Email.safeParse(body);

    if (!zodSuccess) {
      return Response.json(
        {
          error: zodError?.issues?.[0]?.message ?? "Formulaire invalide.",
        },
        { status: 400 }
      );
    }

    const fromAddress =
      process.env.RESEND_FROM_EMAIL ??
      "Portfolio Alix Marchal <onboarding@resend.dev>";

    const { data: resendData, error: resendError } =
      await resend.emails.send({
        from: fromAddress,
        to: [config.email],
        subject: "Nouveau message depuis le portfolio Alix Marchal",
        react: EmailTemplate({
          fullName: zodData.fullName,
          email: zodData.email,
          message: zodData.message,
        }) as React.ReactElement,
      });

    if (resendError) {
      return Response.json(
        {
          error: "Impossible d'envoyer l'email.",
        },
        { status: 500 }
      );
    }

    return Response.json(resendData);
  } catch {
    return Response.json(
      {
        error: "Une erreur inattendue est survenue.",
      },
      { status: 500 }
    );
  }
}

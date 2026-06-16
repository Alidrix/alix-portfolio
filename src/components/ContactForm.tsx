"use client";

import { ChevronRight, Loader2 } from "lucide-react";
import React from "react";
import { z } from "zod";
import { useRouter } from "next/navigation";

import { Label } from "./ui/label";
import { Input } from "./ui/ace-input";
import { Textarea } from "./ui/ace-textarea";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  fullName: z
    .string()
    .min(2, "Le nom doit contenir au moins 2 caractères."),
  email: z
    .string()
    .email("Merci de saisir une adresse email valide."),
  message: z
    .string()
    .min(10, "Le message doit contenir au moins 10 caractères."),
});

type FieldErrors = Partial<Record<"fullName" | "email" | "message", string>>;

const ContactForm = () => {
  const [fullName, setFullName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [errors, setErrors] = React.useState<FieldErrors>({});

  const { toast } = useToast();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = formSchema.safeParse({ fullName, email, message });

    if (!result.success) {
      const fieldErrors: FieldErrors = {};

      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof FieldErrors;
        if (!fieldErrors[field]) fieldErrors[field] = issue.message;
      });

      setErrors(fieldErrors);
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fullName, email, message }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || `Requête échouée (${res.status})`);
      }

      toast({
        title: "Message envoyé !",
        description: "Merci, je reviendrai vers toi dès que possible.",
        variant: "default",
        className: cn("top-0 mx-auto flex fixed md:top-4 md:right-4"),
      });

      setFullName("");
      setEmail("");
      setMessage("");

      const timer = setTimeout(() => {
        router.push("/");
        clearTimeout(timer);
      }, 1000);
    } catch {
      toast({
        title: "Erreur",
        description:
          "Une erreur est survenue pendant l'envoi. Tu peux aussi me contacter directement par email.",
        className: cn(
          "top-0 w-full flex justify-center fixed md:max-w-7xl md:top-4 md:right-4"
        ),
        variant: "destructive",
      });
    }

    setLoading(false);
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <LabelInputContainer>
        <Label htmlFor="fullName">Nom complet</Label>
        <Input
          id="fullName"
          placeholder="Alix Marchal"
          value={fullName}
          onChange={(e) => {
            setFullName(e.target.value);
            setErrors((p) => ({ ...p, fullName: undefined }));
          }}
        />
        {errors.fullName && (
          <p className="text-sm text-red-500">{errors.fullName}</p>
        )}
      </LabelInputContainer>

      <LabelInputContainer>
        <Label htmlFor="email">Adresse email</Label>
        <Input
          id="email"
          type="email"
          placeholder="prenom.nom@entreprise.fr"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setErrors((p) => ({ ...p, email: undefined }));
          }}
        />
        {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
      </LabelInputContainer>

      <LabelInputContainer>
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          placeholder="Bonjour Alix, je souhaite échanger avec vous au sujet de..."
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            setErrors((p) => ({ ...p, message: undefined }));
          }}
        />
        {errors.message && (
          <p className="text-sm text-red-500">{errors.message}</p>
        )}
      </LabelInputContainer>

      <p className="text-sm text-muted-foreground">
        Les informations saisies servent uniquement à répondre à ton message.
      </p>

      <Button
        disabled={loading}
        className="relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] group/btn dark:from-zinc-900 dark:to-zinc-900 dark:bg-zinc-800 dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
        type="submit"
      >
        {loading ? (
          <div className="flex items-center justify-center">
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            <p>Envoi en cours</p>
          </div>
        ) : (
          <div className="flex items-center justify-center">
            Envoyer le message
            <ChevronRight className="ml-4 h-4 w-4" />
          </div>
        )}

        <BottomGradient />
      </Button>
    </form>
  );
};

export default ContactForm;

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-brand to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="orange-400 absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

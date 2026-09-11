import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const contactSchema = z.object({
  nom: z.string().trim().min(2).max(100),
  telephone: z.string().trim().regex(/^[0-9+\s().-]{9,20}$/),
  email: z.string().trim().email().max(255),
  type: z.enum(["Gros œuvre", "Génie civil", "Rénovation/entretien", "Autre"]),
  message: z.string().trim().min(10).max(1500),
  website: z.string().max(0),
});

export const submitContactRequest = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => contactSchema.parse(input))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("contact_submissions").insert({
      name: data.nom,
      phone: data.telephone,
      email: data.email,
      project_type: data.type,
      message: data.message,
    });

    if (error) {
      console.error("Contact submission failed", { code: error.code });
      throw new Error("La demande n’a pas pu être enregistrée.");
    }

    return { success: true };
  });
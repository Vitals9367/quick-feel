import { createClient } from "@/utils/supabase/server";
import { sendWelcomingEmail } from "@/lib/send-mail";
import { z } from 'zod';
import type { NextApiRequest } from 'next';

const emailSchema = z.object({
  email: z.string().email('Invalid email address'),
});

export async function POST(request: Request) {
  const res = await request.json();
  const { email } = res;

  try {
    emailSchema.parse({ email });

    const supabase = await createClient();
    const { error } = await supabase.from('waitlist').insert({ email });

    if (error) {
      return Response.json({ error: error }, {
        status: 409,
      })
    }

    await sendWelcomingEmail(email);

    return Response.json({ message: 'Email added to waitlist and welcoming email sent.' }, {
      status: 200,
    })
  } catch (error) {
    return Response.json({ error: error instanceof z.ZodError ? error.errors : error }, {
      status: 400,
    })
  }
} 
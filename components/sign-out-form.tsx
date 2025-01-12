import { signOutAction } from "@/app/(auth)/actions";
import Form from "next/form";

export const SignOutForm = async () => {
  return (
    <Form className="w-full" action={signOutAction}>
      <button
        type="submit"
        className="w-full text-left px-1 py-0.5 text-red-500"
      >
        Sign out
      </button>
    </Form>
  );
};

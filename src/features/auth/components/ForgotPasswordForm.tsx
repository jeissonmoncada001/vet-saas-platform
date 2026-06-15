"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { forgotPasswordSchema, type ForgotPasswordFormValues } from "../schemas";
import { forgotPasswordAction } from "../actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ForgotPasswordForm() {
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const form = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: { email: "" },
  });

  const onSubmit = async (values: ForgotPasswordFormValues) => {
    setError(null);
    const result = await forgotPasswordAction(values.email);
    if (result?.error) setError(result.error);
    else setSuccess(true);
  };

  if (success) {
    return (
      <Card>
        <CardContent className="pt-6">
          <p className="text-center text-sm">
            Revisa tu correo electrónico para restablecer tu contraseña.
          </p>
          <Link href="/login" className="block text-center mt-4 text-sm underline">
            Volver al inicio
          </Link>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recuperar contraseña</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="tu@email.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {error && <p className="text-sm text-destructive">{error}</p>}
            <Button
              type="submit"
              className="w-full"
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? "Enviando..." : "Enviar enlace"}
            </Button>
            <p className="text-center text-sm">
              <Link href="/login" className="underline text-muted-foreground hover:text-foreground">
                Volver al inicio
              </Link>
            </p>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}

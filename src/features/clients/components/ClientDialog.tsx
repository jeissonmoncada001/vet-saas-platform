"use client";

import { useState } from "react";
import type { Client } from "../types";
import type { ClientSchema } from "../schemas";
import { createClientAction, updateClientAction } from "../actions";
import { ClientForm } from "./ClientForm";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { toast } from "sonner";

interface ClientDialogProps {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
  client?: Client | null;
}

export function ClientDialog({ open, onClose, onSuccess, client }: ClientDialogProps) {
  const [loading, setLoading] = useState(false);
  const isEditing = !!client;

  const handleSubmit = async (values: ClientSchema) => {
    setLoading(true);
    try {
      const result = isEditing
        ? await updateClientAction(client.id, values)
        : await createClientAction(values);

      if (result?.error) {
        toast.error(result.error);
        return;
      }

      toast.success(isEditing ? "Cliente actualizado" : "Cliente registrado");
      onSuccess();
      onClose();
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>{isEditing ? "Editar cliente" : "Nuevo cliente"}</DialogTitle>
        </DialogHeader>
        <ClientForm
          defaultValues={client ?? undefined}
          onSubmit={handleSubmit}
          isLoading={loading}
        />
      </DialogContent>
    </Dialog>
  );
}

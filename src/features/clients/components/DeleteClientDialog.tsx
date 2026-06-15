"use client";

import { useState } from "react";
import type { Client } from "../types";
import { deleteClientAction } from "../actions";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { toast } from "sonner";

interface DeleteClientDialogProps {
  client: Client | null;
  onClose: () => void;
  onSuccess: () => void;
}

export function DeleteClientDialog({ client, onClose, onSuccess }: DeleteClientDialogProps) {
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    if (!client) return;
    setLoading(true);
    try {
      const result = await deleteClientAction(client.id);
      if (result?.error) {
        toast.error(result.error);
        return;
      }
      toast.success("Cliente eliminado");
      onSuccess();
      onClose();
    } finally {
      setLoading(false);
    }
  };

  return (
    <AlertDialog open={!!client} onOpenChange={onClose}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>¿Eliminar cliente?</AlertDialogTitle>
          <AlertDialogDescription>
            Se eliminará <strong>{client?.nombre}</strong> y todas sus mascotas asociadas.
            Esta acción no se puede deshacer.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel disabled={loading}>Cancelar</AlertDialogCancel>
          <AlertDialogAction
            onClick={handleDelete}
            disabled={loading}
            className="bg-destructive hover:bg-destructive/90"
          >
            {loading ? "Eliminando..." : "Eliminar"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

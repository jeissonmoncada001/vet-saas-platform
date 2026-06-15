"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { useClients } from "../hooks/useClients";
import { ClientsTable } from "./ClientsTable";
import { ClientDialog } from "./ClientDialog";
import { DeleteClientDialog } from "./DeleteClientDialog";
import type { Client } from "../types";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

export function ClientsView() {
  const { clients, loading, refetch } = useClients();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingClient, setEditingClient] = useState<Client | null>(null);
  const [deletingClient, setDeletingClient] = useState<Client | null>(null);

  const openCreate = () => {
    setEditingClient(null);
    setDialogOpen(true);
  };

  const openEdit = (client: Client) => {
    setEditingClient(client);
    setDialogOpen(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Clientes</h1>
          <p className="text-muted-foreground text-sm">
            Propietarios registrados en la clínica
          </p>
        </div>
        <Button onClick={openCreate}>
          <Plus className="size-4 mr-2" />
          Nuevo cliente
        </Button>
      </div>

      {loading ? (
        <div className="space-y-2">
          {Array.from({ length: 8 }).map((_, i) => (
            <Skeleton key={i} className="h-10 w-full" />
          ))}
        </div>
      ) : (
        <ClientsTable
          clients={clients}
          onEdit={openEdit}
          onDelete={setDeletingClient}
        />
      )}

      <ClientDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        onSuccess={refetch}
        client={editingClient}
      />

      <DeleteClientDialog
        client={deletingClient}
        onClose={() => setDeletingClient(null)}
        onSuccess={refetch}
      />
    </div>
  );
}

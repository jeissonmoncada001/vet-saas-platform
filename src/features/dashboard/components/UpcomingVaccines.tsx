import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { es } from "date-fns/locale";

interface VaccineAlert {
  id: string;
  petName: string;
  ownerName: string;
  vaccine: string;
  dueDate: string;
}

export function UpcomingVaccines({ items }: { items: VaccineAlert[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">Vacunas próximas a vencer</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {items.map((item) => (
          <div key={item.id} className="flex items-center justify-between">
            <div>
              <p className="font-medium text-sm">{item.petName}</p>
              <p className="text-xs text-muted-foreground">{item.ownerName} · {item.vaccine}</p>
            </div>
            <Badge variant="destructive">
              {format(new Date(item.dueDate), "d MMM", { locale: es })}
            </Badge>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

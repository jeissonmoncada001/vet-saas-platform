import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Appointment {
  id: string;
  petName: string;
  ownerName: string;
  time: string;
  reason: string;
}

export function UpcomingAppointments({ items }: { items: Appointment[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">Próximas citas</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {items.map((item) => (
          <div key={item.id} className="flex items-center justify-between">
            <div>
              <p className="font-medium text-sm">{item.petName}</p>
              <p className="text-xs text-muted-foreground">{item.ownerName} · {item.reason}</p>
            </div>
            <Badge variant="outline">{item.time}</Badge>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

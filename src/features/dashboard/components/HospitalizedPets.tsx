import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface HospitalizedPet {
  id: string;
  petName: string;
  ownerName: string;
  since: string;
  status: string;
}

export function HospitalizedPets({ items }: { items: HospitalizedPet[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">Mascotas hospitalizadas</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {items.map((item) => (
          <div key={item.id} className="flex items-center justify-between">
            <div>
              <p className="font-medium text-sm">{item.petName}</p>
              <p className="text-xs text-muted-foreground">
                {item.ownerName} · Desde {item.since}
              </p>
            </div>
            <Badge variant="secondary">{item.status}</Badge>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

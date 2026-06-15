import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Activity {
  id: string;
  description: string;
  time: string;
}

export function RecentActivity({ items }: { items: Activity[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">Actividad reciente</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {items.map((item) => (
          <div key={item.id} className="flex items-start justify-between gap-2">
            <p className="text-sm">{item.description}</p>
            <span className="text-xs text-muted-foreground whitespace-nowrap">
              {item.time}
            </span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

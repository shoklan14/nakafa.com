"use client";

import { CoordinateSystem } from "@/components/three/coordinate-system";
import { UnitCircle as UnitCircle3D } from "@/components/three/unit-circle";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { getRadians } from "@/lib/utils/math";
import { useTranslations } from "next-intl";
import { type ReactNode, useState } from "react";

type Props = {
  title: ReactNode;
  description: ReactNode;
  angle?: number;
};

export function UnitCircle({ title, description, angle = 45 }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <Content angle={angle} />
    </Card>
  );
}

function Content({ angle }: { angle: number }) {
  const t = useTranslations("Common");
  const [angleValue, setAngleValue] = useState(angle);

  return (
    <>
      <CardContent>
        <CoordinateSystem
          showZAxis={false}
          showOrigin={false}
          cameraPosition={[0, 0, 4]}
        >
          <UnitCircle3D angle={angleValue} />
        </CoordinateSystem>
      </CardContent>
      <CardFooter className="border-t">
        <div className="mx-auto flex w-full max-w-md flex-col gap-4">
          <div className="flex items-center gap-2">
            <Label htmlFor="angle">
              <Badge variant="outline" className="font-mono">
                {angleValue}°
              </Badge>
            </Label>
            <Badge variant="outline" className="font-mono">
              {getRadians(angleValue).toFixed(2)} {t("radian")}
            </Badge>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-mono text-muted-foreground text-sm">0°</span>
            <Slider
              id="angle"
              value={[angleValue]}
              onValueChange={(values) => setAngleValue(values[0])}
              min={0}
              max={360}
              step={1}
            />
            <span className="font-mono text-muted-foreground text-sm">
              360°
            </span>
          </div>
        </div>
      </CardFooter>
    </>
  );
}

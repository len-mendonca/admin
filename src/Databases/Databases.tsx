import {
  Building,
  Building2,
  LucideBuilding,
  LucideBuilding2,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Link } from "react-router-dom";

const Databases = () => {
  return (
    <Card className="mt-[80px] ml-5">
      <CardHeader>
        <CardTitle>Databases</CardTitle>
        <CardDescription>Databses from different sectors.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-row flex-wrap gap-x-40 gap-y-10">
        <Card className="p-4">
          <CardContent className="flex flex-col items-center">
            <Building className="h-20 w-20" />
            <h1 className="font-bold">Rajya</h1>
          </CardContent>
        </Card>
        <Link to={"/database/zilla"}>
          <Card className="p-4">
            <CardContent className="flex flex-col items-center">
              <Building2 className="h-20 w-20" />

              <h1 className="fonnt-bold">Zilla</h1>
            </CardContent>
          </Card>
        </Link>
        <Card className="p-4">
          <CardContent className="flex flex-col items-center">
            <LucideBuilding className="h-20 w-20" />
            <h1 className="font-bold">Mandala</h1>
          </CardContent>
        </Card>
        <Card className="p-4">
          <CardContent className="flex flex-col items-center">
            <LucideBuilding2 className="h-20 w-20" />
            <h1 className="font-bold">Shakti Kendra</h1>
          </CardContent>
        </Card>
        <Card className="p-4">
          <CardContent className="flex flex-col items-center">
            <Building className="h-20 w-20" />
            <h1 className="font-bold">Booth</h1>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
};
export default Databases;

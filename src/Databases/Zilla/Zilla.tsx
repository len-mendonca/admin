import { Building } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { useState } from "react";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";
const Zilla = () => {
  const [zilla, setZilla] = useState<string>("" as string);
  const navigate = useNavigate();
  return (
    <Card className="mt-[80px] ml-5 pb-60">
      <CardHeader>
        <CardTitle className="font-semibold">Zilla</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col flex-wrap gap-x-40 gap-y-10 items-center justify-center pb-10">
        <Card className="p-4">
          <CardContent className="flex flex-col items-center">
            <Building className="h-20 w-20" />
            <h1 className="font-bold">Zilla</h1>
          </CardContent>
        </Card>
        <Select
          onValueChange={(value) => {
            setZilla(value);
          }}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select Zilla" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="udupi">Udupi</SelectItem>
          </SelectContent>
        </Select>

        <CardFooter>
          <Button
            onClick={() => {
              console.log("Clicked");

              if (zilla !== "") {
                navigate(`/database/zilla/${zilla}`);
              } else {
                console.log("Hiii");

                alert("Please select a Zilla");
              }
            }}
          >
            Get data
          </Button>
        </CardFooter>
      </CardContent>
    </Card>
  );
};
export default Zilla;

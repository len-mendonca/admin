import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";

import { Button } from "../../../components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import {
  TableHeader,
  TableRow,
  TableBody,
  TableCell,
  Table,
} from "../../../components/ui/table";
import { Badge } from "../../../components/ui/badge";
import { Edit, MoreHorizontal, Phone, PhoneCall, User2 } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "../../../components/ui/tabs";

const ZillaData = () => {
  return (
    <Card x-chunk="dashboard-06-chunk-0" className="ml-8 mt-8">
      <CardHeader>
        <CardTitle>Udupi</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="account" className="w-[400px] ">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="recent-entry">Recent Entry</TabsTrigger>
            <TabsTrigger value="designation">Designation</TabsTrigger>
            <TabsTrigger value="a-z">A-Z</TabsTrigger>
          </TabsList>
        </Tabs>
        <Table>
          <TableHeader></TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="hidden sm:table-cell">
                <User2 className="h-6 w-6" />
              </TableCell>
              <TableCell className="font-medium">Kishor Kumar</TableCell>
              <TableCell>
                <Badge variant="outline">President</Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">9887675462</TableCell>
              <TableCell className="hidden md:table-cell">
                <Phone />
              </TableCell>
              <TableCell className="hidden md:table-cell">
                <PhoneCall />
              </TableCell>
              <TableCell className="hidden md:table-cell">
                <Edit />
              </TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button aria-haspopup="true" size="icon" variant="ghost">
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">Toggle menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem>Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="hidden sm:table-cell">
                <User2 className="h-6 w-6" />
              </TableCell>
              <TableCell className="font-medium">Kishor Kumar</TableCell>
              <TableCell>
                <Badge variant="outline">President</Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">9887675462</TableCell>
              <TableCell className="hidden md:table-cell">
                <Phone />
              </TableCell>
              <TableCell className="hidden md:table-cell">
                <PhoneCall />
              </TableCell>
              <TableCell className="hidden md:table-cell">
                <Edit />
              </TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button aria-haspopup="true" size="icon" variant="ghost">
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">Toggle menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem>Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="hidden sm:table-cell">
                <User2 className="h-6 w-6" />
              </TableCell>
              <TableCell className="font-medium">Kishor Kumar</TableCell>
              <TableCell>
                <Badge variant="outline">President</Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">9887675462</TableCell>
              <TableCell className="hidden md:table-cell">
                <Phone />
              </TableCell>
              <TableCell className="hidden md:table-cell">
                <PhoneCall />
              </TableCell>
              <TableCell className="hidden md:table-cell">
                <Edit />
              </TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button aria-haspopup="true" size="icon" variant="ghost">
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">Toggle menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem>Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="hidden sm:table-cell">
                <User2 className="h-6 w-6" />
              </TableCell>
              <TableCell className="font-medium">Kishor Kumar</TableCell>
              <TableCell>
                <Badge variant="outline">President</Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">9887675462</TableCell>
              <TableCell className="hidden md:table-cell">
                <Phone />
              </TableCell>
              <TableCell className="hidden md:table-cell">
                <PhoneCall />
              </TableCell>
              <TableCell className="hidden md:table-cell">
                <Edit />
              </TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button aria-haspopup="true" size="icon" variant="ghost">
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">Toggle menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem>Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="hidden sm:table-cell">
                <User2 className="h-6 w-6" />
              </TableCell>
              <TableCell className="font-medium">Kishor Kumar</TableCell>
              <TableCell>
                <Badge variant="outline">President</Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">9887675462</TableCell>
              <TableCell className="hidden md:table-cell">
                <Phone />
              </TableCell>
              <TableCell className="hidden md:table-cell">
                <PhoneCall />
              </TableCell>
              <TableCell className="hidden md:table-cell">
                <Edit />
              </TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button aria-haspopup="true" size="icon" variant="ghost">
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">Toggle menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem>Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter>
        <div className="text-xs text-muted-foreground">
          Showing <strong>1-10</strong> of <strong>32</strong> products
        </div>
      </CardFooter>
    </Card>
  );
};
export default ZillaData;

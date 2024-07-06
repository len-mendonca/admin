import {
  Database,
  Image,
  ListTodo,
  Package2,
  Settings,
  Star,
  User,
} from "lucide-react";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
} from "../components/ui/tooltip";
const Sidebar = () => {
  return (
    <aside className="col-span-1 h-screen sticky  inset-y-0 z-10 flex-col border-r bg-background sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href="#"
                className="flex flex-row gap-1 items-center justify-center text-black hover:bg-black hover:text-white p-2 rounded-sm "
              >
                <h1>News</h1>
                <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
                <span className="sr-only">Acme Inc</span>
              </a>
            </TooltipTrigger>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href="#"
                className="flex flex-row gap-1 items-center justify-center text-black hover:bg-black hover:text-white p-2 rounded-sm "
              >
                <h1>Database</h1>
                <Database className="h-5 w-5" />
              </a>
            </TooltipTrigger>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href="#"
                className="flex flex-row gap-1 items-center justify-center text-black hover:bg-black hover:text-white p-2 rounded-sm "
              >
                <h1>Greetings</h1>
                <Image className="h-5 w-5" />
                <span className="sr-only">Orders</span>
              </a>
            </TooltipTrigger>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href="#"
                className="flex flex-row gap-1 items-center justify-center text-black hover:bg-black hover:text-white p-2 rounded-sm "
              >
                <h1>Jobs</h1>
                <User className="h-5 w-5" />
              </a>
            </TooltipTrigger>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href="#"
                className="flex flex-row gap-1 items-center justify-center text-black hover:bg-black hover:text-white p-2 rounded-sm "
              >
                <h1>Booths</h1>
                <Star className="h-5 w-5" />
              </a>
            </TooltipTrigger>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href="#"
                className="flex flex-row gap-1 items-center justify-center text-black hover:bg-black hover:text-white p-2 rounded-sm "
              >
                <h1>To-do List</h1>
                <ListTodo className="h-5 w-5" />
              </a>
            </TooltipTrigger>
          </Tooltip>
        </TooltipProvider>
      </nav>
      <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                <Settings className="h-5 w-5" />
                <span className="sr-only">Settings</span>
              </a>
            </TooltipTrigger>
          </Tooltip>
        </TooltipProvider>
      </nav>
    </aside>
  );
};
export default Sidebar;

import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const NotFound = () => {
  return (
    <div className="text-muted-foreground mt-10 flex w-full flex-col items-center justify-center gap-4">
      404 | Page not found
      <Link to="/">
        <Button variant="outline">Go Home</Button>
      </Link>
    </div>
  );
};

export default NotFound;

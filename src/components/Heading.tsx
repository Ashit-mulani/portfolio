const Heading = ({ name }: { name: string }) => {
  return (
    <div className="dark:text-primary text-secondary-foreground text-xl">
      {name}
    </div>
  );
};

export default Heading;

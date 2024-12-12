import { useSuspenseQuery } from "@tanstack/react-query";

const userLoader = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return res.json();
};

export const useUsersLoader = () => {
  const data = useSuspenseQuery({
    queryFn: userLoader,
    queryKey: ["users"],
  });

  return data;
};

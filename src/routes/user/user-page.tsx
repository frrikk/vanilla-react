type UserPageProps = {
  data: any;
};

const UserPage = ({ data }: UserPageProps) => {
  console.log("data", data);
  return (
    <div>
      User page
      {JSON.stringify(data[0], null, 2)}
    </div>
  );
};

export default UserPage;

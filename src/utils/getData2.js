const getData2 = async () => {
  const res = await fetch("https://dummyjson.com/users?limit=20");
  const data = await res.json();
  const ans = [];
  // eslint-disable-next-line array-callback-return
  data.users.map((item) => {
    ans.push({
      name: item.firstName + " " + item.lastName,
      email: item.email,
      image: item.image,
      gender: item.gender,
      address: item.address.city + ", " + item.address.state,
    });
  });
  return ans;
};

export default getData2;

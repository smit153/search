const getData1 = async () => {
  const res = await fetch("https://randomuser.me/api/?results=20");
  const data = await res.json();
  const ans = [];
  // eslint-disable-next-line array-callback-return
  data.results.map((item) => {
    ans.push({
      name: item.name.first + " " + item.name.last,
      email: item.email,
      image: item.picture.large,
      gender: item.gender,
      address: item.location.city + ", " + item.location.state,
    });
  });
  return ans;
};

export default getData1;

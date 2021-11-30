//  comments api calls
const fetchComments = async () => {
  const res = await fetch(`${process.env.REACT_APP_API_URL}/comments`);
  return res.json();
}

console.clear();
// console.log("hello love ;)");
const BASE_URL = "https://www.arbeitnow.com/api/job-board-api";
const container = document.getElementById("container");

const getCard = async (url) => {
  try {
    const response = await fetch(url);
    const data = response.json();
    console.log(data);
    console.log(data.links);
    // makeCardEmployment(data);
  } catch (err) {
    console.log("error: ", err);
  }
};

const makeCardEmployment = (data) => {
  let cardEmployment = "";
  data.map((d) => {
    // console.log(d);
    cardEmployment += `<article><h3>${d.company_name}</h3></article>`;
  });
  container.innerHTML = cardEmployment;
};

getCard(BASE_URL);

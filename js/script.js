console.clear();
const BASE_URL = "https://www.arbeitnow.com/api/job-board-api";
const container = document.getElementById("container");
let data = [];

const getCard = async (url) => {
  try {
    const response = await fetch(url);
    const dataArray = await response.json();
    data = dataArray.data;
    console.log(data);
    makeCardEmployment(data);
  } catch (err) {
    console.log("error: ", err);
  }
};

const makeCardEmployment = (data) => {
  let cardEmployment = "";
  data.map((d) => {
    cardEmployment += `
      <article class="card w-75 mb-3 shadow">
          <div class="card-body">
            <h5 class="card-title d-inline-block">${d.title}</h5>
            <a href="#" class="card-link btn btn-primary float-end">more</a>
            <h6 class="card-subtitle mb-2 text-muted">${d.company_name}</h6>
            <p class="card-text">${d.slug}</p>
          </div>
      </article>`;
  });
  container.innerHTML = cardEmployment;
};

getCard(BASE_URL);

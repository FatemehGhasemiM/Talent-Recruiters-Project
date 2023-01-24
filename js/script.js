// employmentAd page

console.clear();
const BASE_URL = "https://www.arbeitnow.com/api/job-board-api";
const container = document.getElementById("container");
const search = document.getElementById("search");
let data = [];

const getCard = async (url) => {
  try {
    const response = await fetch(url);
    const dataArray = await response.json();
    data = dataArray.data;
    console.log(data);
    makeCardEmployment(data);
    if (search) {
      if (!search.value) makeCardEmployment(data);

      search.addEventListener("keyup", (e) => {
        const searchValue = e.target.value.toLowerCase();
        let searchCard = [];
        data?.map((d) => {
          if (Object.values(d).join(" ").toLowerCase().includes(searchValue)) {
            searchCard.push(d);
          }
          makeCardEmployment(searchCard);
        });
      });
    }
  } catch (err) {
    console.log("error: ", err);
  }
};

const makeCardEmployment = (data) => {
  let cardEmployment = "";
  data.map((d) => {
    cardEmployment += `
      <article class="card w-50 mb-3 ms-1 shadow">
          <div class="card-body">
            <h5 class="card-title d-inline-block" id="${d.slug}"><a href="../employmentAd.html?slug=${d.slug}" target="">${d.title}</a></h5>
            <h6 class="card-subtitle mb-2 text-muted">${d.company_name}</h6>
            <h6 class="card-subtitle mb-2 text-muted">${d.location}</h6>
          </div>
      </article>`;
  });
  // employmentAd page
  // const employmentAd = document.getElementById("employmentAd");
  // const location = window.location.href;
  // console.log(location);
  // const searchParams = new URL(location).searchParams;
  // const entries = new URLSearchParams(searchParams).values();
  // const array = Array.from(entries);
  // console.log(array);

  // data.forEach((d) => {
  //   if (d.slug === array[0]) {
  //     employmentAd.innerHTML = `
  //     <h2>${d.title}</h2>
  //     <h4>${d.company_name}</h4>
  //     <h4>${d.location}</h4>
  //     <h4>${d.remote}</h4>
  //     <p>${d.description}</p>
  //     `;
  //   } else
  //     employmentAd.innerHTML = `
  //     <h2> this is not page</h2>
  //     `;
  // });

  if (container) {
    if (data.length) {
      container.innerHTML = cardEmployment;
    } else {
      container.innerHTML = `<p class="text-center">No Match Found !!!</p>`;
    }
  }
};
// const employmentAd =()=>{
//    const location = window.location.href;
//    console.log(location);
// }

getCard(BASE_URL);
// employmentAd();

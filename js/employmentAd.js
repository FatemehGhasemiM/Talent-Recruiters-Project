console.clear();

const employmentAd = document.getElementById("employmentAd");
const address = window.location.href;
const BASE_URL_ = "https://www.arbeitnow.com/api/job-board-api";
let datas = [];
let employmentAdContent = "";

const getCards = async (url) => {
  try {
    const res = await fetch(url);
    const dataArr = await res.json();
    datas = dataArr.data;
    // console.log(datas);


const searchParams = new URL(address).searchParams;
const entries = new URLSearchParams(searchParams).values();
const array = Array.from(entries);
console.log(array);

datas.map((d) => {
  // console.log(d.slug);
  if (d.slug === array[0]) {
    employmentAdContent += `
      <section class="m-4 bg-info-subtle">
      <h1>${d.title}</h1>
      <div class="mt-4">
      <h6>company: ${d.company_name}</h6>
      <h6>location: ${d.location}</h6>
      <h6>remote: ${d.remote}</h6>
      <h6 class="d-d-inline-block">tags: <span class="badge text-bg-info">${d.tags}</span></h6>
      <h6 class="d-d-inline-block">job types: <span class="badge text-bg-info">${d.job_types}</span></h6>
      </div>
      <section class="pt-3">${d.description}</section>
      </section>
      `;
  } 
});

if (employmentAd) {
  if (datas.length) {
    employmentAd.innerHTML = employmentAdContent;
  } else {
    employmentAd.innerHTML = `<p class="text-center">No Match Found !!!</p>`;
  }
}

} catch (err) {
    console.log("error: ", err);
  }
};

getCards(BASE_URL_);

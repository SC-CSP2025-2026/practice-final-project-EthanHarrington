const shawshankbutton = document.querySelector("#shawshank-btn");
const godfatherbutton = document.querySelector("#godfather-btn");
const knightbutton = document.querySelector("#knight-btn");
const godfatherIIbutton = document.querySelector("#godfatherII-btn");
const menbutton = document.querySelector("#men-btn");
const lordbutton = document.querySelector("#lord-btn");
const schindlerbutton = document.querySelector("#schindler-btn");
const fellowshipbutton = document.querySelector("#fellowship-btn");
const pulpbutton = document.querySelector("#pulp-btn");
const goodbutton = document.querySelector("#good-btn");
const infolist = document.querySelector(".list-group");

const loadMovieByID = async (id) => {
  const url = `https://student-api-proxy.onrender.com/api/film-show-ratings.p.rapidapi.com/item/?id=${id}`;
  const options = {
    method: "GET",
    headers: {
      "X-API-Key":
        "5257b26284411cf34833a4ab1c78fe6633489e5cdf9ec4d5d425101d7ad3bdeb",
    },
  };

  const response = await fetch(url, options);
  const result = await response.json();
  const data = result.data; //getSampleMovieInfoShawshank();
  const infos = data.result.crew;

  infolist.innerHTML = "";

  infos.forEach((info) => {
    const listItem = `<li class="list-group-item">
            <div class="movie-names">${info.name} - ${info.job}</div>
          </li>`;
    infolist.insertAdjacentHTML("beforeend", listItem);
    console.log(info.name);
    console.log(info.job);
  });
};

shawshankbutton.addEventListener("click", (event) => {
  event.preventDefault();
  loadMovieByID("tt0111161");
});
godfatherbutton.addEventListener("click", (event) => {
  event.preventDefault();
  loadMovieByID("tt0068646");
});
knightbutton.addEventListener("click", (event) => {
  event.preventDefault();
  loadMovieByID("tt0468569");
});
godfatherIIbutton.addEventListener("click", (event) => {
  event.preventDefault();
  loadMovieByID("tt0071562");
});
menbutton.addEventListener("click", (event) => {
  event.preventDefault();
  loadMovieByID("tt0050083");
});
lordbutton.addEventListener("click", (event) => {
  event.preventDefault();
  loadMovieByID("tt0167260");
});
schindlerbutton.addEventListener("click", (event) => {
  event.preventDefault();
  loadMovieByID("tt0108052");
});
fellowshipbutton.addEventListener("click", (event) => {
  event.preventDefault();
  loadMovieByID("tt0120737");
});
pulpbutton.addEventListener("click", (event) => {
  event.preventDefault();
  loadMovieByID("tt0110912");
});
goodbutton.addEventListener("click", (event) => {
  event.preventDefault();
  loadMovieByID("tt0060196");
});

// const shawshankbutton = document.querySelector("#shawshank-btn");
// const godfatherbutton = document.querySelector("#godfather-btn");
// const knightbutton = document.querySelector("#knight-btn");
// const godfatherIIbutton = document.querySelector("#godfatherII-btn");
// const menbutton = document.querySelector("#men-btn");
// const lordbutton = document.querySelector("#lord-btn");
// const schindlerbutton = document.querySelector("#schindler-btn");
// const fellowshipbutton = document.querySelector("#fellowship-btn");
// const pulpbutton = document.querySelector("#pulp-btn");
// const goodbutton = document.querySelector("#good-btn");

// const loadMovieByID = async (id) => {
//   if (!id) {
//     alert("Id not set properly");
//     return;
//   }

//   const url = `https://student-api-proxy.onrender.com/api/film-show-ratings.p.rapidapi.com/item/?id=${id}`;

//   const options = {
//     method: "GET",
//   };

//   const response = await fetch(url, options);
//   const info = await response.json();
//   listgroup.innerHTML = "";
//   info.forEach((info) => {
//     const listItem = `<li class="list-group-item">${title}</li>`;
//   });
// };

// shawshankbutton.addEventListener("click", (event) => {
//   event.preventDefault();
//   loadMovieByID("tt0111161");
// });
// godfatherbutton.addEventListener("click", (event) => {
//   event.preventDefault();
//   loadMovieByID("tt0068646");
// });
// knightbutton.addEventListener("click", (event) => {
//   event.preventDefault();
//   loadMovieByID("tt0468569");
// });
// godfatherIIbutton.addEventListener("click", (event) => {
//   event.preventDefault();
//   loadMovieByID("tt0071562");
// });
// menbutton.addEventListener("click", (event) => {
//   event.preventDefault();
//   loadMovieByID("tt0050083");
// });
// lordbutton.addEventListener("click", (event) => {
//   event.preventDefault();
//   loadMovieByID("tt0167260");
// });
// schindlerbutton.addEventListener("click", (event) => {
//   event.preventDefault();
//   loadMovieByID("tt0108052");
// });
// fellowshipbutton.addEventListener("click", (event) => {
//   event.preventDefault();
//   loadMovieByID("tt0120737");
// });
// pulpbutton.addEventListener("click", (event) => {
//   event.preventDefault();
//   loadMovieByID("tt0110912");
// });
// goodbutton.addEventListener("click", (event) => {
//   event.preventDefault();
//   loadMovieByID("tt0060196");
// });

// const url =
//   "https://student-api-proxy.onrender.com/api/film-show-ratings.p.rapidapi.com/item/?id=tt0780504";
// const options = {
//   method: "GET",
//   headers: {
//     "X-API-Key":
//       "5257b26284411cf34833a4ab1c78fe6633489e5cdf9ec4d5d425101d7ad3bdeb",
//   },
// };

// fetch(url, options)
//   .then((response) =>
//     response.json().then((result) => {
//       console.log(result.data); // Your API data
//       console.log(`Cost: $${result.meta.cost}`);
//       console.log(`Remaining: $${result.meta.remaining_budget}`);
//     }),
//   )
//   .catch((error) => {
//     console.log(error);
//   });

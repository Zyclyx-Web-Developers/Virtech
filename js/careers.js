//  Read job posts from DB  
$(document).ready(function () {
  let jobPositionsElement = document.getElementById('jobPositions');
  let path = "https://agile-plateau-09650.herokuapp.com/jobopenings";
  let html = '';

  fetch(path)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      localStorage.setItem("jobOpenings", data);
      html += data.map(function (job) {
        return (`<a href="./job-opening.html?id=${job.id}" class="col-12 d-flex justify-content-between py-4 job-item">
                              <h3 class="title-2 ml-3">${job.title}</h3>                                 
                              <p><svg class="mr-2" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16"><path d="M8 0a5 5 0 00-5 5c0 5 5 11 5 11s5-6 5-11a5 5 0 00-5-5zm0 8a3 3 0 110-6 3 3 0 010 6z"/></svg><span>${job.location}</span></p></a>`)
      }).join('');
    })
    .then(function () {
      jobPositionsElement.innerHTML = html;
    })
});
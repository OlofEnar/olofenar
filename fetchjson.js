// Fetch job data from JSON file
fetch('jobs.json')
  .then(response => response.json())
  .then(data => {
    const workContainer = document.getElementById('work-container');

    // Iterate over each job and create the HTML structure
    data.forEach(job => {
      const jobElement = document.createElement('div');
      jobElement.classList.add('job-info');

      const titleElement = document.createElement('p');
      titleElement.classList.add('work-title');
      titleElement.innerHTML = `<i class="fa fa-info-circle resume-icons"></i> ${job.title}`;

      const placeElement = document.createElement('p');
      placeElement.classList.add('work-place');
      placeElement.innerHTML = `<i class="fa fa-home resume-icons"></i> ${job.place}`;

      const periodElement = document.createElement('p');
      periodElement.classList.add('work-period');
      periodElement.innerHTML = `<i class="fa fa-clock-o resume-icons"></i> ${job.period}`;

      jobElement.appendChild(titleElement);
      jobElement.appendChild(placeElement);
      jobElement.appendChild(periodElement);

      workContainer.appendChild(jobElement);
    });
  })
  .catch(error => console.error('Error fetching job data:', error));

  // Fetch academic data from JSON file
fetch('academic.json')
.then(response => response.json())
.then(data => {
  const academicContainer = document.getElementById('academic-container');

  // Iterate over each education and create HTML elements dynamically
  data.forEach(academic => {
    const academicElement = document.createElement('div');
    academicElement.classList.add('job-info');

    const titleElement = document.createElement('p');
    titleElement.classList.add('work-title');
    titleElement.innerHTML = `<i class="fa fa-info-circle resume-icons"></i> ${academic.title}`;

    const placeElement = document.createElement('p');
    placeElement.classList.add('work-place');
    placeElement.innerHTML = `<i class="fa fa-home resume-icons"></i> ${academic.place}`;

    const periodElement = document.createElement('p');
    periodElement.classList.add('work-period');
    periodElement.innerHTML = `<i class="fa fa-clock-o resume-icons"></i> ${academic.period}`;

    academicElement.appendChild(titleElement);
    academicElement.appendChild(placeElement);
    academicElement.appendChild(periodElement);

    academicContainer.appendChild(academicElement);
  });
})
.catch(error => console.error('Error fetching job data:', error));

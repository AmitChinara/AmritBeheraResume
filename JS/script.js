// Ensure data.js is loaded first

function renderSection(id, title, entries, renderFn) {
    const container = document.getElementById(id);
    container.innerHTML = `<h2>${title}</h2>` + entries.map(renderFn).join('');
}

// Header
document.getElementById('header').innerHTML = `
  <h1>${amritBeheraCV.name}</h1>
  <p>${amritBeheraCV.contact.address} | ${amritBeheraCV.contact.phone} | 
     <a href="mailto:${amritBeheraCV.contact.email}">${amritBeheraCV.contact.email}</a></p>
`;

// Work Experience
renderSection("workExperience", "Work Experience", amritBeheraCV.workExperience, (item) => `
  <div class="entry">
    <h3>${item.organization} <span>${item.duration}</span></h3>
    <ul>${item.responsibilities.map(r => `<li>${r}</li>`).join('')}</ul>
  </div>
`);

// Internships
renderSection("internships", "Internships", amritBeheraCV.internships, (item) => `
  <div class="entry">
    <h3>${item.organization} <span>${item.duration}</span></h3>
    <ul>${item.tasks.map(task => `<li>${task}</li>`).join('')}</ul>
  </div>
`);

// Education
renderSection("education", "Education", amritBeheraCV.education, (item) => `
  <div class="entry">
    <h3>${item.institution} <span>${item.year}</span></h3>
    <p>${item.course} – ${item.result}</p>
  </div>
`);

// Areas of Interest
renderSection("areasOfInterest", "Areas of Interest", amritBeheraCV.areasOfInterest, (interest) => `
  <div class="entry">${interest}</div>
`);

// Publications
renderSection("publications", "Publications", amritBeheraCV.publications, (pub) => `
  <div class="entry">
    <p><strong>${pub.title}</strong> – <em>${pub.journal}</em><br/>
    <a href="${pub.link}" target="_blank">${pub.link}</a></p>
  </div>
`);

// Awards
renderSection("awards", "Awards & Recognition", amritBeheraCV.awards, (award) => `
  <div class="entry">
    <p><strong>${award.title}</strong> – ${award.description}</p>
  </div>
`);

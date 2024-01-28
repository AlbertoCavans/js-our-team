const team = [
  {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    image: "wayne-barnett-founder-ceo.jpg",
  },
  {
    name: "Angela Caroll",
    role: "Chief Editor",
    image: "angela-caroll-chief-editor.jpg",
  },
  {
    name: "Walter Gordon",
    role: "Office Manager",
    image: "walter-gordon-office-manager.jpg",
  },
  {
    name: "Angela Lopez",
    role: "Social Media Manager",
    image: "angela-lopez-social-media-manager.jpg",
  },
  {
    name: "Scott Estrada",
    role: "Developer",
    image: "scott-estrada-developer.jpg",
  },
  {
    name: "Barbara Ramos",
    role: "Graphic Designer",
    image: "barbara-ramos-graphic-designer.jpg",
  },
];

const cellTable = document.getElementById("team-table");

/* TOWARDS CONSOLE */
for (let member of team) {
  console.table(member);

  /* TOWARDS DOM */
  const cellMember = `
    <div class="col-4">  
      <div class="card text-center p-3 my-3">      
        <img src="./img/${member.image}" class="border p-1" alt="">      
        <ul>
        <li><span>Nome: </span> ${member.name}</li>
        <li><span>Ruolo: </span>${member.role}</li>
        </ul>
      </div>
    </div>`;
  cellTable.innerHTML += cellMember;
}

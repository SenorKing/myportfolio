
//zoom in on the resume when mouse hovers over image
const images = document.querySelectorAll(".zoom-img");

images.forEach(img => {
    img.addEventListener("mouseenter", () => {// for each time move enter image, zoom in
        img.classList.add("zoomed");
    });

    img.addEventListener("mouseleave", () => {// for each time move leave image, remove zoom
        img.classList.remove("zoomed");
    });
});

// Project Section with Carousel
const experiences = [
    {
        role: "Kings Auto body Project - Software Developer",
        org: "Freelance  Project",
        period: "2023",
        points: [
            "Designed and developed a comprehensive desktop inventory management system using Java, improving inventory\n" +
            "tracking eﬀiciency by 100%.",
            "Implemented features such as real-time inventory tracking, sales forecasting, and automated restocking, reducing\n" +
            "manual workload by 12 hours per week",
            "Managed all stages of the software development lifecycle (SDLC), from requirement gathering to deployment, for\n" +
            "a project completed on schedule and within budget. Provided ongoing maintenance and updates, ensuring 100%\n" +
            "system availability during peak business hours."
        ]
    },

    {
        role: "Data Structures & Algorithms",
        org: "Coursework Projects",
        period: "2023 – 2023",
        points: [
            "Developed Java applications utilizing linked lists, binary search trees, heaps, hash tables, and graph data structures.",
            "Designed and analyzed algorithms using Big-O notation to evaluate time and space complexity.",
            "Implemented classic algorithms including DFS, BFS, Dijkstra's Algorithm, Quick Sort, Merge Sort, and Binary Search.",
            "Applied object-oriented programming principles to build reusable and maintainable data structure implementations.",
            "Applied recursion, divide-and-conquer, and dynamic programming techniques to solve computational problems."
        ]
    },

    {
        role: "Retail Inventory and Sales Analytics | (Python, SQL, Tableau)",
        org: "Personal Project",
        period: "2025",
        points: [
            "Developed a sales and inventory analytics solution using Python and Excel to clean, transform, and analyze retail\n" +
            "transaction data containing thousands of records.",
            "Utilized Pandas for data preprocessing and exploratory data analysis, identifying sales trends and customer\n" +
            "purchasing patterns that supported data-driven inventory decisions.",
            "Designed interactive Tableau dashboards with KPIs, geographic maps, and trend visualizations, enabling\n" +
            "stakeholders to monitor revenue, profit margins, and product performance.",
            "Automated data preparation tasks and reporting processes, reducing workload by approximately 12 hours per week"
        ]
    },

    {
        role: "Software Development | (Java, SQL, Python)",
        org: "Coursework Projects",
        period: "2026",
        points: [
            "Designed and implemented a Java and Python applications to manage product inventory, sales transactions, and\n" +
            "customer records.",
            " Integrated a relational database to support persistent storage and efficient retrieval of inventory data.",
            "Tested and debugged application functionality, ensuring reliable performance and accurate inventory reporting."
        ]
    }
];


let currentIndex = 0;
//display each experience one by one
function displayExperience(){
    let item = experiences[currentIndex];

    document.getElementById("role").textContent =
        item.role;

    document.getElementById("org").textContent =
        item.org;

    document.getElementById("period").textContent =
        item.period;


    let pointsList = document.getElementById("points");
    pointsList.innerHTML="";

    item.points.forEach(point => {
        let li=document.createElement("li");
        li.textContent=point;
        pointsList.appendChild(li);
    });
}


//Right button
document.getElementById("rightButton")
.addEventListener("click",()=>{
    currentIndex++;
    if(currentIndex >= experiences.length){
        currentIndex=0;
    }
    displayExperience();
});


//Left button
document.getElementById("leftButton")
.addEventListener("click",()=>{
    currentIndex--;
    if(currentIndex < 0){
        currentIndex=experiences.length-1;
    }
    displayExperience();
});

// Load the first Experience
displayExperience();


//Dark mode/ Light mode: button to switch from light to dark mode
const toggle = document.querySelector("#toggleButton");
const toggleLabel = document.querySelector("#toggleLabel");

toggle.addEventListener("change", toggleChanged);

function toggleChanged(){
    if(toggle.checked){
        document.body.classList.add("dark-mode");
        toggleLabel.innerText = "Dark Mode";
    } else {
        document.body.classList.remove("dark-mode");
        toggleLabel.innerText = "Light Mode";
    }
}

//-- Spript to show email when button is clicled -->
function showEmail() {
            const button = document.getElementById('contact-button');
            // Change the button text to your email address
            button.textContent = 'Andrekingo26@gmail.com || 516-123-1234';
            // Optional: Disable the button click after it is revealed
            button.onclick = null;
            button.style.cursor = 'd';
        }
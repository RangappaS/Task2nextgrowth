document.addEventListener("DOMContentLoaded", function () {
    const resultsContainer = document.getElementById("results-container");
    const loadMoreButton = document.getElementById("load-more");
    
    let page = 1;
    const resultsPerPage = 10; 

    async function fetchData() {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${resultsPerPage}`);
            const data = await response.json();

           
            data.forEach((item) => {
                const resultCard = document.createElement("div");
                resultCard.classList.add("result-card");
                resultCard.innerHTML = `
                    <h3>${item.title}</h3>
                    <p>${item.body}</p>
                `;
                resultsContainer.appendChild(resultCard);
            });

           
            page++;

        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    
    fetchData();

   
    loadMoreButton.addEventListener("click", fetchData);
});

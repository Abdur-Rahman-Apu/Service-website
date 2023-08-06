const query = window.location.search.replace(/[^a-zA-Z ]/g, " ");

console.log(query);

localStorage.setItem("quiz", JSON.stringify({}));

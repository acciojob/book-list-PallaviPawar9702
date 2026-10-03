const submit = document.getElementById("submit");

submit.addEventListener("click", function (event) {

    event.preventDefault();

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const isbn = document.getElementById("isbn").value;

    const bookList = document.getElementById("book-list");

    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${title}</td>
        <td>${author}</td>
        <td>${isbn}</td>
        <td>
            <button class="delete">Clear</button>
        </td>
    `;

    bookList.appendChild(row);

    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("isbn").value = "";

    row.querySelector(".delete").addEventListener("click", function () {
        row.remove();
    });
});
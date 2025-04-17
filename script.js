document.addEventListener("DOMContentLoaded", () => {
    const books = document.querySelectorAll(".book");
    const wishlist = document.querySelectorAll(".wishlist");
    const highlightBtn = document.querySelector("#highlightButton");
    const resetBtn = document.querySelector("#resetButton");
    const clearBtn = document.querySelector("#clearButton");
    const fivestarbooks = [
      "To Kill a Mockingbird",
      "Moby-Dick",
      "The Catcher in the Rye"
    ];
  
    // ----- EVENTS -----
    highlightBtn.addEventListener("click", () => {
      books.forEach(book => {
        const title = book.querySelector("h2").textContent.trim();
        if (fivestarbooks.includes(title)) {
          book.classList.remove("border-primary");
          book.classList.add("border-warning", "border-5");
        }
      });
    });
  
    resetBtn.addEventListener("click", () => {
      books.forEach(book => {
        book.classList.remove("border-warning", "border-5", "bg-info", "text-white", "d-none");
        book.classList.add("border-secondary");
      });
      searchInput.value = "";
    });
  // took it off because the we and the interviewees didnt really like it
    // books.forEach(book => {
    //   book.addEventListener("click", () => {
    //     book.classList.add("bg-black", "text-white");
    //     setTimeout(() => {
    //       book.classList.remove("bg-black", "text-white");
    //     }, 10);
    //   });
    // });

    wishlist.forEach(btn => {
      btn.addEventListener("click", () => {
        btn.classList.toggle("bg-black");
        btn.classList.toggle("text-white");
        if (btn.textContent.trim() === "Add to Wishlist") {
          btn.textContent = "Added to Wishlist";
        } else {
          btn.textContent = "Add to Wishlist";
        }
      });
    });

    // ----- SEARCH LOGIC -----
    searchInput.addEventListener("input", () => {
      const query = searchInput.value.toLowerCase();
      let count = 0;
      books.forEach(book => {
        const title = book.querySelector("h2").textContent.toLowerCase();
        const author = book.querySelector("p").textContent.toLowerCase();
        const bool = title.includes(query) || author.includes(query);
        book.closest(".col").classList.toggle("d-none", !bool);
        if (bool){
          count++;
        }
      });
      const noResult = document.querySelector("#noSearchOption");
      if (count === 0){
        noResult.classList.remove("d-none");
      } else {
        noResult.classList.add("d-none");
      }
    });
  
    clearBtn.addEventListener("click", () => {
      searchInput.value = "";
      books.forEach(book => {
        book.closest(".col").classList.remove("d-none");
      });
    });
  });
  
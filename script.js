document.addEventListener("DOMContentLoaded", () => {
    const books = document.querySelectorAll(".book");
    const wishlist = document.querySelectorAll(".wishlist");
    const highlightBtn = document.querySelector("#highlightButton");
    const resetBtn = document.querySelector("#resetButton");
    const clearBtn = document.querySelector("#clearButton");
  
    // ----- EVENTS -----
    highlightBtn.addEventListener("click", () => {
      books.forEach(book => {
        const title = book.querySelector("h2").textContent.trim();
        if (title.length > 20) {
          book.classList.remove("border-primary");
          book.classList.add("border-danger", "border-3");
        }
      });
    });
  
    resetBtn.addEventListener("click", () => {
      books.forEach(book => {
        book.classList.remove("border-danger", "border-3", "bg-info", "text-white", "d-none");
        book.classList.add("border-secondary");
      });
      searchInput.value = "";
    });
  
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
  
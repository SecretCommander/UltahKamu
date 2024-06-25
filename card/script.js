(function() {
    // Utility function to get element by ID
    function $(id) {
      return document.getElementById(id);
    }
  
    // Get references to DOM elements
    var card = $("card"),
      openB = $("open"),
      closeB = $("close"),
      timer = null;
  
    // Log the card element to the console
    console.log("wat", card);
  
    // Add click event listener to open button
    openB.addEventListener("click", function() {
      // Set class to "open-half" to start opening animation
      card.setAttribute("class", "open-half");
      
      // Clear any existing timer
      if (timer) clearTimeout(timer);
      
      // Set a new timer to complete the opening animation
      timer = setTimeout(function() {
        card.setAttribute("class", "open-fully");
        timer = null;
      }, 1000); // 1 second delay
    });
  
    // Add click event listener to close button
    closeB.addEventListener("click", function() {
      // Set class to "close-half" to start closing animation
      card.setAttribute("class", "close-half");
      
      // Clear any existing timer
      if (timer) clearTimeout(timer);
      
      // Set a new timer to complete the closing animation
      timer = setTimeout(function() {
        card.setAttribute("class", "");
        timer = null;
      }, 1000); // 1 second delay
    });
  })();
  
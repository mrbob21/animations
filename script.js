function displayInfo() {
    document.getElementById("price-information-one").innerHTML = info;
  }

let info = "test";

document.getElementById("slider-button-1").addEventListener("click", function() {
    info = "#1. $20 or 4 pairs of shoes";
    displayInfo();
    }
);

document.getElementById("slider-button-2").addEventListener("click", function() {
    info = "#2. $10 or 3 pairs of shoes";
    displayInfo();
    }
);

document.getElementById("slider-button-3").addEventListener("click", function() {
    info = "#3. $10 or 3 pairs of shoes";
    displayInfo();
  }
);
  
document.getElementById("slider-button-4").addEventListener("click", function() {
    info = "#4. $10 or 3 pairs of shoes";
    displayInfo();
    }
);
  
document.getElementById("slider-button-5").addEventListener("click", function() {
    info = "#5. $20 or 4 pairs of shoes";
    displayInfo();
    }
);

document.getElementById("slider-button-6").addEventListener("click", function() {
    info = "#6. $10 or 3 pairs of shoes";
    displayInfo();
    }
);

document.getElementById("slider-button-7").addEventListener("click", function() {
    info = "#7. $15 or 4 pairs of shoes";
    displayInfo();
    }
);

document.getElementById("slider-button-8").addEventListener("click", function() {
    info = "#8. $10 or 3 pairs of shoes";
    displayInfo();
    }
);
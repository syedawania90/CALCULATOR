 let screen = document.getElementById("screen");

      function addValue(value) {
        if (screen.innerText === "0") {
          screen.innerText = value;
        } else {
          screen.innerText += value;
        }
      }

      function clearAll() {
        screen.innerText = "0";
      }

      function removeLast() {
        screen.innerText = screen.innerText.slice(0, -1);
        if (screen.innerText === "") {
          screen.innerText = "0";
        }
      }

      function calculate() {
        try {
          screen.innerText = eval(screen.innerText);
        } catch {
          screen.innerText = "Error";
        }
      }
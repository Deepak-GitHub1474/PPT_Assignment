async function func(){
    let response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    let data = await response.json();
    console.log(data);
}
func();

// Handling Error

async function func() {
    try {
      let response = await fetch("https://jsonplaceholder.typicodecom/todos/1");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      let data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  func();

// Also we can write above code using .then()

function func() {
  fetch("https://jsonplaceholder.typicodecom/todos/1")
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error("Error:", error.message); // To get only message
    });
}

func();

  
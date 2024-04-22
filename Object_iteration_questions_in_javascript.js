// 15 mins //
//Write a function called sumHoursByRole that takes the projects array as an argument and returns an object. The object should contain roles as keys and the sum of hoursAllocated for each role across all projects as values.

// Input: 
// const projects = [
//     {
//         projectName: "Alpha",
//         projectID: "A01",
//         team: [
//             { name: "Alice", role: "Developer", hoursAllocated: 35 },
//             { name: "Bob", role: "Designer", hoursAllocated: 20 }
//         ]
//     },
//     {
//         projectName: "Beta",
//         projectID: "B01",
//         team: [
//             { name: "Charlie", role: "Developer", hoursAllocated: 40 },
//             { name: "David", role: "Designer", hoursAllocated: 15 },
//             { name: "Eve", role: "QA", hoursAllocated: 25 }
//         ]
//     }
// ];


// Output:

// {
//     Developer: 75,  // Total hours from Alice and Charlie
//     Designer: 35,   // Total hours from Bob and David
//     QA: 25          // Total hours from Eve
// }



// 10 mins //
//Write a function that takes an array of numbers and returns an array containing only the numbers that are greater than the average of the original array.

// Input:
// [1, 4, 2, 5, 9]


// Output:
// [5, 9]



// 15 mins //
// Write a debounce function that takes a function and a timeout (in milliseconds) as arguments and returns a new function. The returned function should only execute the original function after the specified timeout has elapsed without any further calls.

// const log = () => console.log('Hello!');
// const debouncedLog = debounce(log, 1000);
// debouncedLog();
// debouncedLog();
// debouncedLog(); // Only this call should log 'Hello!' to the console after 1 second.




// 45 mins //
// Problem Statement:
// Create a React component that allows users to dynamically add or remove fields in a form. The form will initially start with one input field. Each input field should allow the user to enter text, and next to each input, there should be a button to remove that particular field. Additionally, there should be a separate button to add a new field.

// Requirements:

// Initial Setup: The form starts with one text input field.
// Add Field: There should be an "Add Field" button. When clicked, it adds a new text input field to the form.
// Remove Field: Each field has a "Remove" button next to it. Clicking this button removes the field.
// State Management: Use React state to keep track of all the fields.
// Submit Data: Include a "Submit" button that logs the array of all field values to the console.

// ---

// Bonus Challenge:

// Validate the input fields to not accept empty strings when adding or submitting.
// Provide visual feedback for validation errors.

// Sample Output:
// The form should be capable of adding and removing fields dynamically, and upon submission, it should output an array of values from the input fields to the console.

// ---

// Guidelines:
// Component Structure: Use functional components and manage the state using the useState hook.

// Handling State:
// Use an array to store the values of all input fields.
// Each input should have a unique identifier (like an index or a unique key) to manage dynamic additions and deletions effectively.

// Event Handlers:
// Implement handleChange to update the corresponding field's value in the state.
// Implement handleAddField to append a new input field to the state.
// Implement handleRemoveField to remove the selected field from the state.

// Rendering:
// Map over the array of field values stored in the state to render each input field.
// Ensure that each field has the correct value from the state and its own remove button.

// Styling: Apply minimal CSS for better visibility of the form layout, such as spacing between fields and alignment of buttons.
// This challenge tests several fundamental aspects of React, including state management, list rendering, and event handling, all within a commonly used real-world scenario of dynamic form manipulation.


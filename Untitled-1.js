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
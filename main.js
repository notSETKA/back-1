

// 1) შევქმნათ ფრომისი. იმის შანსი რომ ფრომისი ან დარეზოლვდება ან დარეჯექთდება უნდა იყოს 50/50. ანუ ზოგიერთ გამოძახებაზე უნდა დარეჯექთდეს.
// function promise(){
//     return new Promise((resolve, reject) => {
// const value = Math.random();
// console.log(value);
// if(value < 0.5){
//     resolve("success!success!success!success!")
// }else{
//     reject("failure!failure!failure!failure!")
// }
// });
// }

// promise()
// .then((res) => {
//     console.log(res)
// })
// .catch((err) => console.log(err))


// 2) დავწეროთ ფუნქცია რომელიც წამოიღებს მონაცემებს https://jsonplaceholder.typicode.com/users დან  და დაბრუნებს ამ მონაცემებს
// async function userInfo() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");

//         if (!response.ok) {
//             throw new Error(`failure`);
//         }

//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error("Error fetching user information:", error);
//     }
// }

// userInfo();


// 3) დავწეროთ ფუნქცია რომელიც ეცდება წმოიღოს მონაცემები https://dummyjson.com/users დან და https://jsonplaceholder.typicode.com/users დან.
// ფუნქციამ უნდა დაგვიბრუნოს ის ლისთი რომელის ჩატვირთვაც უფრო მალე მოხდება.
async function race(){
    const firstplace =fetch("https://jsonplaceholder.typicode.com/users").then(
        (res) => res.json()
      );
      const secondplace = fetch("https://dummyjson.com/users").then((res) => res.json());
      return Promise.race([firstplace, secondplace])
        .then((res) => console.log(res))
        .catch((er) => console.log(er));}
      race()


// დედლაინი:  16/06/2024 23:59
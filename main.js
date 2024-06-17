

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
function fetchWithTimeout(url, timeout) {
    return new Promise((resolve, reject) => {
        const timer = setTimeout(() => {
            reject(new Error("error"));
        }, timeout);

        fetch(url)
            .then(response => {
                clearTimeout(timer);
                if (!response.ok) {
                    reject(new Error("error"));
                } else {
                    return response.json();
                }
            })
            .then(data => resolve(data))
            .catch(error => {
                clearTimeout(timer);
                reject(error);
            });
    });
}

async function fetchFasterUserList() {
    const fetchPromises = [
        fetchWithTimeout("https://dummyjson.com/users", 3000),
        fetchWithTimeout("https://jsonplaceholder.typicode.com/users", 5000)
    ];

    try {
        const fasterData = await Promise.race(fetchPromises);
        console.log(fasterData);
        return fasterData;
    } catch (error) {
        console.error("error");
    }
}

fetchFasterUserList();


// დედლაინი:  16/06/2024 23:59
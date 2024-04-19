export function fetchGet(url) {
  return fetch(url, {
    credentials: "include",
  })
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => console.error(error));
}

export function fetchPost(url, body) {
  return fetch(url, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => console.error(error));
}

// export function fetchGet(url) {
//   return fetch(url)
//     .then((response) => response.json())
//     .then((result) => result)
//     .catch((error) => console.error(error));
// }

// export function fetchPost(url, body) {
//   return fetch(url, {
//     method: "POST",
//     credentials: "include",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(body),
//   })
//     .then((response) => response.json())
//     .then((result) => result)
//     .catch((error) => console.error(error));
// }

// export function fetchGet(url, {credentials: "include"}) {

//   return fetch(url)
//     .then((response) => response.json())
//     .then((result) => result)
//     .catch((error) => console.error(error));
// }

// export function fetchPost(url, body) {
//   return fetch(url, {
//     method: "POST",
//     credentials: "include",
//     headers: {
//       "Content-Type": "application/json",
//     })
//     .then((response) => response.json())
//     .then((result) => result)
//     .catch((error) => console.error(error));
// }

// // const response = await fetch($BASE_URL + "/api/customers", {
// //   method: "POST",
// //   credentials: "include",
// //   headers: {
// //     "Content-Type": "application/json",
// //   },
// //   body: JSON.stringify(customer),
// // });

// // const result = await response.json();
// // console.log(result.data);

// // const response2 = await fetch($BASE_URL + "/api/customers", {
// //   credentials: "include",
// // });
// // const result2 = await response2.json();
// // console.log(result2.data);

const parent = document.getElementById("root");

// const list = document.createElement("ul");

// list.setAttribute("style", "width: 400px; display: block; padding: 24px; background-color: yellow; margin: 48px auto;");

// const listItem1 = document.createElement("li");
// listItem1.setAttribute("style", "margin: 12px; color: brown;");
// listItem1.innerText = "Item 1";
// list.appendChild(listItem1);

// const listItem2 = document.createElement("li");
// listItem2.setAttribute("style", "margin: 12px; color: brown;");
// listItem2.innerText = "Item 2";
// list.appendChild(listItem2);

// parent.appendChild(list);

// ------------------------Understand DOM Manipulation using React -------------------------------

// const listItem1 = React.createElement("li", {}, "Item 1");
// const listItem2 = React.createElement("li", {}, "Item 2");
// const list = React.createElement("ul", {}, [listItem1, listItem2]);

// const root = ReactDOM.createRoot(parent);
// root.render(list);

// ------------------------Understand the difference between React Element & JS DOM Element-------------------------------

// const d1 = document.createElement("div");
// console.log(typeof d1);
// console.dir(d1);
// const d2 = React.createElement("div", {}, "Hello");
// console.log(typeof d2);
// console.dir(d2);

// --------------------- Understanding React Element ------------------------------
// const listItem1 = {
//     $$typeof: Symbol.for("react.element"),
//     type: "li",
//     key: null,
//     ref: null,
//     props: {
//         children: "Item 1",
//     },
//     _owner: null,
//     _store: {},
// };
const listItem1 = React.createElement("li", {}, "Item 11");

// const listItem2 = {
//     $$typeof: Symbol.for("react.element"),
//     type: "li",
//     key: null,
//     ref: null,
//     props: {
//         children: "Item 2",
//     },
//     _owner: null,
//     _store: {},
// };
const listItem2 = React.createElement("li", {}, "Item 22");

// const list = {
//     $$typeof: Symbol.for("react.element"),
//     type: "ul",
//     key: null,
//     ref: null,
//     props: {
//         children: [listItem1, listItem2],
//         style: {
//             backgroundColor: "yellow",
//             padding: "24px",
//         },
//     },
//     _owner: null,
//     _store: {},
// };
const list = React.createElement("ul", {}, [listItem1, listItem2]);

const root = ReactDOM.createRoot(parent);
root.render(list);

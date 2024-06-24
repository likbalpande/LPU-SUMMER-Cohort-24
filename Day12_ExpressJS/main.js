const express = require("express");
const fsPromises = require("fs/promises");

const app = express();

app.use(express.json());

const getData = async () => {
    const text = await fsPromises.readFile("./data.json", { encoding: "utf8" });
    let products;
    try {
        products = JSON.parse(text);
    } catch {
        products = [];
    }
    return products;
};

app.get("/products", async (req, res) => {
    let products = await getData();

    res.json({
        status: "success",
        data: {
            products: products,
        },
    });
});

app.post("/products", async (req, res) => {
    // console.log(typeof req);
    // console.log(Object.keys(req));
    // console.log(body);
    const body = req.body;
    const products = await getData();
    // const prLen = products.length;
    // const lastIndex = prLen - 1;
    // const lastItem = products[lastIndex];
    // const lastId = lastItem.id;
    let lastId = 0;
    if (products.length != 0) {
        lastId = products[products.length - 1].id;
    }
    body.id = lastId + 1;
    products.push(body);
    await fsPromises.writeFile("./data.json", JSON.stringify(products));

    res.status(201);
    res.json({
        status: "success",
        data: {
            product: body,
        },
    });
});

app.put("/products/:id", (req, res) => {
    const params = req.params;
    console.log(params);
    const body = req.body;
    console.log(body);

    res.send({
        status: "in progress...",
    });
});
app.listen(1400);

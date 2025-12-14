document.addEventListener("DOMContentLoaded", () => {
  const menu = [
    {
      category: "Coffee's",
      name: "Latte",
      price: "£3.50",
      description: "Decaf coffee is also offered at the same price.",
    },
    { category: "Coffee's", name: "Cappuccino", price: "£3.50" },
    { category: "Coffee's", name: "Flat White", price: "£3.50" },
    { category: "Coffee's", name: "Americano", price: "£3.00" },
    { category: "Coffee's", name: "Teas of all kind", price: "£2.50" },
    { category: "Coffee's", name: "Hot Chocolate", price: "£3.50" },
    { category: "Coffee's", name: "Deluxe Hot Chocolate", price: "£4.00" },
    { category: "Coffee's", name: "Cold drinks and Water", price: "£1.50" },
    {
      category: "Coffee's",
      name: "Vegan Option",
      price: "£0.20",
      description:
        "Make any drink a vegan drink by substituting cows milk with a plant based alternative.",
    },
    { category: "Seasonal Drinks", name: "Homemade Lemonade", price: "£2.50" },
    { category: "Seasonal Drinks", name: "Iced tea", price: "£2.50" },
    { category: "Seasonal Drinks", name: "Iced Coffee", price: "£4.00" },
    {
      category: "Seasonal Drinks",
      name: "Iced Coffee with syrup",
      price: "£4.50",
    },
    {
      category: "Seasonal Drinks",
      name: "Spiced Hot Chocolate",
      price: "£4.00",
    },
    {
      category: "Homemade Food",
      name: "Cake",
      description:
        "Cake always changes depending on the event and the customer demographic.",
    },
    { category: "Homemade Food", name: "Toffee Brownies", price: "£2.50" },
    { category: "Homemade Food", name: "Biscoff Rocky Road", price: "£2.50" },
    {
      category: "Homemade Food",
      name: "Cakes with a seasonal fruit theme",
      price: "£2.50",
    },
    {
      category: "Homemade Food",
      name: "Herb Cookies decorated with edible flowers",
      price: "£2.00",
    },
    {
      category: "Homemade Food",
      name: "Slice of large 6 layered cake",
      price: "£4.50",
    },
    {
      category: "Homemade Food",
      name: "Vegan and Gluten Free Options",
      description:
        "Vegan options and gluten free cakes will be provided as options.",
    },
  ];

  const menuElement = document.getElementById("menu");
  let lastCategory = "";

  menu.forEach((item) => {
    const row = document.createElement("tr");
    row.classList.add("hover:bg-gray-50", "dark:hover:bg-gray-700/50");

    if (item.category !== lastCategory) {
      const categoryCell = document.createElement("td");
      categoryCell.classList.add("py-4", "text-lg");
      categoryCell.textContent = item.category;
      row.appendChild(categoryCell);
      lastCategory = item.category;
    } else {
      const emptyCell = document.createElement("td");
      emptyCell.classList.add("py-4", "text-lg");
      row.appendChild(emptyCell);
    }

    const nameCell = document.createElement("td");
    nameCell.classList.add("py-4", "text-lg");
    nameCell.textContent = item.name;
    row.appendChild(nameCell);

    const priceCell = document.createElement("td");
    priceCell.classList.add(
      "py-4",
      "text-lg",
      "font-semibold",
      "text-green-600",
      "dark:text-green-400"
    );
    priceCell.textContent = item.price || "";
    row.appendChild(priceCell);

    const descriptionCell = document.createElement("td");
    descriptionCell.classList.add("py-4", "pl-6", "text-lg", "italic");
    descriptionCell.textContent = item.description || "";
    row.appendChild(descriptionCell);

    menuElement.appendChild(row);
  });
});

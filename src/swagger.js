let customers = [
    {
      id: 1,
      first_name: "cust 1",
      last_name: "John",
      email: "cust1@email.com",
      password:"123"
    },
    {
      id: 2,
      first_name: "cust 2",
      last_name: "John",
      email: "cust2@email.com",
      password:"123"
    },
    {
      id: 3,
      first_name: "cust 3",
      last_name: "John",
      email: "cust3@email.com",
      password:"123"
    },
  ];
  
  export const getCustomers = (req, res) => {
    res.json(customers);
  };
  
  export const getCustomersId = (req, res) => {
    const id = parseInt(req.params.id);
    const customer = customers.find((b) => b.id === id);
    if (!customer) {
      return res.status(404).json({ message: "user not found" });
    } else {
      return res.json(customer);
    }
  };
  
  export const registration = (req, res) => {
    const customer = req.body;
    customers.push(customer);
    res.json(customer);
  };
  
  export const updateCustomers = (req, res) => {
    const id = parseInt(req.params.id);
    const customer = customers.find((b) => b.id === id);
    if (!customer) {
      return res.status(404).json({ message: "user not found" });
    } else {
      customer.name = req.body.name;
      customer.email = req.body.email;
      return res.json(customer);
    }
  };
  
  export const removeCustomers = (req, res) => {
    const id = parseInt(req.params.id);
    const customer = customers.find((b) => b.id === id);
    if (!customer) {
      return res.status(404).json({ message: "user not found" });
    } else {
      customer = customers.filter((b) => b.id !== id);
      return res.json(customer);
    }
  };
import Customer from "../models/customerModel.js";

// get all customer
export const getCustomer = async (req, res) => {
  const page = Number(req.query.page) || 1;
  const name = req.query.name || "";
  const nameFilter = name ? { name: { $regex: name, $options: "i" } } : {};
  try {
    const LIMIT = 5;
    const startIndex = (Number(page) - 1) * LIMIT; // get the starting index of every page
    const total = await Customer.countDocuments({});
    const customers = await Customer.find({ ...nameFilter })
      .sort({ _id: 1 })
      .limit(LIMIT)
      .skip(startIndex);

    res.json({
      success: true,
      customers,
      currentPage: Number(page),
      numberOfPages: Math.ceil(total / LIMIT),
    });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: "Empty customer list" });
  }
};

// create customer
export const createCustomer = async (req, res) => {
  const { name, email, phoneNumber, service, message } = req.body;
  // simple Validation
  if (!name || !phoneNumber) {
    return res
      .status(400)
      .json({ success: false, message: "name and phone number is required" });
  }

  try {
    const newCustomer = new Customer({
      name,
      email,
      phoneNumber,
      service,
      message,
    });
    await newCustomer.save();
    res.json({
      success: true,
      customer: newCustomer,
      message: "Send message successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Send message failed" });
  }
};

//   edit customer
export const updateCustomer = async (req, res) => {
  const { name, email, phoneNumber, service, message } = req.body;
  // simple Validation
  if (!name || !phoneNumber) {
    return res
      .status(400)
      .json({ success: false, message: "name and phone number is required" });
  }

  try {
    let updateCustomer = { name, email, phoneNumber, service, message };
    const updateCustomerCondition = { _id: req.params.id };
    updateCustomer = await Customer.findOneAndUpdate(
      updateCustomerCondition,
      updateCustomer,
      { new: true }
    );

    if (!updateCustomer) {
      return res
        .status(401)
        .json({ success: false, message: "Customer not found" });
    }

    res.json({
      success: true,
      customer: updateCustomer,
      message: "Customer successfully updated",
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};

// delete soft customer
export const deleteCustomer = async (req, res) => {
  try {
    const deleteCustomerCondition = { _id: req.params.id };
    const deletedCustomer = await Customer.delete(deleteCustomerCondition);

    if (!deletedCustomer) {
      return res
        .status(401)
        .json({ success: false, message: "Customer not found" });
    }

    res.json({
      success: true,
      customer: deletedCustomer,
      message: "Customer deleted successfully",
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};

// Destroy customer
export const destroyCustomer = async (req, res) => {
  try {
    const destroyCustomerCondition = { _id: req.params.id };
    const destroyCustomer = await Customer.findOneAndDelete(
      destroyCustomerCondition
    );

    if (!destroyCustomer) {
      return res
        .status(401)
        .json({ success: false, message: "Customer not found" });
    }

    res.json({
      success: true,
      customer: destroyCustomer,
      message: "Customer deleted successfully",
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};

// restore soft customer
export const restoreCustomer = async (req, res) => {
  try {
    const restoreCustomerCondition = { _id: req.params.id };
    const restoredCustomer = await Customer.restore(restoreCustomerCondition);

    if (!restoredCustomer) {
      return res
        .status(401)
        .json({ success: false, message: "Customer not found" });
    }

    res.json({
      success: true,
      customer: restoredCustomer,
      message: "Customer restored successfully",
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};

// Trash customer
export const getCustomerTrash = async (req, res) => {
  var { page } = req.query;
  try {
    const LIMIT = 5;
    const startIndex = (Number(page) - 1) * LIMIT; // get the starting index of every page

    const customers = await Customer.findDeleted()
      .sort({ _id: 1 })
      .limit(LIMIT)
      .skip(startIndex);
    const total = await Customer.count({});
    res.json({
      success: true,
      customers,
      currentPage: Number(page),
      numberOfPages: Math.ceil(total / LIMIT),
    });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: "Empty customer list trash" });
  }
};

import React, { createContext, useReducer, useState } from "react";
import { customerReducer } from "../reducers/customerReducer";
import {
  apiUrl,
  CUSTOMERS_LOADED_SUCCESS,
  CUSTOMERS_LOADED_ERROR,
  CREATE_CUSTOMER,
  UPDATE_CUSTOMER,
  DELETE_CUSTOMER,
  FIND_CUSTOMER,
  CUSTOMERS_TRASH_LOADED_SUCCESS,
  CUSTOMERS_TRASH_LOADED_ERROR,
  DESTROY_CUSTOMER,
  RESTORE_CUSTOMER,
} from "./constants";
import axios from "axios";

export const CustomerContext = createContext();

const CustomerContextProvider = ({ children }) => {
  const [customerState, dispatch] = useReducer(customerReducer, {
    customer: null,
    customers: [],
    customerLoading: true,
  });
  // state
  const [showUpdateCustomerModal, setShowUpdateCustomerModal] = useState(false);
  const [showDeleteCustomerModal, setShowDeleteCustomerModal] = useState(false);
  const [showDestroyCustomerModal, setShowDestroyCustomerModal] =
    useState(false);
  useState(false);
  const [showAddCustomerModal, setShowAddCustomerModal] = useState(false);
  // Get all customers
  const getCustomers = async (name, page) => {
    try {
      let response;
      if (name) {
        response = await axios.get(`${apiUrl}/customer?name=${name}`);
      } else {
        response = await axios.get(`${apiUrl}/customer?page=${page}`);
      }
      if (response.data.success) {
        dispatch({
          type: CUSTOMERS_LOADED_SUCCESS,
          payload: response.data.customers,
        });
      }
      return response.data;
    } catch (error) {
      dispatch({
        type: CUSTOMERS_LOADED_ERROR,
      });
    }
  };

  // get trash customer
  const getCustomerTrash = async (page) => {
    try {
      const response = await axios.get(
        `${apiUrl}/customer/trash?&page=${page}`
      );
      if (response.data.success) {
        dispatch({
          type: CUSTOMERS_TRASH_LOADED_SUCCESS,
          payload: response.data.customers,
        });
      }
      return response.data;
    } catch (error) {
      dispatch({
        type: CUSTOMERS_TRASH_LOADED_ERROR,
      });
    }
  };

  // Add customer
  const addCustomer = async (newCustomer) => {
    try {
      const response = await axios.post(
        `${apiUrl}/customer/create`,
        newCustomer
      );
      if (response.data.success) {
        dispatch({ type: CREATE_CUSTOMER, payload: response.data.customer });
        return response.data;
      }
    } catch (error) {
      return error.response.data
        ? error.response.data
        : { success: false, message: "Server error" };
    }
  };

  // find customer
  const findCustomer = (customerId) => {
    const customer = customerState.customers.find(
      (customer) => customer._id === customerId
    );
    dispatch({ type: FIND_CUSTOMER, payload: customer });
  };
  // delete Customer
  const deleteCustomer = async (customerId) => {
    try {
      const response = await axios.delete(
        `${apiUrl}/customer/delete/${customerId}`
      );
      if (response.data.success) {
        dispatch({
          type: DELETE_CUSTOMER,
          payload: customerId,
        });
        return response.data;
      }
    } catch (error) {
      return error.response.data
        ? error.response.data
        : { success: false, message: "Server Error" };
    }
  };

  // destroy customer
  const destroyCustomer = async (customerId) => {
    try {
      const response = await axios.delete(
        `${apiUrl}/customer/destroy/${customerId}`
      );
      if (response.data.success) {
        dispatch({
          type: DESTROY_CUSTOMER,
          payload: customerId,
        });
        return response.data;
      }
    } catch (error) {
      return error.response.data
        ? error.response.data
        : { success: false, message: "Server Error" };
    }
  };

  // restore customer
  const restoreCustomer = async (customerId) => {
    try {
      const response = await axios.patch(
        `${apiUrl}/customer/restore/${customerId}`
      );
      if (response.data.success) {
        dispatch({
          type: RESTORE_CUSTOMER,
          payload: customerId,
        });
        return response.data;
      }
    } catch (error) {
      return error.response.data
        ? error.response.data
        : { success: false, message: "Server Error" };
    }
  };

  // edit Customer
  const updateCustomer = async (updatedCustomer) => {
    try {
      const response = await axios.put(
        `${apiUrl}/customer/edit/${updatedCustomer._id}`,
        updatedCustomer
      );
      if (response.data.success) {
        dispatch({ type: UPDATE_CUSTOMER, payload: response.data.customer });
        return response.data;
      }
    } catch (error) {
      return error.response.data
        ? error.response.data
        : { success: false, message: "Server error" };
    }
  };

  const customerContextData = {
    customerState,
    showUpdateCustomerModal,
    setShowUpdateCustomerModal,
    showDeleteCustomerModal,
    setShowDeleteCustomerModal,
    showAddCustomerModal,
    setShowAddCustomerModal,
    showDestroyCustomerModal,
    setShowDestroyCustomerModal,
    findCustomer,
    getCustomers,
    getCustomerTrash,
    addCustomer,
    deleteCustomer,
    destroyCustomer,
    restoreCustomer,
    updateCustomer,
  };
  return (
    <CustomerContext.Provider value={customerContextData}>
      {children}
    </CustomerContext.Provider>
  );
};

export default CustomerContextProvider;

import {
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
} from "../contexts/constants";

export const customerReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case CUSTOMERS_LOADED_SUCCESS:
      return {
        ...state,
        customers: payload,
        customerLoading: false,
      };
    case CUSTOMERS_LOADED_ERROR:
      return {
        ...state,
        customers: [],
        customerLoading: false,
      };
    case FIND_CUSTOMER:
      return { ...state, customer: payload };
    case CREATE_CUSTOMER:
      return {
        ...state,
        customers: [...state.customers, payload],
      };
    case DELETE_CUSTOMER:
      return {
        ...state,
        customers: state.customers.filter(
          (customer) => customer._id !== payload
        ),
      };

    case DESTROY_CUSTOMER:
      return {
        ...state,
        customers: state.customers.filter(
          (customer) => customer._id !== payload
        ),
      };

    case UPDATE_CUSTOMER:
      const newCustomer = state.customers.map((customer) =>
        customer._id === payload._id ? payload : customer
      );
      return {
        ...state,
        customers: newCustomer,
      };
    case CUSTOMERS_TRASH_LOADED_SUCCESS:
      return {
        ...state,
        customers: payload,
        customerLoading: false,
      };
    case CUSTOMERS_TRASH_LOADED_ERROR:
      return {
        ...state,
        customers: [],
        customerLoading: false,
      };
    case RESTORE_CUSTOMER:
      return {
        ...state,
        customers: state.customers.filter(
          (customer) => customer._id !== payload
        ),
      };
    default:
      return state;
  }
};

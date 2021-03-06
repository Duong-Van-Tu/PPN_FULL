import React, { useContext, useEffect, useState, useRef } from "react";
import { useLocation, useHistory } from "react-router-dom";
import moment from "moment";
import { Table, Button, Pagination, Form } from "react-bootstrap";
import ModalAddCustomer from "../components/customers/ModalAddCustomer";
import ModalDeleteCustomer from "../components/customers/ModalDeleteCustomer";
import ModalUpdateCustomer from "../components/customers/ModalUpdateCustomer";
import { CustomerContext } from "../contexts/CustomerContext";
import { AuthContext } from "../contexts/AuthContext";
function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const Customer = () => {
  const {
    customerState: { customers, customer, customerLoading },
    getCustomers,
    findCustomer,
    setShowDeleteCustomerModal,
    setShowUpdateCustomerModal,
    setShowAddCustomerModal,
  } = useContext(CustomerContext);

  const query = useQuery();
  const history = useHistory();
  const typingTimeoutRef = useRef(null);

  const page = Number(query.get("page")) || 1;

  const [pagination, setPagination] = useState({
    currentPage: 1,
    numberOfPages: 1,
  });
  const [searchName, setSearchName] = useState("");
  let arrPages = [];

  const {
    authState: { user },
  } = useContext(AuthContext);
  useEffect(() => {
    window.scrollTo(0, 0);
    setSearchName(searchName, page);
    getCustomers(searchName, page);
    if (page) {
      getCustomers(searchName, page).then((data) => {
        setPagination({
          ...pagination,
          currentPage: data.currentPage,
          numberOfPages: data.numberOfPages,
        });
      });
    }
  }, [searchName, page]);

  for (let page = 0; page < pagination.numberOfPages; page++) {
    arrPages.push(page);
  }

  const chooseDeleteCustomer = (customerId) => {
    setShowDeleteCustomerModal(true);
    findCustomer(customerId);
  };

  const chooseUpdateCustomer = (customerId) => {
    findCustomer(customerId);
    setShowUpdateCustomerModal(true);
  };

  const submitSearchCustomer = (nameFilter) => {
    setSearchName(nameFilter.searchName);
  };
  const handleSearchCustomer = (e) => {
    e.preventDefault();
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }
    typingTimeoutRef.current = setTimeout(() => {
      const formValue = {
        searchName: e.target.value,
      };
      submitSearchCustomer(formValue);
    }, 300);
  };

  let body;
  if (customerLoading) {
    body = (
      <div className="loader">
        <div className="loader-ball loader-ball-1"></div>
        <div className="loader-ball loader-ball-2"></div>
        <div className="loader-ball loader-ball-3"></div>
      </div>
    );
  } else if (customers.length === 0) {
    body = (
      <tr>
        <td colSpan="8" className="text-center">
          {!searchName ? (
            <Button
              variant="success"
              onClick={() => {
                setShowAddCustomerModal(true);
              }}
              className="btn-text-size my-2 p-2"
            >
              <i className="fal fa-plus-circle"></i> Th??m Kh??ch h??ng
            </Button>
          ) : (
            <div>Kh??ng t??m th???y kh??ch h??ng {searchName}</div>
          )}
        </td>
      </tr>
    );
  } else {
    body = customers.map((customer) => (
      <tr key={customer._id}>
        <td>{customer._id}</td>
        <td>{customer.name}</td>
        <td>{customer.phoneNumber}</td>
        <td>{customer.email ? customer.email : "Tr???ng"}</td>
        <td>{customer.service ? customer.service : "Tr???ng"}</td>
        <td>{moment(customer.registrationDate).fromNow()}</td>
        <td>
          <Button
            variant="primary"
            onClick={chooseUpdateCustomer.bind(this, customer._id)}
          >
            <i className="fad fa-user-edit"></i>S???a
          </Button>
          <Button
            variant="danger"
            onClick={chooseDeleteCustomer.bind(this, customer._id)}
          >
            <i className="fad fa-user-minus"></i>X??a
          </Button>
        </td>
      </tr>
    ));
  }
  return (
    <div>
      {user && (
        <div className="customer">
          <div>
            <ModalAddCustomer></ModalAddCustomer>
            {customer !== null && <ModalDeleteCustomer></ModalDeleteCustomer>}
            {customer !== null && <ModalUpdateCustomer></ModalUpdateCustomer>}
            <div className="customer__title">Danh S??ch Kh??ch H??ng</div>
            <div className="d-flex justify-content-between">
              <Button
                variant="success"
                onClick={() => {
                  setShowAddCustomerModal(true);
                }}
                className="btn-text-size my-2 p-2"
              >
                <i className="fal fa-plus-circle"></i> Th??m Kh??ch h??ng
              </Button>

              {/* <Link
                to="/recycle"
                className="btn-text-size btn btn-warning my-2 p-2"
              >
                <i className="fas fa-trash-undo"></i> Th??ng r??c
              </Link> */}        
                <Form.Control
                  className="w-25 px-2"
                  size="sm"
                  type="text"
                  placeholder="T??m ki???m (Nh???p t??n kh??ch h??ng)"
                  onChange={handleSearchCustomer}
                  onSubmit={submitSearchCustomer}
                />
            </div>

            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>STT</th>
                  <th>H??? T??n</th>
                  <th>S??? ??i???n Tho???i</th>
                  <th>Email</th>
                  <th>D???ch V???</th>
                  <th>Th???i Gian</th>
                  <th>Ch???c N??ng</th>
                </tr>
              </thead>
              <tbody>{body}</tbody>
            </Table>
          </div>
          <Pagination>
            <Pagination.First
              disabled={page === 1}
              onClick={() => {
                history.push(`/customer?page=1`);
              }}
            />
            <Pagination.Prev
              disabled={page <= 1}
              onClick={() => {
                history.push(`/customer?page=${page - 1}`);
              }}
            />
            {arrPages.map((pageItem, index) => {
              return (
                <Pagination.Item
                  key={index}
                  active={index + 1 === page}
                  onClick={() => {
                    history.push(`/customer?page=${index + 1}`);
                  }}
                >
                  {index + 1}
                </Pagination.Item>
              );
            })}
            <Pagination.Next
              disabled={page >= pagination.numberOfPages}
              onClick={() => {
                history.push(`/customer?page=${page + 1}`);
              }}
            />
            <Pagination.Last
              onClick={() => {
                history.push(`/customer?page=${pagination.numberOfPages}`);
              }}
              disabled={page === pagination.numberOfPages}
            />
          </Pagination>
        </div>
      )}
    </div>
  );
};

export default Customer;

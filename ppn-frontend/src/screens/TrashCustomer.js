import React, { useContext, useEffect, useState } from "react";
import { useLocation, useHistory, Link } from "react-router-dom";
import moment from "moment";
import { Table, Button, Pagination} from "react-bootstrap";
import ModalAddCustomer from "../components/customers/ModalAddCustomer";
import ModalDestroyCustomer from "../components/customers/ModalDestroyCustomer";
import ModalUpdateCustomer from "../components/customers/ModalUpdateCustomer";
import { CustomerContext } from "../contexts/CustomerContext";
import { AuthContext } from "../contexts/AuthContext";
function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const TrashCustomer = () => {
  const {
    customerState: { customers, customer, customerLoading },
    getCustomerTrash,
    findCustomer,
    setShowDestroyCustomerModal,
    restoreCustomer,
  } = useContext(CustomerContext);

  const query = useQuery();
  const history = useHistory();

  const page = Number(query.get("page")) || 1;

  const [pagination, setPagination] = useState({
    currentPage: 1,
    numberOfPages: 1,
  });

  const {numberOfPages} = pagination;
  let arrPages = [];

  const {
    authState: { user },
  } = useContext(AuthContext);
  useEffect(() => {
    window.scrollTo(0, 0);
    if (page) {
      getCustomerTrash(page);
      getCustomerTrash(page).then((data) => {
        setPagination({
          ...pagination,
          currentPage: data.currentPage,
          numberOfPages: data.numberOfPages,
        });
      });
    }
    handleRestoreCustomer();
  }, [page]);
  for (let page = 0; page < numberOfPages; page++) {
    arrPages.push(page);
  }

  const chooseDeleteCustomer = (customerId) => {
    setShowDestroyCustomerModal(true);
    findCustomer(customerId);
  };

  const handleRestoreCustomer = (customerId) => {
    restoreCustomer(customerId);
    if(customers.length === 0 && page < numberOfPages) {
      console.log("clln")
      history.push(`/recycle?page=${page + 1}`)
    }
  }


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
          Danh s??ch kh??ch h??ng th??ng r???ng
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
        <td>{moment(customer.deletedAt).fromNow()}</td>
        <td>
          <Button
            variant="primary"
            onClick={handleRestoreCustomer.bind(this, customer._id)}
          >
            <i className="fad fa-user-edit"></i>Kh??i ph???c
          </Button>
          <Button
            variant="danger"
            onClick={chooseDeleteCustomer.bind(this, customer._id)}
          >
            <i className="fad fa-user-minus"></i>X??a v??nh vi???n
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
            {customer !== null && <ModalDestroyCustomer></ModalDestroyCustomer>}
            {customer !== null && <ModalUpdateCustomer></ModalUpdateCustomer>}
            <div className="customer__title">Danh s??ch kh??ch h??ng ???? x??a</div>
            <div className="d-flex justify-content-between">
              <Link to="/customer" className="btn btn-primary mb-2 btn-text-size">
              <i class="fal fa-hand-point-left"></i> Tr??? v???
              </Link>
              
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
                history.push(`/recycle?page=1`);
              }}
            />
            <Pagination.Prev
              disabled={page <= 1}
              onClick={() => {
                history.push(`/recycle?page=${page - 1}`);
              }}
            />
            {arrPages.map((pageItem, index) => {
              return (
                <Pagination.Item
                  key={index}
                  active={index + 1 === page}
                  onClick={() => {
                    history.push(`/recycle?page=${index + 1}`);
                  }}
                >
                  {index + 1}
                </Pagination.Item>
              );
            })}
            <Pagination.Next
              disabled={page >= pagination.numberOfPages}
              onClick={() => {
                history.push(`/recycle?page=${page + 1}`);
              }}
            />
            <Pagination.Last
              onClick={() => {
                history.push(`/recycle?page=${pagination.pagination.numberOfPages}`);
              }}
              disabled={page === pagination.numberOfPages}
            />
          </Pagination>
        </div>
      )}
    </div>
  );
};

export default TrashCustomer;
